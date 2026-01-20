'use client';
import React from 'react';
import A4Page from './A4Page';

const Certificates = () => {
  // Each certificate can have multiple pages
  const certificates = [
    { 
      name: 'Udyam Registration Certificate', 
      pages: ['/certs/images/udyam-1.jpg'] // Add more pages if needed: ['/certs/images/udyam-1.jpg', '/certs/images/udyam-2.jpg']
    },
    { 
      name: 'Character Certificate', 
      pages: ['/certs/images/character-1.jpg']
    },
    { 
      name: 'Electrical License', 
      pages: ['/certs/images/electrical-1.jpg']
    },
    { 
      name: 'Labour Registration', 
      pages: ['/certs/images/labour-1.jpg']
    },
    { 
      name: 'GST Certificate', 
      pages: ['/certs/images/gst-1.jpg']
    },
    { 
      name: 'Registration Certificate', 
      pages: ['/certs/images/registration-1.jpg']
    },
    { 
      name: 'PAN Allotment', 
      pages: ['/certs/images/pan-1.jpg']
    },
  ];

  // Flatten all certificate pages into individual A4 pages
  const allPages: { certName: string; imagePath: string; pageNum: number; totalPages: number; globalPageNum: number }[] = [];
  let globalPageCounter = 11; // Starting page number
  
  certificates.forEach(cert => {
    cert.pages.forEach((imagePath, idx) => {
      allPages.push({
        certName: cert.name,
        imagePath,
        pageNum: idx + 1,
        totalPages: cert.pages.length,
        globalPageNum: globalPageCounter++
      });
    });
  });

  return (
    <>
      {allPages.map((page, index) => (
        <A4Page key={index} className="bg-white text-black p-0 overflow-hidden">
          
          {/* Top Banner */}
          <div className="absolute top-0 left-0 right-0 bg-black text-white p-3 z-20 flex justify-between items-center">
            <div>
              <p className="text-xs tracking-widest text-gold uppercase">
                {page.certName}
                {page.totalPages > 1 && ` (Page ${page.pageNum} of ${page.totalPages})`}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 font-mono">PAGE {page.globalPageNum}</p>
            </div>
          </div>

          {/* Certificate Image - Full Page */}
          <div className="absolute inset-0 pt-12 pb-10 px-8 flex items-center justify-center">
            <div className="w-full h-full border-4 border-gold rounded shadow-2xl overflow-hidden bg-white">
              <img
                src={page.imagePath}
                alt={`${page.certName} - Page ${page.pageNum}`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center p-8 text-center bg-gray-50">
                        <div>
                          <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-gold flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-black">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                          </div>
                          <p class="text-lg font-bold mb-2 text-gray-800">${page.certName}</p>
                          <p class="text-sm text-gray-600 mb-4">Image not found</p>
                          <div class="bg-yellow-50 border border-yellow-200 rounded p-4 text-left max-w-md mx-auto">
                            <p class="text-xs text-gray-700">
                              <strong>Instructions:</strong><br/>
                              1. Convert PDF to images using a PDF converter<br/>
                              2. Save as: <code class="bg-gray-200 px-1">${page.imagePath}</code><br/>
                              3. Supported formats: JPG, PNG
                            </p>
                          </div>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-2 z-20 flex justify-between items-center text-xs">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Verified & Valid</span>
            </div>
            <span className="text-gray-500 font-mono">AYESHA ENTERPRISES</span>
          </div>
        </A4Page>
      ))}
    </>
  );
};

export default Certificates;
