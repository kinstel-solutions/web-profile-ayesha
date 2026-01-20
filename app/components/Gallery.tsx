import React from 'react';
import A4Page from './A4Page';
import { DotPattern } from './BackgroundPatterns';

const Gallery = () => {
  const images = [
    '/showcase/WhatsApp%20Image%202026-01-19%20at%207.56.30%20PM.jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%207.59.31%20PM.jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%208.08.10%20PM%20(3).jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%208.08.11%20PM%20(1).jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%208.08.12%20PM%20(1).jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%208.08.13%20PM%20(1).jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%208.08.14%20PM%20(1).jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%208.08.14%20PM%20(2).jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%208.10.06%20PM.jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%208.17.38%20PM.jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%208.19.37%20PM%20(1).jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%208.20.50%20PM.jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%208.22.52%20PM.jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%208.27.02%20PM.jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%208.32.48%20PM%20(1).jpeg',
    '/showcase/WhatsApp%20Image%202026-01-19%20at%208.32.48%20PM.jpeg',
  ];

  // Split into pages (6 images per page)
  const imagesPerPage = 6;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  
  return (
    <>
      {Array.from({ length: totalPages }, (_, pageIndex) => {
        const startIdx = pageIndex * imagesPerPage;
        const pageImages = images.slice(startIdx, startIdx + imagesPerPage);
        
        return (
          <A4Page key={pageIndex} className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
            <DotPattern />
            
            {/* Top Gold Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold"></div>
            
            <div className="relative z-10 h-full flex flex-col p-12">
              
              {/* Header */}
              <div className="mb-6 flex justify-between items-center border-b border-gold pb-4">
                  <div>
                    <p className="text-xs tracking-[0.3em] text-gold uppercase mb-2">Visual Showcase</p>
                    <h2 className="text-4xl font-black uppercase tracking-tight">
                      Project <span className="gold-gradient-text">Gallery</span>
                      {pageIndex > 0 && <span className="text-xl text-gray-500 ml-3">(Page {pageIndex + 1})</span>}
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-mono">PAGE {9 + pageIndex}</p>
                  </div>
              </div>

              {/* Image Grid */}
              <div className="flex-grow grid grid-cols-3 gap-4">
                {pageImages.map((imagePath, idx) => (
                  <div key={idx} className="luxury-card rounded-lg overflow-hidden group relative h-full">
                    <img
                      src={imagePath}
                      alt={`Project showcase ${startIdx + idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-4 pt-3 border-t border-gray-800 flex justify-between text-xs text-gray-500">
                <span className="italic">On-site project documentation</span>
                <span className="font-mono">AYESHA ENTERPRISES</span>
              </div>
              
            </div>
          </A4Page>
        );
      })}
    </>
  );
};

export default Gallery;
