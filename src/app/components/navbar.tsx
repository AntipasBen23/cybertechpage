'use client';

import React from 'react';
import Image from 'next/image';
import { Search, ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#0C112C] px-8 py-3">
      <div className="w-full flex items-center">
        {/* Logo */}
        <div className="flex items-center" style={{ marginLeft: '120px' }}>
          <Image
            src="/logo.png" 
            alt="Company Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </div>

        <div className="flex-1"></div>

        <div className="flex items-center gap-8" style={{ marginRight: '100px' }}>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center" style={{ paddingLeft: '16px' }}>
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-[#0C112C] text-white placeholder-gray-400 pr-4 py-2 rounded-2xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              style={{ paddingLeft: '48px' }}
            />
          </div>

          <button className="text-white hover:text-gray-300 transition-colors" aria-label="Shopping Cart">
            <ShoppingCart className="h-6 w-6" />
          </button>

          <button 
            className="bg-[#24327F] text-[#FFFFFFE5] hover:bg-[#1e2a6b] transition-colors"
            style={{ 
              padding: '4px 15px', 
              borderRadius: '16px' 
            }}
          >
            Download now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;