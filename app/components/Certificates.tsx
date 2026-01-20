'use client';
import React from 'react';
import A4Page from './A4Page';

const certificates = [
  { name: 'GST Certificate', images: ['/certs/images/gst-1.jpg', '/certs/images/gst-2.jpg', '/certs/images/gst-3.jpg'] },
  { name: 'Electrical License', images: ['/certs/images/ELECTRICAL LICENSE_page-0001.jpg'] },
  { name: 'Character Certificate', images: ['/certs/images/CHARACTER_page-0001.jpg'] },
  { name: 'MSME (Udyam Registration)', images: ['/certs/images/udyam-1.jpg', '/certs/images/udyam-2.jpg'] },
  { name: 'Labour Registration', images: ['/certs/images/labour-1.jpg'] },
  { name: 'PF Registration', images: ['/certs/images/PF-1.jpg', '/certs/images/PF-2.jpg'] },
  { name: 'ESIC (PAN Allotment)', images: ['/certs/images/ESIC-1.jpg', '/certs/images/ESIC-2.jpg'] },
];

const Certificates = () => {
  return (
    <>
      {certificates.map((cert, certIndex) => (
        <React.Fragment key={certIndex}>
          {cert.images.map((imgSrc, imgIndex) => (
            <A4Page 
              key={`${certIndex}-${imgIndex}`} 
              className="bg-white text-black !p-0 overflow-hidden relative !h-auto min-h-[297mm] print:!h-[297mm] print:!min-h-[297mm] flex flex-col"
            >
              {/* Top Banner */}
              <div className="absolute top-0 left-0 right-0 bg-black text-white p-3 z-20 flex justify-between items-center text-xs">
                <div>
                  <p className="tracking-widest text-gold uppercase">
                    {cert.name}
                    {cert.images.length > 1 && ` (Page ${imgIndex + 1} of ${cert.images.length})`}
                  </p>
                </div>
              </div>

              {/* Image Container */}
              <div className="w-full flex-grow flex flex-col items-center justify-center pt-12 pb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={imgSrc} 
                  alt={`${cert.name} - Page ${imgIndex + 1}`}
                  className="max-w-[95%] max-h-[280mm] object-contain shadow-md mb-4 print:shadow-none print:max-w-full print:max-h-[260mm] print:mb-0"
                />
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
        </React.Fragment>
      ))}
    </>
  );
};

export default Certificates;
