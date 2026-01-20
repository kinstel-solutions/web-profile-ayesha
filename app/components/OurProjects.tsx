import React from 'react';
import A4Page from './A4Page';
import { DiagonalLines } from './BackgroundPatterns';

const OurProjects = () => {
  const projects = [
    "Electrical UP- Gradation of Sub-Station (Old CDRI Building) at CSIR-IITR Main Campus. (Client CSIR-IITR)",
    "Electrical UP- Gradation (Electrical Wiring Works and Electrical Panel Works) at FT Block 3rd Floor CSIR-IITR Lucknow. (Client CSIR-IITR)",
    "Electrical UP- Gradation (Fire alarm System) at FT Block 2nd Floor CSIR-IITR Main Campus Lucknow. (Client CSIR-IITR)",
    "Replacement of OLD Distribution Panel By New Panels at Garden Block (Client CSIR-NBRI)",
    "Up gradation of LT Panel at Electrical Room Of Garden Block (Client CSIR-NBRI)",
    "Repairing,Cable Laying, Removal of Burnt Electrical System, Re-Wiring At First Floor of K.N Kaul Block, Main Building",
    "SUPPLY AND FIXING OF AC-3, 500 AMP.4 POLE POWER CONTACTOR,REPAIRING AND TESTING OF AMF CONTROL PANEL AND SITC OF INDOOR TYPE OF LT DISTRIBUTION CUM CHANGE OVER SWITCH",
    "Provision of Street Light at Banthara and Biomass Site of CSIR-NBRI (Client CSIR-NBRI)",
    "New Street Light Infront of CPMB, Nursery- Garden Block and New pole Light Main Building (Client CSIR-NBRI)",
    "C/o Multi-Storied Faculty Qtr at MNNIT, Prayagraj(SH: Boring and Installation of 01 No Tube well in Residential colony and connection with existing pipe line). (Client CPWD)",
    "Supply and Installation of Electrical Starter Panel, Electrical Wiring and Earthing in Various water Supply scheme in Distt, Maharajganj (Client U.P Jal Nigam, Rural)",
    "SITC of 62.5 KVA DG Set at 1500 RPM, 415 volt, 50 Hz, 3 phase conforming to BS:649/5514 including cabling and other associated works complete in all respect at 8 Nos. Tubewells of Nagar Palika Parishad Muzaffarnagar under 15th Financial Commission (Tied Grant) State of U.P., Distt- Muzaffarnagar.(Client U.P Jal Nigam, Urban)",
    "SUPPLY, INSTALLATION, TESTING & COMMISSIONING OF 400 KVA D.G. SET-02 NOS. & EXHAUST SYSTEM INCLUDING ALL ASSOCIATED WORK AT 48 MLD MPS INDIRAPURAM, GHAZIABAD. (Client U.P Jal Nigam, Urban)",
    "SITC of silent Type, liquid Cooled DG Set 500 KVA rating 415+ 6% volts, 50 HZ @ 0.85PF lagging (as per latest pollution norms), Supply and laying of 1x3.5x400 Sq.mm size, XLPE Armoured cable with Aluminum conductor 1100V grade and allied works complete in all respect at Head Office Campus, U.P. Jal Nigam (Rural),Lucknow.(Client U.P Jal Nigam,Rural)",
    "Provision of the 1010 kVA DG Set at CSIR- CEERI, Pilani (Rajasthan) (Client CSIR-CEERI)",
    "Construction of small P.O. building at Itwa in Gorakhpur Region, Uttar Pradesh. (Client Post Office)",
    "Construction of Small Post office building at Asmoli in Bareilly Division UP(Client Post Office)",
    "Conversion and renovation of the Lab (previously Phytotron Facility) to the Plant Tissue and transformation facility in the garden at NBRI, Lucknow.(Client CSIR-NBRI)",
    "Repair/renovation and change of damaged AC sheet, floor, doors and painting of Nursery Store room, Tractor store room, Guest House power supply room, workshop, Generator room and store near workshop at Banthra, Lucknow. (Client CSIR-NBRI)",
    "Construction of A Type two section school Building 09 Nos. Staff qtrs. Boundary wall Ramp for Handicapped upto Ist floor and other facilities including IEI & fans etc. at kendriya Vidyalaya Sumerpur Hamirpur UP. (SH : Providing services of 03 Nos. computer operators, 01 No MTS & 01 No Sweeper). Sub Division-II 01 No Computer Operator, Sub Division-III 01 No Computer Operator, Account Branch 01 No Computer Operator Sub Division-III 01 No MTS & O/o, EE-K, 01 No Sweeper. (Client CPWD)",
    "Up gradation of Infrastructure Activities in MSME Technology Centers at FFDC, Kannauj (UP) (SH: Construction of Administrative/Research & Training Lab, Executive Hostel & Boys Hostel, packaging Unit, Residential Quartes including EI, Wet Riser & Fire alarm system, Sub-station, DG Set, Lift, Solar, VRV/VRF, CCTV & Horticulture work). (SH : Providing services of 02 Nos. computer operators and 02 No. MTS). . (Client CPWD)",
    "COMPREHENSIVE REPAIRING & OVERHAULING OF THE CLARIFIER INCLUDING SUPPLY, INSTALLATION, TESTING & COMMISSIONING OF DRIVE HEAD MECHANISM WITH DRIVE & DRIVEN SPROCKET, BASE FRAME, CHAIN & GEARED MOTOR COMPLETE ASSEMBLY ASSOCIATED WITH SPECIFIC M.S. FABRICATION WORK, AS PER EXISTING DESIGN, MODEL & COMPONENT SPECIFICATIONS AT 30 MLD STP, LONI DISTT. GHAZIABAD. (Client U.P Jal Nigam, Urban)",
    "Survey, Submission of approved Design & Drawing from Govt. Engineering Institute for Installation of Gobar Gas/Electricity Generation plant of capacity not less than 100 cum and supply & installation of 15 KVA Power Generation unit for Running electrical Equipment and also provide gobar gas to 15-20 person at Madwaliya Gosadan, Block- Nichlaul Dist. Maharajganj including all material T&P etc complete with all Taxes. At DBOT pattern with 5 year O&M District: Maharajganj (Client U.P Jal Nigam,Rural)",
    "Supply, Installation, Testing & commissioning of Solar Photo Voltaic System of rating 450 KWp with D.G. Synchronization works & 3 months trial run at 5 MLD Johar Ali University I.P.S. of Rampur Sewerage Scheme, Distt- Rampur in Major Replacement Fund under One City One Operator Programme. (Client U.P Jal Nigam, Urban)",
    "Design, Supply, Installation, Testing & Commissioning of Solar PV system of rating 50 KWp & 18 KWp with D.G. set synchronization work and Trial & Run of Solar Power Plant for 03 months at Sohan Tau Ashram MPS and Lal Mahadev IPS respectively at Anoopshahar Sewerage Scheme Distt. Bulandshahar under OCOP Programme. (Client U.P Jal Nigam, Urban)",
  ];

  const projectsPerPage = 12;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <>
      {Array.from({ length: totalPages }, (_, pageIndex) => {
        const startIdx = pageIndex * projectsPerPage;
        const pageProjects = projects.slice(startIdx, startIdx + projectsPerPage);
        
        return (
          <A4Page key={pageIndex} className="bg-gradient-to-br from-black via-gray-900 to-black text-white">
            <DiagonalLines direction="right" />
            
            {/* Top Gold Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold"></div>
            
            <div className="relative z-10 h-full flex flex-col p-12">
              
              {/* Header */}
              <div className="mb-8 flex justify-between items-center border-b border-gold pb-5">
                  <div>
                    <p className="text-xs tracking-[0.3em] text-gold uppercase mb-2">Complete Listing</p>
                    <h2 className="text-5xl font-black uppercase tracking-tight">
                      Our <span className="gold-gradient-text">Projects</span>
                      {pageIndex > 0 && <span className="text-2xl text-gray-500 ml-4">(Page {pageIndex + 1})</span>}
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 font-mono">PAGE {7 + pageIndex}</p>
                  </div>
              </div>

              {/* Projects List */}
              <div className="flex-grow space-y-2">
                {pageProjects.map((project, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-gradient-to-r from-gray-900 to-transparent p-3 rounded border-l-2 border-gold hover:bg-gray-800 transition-all group">
                    
                    {/* Number Badge */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-gold to-dark-gold flex items-center justify-center">
                      <span className="text-black font-black text-xs">{startIdx + idx + 1}</span>
                    </div>
                    
                    {/* Project Description */}
                    <p className="text-gray-300 text-xs leading-snug group-hover:text-white transition-colors flex-grow">
                      {project}
                    </p>
                    
                    {/* Status Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 text-green-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                    </div>
                    
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between text-xs text-gray-500">
                {pageIndex < totalPages - 1 ? (
                  <span className="italic">Continued on next page...</span>
                ) : (
                  <span className="italic">All projects completed successfully</span>
                )}
                <span className="font-mono">AYESHA ENTERPRISES</span>
              </div>
              
            </div>
          </A4Page>
        );
      })}
    </>
  );
};

export default OurProjects;
