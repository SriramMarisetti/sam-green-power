/**
 * Official Website Content & Configurations
 * SAM GREEN POWER SOLUTIONS PRIVATE LIMITED
 * Clean Energy • Better Future
 */

export const BRAND_COLORS = {
  primaryDeep: '#063B18',
  secondaryLeaf: '#55B51F',
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
    subtitle: 'Rooftop Systems for Modern Homes',
    description: 'Transform your residential terrace into a personal clean power station. Drastically slash your monthly domestic electricity bills while contributing to a sustainable community.',
    image: '/images/residential-solar.jpg',
    features: [
      'Engineered for RCC terraces, Mangalore tiled roofs, and modern villas',
      'Eligible for PM Surya Ghar subsidy up to ₹78,000 + ₹22,000 SAM discount',
      'Net-metering integration with AP & Telangana Discoms (APEPDCL, APSPDCL, TSSPDCL, TSNPDCL)',
      '30-Year linear performance warranty on Tier-1 monocrystalline panels',
      'Mobile app for real-time power generation monitoring'
    ],
    idealFor: 'Independent villas, row houses, gated communities, and residential bungalows',
    specs: {
      typicalCapacity: '3 kW to 15 kW',
      roiPeriod: '3.5 to 4.5 Years',
      panelType: 'Tier-1 Mono PERC / TopCon Bifacial (550W+)',
      warranty: '25 Years Linear Performance Warranty'
    }
  },
  {
    id: 'commercial',
    title: 'Commercial Solar',
    subtitle: 'Energy Optimization for Enterprises',
    description: 'Lower operational overheads and achieve corporate ESG sustainability targets. Designed for corporate office complexes, hospitals, schools, colleges, and retail establishments.',
    image: '/images/commercial-solar.jpg',
    features: [
      'Accelerated depreciation tax benefits (up to 40% under Section 32)',
      'Engineered for commercial flat roofs, parking canopies, and ballasted systems',
      'Intelligent string inverters with high DC/AC overloading capacity',
      'Zero-export device capability for captive load consumption',
      'Substantial savings during peak daytime operational hours'
    ],
    idealFor: 'Educational institutions, hospitals, tech parks, shopping malls, and commercial buildings',
    specs: {
      typicalCapacity: '20 kW to 500 kW+',
      roiPeriod: '3.0 to 4.0 Years',
      panelType: 'High-Efficiency Monocrystalline Half-Cut Modules',
      warranty: '25 Years Performance & 10 Years Inverter Warranty'
    }
  },
  {
    id: 'industrial',
    title: 'Industrial Solar',
    subtitle: 'Heavy-Duty Clean Power Architectures',
    description: 'Bespoke photovoltaic solutions engineered for manufacturing plants, cold storage units, textile mills, and industrial warehouses with heavy electricity requirements.',
    image: '/images/industrial-solar.jpg',
    features: [
      'Customized non-penetrating clamp mounting on trapezoidal industrial sheds',
      'Harmonic filtration and HT/LT substation synchronization',
      'Open-access and group-captive advisory for multi-megawatt needs',
      'Protection against utility tariff escalations and power outage disruptions',
      'Supervised by certified electrical structural engineers'
    ],
    idealFor: 'Textile factories, pharmaceutical plants, agro-processing, cement, and engineering units',
    specs: {
      typicalCapacity: '100 kW to Multi-Megawatt',
      roiPeriod: '2.8 to 3.8 Years',
      panelType: 'Tier-1 Heavy-Duty Industrial Bifacial PV',
      warranty: '25 Years Performance Warranty'
    }
  },
  {
    id: 'maintenance',
    title: 'Installation & Maintenance',
    subtitle: 'Full-Lifecycle EPC & 5-Year Ongoing Support',
    description: 'End-to-end turnkey EPC execution complemented by predictive lifecycle Operations & Maintenance (O&M) and 5 years of guaranteed ongoing engineering support.',
    image: '/images/maintenance.jpg',
    features: [
      'Precision drone thermal imaging & structural roof load testing',
      'Certified electrical balance of system (BOS) integration',
      'Regular automated robot & demineralized water panel cleaning',
      'Preventative electrical thermography & annual maintenance contracts (AMC)',
      'Rapid on-site emergency technical support team across AP & Telangana'
    ],
    idealFor: 'All existing & new residential, commercial, and industrial installations',
    specs: {
      serviceScope: 'Complete Turnkey EPC & 5-Year Dedicated AMC Support',
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

/**
 * Official Process for Solar Installations (Page 4 of Client Notes)
 * 10 Exact Sequential Steps
 */
export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Book a Free Consultation',
    shortDesc: 'Understand Your Energy Needs',
    timeline: 'Day 1 • Instant Booking',
    phase: 'Phase 1: Engineering Discovery',
    deliverables: [
      'Comprehensive electricity bill analysis (AP / Telangana)',
      'PM Surya Ghar subsidy eligibility check (up to ₹78,000)',
      'SAM Green Power ₹22,000 company offer pre-qualification'
    ],
    keyBenefit: 'Zero commitment expert guidance at your convenience.',
    detail: 'Schedule a discovery session with our solar advisors. We examine your electricity bill history, current consumption patterns, and state subsidy eligibility.'
  },
  {
    step: '02',
    title: 'Site Survey',
    shortDesc: 'Drone & Shadow Analysis',
    timeline: 'Day 2 - 3 • On-Site Technical Audit',
    phase: 'Phase 1: Engineering Discovery',
    deliverables: [
      'Digital 3D roof azimuth & pitch mapping',
      'Year-round 365-day solar shadow simulation',
      'Structural RCC / metal sheet load-bearing verification'
    ],
    keyBenefit: 'Precise shadow-free space measurement prevents undergeneration.',
    detail: 'Our certified engineers conduct a physical or drone survey of your terrace to evaluate azimuth angle, structural roof strength, and seasonal shadow profiles.'
  },
  {
    step: '03',
    title: 'Design & Quotation',
    shortDesc: 'Itemized 3D System Layout',
    timeline: 'Day 4 - 5 • Engineering Blueprint',
    phase: 'Phase 1: Engineering Discovery',
    deliverables: [
      'Custom 3D CAD panel layout blueprint',
      'Itemized transparent EPC quotation with Tier-1 components',
      'Detailed 30-year lifetime compounding ROI projection'
    ],
    keyBenefit: 'Total price transparency with ₹1,00,000 combined benefit accounted.',
    detail: 'We prepare a custom 3D engineering blueprint and detailed quotation highlighting your exact system capacity, ₹78,000 subsidy, ₹22,000 SAM discount, and estimated ROI.'
  },
  {
    step: '04',
    title: 'Through Loan Process',
    shortDesc: 'Easy Zero-Down Financing',
    timeline: 'Day 6 - 8 • Hassle-Free Paperwork',
    phase: 'Phase 2: Financing & Execution',
    deliverables: [
      'Tie-ups with leading nationalized & private banks (SBI, Canara, HDFC)',
      'Zero-down flexible EMIs with subsidized low interest rates',
      'End-to-end documentation & expedited loan sanction'
    ],
    keyBenefit: 'Immediate cash-flow positive savings exceeding monthly EMI.',
    detail: 'We assist with seamless bank loan approvals and flexible low-interest EMIs, making solar adoption completely cash-flow positive from month one.'
  },
  {
    step: '05',
    title: 'Work Execution',
    shortDesc: 'Tier-1 EPC Installation',
    timeline: 'Day 9 - 12 • Professional Installation',
    phase: 'Phase 2: Financing & Execution',
    deliverables: [
      'Hot-dip galvanized / anodized aluminum rust-proof mounting',
      'Tier-1 550W+ Monocrystalline bifacial solar modules',
      'High-grade DC cabling, MC4 connectors & dual copper earthing'
    ],
    keyBenefit: 'Built to withstand 170 km/h cyclonic winds with zero roof leaks.',
    detail: 'Our skilled installation team executes structural mounting, Tier-1 550W+ module installation, inverter cabling, and dual earthing surge protection.'
  },
  {
    step: '06',
    title: 'Net Metering',
    shortDesc: 'Discom Liaison & Approvals',
    timeline: 'Day 13 - 18 • Utility Coordination',
    phase: 'Phase 3: Grid Sync & Verification',
    deliverables: [
      'Complete CEIG / Discom filing (APEPDCL, APSPDCL, TSSPDCL, TSNPDCL)',
      'Discom inspection coordination & feasibility sanction',
      'Bi-directional smart net-meter procurement & physical install'
    ],
    keyBenefit: 'Export excess daytime units to earn utility credits on your bill.',
    detail: 'We handle all documentation, approvals, and bi-directional meter installation with regional Discoms across Andhra Pradesh and Telangana.'
  },
  {
    step: '07',
    title: 'Testing & Commissioning',
    shortDesc: 'Grid Synchronization',
    timeline: 'Day 19 - 21 • Safety & Energization',
    phase: 'Phase 3: Grid Sync & Verification',
    deliverables: [
      'String voltage, open circuit & insulation resistance testing',
      'Inverter frequency synchronization & anti-islanding test',
      'Official grid energization certificate & commissioning sign-off'
    ],
    keyBenefit: 'Safe, verified power synchronization meeting MNRE national guidelines.',
    detail: 'Comprehensive safety tests, voltage regulation, and inverter parameter checks are performed before safely synchronizing the system with the utility grid.'
  },
  {
    step: '08',
    title: 'Customer Awareness & Safety Training',
    shortDesc: 'Hands-On User Orientation',
    timeline: 'Day 22 • Handover & Training',
    phase: 'Phase 4: Empowerment & Long-Term Care',
    deliverables: [
      'Customer orientation on DC/AC isolator switches & safety cutoffs',
      'Step-by-step panel cleaning procedure & chemical safety guide',
      'Real-time IoT smartphone generation telemetry app setup'
    ],
    keyBenefit: 'Complete confidence and ownership of your clean energy asset.',
    detail: 'We walk you through system isolation switches, safe panel washing protocols, inverter indicator lights, and smartphone telemetry app operation.'
  },
  {
    step: '09',
    title: 'AMC (Annual Maintenance)',
    shortDesc: 'Proactive Health Checkups',
    timeline: 'Bi-Annual • Scheduled Care',
    phase: 'Phase 4: Empowerment & Long-Term Care',
    deliverables: [
      'Scheduled bi-annual physical inspection & torque testing',
      'Thermal imaging hot-spot detection on solar cells & connectors',
      'Professional chemical-free high-pressure panel surface washing'
    ],
    keyBenefit: 'Maintains optimal 99%+ generation yield throughout system lifespan.',
    detail: 'Scheduled inspections, electrical connection re-torquing, inverter diagnostic sweeps, and professional surface cleaning to maintain maximum generation yield.'
  },
  {
    step: '10',
    title: 'Ongoing Support (For 5 Years)',
    shortDesc: 'Guaranteed Peace of Mind',
    timeline: 'Years 1 - 5 • Comprehensive Warranty',
    phase: 'Phase 4: Empowerment & Long-Term Care',
    deliverables: [
      'Dedicated relationship manager & priority ticket resolution',
      '24-Hour on-site engineering technician dispatch across 28 districts',
      'Full liaison for manufacturer 30-Year panel performance claims'
    ],
    keyBenefit: '5 full years of zero maintenance headaches backed by SAM Green Power.',
    detail: 'Dedicated customer support and rapid on-site technician dispatch for 5 continuous years, backing your 30-Year panel performance guarantee.'
  }
];

