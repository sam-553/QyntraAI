import React from "react";
import { dummyTestimonialData } from "../assets/assets";
import { Star, Star as StarOutline, Quote } from "lucide-react";

const TestimonialPage = () => {
  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative">

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg sm:text-xl">
          Hear directly from our users how ContentAI transformed their workflow.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {dummyTestimonialData.map((user, index) => (
          <div
            key={index}
            className="relative p-8 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30
                       cursor-pointer transform hover:-translate-y-5 hover:scale-105
                       hover:shadow-2xl transition-all duration-500 overflow-hidden group"
          >
            {/* Quote Icon */}
            <Quote className="absolute top-4 right-4 w-8 h-8 text-indigo-300 opacity-50" />

            {/* User Photo */}
            <img
              src={user.image}
              alt={user.name}
              className="w-16 h-16 rounded-full mb-4 border-2 border-indigo-500 object-cover"
            />

            {/* Name and Title */}
            <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
            <p className="text-indigo-500 mb-4">{user.title}</p>

            {/* Testimonial Content */}
            <p className="text-gray-700 mb-4 italic">{user.content}</p>

            {/* Star Rating */}
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) =>
                i < user.rating ? (
                  <Star key={i} className="w-5 h-5 text-yellow-400 mr-1 animate-pulse" />
                ) : (
                  <StarOutline key={i} className="w-5 h-5 text-gray-300 mr-1" />
                )
              )}
            </div>

            {/* Floating gradient shape */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400
                            rounded-full opacity-20 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-r from-yellow-300 to-orange-400
                            rounded-full opacity-20 blur-2xl pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
