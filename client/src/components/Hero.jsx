import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative flex flex-col justify-center min-h-screen bg-[url('/gradientBackground.png')] bg-cover bg-no-repeat overflow-hidden">
      
      {/* Floating Shapes for More Dynamism */}
      <div className="absolute top-10 left-0 w-40 h-40 bg-purple-300 opacity-30 rounded-full animate-bounce-slow -z-10"></div>
      <div className="absolute bottom-10 right-0 w-60 h-60 bg-pink-300 opacity-20 rounded-full animate-spin-slow -z-10"></div>

      {/* Hero Text */}
      <div className="max-w-2xl mx-auto mt-16 p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-110 hover:rotate-1 transition-transform duration-700">
          Transform Ideas into Stunning Content
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
          With QyntraAI, create articles, generate images, and enhance your workflow in seconds. 
          AI-powered creativity at your fingertips.
        </p>
      </div>

      {/* Buttons with Slight Animations */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-2">
        <button 
          onClick={() => navigate('/ai')}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 motion-safe:animate-pulse transition-all duration-300"
        >
          Start Creating Now
        </button>
        <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300">
          Watch Demo
        </button>
      </div>

      {/* Trusted By Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 text-gray-600">
        <img 
          src={assets.user_group} 
          alt="Users" 
          className="w-32 h-auto transform hover:scale-110 transition-transform duration-500" 
        />
        <span className="font-medium text-lg md:text-xl">Trusted by over 1000K+ users</span>
      </div>
    </div>
  );
};

export default Hero;
