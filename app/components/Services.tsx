import React from 'react';
import A4Page from './A4Page';
import { PROFILE_DATA } from '../data/content';
import { DotPattern } from './BackgroundPatterns';

const Services = () => {
  const icons = {
    building: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    lightning: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    solar: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  };

  return (
    <A4Page className="bg-black text-white">
      {/* Background */}
      <DotPattern />
      
      {/* Top Gold Bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      
      <div className="relative z-10 h-full flex flex-col p-12">
        
        {/* Header */}
        <div className="mb-10 flex justify-between items-center border-b border-gold pb-6">
            <div>
              <p className="text-xs tracking-[0.3em] text-gold uppercase mb-2">What We Do</p>
              <h2 className="text-5xl font-black uppercase tracking-tight">Our <span className="gold-gradient-text">Services</span></h2>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 font-mono">PAGE 03</p>
            </div>
        </div>

        {/* Three Service Columns */}
        <div className="flex-grow grid grid-cols-3 gap-6">
            
            {PROFILE_DATA.services.map((service, idx) => (
              <div key={idx} className="luxury-card p-6 rounded-lg flex flex-col">
                
                {/* Icon Header */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-dark-gold flex items-center justify-center mb-4 gold-shine">
                    <div className="w-10 h-10 text-black">
                      {service.icon === 'building' && icons.building}
                      {service.icon === 'lightning' && icons.lightning}
                      {service.icon === 'solar' && icons.solar}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                  
                  <div className="h-1 w-16 bg-gold mt-3"></div>
                </div>
                
                {/* Service Items */}
                <ul className="space-y-3 flex-grow">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        </div>
                        <span className="text-gray-300 text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                </ul>
                
                {/* Bottom Accent */}
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span className="uppercase tracking-wider">Specialized</span>
                    <div className="h-px w-12 bg-gold"></div>
                  </div>
                </div>
                
              </div>
            ))}
            
        </div>

        {/* Bottom Strengths Bar */}
        <div className="mt-8 bg-gradient-to-r from-gray-900 to-black border border-gold rounded-lg p-6">
           <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full badge-gold flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-black">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                 </div>
                 <div>
                    <p className="text-gold font-bold text-sm uppercase tracking-wider">Core Strengths</p>
                    <p className="text-gray-400 text-xs">Excellence in Execution</p>
                 </div>
              </div>
              
              <div className="flex gap-6 text-xs text-gray-400">
                  {['Quality', 'Safety', 'Compliance', 'Innovation'].map((strength, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-gold"></div>
                       <span>{strength}</span>
                    </div>
                  ))}
              </div>
           </div>
        </div>
        
      </div>
    </A4Page>
  );
};

export default Services;
