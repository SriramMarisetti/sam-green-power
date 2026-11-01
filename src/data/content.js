export const BRAND_COLORS = {
  primaryDeepGreen: '#063B18',
  secondaryLeafGreen: '#55B51F',
  solarOrange: '#F5A000',
  solarPanelBlue: '#1762A5',
  pureWhite: '#FFFFFF',
  darkCharcoal: '#101A13',
  lightBackground: '#F7FAF5',
  mutedGrey: '#718078',
};

export const SOLUTIONS_DATA = [
  {
    id: 'residential',
    title: 'Residential Solar',
    subtitle: 'Rooftop Clean Energy for Modern Homes',
    description: 'Custom-engineered rooftop solar systems engineered to drastically slash your household electricity bills, safeguard against utility rate hikes, and deliver uninterrupted clean power with optional smart battery storage.',
    image: '/images/project-residential.jpg',
    features: [
      'Engineered specifically for residential roof architectures',
      'High-efficiency monocrystalline Tier-1 solar modules',
      'Hybrid smart inverter with battery backup integration',
      'Bi-directional net metering synchronization',
      'Real-time mobile app energy generation telemetry'
    ],
    idealFor: 'Independent villas, duplexes, residential communities & apartments',
    specs: {
      typicalCapacity: '3 kW to 15 kW',
      spaceRequired: 'Approx. 100 sq.ft per kW',
      paybackPeriod: 'Estimated 3.5 – 5 Years',
      warranty: '25-Year Performance Warranty'
    }
  },
  {
    id: 'commercial',
    title: 'Commercial Solar',
    subtitle: 'High-ROI Energy Independence for Businesses',
    description: 'Turn unutilized commercial rooftops into revenue-saving assets. Designed for offices, hospitals, retail complexes, and schools to drastically reduce operational overhead while accelerating corporate ESG decarbonization goals.',
    image: '/images/project-commercial.jpg',
    features: [
      'Substantial reduction in peak commercial tariff slabs',
      'Accelerated tax depreciation benefits for commercial entities',
      'Advanced zero-export controllers & grid synchronizers',
      'Heavy-duty non-penetrative mounting structures',
      'Cloud-based central SCADA telemetry and analytics'
    ],
    idealFor: 'IT parks, hospitals, shopping malls, educational campuses & hotels',
    specs: {
      typicalCapacity: '20 kW to 500 kW+',
      spaceRequired: 'Approx. 80 sq.ft per kW',
      paybackPeriod: 'Estimated 3 – 4 Years',
      warranty: '25-Year Linear Output Warranty'
    }
  },
  {
    id: 'industrial',
    title: 'Industrial Solar',
    subtitle: 'Heavy-Duty Megawatt Power for Manufacturing',
    description: 'Engineered for energy-intensive factories, cold storage hubs, chemical plants, and heavy manufacturing units. Protect your bottom line against industrial power surges and escalating tariff rates with high-yield solar arrays.',
    image: '/images/project-industrial.jpg',
    features: [
      'Engineered for metal shed rooftops and open ground land banks',
      'Corrosion-resistant anodized and hot-dip galvanized mounting',
      'High-voltage string inverters with smart arc fault circuit protection',
      'Stringent industrial safety and compliance certifications',
      'Comprehensive plant performance audits and harmonic analysis'
    ],
    idealFor: 'Manufacturing factories, cold storage, textile mills & warehouses',
    specs: {
      typicalCapacity: '100 kW to Multi-Megawatt (MW)',
      spaceRequired: 'Custom shed / ground assessment',
      paybackPeriod: 'Estimated 2.8 – 4 Years',
      warranty: '25-Year Industrial Grade Warranty'
    }
  },
  {
    id: 'maintenance',
    title: 'Solar Installation & Maintenance',
    subtitle: 'Precision Engineering, Safety & 24/7 Operations',
    description: 'End-to-end turnkey EPC execution complemented by predictive lifecycle Operations & Maintenance (O&M). We ensure your solar infrastructure operates at peak harvesting efficiency throughout its entire 25+ year lifespan.',
    image: '/images/maintenance.jpg',
    features: [
      'Precision drone thermal imaging & structural roof load testing',
      'Certified electrical balance of system (BOS) integration',
      'Regular automated robot & demineralized water panel cleaning',
      'Preventative electrical thermography & annual maintenance contracts (AMC)',
      'Rapid on-site emergency technical support team'
    ],
    idealFor: 'All existing & new residential, commercial, and industrial installations',
    specs: {
      serviceScope: 'Complete Turnkey EPC & Lifetime O&M',
      monitoring: '24/7 Cloud Telemetry with Fault Alerts',
      cleaningCycles: 'Bi-weekly or Monthly Scheduled Service',
      responseProtocol: 'Guaranteed On-Site Technical Support'
    }
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'savings',
    title: 'Energy Cost Savings',
    description: 'Drastically reduce your monthly grid electricity expenses and lock in predictable, levelized power costs for the next 25+ years, insulated from escalating utility inflation.',
    tag: 'Cost Optimization'
  },
  {
    id: 'clean',
    title: 'Clean & Renewable Energy',
    description: 'Harness pure, abundant sunlight directly at your premises, eliminating greenhouse gas emissions and drastically shrinking your carbon footprint from day one.',
    tag: 'Zero Emissions'
  },
  {
    id: 'reliable',
    title: 'Reliable Solar Solutions',
    description: 'Engineered with Tier-1 photovoltaic modules, high-efficiency inverters, and heavy-duty structural mountings designed to withstand extreme wind, rain, and heat.',
    tag: 'Engineered Longevity'
  },
  {
    id: 'sustainable',
    title: 'Sustainable Future',
    description: 'Partner with a company dedicated to ecological balance. Every kilowatt of solar capacity installed actively contributes toward a greener, self-sufficient planet.',
    tag: 'Ecological Impact'
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Consultation',
    shortDesc: 'Understand Your Energy Needs',
    detail: 'Our solar engineers discuss your electricity bills, current energy consumption patterns, and long-term sustainability goals to recommend the ideal system size.'
  },
  {
    step: '02',
    title: 'Site Assessment',
    shortDesc: 'Detailed Engineering Survey',
    detail: 'We perform comprehensive roof azimuth analysis, shade simulation, structural load evaluation, and electrical panel inspection to craft a bespoke 3D layout.'
  },
  {
    step: '03',
    title: 'Installation',
    shortDesc: 'Precision EPC Execution',
    detail: 'Certified technicians install anodized mounting structures, high-performance solar panels, inverters, and dual-layer safety surge protection to code.'
  },
  {
    step: '04',
    title: 'Start Saving Energy',
    shortDesc: 'Commissioning & Monitoring',
    detail: 'Grid synchronization and net-meter commissioning are finalized. You flip the switch to clean power and monitor live energy generation from your smartphone.'
  }
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Green Meadows Luxury Residence',
    category: 'residential',
    categoryLabel: 'Residential Rooftop Solar',
    capacity: '12 kW Hybrid System',
    location: 'Coimbatore, Tamil Nadu',
    image: '/images/project-residential.jpg',
    description: 'High-efficiency monocrystalline solar installation with lithium battery storage, providing 90% power independence for a luxury residence.'
  },
  {
    id: 2,
    title: 'Horizon Corporate Tech Park',
    category: 'commercial',
    categoryLabel: 'Commercial Solar',
    capacity: '240 kW Rooftop Array',
    location: 'Chennai, Tamil Nadu',
    image: '/images/project-commercial.jpg',
    description: 'Aerodynamic non-penetrating ballasted solar installation powering daily HVAC and computing infrastructure across four office towers.'
  },
  {
    id: 3,
    title: 'Apex Precision Automotive Facility',
    category: 'industrial',
    categoryLabel: 'Industrial Solar',
    capacity: '650 kW Industrial Shed System',
    location: 'Hosur Industrial Corridor',
    image: '/images/project-industrial.jpg',
    description: 'Custom trapezoidal metal sheet roof mounting with zero-export protection and real-time SCADA telemetry for heavy machinery operations.'
  },
  {
    id: 4,
    title: 'SunRay Agro-Renewable Agri Park',
    category: 'large-scale',
    categoryLabel: 'Large-Scale Solar Installations',
    capacity: '2.5 MW Ground-Mounted Project',
    location: 'Tirupur District',
    image: '/images/project-large-scale.jpg',
    description: 'Ground-mounted high-yield photovoltaic generation facility feeding clean power directly to the regional utility distribution grid.'
  },
  {
    id: 5,
    title: 'Sunrise Eco-Villa Community',
    category: 'residential',
    categoryLabel: 'Residential Rooftop Solar',
    capacity: '45 kW Microgrid Installation',
    location: 'Pollachi Suburban Sector',
    image: '/images/about-solar.jpg',
    description: 'Decentralized distributed rooftop solar systems across 15 interconnected eco-homes with shared net metering capability.'
  },
  {
    id: 6,
    title: 'Precision O&M Preventive Service',
    category: 'maintenance',
    categoryLabel: 'Solar Installation & Maintenance',
    capacity: 'Turnkey Maintenance Portfolio',
    location: 'Statewide Operations',
    image: '/images/maintenance.jpg',
    description: 'Scheduled robotic cleaning, thermal imaging drone thermography, and preventative balance-of-system electrical servicing.'
  }
];

