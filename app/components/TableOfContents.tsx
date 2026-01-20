import React from 'react';
import A4Page from './A4Page';
import { GridPattern, CircleDecoration } from './BackgroundPatterns';

const TableOfContents = () => {
  const sections = [
    { number: '01', title: 'Cover Page', page: '01' },
    { number: '02', title: 'Table of Contents', page: '02' },
    { number: '03', title: 'Company Introduction', page: '03' },
    { number: '04', title: 'Services & Expertise', page: '04' },
    { number: '05', title: 'Project Portfolio', page: '05-06' },
    { number: '06', title: 'Our Projects List', page: '07-08' },
    { number: '07', title: 'Gallery Showcase', page: '09-16' },
    { number: '08', title: 'Certifications', page: '17-28' },
    { number: '09', title: 'Contact Information', page: '29' },
  ];

  return (
    <A4Page className="bg-black text-white">
      <GridPattern />
      <CircleDecoration size={500} top="50%" right="0%" opacity={0.05} />
      
      {/* Top Gold Bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      
      <div className="relative z-10 h-full flex flex-col p-12">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-2">Navigation</p>
          <h2 className="text-5xl font-black uppercase tracking-tight gold-gradient-text mb-3">Table of Contents</h2>
          <div className="h-1 w-32 bg-gold mx-auto"></div>
        </div>

        {/* Contents List */}
        <div className="flex-grow space-y-3 max-w-4xl mx-auto w-full">
          {sections.map((section, idx) => (
            <div key={idx} className="luxury-card p-4 rounded-lg group hover:border-gold transition-all cursor-pointer">
              <div className="flex items-center justify-between">
                
                <div className="flex items-center gap-4">
                  {/* Number Badge */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-dark-gold flex items-center justify-center gold-shine flex-shrink-0">
                    <span className="text-black font-black text-lg">{section.number}</span>
                  </div>
                  
                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">
                      {section.title}
                    </h3>
                  </div>
                </div>
                
                {/* Page Number */}
                <div className="flex items-center gap-3">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold"></div>
                  <span className="text-gold font-mono text-base font-bold min-w-[50px] text-right">
                    {section.page}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Decoration */}
        <div className="mt-8 text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-3"></div>
          <p className="text-gray-500 text-xs italic">Professional Company Profile - Ayesha Enterprises</p>
        </div>
        
      </div>
      
      {/* Bottom Gold Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </A4Page>
  );
};

export default TableOfContents;
