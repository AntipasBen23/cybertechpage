'use client';

import React from 'react';
import Image from 'next/image';

const WhoWeAreSection: React.FC = () => {
  return (
    <section className="bg-[#0C112C] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
          WHO WE ARE
        </h2>

        {/* Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-gray-300 text-lg leading-relaxed">
            <p>
              CyberTection is a leading provider of cutting-edge 
              antivirus software designed to protect users from the 
              latest threats. Our solutions offer real-time monitoring 
              and proactive security measures to prevent data 
              breaches and downtime. With AI-based threat detection 
              technology, we ensure your safety in the digital world.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/devices-security.png" 
              alt="CyberTection Security Devices"
              width={500}
              height={400}
              className="w-full max-w-md h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;