/**
 * Official FAQs (Page 5 of Client Notes)
 * 10 Exact Client Questions & Authoritative Engineering Answers
 */
export const FAQS_DATA = [
  {
    q: 'How do I know which system I required?',
    a: 'Your required system capacity depends on your average monthly electricity bill and available shadow-free roof area. Generally, in AP & Telangana, 1 kW of solar generates ~120–130 units (kWh) per month and requires ~85 sq.ft of roof space. For example, a monthly bill of ₹2,500–₹3,500 typically requires a 3 kW to 4 kW system. Our engineers perform a free survey to give you exact sizing.'
  },
  {
    q: "What's difference between On Grid and Off Grid systems?",
    a: 'An On-Grid system is synchronized with the government electricity grid through a bi-directional net meter. Any excess solar power you generate is exported to the grid for bill credits. An Off-Grid system uses battery banks to store power and operate independently without grid reliance. On-Grid systems are the most cost-effective and qualify for government subsidies.'
  },
  {
    q: 'Does solar works during a power cut?',
    a: 'Standard On-Grid solar systems automatically shut down during grid outages as a mandatory safety feature ("anti-islanding") to protect utility linemen repairing power lines. However, if you choose a Hybrid Solar System with a battery backup or smart emergency power switch, your critical home loads continue running smoothly during power cuts.'
  },
  {
    q: 'Solar panels work during monsoon & cloudy days?',
    a: 'Yes! Solar photovoltaic panels do not require direct heat; they work on ambient light (solar irradiance). On overcast, rainy, or monsoon days, Tier-1 monocrystalline modules capture diffuse light, typically generating 25% to 40% of their peak clear-sky generation. Your net meter automatically draws supplemental grid power if needed.'
  },
  {
    q: 'What makes SAM GREEN POWER SOLUTIONS PVT LTD different from other solar vendors?',
    a: 'Unlike third-party brokers, SAM Green Power is an engineering-first turnkey EPC provider. We use strictly Tier-1 550W+ TopCon/Mono modules, hot-dip galvanized mounting structures with cyclonic wind ratings, provide complete Discom net-metering liaison, offer an exclusive ₹22,000 company discount on top of the ₹78,000 subsidy, and guarantee 5 years of local on-ground AMC support across 28 districts in AP & Telangana.'
  },
  {
    q: 'What maintenance does a rooftop solar system required?',
    a: 'Rooftop solar systems have zero moving parts, making maintenance remarkably simple. Panel surfaces should be washed with clean water every 2 to 3 weeks to remove dust and bird droppings. SAM Green Power also provides scheduled AMC inspections to check electrical terminals, inverter health, and grounding integrity.'
  },
  {
    q: 'Is Govt Subsidy available for rooftop solar?',
    a: 'Yes! Under the PM Surya Ghar: Muft Bijli Yojana, residential property owners receive direct financial assistance: ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW and above. On top of the government subsidy, SAM Green Power provides an exclusive ₹22,000 offer amount, giving you up to ₹1,00,000 in total savings!'
  },
  {
    q: 'How much can I actually save with solar?',
    a: 'Rooftop solar typically slashes your electricity bills by 80% to 95%, or brings them down to near zero with net metering! A typical 3 kW to 5 kW home installation saves between ₹30,000 and ₹65,000 per year, delivering complete capital payback in approximately 3.5 to 4.5 years, followed by 20+ years of virtually free power.'
  },
  {
    q: 'How long does it takes to install the solar system?',
    a: 'Physical roof installation of a residential system typically takes only 2 to 3 days! The overall timeline from initial survey, design, loan processing, to Discom net meter inspection and final commissioning averages 15 to 25 working days, all handled end-to-end by SAM Green Power.'
  },
  {
    q: 'Can I install solar if I live in an apartment or housing society?',
    a: 'Yes! Apartment owners and Resident Welfare Associations (RWAs) can install a shared rooftop solar system on the common terrace to power common-area amenities (lifts, water pumps, clubhouse, hallway lighting) under the group net metering policy, significantly reducing monthly society maintenance charges.'
  }
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Amaravati Green Meadows Luxury Villa',
    category: 'residential',
    categoryLabel: 'Residential Rooftop Solar',
    capacity: '10 kW On-Grid System',
    location: 'Vijayawada, Andhra Pradesh',
    image: '/images/project-residential.jpg',
    description: 'High-efficiency Tier-1 monocrystalline rooftop solar installation with bi-directional net metering, saving 90% on domestic power bills.'
  },
  {
    id: 2,
    title: 'Cyber Towers Tech Park Facility',
    category: 'commercial',
    categoryLabel: 'Commercial Solar',
    capacity: '320 kW Rooftop Array',
    location: 'HITEC City, Hyderabad, Telangana',
    image: '/images/project-commercial.jpg',
    description: 'Aerodynamic non-penetrating ballasted solar installation powering computing infrastructure and HVAC across enterprise towers.'
  },
  {
    id: 3,
    title: 'Coastal Agro Processing Industrial Complex',
    category: 'industrial',
    categoryLabel: 'Industrial Solar',
    capacity: '750 kW Industrial Shed System',
    location: 'Visakhapatnam (Vizag), Andhra Pradesh',
    image: '/images/project-industrial.jpg',
    description: 'Custom trapezoidal metal shed mounting with zero-export protection and real-time SCADA telemetry for heavy continuous cold storage.'
  },
  {
    id: 4,
    title: 'Telangana Agri-Renewable Solar Park',
    category: 'large-scale',
    categoryLabel: 'Large-Scale Solar Installations',
    capacity: '3.0 MW Ground-Mounted Project',
    location: 'Warangal District, Telangana',
    image: '/images/project-large-scale.jpg',
    description: 'Ground-mounted high-yield photovoltaic generation facility feeding clean power directly to the regional utility distribution grid.'
  },
  {
    id: 5,
    title: 'Sprawling Cotton Ginning Plant',
    category: 'industrial',
    categoryLabel: 'Industrial Solar',
    capacity: '450 kW Industrial Shed System',
    location: 'Guntur District, Andhra Pradesh',
    image: '/images/industrial-solar.jpg',
    description: 'Optimized high-yield rooftop array powering heavy machinery operations while claiming 40% accelerated depreciation benefits.'
  },
  {
    id: 6,
    title: 'SAM 5-Year AMC & Preventative Service',
    category: 'maintenance',
    categoryLabel: 'Solar Installation & Maintenance',
    capacity: 'Full 5-Year AMC Portfolio',
    location: 'Khammam, Telangana & AP Statewide',
    image: '/images/maintenance.jpg',
    description: 'Scheduled robotic cleaning, thermal imaging drone thermography, and preventative balance-of-system electrical servicing across 28 districts.'
  }
];
