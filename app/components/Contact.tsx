import React from 'react';
import A4Page from './A4Page';
import { PROFILE_DATA } from '../data/content';
import { RadialGoldGradient, HexagonPattern } from './BackgroundPatterns';

const Contact = () => {
  return (
    <A4Page className="bg-black text-white overflow-hidden">
      {/* Background */}
      <HexagonPattern />
      <RadialGoldGradient opacity={0.1} />
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold opacity-50"></div>
      
      {/* Top Gold Bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      
      <div className="relative z-10 h-full flex flex-col justify-between p-12">
        
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-3">Get In Touch</p>
          <h2 className="text-6xl font-black uppercase tracking-tight gold-gradient-text mb-2">Contact Us</h2>
          <div className="h-1 w-32 bg-gold mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col justify-center space-y-12">
          
          {/* Contact Cards */}
          <div className="grid grid-cols-3 gap-6">
            
            {/* Address */}
            <div className="luxury-card p-8 rounded-lg text-center group hover:border-gold transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-dark-gold mx-auto mb-4 flex items-center justify-center gold-shine">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-gold font-bold uppercase text-sm tracking-wider mb-3">Address</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {PROFILE_DATA.contact.address}
              </p>
            </div>
            
            {/* Phone */}
            <div className="luxury-card p-8 rounded-lg text-center group hover:border-gold transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-dark-gold mx-auto mb-4 flex items-center justify-center gold-shine">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="text-gold font-bold uppercase text-sm tracking-wider mb-3">Phone</h3>
              <p className="text-gray-300 text-lg font-mono">
                {PROFILE_DATA.contact.mobile}
              </p>
            </div>
            
            {/* Email */}
            <div className="luxury-card p-8 rounded-lg text-center group hover:border-gold transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-dark-gold mx-auto mb-4 flex items-center justify-center gold-shine">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-gold font-bold uppercase text-sm tracking-wider mb-3">Email</h3>
              <p className="text-gray-300 text-sm break-all">
                {PROFILE_DATA.contact.email}
              </p>
            </div>
            
          </div>
          
          {/* HSEQ Statement */}
          <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-2 border-gold rounded-lg p-8">
             <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full badge-gold flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-black">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gold mb-3 uppercase tracking-wide">Health, Safety & Quality</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {PROFILE_DATA.hseq}
                  </p>
                  <div className="flex gap-4 mt-4">
                    {PROFILE_DATA.strengths.slice(3, 5).map((strength, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                        <span>{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          </div>
          
        </div>

        {/* Footer */}
        <div className="mt-12 text-center space-y-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
          <div>
            <h3 className="text-3xl font-black uppercase tracking-wider">{PROFILE_DATA.companyName}</h3>
            <p className="text-gold text-sm tracking-widest mt-2">{PROFILE_DATA.tagline}</p>
          </div>
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} {PROFILE_DATA.companyName}. All rights reserved.</p>
        </div>
        
      </div>
      
      {/* Bottom Gold Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </A4Page>
  );
};

export default Contact;
