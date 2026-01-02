import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { SignIn, useUser } from '@clerk/clerk-react'

const Layout = () => {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)
  const {user}=useUser();

  return user ?(
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="w-full px-6 min-h-14 flex items-center justify-between border-b border-gray-200">
        
        {/* Interactive Brand Text */}
        <h1
          onClick={() => navigate('/')}
          className="
            text-xl font-bold tracking-wide
            text-gray-800 cursor-pointer
            transition-all duration-300
            hover:text-indigo-600
            hover:scale-105
            active:scale-95
            select-none
          "
        >
          Qyntra<span className="text-indigo-500">.ai</span>
        </h1>

        {/* Mobile Menu */}
        {sidebar ? (
          <X
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
            onClick={() => setSidebar(false)}
          />
        ) : (
          <Menu
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
            onClick={() => setSidebar(true)}
          />
        )}
      </nav>
       <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex-1 bg-[#f4f7fb]">
            <Outlet />
        </div>
       </div>
    
    </div>
  ):(
    <div className="flex items-center justify-center h-screen">
      <SignIn/>
    </div>
  )
}

export default Layout
