import React from 'react';
import A4Page from './A4Page';
import { PROFILE_DATA } from '../data/content';
import { HexagonPattern, CircleDecoration, CornerOrnaments } from './BackgroundPatterns';

const CoverPage = () => {
  return (
    <A4Page className="bg-black text-white overflow-hidden">
       {/* Background Graphics */}
       <HexagonPattern />
       <CircleDecoration size={600} top="0%" right="0%" opacity={0.08} />
       <CircleDecoration size={500} bottom="0%" left="0%" opacity={0.06} />
       <CornerOrnaments />
       
       {/* Large Gold Geometric Shape - Top Right */}
       <div className="absolute -top-20 -right-20 w-96 h-96 opacity-20">
         <svg viewBox="0 0 200 200" className="w-full h-full">
           <polygon 
             points="100,0 200,50 200,150 100,200 0,150 0,50" 
             fill="url(#coverGold)" 
             stroke="#d4af37" 
             strokeWidth="2"
           />
           <defs>
             <linearGradient id="coverGold" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#f4e4c1" stopOpacity="0.3" />
               <stop offset="100%" stopColor="#d4af37" stopOpacity="0.5" />
             </linearGradient>
           </defs>
         </svg>
       </div>

       <div className="relative z-10 w-full h-full flex flex-col justify-between py-16 px-12">
          
          {/* Top Section */}
          <div className="space-y-8">
              <div className="inline-block">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-0.5 w-16 bg-gold"></div>
                  <p className="text-sm tracking-[0.3em] font-light text-gold uppercase">Company Profile</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-7xl font-black leading-none tracking-tighter uppercase gold-gradient-text drop-shadow-2xl">
                  {PROFILE_DATA.companyName}
                </h1>
                
                <div className="flex items-center gap-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-gold to-transparent"></div>
                  <p className="text-xl text-gray-300 font-light tracking-wide">
                     {PROFILE_DATA.tagline}
                  </p>
                </div>
              </div>
          </div>

          {/* Middle - Large Established Badge */}
          <div className="flex justify-center my-12">
             <div className="relative">
                {/* Outer Ring */}
                <div className="w-56 h-56 rounded-full border-4 border-gold flex items-center justify-center gold-glow">
                   {/* Inner Circle */}
                   <div className="w-44 h-44 rounded-full bg-gradient-to-br from-gray-900 to-black border-2 border-gold flex flex-col items-center justify-center">
                      <p className="text-xs tracking-widest text-gold uppercase mb-2">Established</p>
                      <p className="text-6xl font-black text-white">{PROFILE_DATA.established}</p>
                   </div>
                </div>
                
                {/* Rotating Decoration */}
                <div className="absolute inset-0 animate-spin-slow opacity-30">
                   <div className="absolute top-0 left-1/2 w-2 h-2 rounded-full bg-gold transform -translate-x-1/2"></div>
                   <div className="absolute bottom-0 left-1/2 w-2 h-2 rounded-full bg-gold transform -translate-x-1/2"></div>
                   <div className="absolute left-0 top-1/2 w-2 h-2 rounded-full bg-gold transform -translate-y-1/2"></div>
                   <div className="absolute right-0 top-1/2 w-2 h-2 rounded-full bg-gold transform -translate-y-1/2"></div>
                </div>
             </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-8">
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gold">500+</div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Projects Delivered</p>
                  </div>
                  <div className="space-y-2 border-x border-gray-800">
                    <div className="text-3xl font-bold text-gold">8+</div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gold">100%</div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Client Satisfaction</p>
                  </div>
              </div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          </div>

       </div>

       {/* Footer Decoration */}
       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </A4Page>
  );
};

export default CoverPage;
