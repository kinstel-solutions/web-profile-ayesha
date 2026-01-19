export interface WorkItem {
  category: string;
  description: string;
}

export interface ServiceCategory {
  title: string;
  icon: string;
  items: string[];
}

export const PROFILE_DATA = {
  companyName: "AYESHA ENTERPRISES",
  tagline: "Electrical • Mechanical • Infrastructure Works",
  established: 2018,
  
  introduction: `Ayesha Enterprises is a professionally managed proprietorship firm established in 2018. We are experts in the execution of Electrical Works, Building Construction, and Infrastructure Development. Our service range includes Electrical Wiring, Tubewell Construction, Boring & Drilling, Pond Rejuvenation, Water Conservation, Street Lighting, Substations, LT Panels, DG Sets, and HT/LT Installations.

The firm consistently delivers quality-driven services to government, semi-government, and private sector clients. With a technically skilled team, we focus on safety, compliance, strict timelines, and cost-effectiveness.`,
  
  vision: "To become a trusted and preferred infrastructure services partner by delivering reliable, safe, and technically sound solutions while maintaining the highest standards of professionalism and ethics.",
  
  commitment: [
    "Timely Execution: Completion of projects within the deadline",
    "Compliance: Adherence to relevant IS standards and specifications",
    "Safety-First: Strict site safety protocols",
    "Optimization: Cost-effective and engineered solutions",
    "Trust: Building long-term client relationships through performance",
  ],
  
  services: [
    {
      title: "Civil & Infrastructure Works",
      icon: "building",
      items: [
        "Building Construction & Infrastructure Development",
        "Tube Well Construction, Boring & Drilling",
        "Pond Rejuvenation & Water Conservation Projects",
        "Park Landscaping, Urban Development, and Campus Development",
      ]
    },
    {
      title: "Electrical Works",
      icon: "lightning",
      items: [
        "Street Lighting and HT & LT Electrical Installations",
        "Substation Works, LT Panels, and Internal/External Electrification",
        "DG Set Installation, Testing, Commissioning, and O&M",
      ]
    },
    {
      title: "Renewable & Environmental",
      icon: "solar",
      items: [
        "Solar Power Projects (On-Grid & Off-Grid Systems)",
        "Bio-Gas Plant Design & Construction",
        "STP (Sewage Treatment Plant) & WTP (Water Treatment Plant) Works",
      ]
    }
  ] as ServiceCategory[],
  
  proprietor: {
    qualifications: [
      "B.Tech (Electrical Engineering)",
      "M.Tech (Power System and Drives)",
      "MBA (International Business)",
    ]
  },
  
  projects: {
    electricalInfra: [
      "Electrical Up-Gradation of Sub-Station (Old CDRI Building) at CSIR-IITR Main Campus",
      "Electrical Up-Gradation (Wiring & Panels) at FT Block, CSIR-IITR Lucknow",
      "Fire Alarm System Installation at FT Block 2nd Floor, CSIR-IITR",
      "Distribution Panel Replacement and LT Panel Up-gradation at Garden Block (CSIR-NBRI)",
      "Cable Laying & Re-Wiring at K.N Kaul Block (CSIR-NBRI)",
      "SITC of LT Distribution cum Change Over Switch & AMF Control Panel Repairing (CSIR-NBRI)",
      "Street Lighting Projects at Banthara and Biomass Site (CSIR-NBRI)",
      "Electrical Starter Panel & Earthing for Water Supply Schemes, Distt. Maharajganj (U.P Jal Nigam, Rural)",
    ],
    dgSets: [
      "SITC of 1010 kVA DG Set at CSIR-CEERI, Pilani (Rajasthan)",
      "SITC of 500 kVA Silent DG Set with 400 Sq.mm XLPE Armoured cable at U.P. Jal Nigam Head Office, Lucknow",
      "SITC of 400 kVA DG Sets (02 Nos.) at 48 MLD MPS Indirapuram, Ghaziabad (U.P Jal Nigam, Urban)",
      "SITC of 62.5 kVA DG Sets at 8 Nos. Tubewells, Nagar Palika Parishad Muzaffarnagar",
    ],
    civilBuilding: [
      "Post Office Buildings Construction at Itwa (Gorakhpur) and Asmoli (Bareilly)",
      "Lab Conversion & Renovation (Phytotron to Plant Tissue facility) at NBRI, Lucknow",
      "Tube Well Installation at MNNIT, Prayagraj Faculty Quarters (CPWD)",
      "Renovation Works of Store rooms, Guest House supply rooms, and Workshops at Banthara",
    ],
    renewableEnergy: [
      "Solar Photo Voltaic System (with DG Synchronization) at 5 MLD Rampur Sewerage Scheme",
      "Design & SITC of Solar PV Systems at Anoopshahar Sewerage Scheme",
      "Biogas/Gobar Gas Plant & 15 KVA Power Unit at Madwaliya Gosadan, Maharajganj",
      "Biogas Plant Installation at Manbazar, Purulia Zilla Parishad, West Bengal",
      "Repairing & Overhauling of Clarifier at 30 MLD STP, Loni, Ghaziabad",
    ]
  },
  
  strengths: [
    "Experienced execution team",
    "Expert knowledge of government tender procedures",
    "High-quality workmanship",
    "Strict adherence to HSEQ norms",
    "Mandatory PPE usage on all sites",
  ],
  
  hseq: "Ayesha Enterprises follows strict adherence to Health, Safety, Environment, and Quality norms including mandatory PPE usage at all project sites.",
  
  contact: {
    address: "Indra Nagar, Gursahaiganj, Kannauj, U.P - 209722",
    mobile: "+91-9125457287",
    email: "ayeshaenterprises1195@gmail.com",
  },
};
