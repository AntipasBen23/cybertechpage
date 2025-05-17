'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#0C112C] min-h-screen flex flex-col items-center justify-center px-4 pt-40 pb-20">
      <div className="absolute top-52 right-20">
        <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
          <span className="text-white text-xs">👤</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
          POWERFUL PROTECTION.
          <br />
          SEAMLESS SECURITY.
        </h1>

        <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          CyberTection Anti-Virus keeps your digital life safe with cutting-edge
          defense against viruses, malware, and cyber threats.
          <br />
          Stay protected. Stay confident.
        </p>

        <button 
          className="bg-gray-600 text-white hover:bg-gray-700 transition-colors mb-12"
          style={{ 
            padding: '12px 24px', 
            borderRadius: '20px',
            fontSize: '16px',
            fontWeight: '500'
          }}
        >
          Download Cybertection
        </button>

        <div className="relative flex justify-center">
          <div className="ml-20">
            <Image
              src="/shield-security.png" 
              alt="Cybertection Security Shield"
              width={400}
              height={400}
              className="mx-auto"
              priority
            />
          </div>
          
          <div className="absolute bottom-8 left-8">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">

              <span className="text-white text-xs">👤</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;