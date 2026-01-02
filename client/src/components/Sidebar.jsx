import React from 'react'
import { Protect, useClerk, useUser } from '@clerk/clerk-react'
import {
  Eraser,
  FileText,
  Hash,
  House,
  Images,
  LogOut,
  Scissors,
  SquarePen,
  Users
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user, isLoaded } = useUser()
  const { signOut, openUserProfile } = useClerk()

  const navLinks = [
    { to: '/ai', label: 'Dashboard', Icon: House },
    { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
    { to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash },
    { to: '/ai/generate-images', label: 'Generate Images', Icon: Images },
    { to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser },
    { to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors },
    { to: '/ai/review-resume', label: 'Review Resume', Icon: FileText },
    { to: '/ai/community', label: 'Community', Icon: Users }
  ]

  if (!isLoaded) return null

  return (
    <div
      className={`
        w-80 bg-white border-r border-gray-200
        flex flex-col justify-between
        max-sm:absolute top-14 bottom-0
        transition-all duration-300
        ${sidebar ? 'translate-x-0' : 'max-sm:translate-x-full'}
      `}
    >
      {/* User */}
      <div className="my-6 text-center border-b border-gray-200 pb-6 ">
        <img
          src={user.imageUrl}
          alt="User avatar"
          className="w-12 h-12 rounded-full mx-auto cursor-pointer"
          onClick={openUserProfile}
        />
        <h1 className="mt-2 ">{user.fullName}</h1>
      </div>

      {/* Navigation */}
      <div className="px-2 space-y-1 flex-1">
        {navLinks.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/ai'}
            onClick={() => setSidebar(false)}
            className={({ isActive }) =>
              `px-3.5 py-2.5 flex items-center gap-3 rounded-md text-sm
               transition-all
               ${
                 isActive
                   ? 'bg-gradient-to-r from-[#3c81f6] to-[#9234ea] text-white'
                   : 'text-gray-600 hover:bg-gray-100'
               }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Sign out */}
      <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
        <div onClick={openUserProfile} className="flex gap-2 items-center cursor-pointer">
          <img src={user.imageUrl} alt="" className='w-8 rounded-full'/>
          <div className="">
            <h1 className='text-sm font-medium'>{user.fullName}</h1>
            <p className='text-xs text-gray-500'>
              <Protect plan='premium' fallback='free'>Premium </Protect> 
              Plan
            </p>
          </div>
        </div>
        <LogOut onClick={signOut} className='w-4.5 text-gray-400 hover-text-gray-700 transition cursor-pointer'/>
      </div>
    </div>
  )
}

export default Sidebar
