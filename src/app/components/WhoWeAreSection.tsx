// src/app/components/WhoWeAreSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';

const WhoWeAreSection: React.FC = () => {
  return (
    <section className="bg-[#0C112C] py-20 px-4">
      <div className="w-full">
        {/* Section Title - Centered */}
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-24 w-full">
          WHO WE ARE
        </h2>

        {/* Content Container - Shifted Further Right */}
        <div className="w-full flex justify-end pr-16">
          <div className="max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Text Content */}
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

              {/* Image Container */}
              <div className="flex justify-end">
                <Image
                  src="/devices-security.png" // You'll provide this image
                  alt="CyberTection Security Devices"
                  width={500}
                  height={400}
                  className="w-full max-w-md h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;