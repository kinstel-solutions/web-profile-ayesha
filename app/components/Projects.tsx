import React from 'react';
import A4Page from './A4Page';
import { PROFILE_DATA } from '../data/content';
import { GridPattern } from './BackgroundPatterns';

// Component for rendering a project category
const ProjectCategory = ({ 
  title, 
  projects, 
  categoryLetter 
}: { 
  title: string; 
  projects: string[]; 
  categoryLetter: string;
}) => (
  <div className="mb-6">
    {/* Category Header */}
    <div className="flex items-center gap-4 mb-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-gold to-dark-gold flex items-center justify-center">
        <span className="text-black font-black text-xl">{categoryLetter}</span>
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-gold uppercase tracking-wide">{title}</h3>
        <div className="h-0.5 w-32 bg-gold mt-1"></div>
      </div>
    </div>
    
    {/* Projects List */}
    <div className="space-y-2 ml-16">
      {projects.map((project, idx) => (
        <div key={idx} className="flex items-start gap-3 group">
          <div className="flex-shrink-0 mt-1.5">
            <div className="w-1 h-1 rounded-full bg-gold group-hover:w-2 group-hover:h-2 transition-all"></div>
          </div>
          <p className="text-gray-300 text-xs leading-relaxed">{project}</p>
        </div>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <>
      {/* Page 1: Categories A & B */}
      <A4Page className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <GridPattern />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold"></div>
        
        <div className="relative z-10 h-full flex flex-col p-12">
          
          {/* Header */}
          <div className="mb-8 flex justify-between items-center border-b border-gold pb-5">
              <div>
                <p className="text-xs tracking-[0.3em] text-gold uppercase mb-2">Portfolio</p>
                <h2 className="text-5xl font-black uppercase tracking-tight">Key <span className="gold-gradient-text">Projects</span></h2>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 font-mono">PAGE 04</p>
              </div>
          </div>

          {/* Categories A & B */}
          <div className="flex-grow space-y-6">
            <ProjectCategory 
              categoryLetter="A"
              title="Electrical Infrastructure & Panel Works"
              projects={PROFILE_DATA.projects.electricalInfra}
            />
            
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>
            
            <ProjectCategory 
              categoryLetter="B"
              title="DG Set Installation & Power Backup (SITC)"
              projects={PROFILE_DATA.projects.dgSets}
            />
          </div>
          
          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between text-xs text-gray-500">
            <span className="italic">Continued on next page...</span>
            <span className="font-mono">AYESHA ENTERPRISES</span>
          </div>
        </div>
      </A4Page>

      {/* Page 2: Categories C & D */}
      <A4Page className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <GridPattern />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold"></div>
        
        <div className="relative z-10 h-full flex flex-col p-12">
          
          {/* Header */}
          <div className="mb-8 flex justify-between items-center border-b border-gold pb-5">
              <div>
                <p className="text-xs tracking-[0.3em] text-gold uppercase mb-2">Portfolio</p>
                <h2 className="text-5xl font-black uppercase tracking-tight">Key <span className="gold-gradient-text">Projects</span> <span className="text-2xl text-gray-500">(Continued)</span></h2>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 font-mono">PAGE 05</p>
              </div>
          </div>

          {/* Categories C & D */}
          <div className="flex-grow space-y-6">
            <ProjectCategory 
              categoryLetter="C"
              title="Civil & Building Infrastructure"
              projects={PROFILE_DATA.projects.civilBuilding}
            />
            
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>
            
            <ProjectCategory 
              categoryLetter="D"
              title="Renewable Energy & Environmental Projects"
              projects={PROFILE_DATA.projects.renewableEnergy}
            />
          </div>
          
          {/* Achievement Stats */}
          <div className="mt-8 bg-gradient-to-r from-black via-gray-900 to-black border-2 border-gold rounded-lg p-6">
             <div className="grid grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black text-gold mb-1">25+</div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Major Projects</p>
                </div>
                <div className="border-l border-gray-800">
                  <div className="text-3xl font-black text-gold mb-1">15+</div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Govt Clients</p>
                </div>
                <div className="border-l border-gray-800">
                  <div className="text-3xl font-black text-gold mb-1">100%</div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">ON-TIME</p>
                </div>
                <div className="border-l border-gray-800">
                  <div className="text-3xl font-black text-gold mb-1">4</div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Sectors</p>
                </div>
             </div>
          </div>
          
        </div>
      </A4Page>
    </>
  );
};

export default Projects;
