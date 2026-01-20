'use client';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import A4Page from './A4Page';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const certificates = [
  { name: 'Udyam Registration', file: '/certs/ayesha-udyam-registration-certificate.pdf' },
  { name: 'Character Certificate', file: '/certs/character.pdf' },
  { name: 'Electrical License', file: '/certs/electrical-license.pdf' },
  { name: 'Labour Registration', file: '/certs/labour-reg.pdf' },
  { name: 'GST Certificate', file: '/certs/30001215530000999c11.pdf' },
  { name: 'Registration Certificate', file: '/certs/aa090220027080z-rc28022020-1.pdf' },
  { name: 'PAN Allotment', file: '/certs/upknp3446887000-certificate-allotment.pdf' },
];

const Certificates = () => {
  return (
    <>
      {certificates.map((cert, index) => (
        <PdfCertificate key={index} cert={cert} startPage={11 + index * 2} /> 
        // Note: Page numbering is approximate here, ideally we'd track cumulative pages but that's complex with async loading
      ))}
    </>
  );
};

const PdfCertificate = ({ cert, startPage }: { cert: { name: string, file: string }, startPage: number }) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <Document
      file={cert.file}
      onLoadSuccess={onDocumentLoadSuccess}
      className="flex flex-col gap-8"
      loading={
        <A4Page className="bg-white flex items-center justify-center">
            <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-4 w-48 bg-gray-200 rounded"></div>
            </div>
        </A4Page>
      }
    >
      {numPages && Array.from(new Array(numPages), (el, index) => (
        <A4Page key={`page_${index + 1}`} className="bg-white text-black p-0 overflow-hidden relative !h-auto min-h-[297mm]">
          
          {/* Top Banner */}
          <div className="absolute top-0 left-0 right-0 bg-black text-white p-3 z-20 flex justify-between items-center print:hidden">
            <div>
              <p className="text-xs tracking-widest text-gold uppercase">
                {cert.name}
                {numPages > 1 && ` (Page ${index + 1} of ${numPages})`}
              </p>
            </div>
            {/* <div className="text-right">
              <p className="text-xs text-gray-400 font-mono">PAGE {startPage + index}</p>
            </div> */}
          </div>

          {/* PDF Page Container */}
          <div className="w-full h-full flex flex-col items-center pt-12"> 
            <Page 
                pageNumber={index + 1} 
                width={790} // A4 width in pixels (approx @ 96dpi is 794, leaving some padding)
                className="shadow-md mb-4"
                renderTextLayer={false}
                renderAnnotationLayer={false}
            />
          </div>

          {/* Bottom Footer */}
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-2 z-20 flex justify-between items-center text-xs print:hidden">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Verified & Valid</span>
            </div>
            <span className="text-gray-500 font-mono">AYESHA ENTERPRISES</span>
          </div>
        </A4Page>
      ))}
    </Document>
  );
};

export default Certificates;
