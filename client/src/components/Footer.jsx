'use client'
import React from 'react';
import {
  Bot,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Bot className="w-7 h-7 text-blue-500" />
            <span className="text-2xl font-bold text-white">
              Qyntra AI
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Building intelligent AI tools that help businesses automate,
            analyze, and scale faster.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">API</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Get in Touch</h4>

          <div className="flex items-center gap-2 text-sm mb-3">
            <Mail className="w-4 h-4 text-blue-400" />
            support@qyntra.ai
          </div>

          <div className="flex items-center gap-2 text-sm mb-5">
            <Phone className="w-4 h-4 text-blue-400" />
            +91 7619223388
          </div>

          <div className="flex gap-4">
            <Github className="w-5 h-5 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-sky-400 cursor-pointer" />
          </div>
        </div>

        {/* Subscription (Right Side) */}
        <div>
          <h4 className="text-white font-semibold mb-4">Subscribe</h4>
          <p className="text-sm text-gray-400 mb-4">
            Get the latest updates and AI insights directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 min-w-[0] max-w-full sm:max-w-xs"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2025 <span className="text-white font-medium">Qyntra AI</span>. All rights reserved.
      </div>
    </footer>
  );
}
