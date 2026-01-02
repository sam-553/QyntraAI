import React from 'react';
import { AiToolsData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24">
      
      {/* Header */}
      <div className="text-center">
        <h2 className="text-slate-800 text-[42px] font-extrabold mb-3">Powerful AI Tools</h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          Explore our suite of AI-powered tools to create content, images, and designs faster than ever.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            onClick={() => user && navigate(tool.path)}
            className="relative p-8 rounded-2xl bg-white shadow-md border border-gray-100
                       cursor-pointer transform hover:-translate-y-3 hover:scale-105 
                       hover:shadow-2xl transition-all duration-500 overflow-hidden group"
          >
            {/* Icon with custom gradient */}
            <div 
              className="w-16 h-16 mb-5 flex items-center justify-center rounded-lg text-white text-2xl
                         group-hover:scale-110 transition-transform duration-500"
              style={{ background: `linear-gradient(135deg, ${tool.bg.from}, ${tool.bg.to})` }}
            >
              <tool.Icon className="w-8 h-8"/>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {tool.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
              {tool.description}
            </p>

            {/* Subtle gradient overlay on hover */}
            <div className="absolute top-0 left-0 w-full h-full rounded-2xl 
                            bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 
                            group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
