import { PricingTable } from '@clerk/clerk-react';
import React from 'react';


const Plan = () => {
  return (
    <div className="px-4 sm:px-20 xl:px-32 py-24 bg-gray-50">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg sm:text-xl">
          Flexible pricing options designed to suit your workflow and scale with your needs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-14 max-sm:mx-8 mx-auto max-w-3xl">
  <PricingTable />
</div>

      
    </div>
  );
};

export default Plan;
