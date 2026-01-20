import React from 'react';
import A4Page from './A4Page';
import { PROFILE_DATA } from '../data/content';
import { DiagonalLines, GridPattern } from './BackgroundPatterns';

const Introduction = () => {
  return (
    <A4Page className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Background */}
      <GridPattern />
      <DiagonalLines direction="right" />
      
      {/* Gold Accent Bar - Top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold via-light-gold to-gold"></div>
      
      <div className="relative z-10 h-full flex flex-col p-12">
        
        {/* Header */}
        <div className="mb-10 flex justify-between items-center border-b border-gold pb-6">
            <div>
              <p className="text-xs tracking-[0.3em] text-gold uppercase mb-2">About Us</p>
              <h2 className="text-5xl font-black uppercase tracking-tight">Company <span className="gold-gradient-text">Introduction</span></h2>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 font-mono">PAGE 02</p>
            </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-grow grid grid-cols-12 gap-10">
            
            {/* Left Column - About Text */}
            <div className="col-span-7 space-y-8">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-1 bg-gold"></div>
                    <h3 className="text-2xl font-bold text-white">Who We Are</h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-justify text-sm">
                    {PROFILE_DATA.introduction}
                  </p>
                </div>
                
                {/* Vision Box */}
                <div className="luxury-card p-6 rounded-lg">
                   <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                           <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                         </svg>
                      </div>
                      <div className="flex-grow">
                         <h4 className="text-gold font-bold uppercase text-sm tracking-wider mb-2">Our Vision</h4>
                         <p className="text-gray-300 text-sm leading-relaxed italic">
                           "{PROFILE_DATA.vision}"
                         </p>
                      </div>
                   </div>
                </div>
                
            </div>

            {/* Right Column - Commitment & Credentials */}
            <div className="col-span-5 space-y-6">
                
                {/* Commitment Card */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gold">
                   <h4 className="text-gold font-bold uppercase text-sm tracking-wider mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      Our Commitment
                   </h4>
                   <ul className="space-y-3">
                       {PROFILE_DATA.commitment.map((item, idx) => (
                           <li key={idx} className="flex items-start gap-3 text-xs">
                               <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-gold flex items-center justify-center mt-0.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                               </div>
                               <span className="text-gray-300 leading-tight">{item}</span>
                           </li>
                       ))}
                   </ul>
                </div>
                
                {/* Proprietor Qualifications */}
                <div className="bg-black p-6 rounded-lg border-2 border-gold gold-glow">
                   <h4 className="text-gold font-bold uppercase text-lg tracking-wider mb-2 text-center">Er. Mohd Amir</h4>
                   <p className="text-gray-400 text-xs text-center mb-4">Proprietor</p>
                   <h5 className="text-gold/80 font-semibold uppercase text-xs tracking-wider mb-4 text-center border-t border-gray-800 pt-4">Credentials</h5>
                   <div className="space-y-3">
                       {PROFILE_DATA.proprietor.qualifications.map((qual, idx) => (
                           <div key={idx} className="flex items-center gap-3 bg-gray-900 p-3 rounded">
                               <div className="flex-shrink-0 w-8 h-8 rounded-full badge-gold flex items-center justify-center">
                                  <span className="text-white font-bold text-xs">{idx + 1}</span>
                               </div>
                               <span className="text-white text-xs font-medium">{qual}</span>
                           </div>
                       ))}
                   </div>
                </div>
                
                {/* Stats Mini Card */}
                <div className="bg-gold text-black p-4 rounded-lg text-center">
                   <p className="text-2xl font-black">EST. {PROFILE_DATA.established}</p>
                   <p className="text-xs uppercase tracking-wider font-bold mt-1">Building Excellence</p>
                </div>
                
            </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-8 pt-6 border-t border-gray-800">
           <p className="text-center text-gray-500 italic text-xs">
             "Delivering quality-driven services with a focus on safety, compliance, and cost-effectiveness"
           </p>
        </div>
        
      </div>
    </A4Page>
  );
};

export default Introduction;
