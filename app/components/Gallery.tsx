import React from 'react';
import Image from 'next/image';
import A4Page from './A4Page';
import { DotPattern } from './BackgroundPatterns';

const Gallery = () => {
  const images = [
    '/showcase/image-01.jpeg',
    '/showcase/image-02.jpeg',
    '/showcase/image-03.jpeg',
    '/showcase/image-04.jpeg',
    '/showcase/image-05.jpeg',
    '/showcase/image-06.jpeg',
    '/showcase/image-07.jpeg',
    '/showcase/image-08.jpeg',
    '/showcase/image-09.jpeg',
    '/showcase/image-10.jpeg',
    '/showcase/image-11.jpeg',
    '/showcase/image-12.jpeg',
    '/showcase/image-13.jpeg',
    '/showcase/image-14.jpeg',
    '/showcase/image-15.jpeg',
    '/showcase/image-16.jpeg',
  ];

  // Split into pages (4 images per page)
  const imagesPerPage = 4;
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

              {/* Image Grid - 2x2 Grid for 4 images */}
              <div className="flex-grow grid grid-cols-2 gap-6 auto-rows-fr">
                {pageImages.map((imagePath, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden group relative h-full border border-gold/30">
                    <Image
                      src={imagePath}
                      alt={`Project showcase ${startIdx + idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
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
