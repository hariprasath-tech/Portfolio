export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  category: string
  tag: string
  priority: number
  problem: string
  solution: string
  techStack: string[]
  keyFeatures: string[]
  status: string
  github?: string
  liveUrl?: string
  image: string
  founderStory?: string
}

export interface VideoShowcaseItem {
  id: string
  title: string
  category: string
  categoryLabel: string
  clientOrContext: string
  duration: string
  tool: string
  aspectRatio: string
  tags: string[]
  description: string
  videoUrl: string
  thumbnailBg: string
}

export interface ExperienceItem {
  id: string
  role: string
  organization: string
  period: string
  type: string
  description: string
  responsibilities: string[]
  tools: string[]
  placeholderNote?: string
}

export interface LeadershipItem {
  id: string
  title: string
  subtitle: string
  role: string
  year: string
  category: 'Leadership' | 'Founder' | 'Hackathon' | 'Competition' | 'Speaking' | 'Course'
  highlight: string
  tags: string[]
}

export interface BeyondCodeItem {
  id: string
  title: string
  category: string
  headline: string
  description: string
  takeaway: string
  icon: string
  accentColor: string
}

export const content = {
  personal: {
    name: 'HARI PRASATH',
    fullName: 'HARI PRASATH S',
    firstName: 'HARI PRASATH',
    lastName: 'S',
    greeting: "HELLO, I'M",
    headline: 'BUILDING IDEAS INTO REALITY.',
    heroSubtitle: 'DEVELOPER | CREATOR | FOUNDER',
    roles: ['DEVELOPER', 'CREATOR', 'FOUNDER'],
    availabilityBadge: 'Available for Opportunities',
    bio: 'Computer Science and Engineering student at Sri Eshwar College of Engineering, Coimbatore. Passionate about building real-world technology solutions through software engineering, artificial intelligence, agricultural robotics, and cinematic creative media. Dedicated competitive programmer with 600+ algorithmic challenges solved.',
    location: 'Coimbatore, Tamil Nadu, India',
    college: 'Sri Eshwar College of Engineering, Coimbatore',
    degree: 'B.E. Computer Science and Engineering',
    batch: 'Batch 2025–2029',
    year: 'Second Year B.E. CSE',
    contact: {
      email: 'irah208prasath@gmail.com',
      github: 'https://github.com/hariprasath-tech',
      linkedin: 'https://www.linkedin.com/in/hari-prasath-b47a38359/',
    },
    counters: [
      { id: 'projects', value: 12, suffix: '+', label: 'Projects Built', desc: 'Applied prototypes & full stack apps' },
      { id: 'domains', value: 4, suffix: '', label: 'Core Domains', desc: 'Full Stack, Robotics, AI/ML, Video' },
      { id: 'hackathons', value: 5, suffix: '+', label: 'Hackathons & Contests', desc: 'SIH 2026, MIT App Contest, Competitions' },
      { id: 'solved', value: 600, suffix: '+', label: 'Problems Solved', desc: 'SkillRack & Algorithmic coding' },
    ],
  },

  about: {
    heading: 'MORE THAN JUST CODE.',
    tagline: 'Engineering curiosity meets hands-on software development, robotics prototyping, and creative storytelling.',
    paragraphs: [
      'I am Hari Prasath S, a second-year Computer Science and Engineering student at Sri Eshwar College of Engineering, Coimbatore (Batch 2025–2029).',
      'My passion lies in bridging the gap between theoretical computation and tangible real-world impact. Whether architecting autonomous agricultural climbing rovers, designing predictive network threat models for Smart India Hackathon, or producing high-retention commercial video edits for tech startups, I build end-to-end solutions.',
      'Beyond code, I actively contribute to campus leadership as the CSE Section D Placement Coordinator, advocate for team collaboration on the court, and articulate ideas spontaneously as a stage speaker at The Podium.',
    ],
    facts: [
      { label: 'College', value: 'Sri Eshwar College of Engineering, Coimbatore' },
      { label: 'Degree', value: 'B.E. Computer Science & Engineering' },
      { label: 'Batch', value: '2025 – 2029' },
      { label: 'Location', value: 'Coimbatore, Tamil Nadu, India' },
      { label: 'Leadership', value: 'Placement Coordinator (CSE Section D)' },
      { label: 'Venture', value: 'CocoCut Founder (Autonomous Robotics)' },
    ],
    timeline: [
      {
        year: '2025',
        title: 'College Inception & Algorithmic Foundation',
        detail: 'Joined Sri Eshwar College of Engineering, Coimbatore. Commenced rigorous algorithmic problem solving, solving 600+ problems on SkillRack and developing core proficiency in Java, Python, and C.',
      },
      {
        year: '2025',
        title: 'Commercial Video Editing & Content Pipelines',
        detail: 'Began freelance and part-time video editing for ISSai Technology and IDC Media. Mastered CapCut, kinetic pacing, and motion graphics across 14+ client video releases.',
      },
      {
        year: '2025–2026',
        title: 'CocoCut Startup Inception & MIT App Contest Top 5',
        detail: 'Co-founded CocoCut alongside Nithin Vasan and Adithiya Jayan to automate agricultural coconut leaf pruning. Recognized as Top 5 finalist in the MIT App Project Contest.',
      },
      {
        year: '2026',
        title: 'Smart India Hackathon & Placement Leadership',
        detail: 'Represented college in SIH 2026 with Team Neural Nexus (CyberSentinel AI). Appointed Placement Coordinator for CSE-D; delivered table-topic stage speech at The Podium (Episode 04).',
      },
    ],
  },

  techStack: {
    title: 'MY TECHNOLOGY WORLD',
    subtitle: 'Separate visual categories spanning computational languages, distributed web, AI/ML, and creative video editing.',
    categories: [
      {
        id: 'programming',
        title: 'Programming Languages',
        tagline: 'Core computational languages & algorithms',
        color: '#d90429',
        skills: [
          { name: 'Java', level: 'Advanced', desc: 'Object-Oriented Architecture, Multithreading, Core Systems' },
          { name: 'Python', level: 'Advanced', desc: 'Scripting, Automation, ML Pipelines, OpenCV, Scikit-learn' },
          { name: 'C', level: 'Certified', desc: 'Pointers, Dynamic Memory Management, Low-Level Logic' },
          { name: 'C++', level: 'Intermediate', desc: 'Object-Oriented Design, STL, High Performance' },
        ],
      },
      {
        id: 'fullstack',
        title: 'Full Stack Development',
        tagline: 'Responsive interactive web architectures',
        color: '#ff2a45',
        skills: [
          { name: 'HTML5 & CSS3', level: 'Proficient', desc: 'Semantic Hierarchy, Accessibility (a11y), Keyframes' },
          { name: 'JavaScript (ES6+)', level: 'Advanced', desc: 'Asynchronous Programming, DOM APIs, Closures' },
          { name: 'TypeScript', level: 'Proficient', desc: 'Strict Interfaces, Type Safety, Generics' },
          { name: 'React 18 / 19', level: 'Advanced', desc: 'Component Lifecycles, Custom Hooks, State Architecture' },
          { name: 'Tailwind CSS', level: 'Advanced', desc: 'Utility Tokens, Custom Themes, Responsive Grids' },
        ],
      },
      {
        id: 'backend',
        title: 'Backend Engineering',
        tagline: 'Scalable server microservices & REST APIs',
        color: '#ffe600',
        skills: [
          { name: 'Spring Boot', level: 'Advanced', desc: 'Enterprise Java, RESTful Web Services, Spring Data JPA, Security' },
          { name: 'Fastify', level: 'Intermediate', desc: 'High-throughput Node.js microservices framework' },
          { name: 'FastAPI', level: 'Intermediate', desc: 'High-performance Python asynchronous APIs for ML inference' },
          { name: 'Node.js', level: 'Proficient', desc: 'Event Loop, Express, Middleware pipelines' },
          { name: 'REST APIs', level: 'Advanced', desc: 'Stateless Architecture, JSON Contracts, HTTP Status Standards' },
        ],
      },
      {
        id: 'aiml',
        title: 'Artificial Intelligence & Machine Learning',
        tagline: 'Predictive forecasting, world models & vision',
        color: '#d90429',
        skills: [
          { name: 'LightGBM', level: 'Proficient', desc: 'High-Speed Gradient Boosted Trees for Network Anomaly Forensics' },
          { name: 'Scikit-learn', level: 'Proficient', desc: 'Classification, Regression, Pipeline Preprocessing' },
          { name: 'SHAP', level: 'Applied', desc: 'Explainable AI Feature Attribution & Interpretability' },
          { name: 'AI World Models', level: 'Applied', desc: 'Predictive state spaces for autonomous obstacle forecasting' },
          { name: 'Computer Vision', level: 'Applied', desc: 'OpenCV Video Frame Plume & Frond Detection' },
        ],
      },
      {
        id: 'robotics',
        title: 'Robotics & Automation',
        tagline: 'Hardware controllers, sensors & IoT telemetry',
        color: '#ff2a45',
        skills: [
          { name: 'Raspberry Pi 4B', level: 'Applied', desc: 'Embedded Linux, GPIO control, camera telemetry' },
          { name: 'ESP32 / Arduino', level: 'Applied', desc: 'Microcontroller programming, sensor polling, battery safety' },
          { name: 'Motor Controllers', level: 'Applied', desc: 'High-torque DC servo drivers, rotary cutting blade control' },
          { name: 'IoT Telemetry', level: 'Applied', desc: 'MQTT & wireless telemetry dashboards' },
        ],
      },
      {
        id: 'databases',
        title: 'Database Management',
        tagline: 'Relational schemas & document stores',
        color: '#ffe600',
        skills: [
          { name: 'MySQL', level: 'Advanced', desc: 'Relational Schemas, Foreign Keys, Complex Joins, Indexing' },
          { name: 'PostgreSQL', level: 'Intermediate', desc: 'ACID Compliance, JSONB Queries, Relational Schemas' },
          { name: 'MongoDB', level: 'Proficient', desc: 'Document Collections, BSON Schemas, Aggregations' },
          { name: 'Prisma ORM', level: 'Proficient', desc: 'Type-safe database queries and migrations' },
          { name: 'JDBC', level: 'Advanced', desc: 'Direct Java database connectivity and transaction pooling' },
        ],
      },
      {
        id: 'creative',
        title: 'Creative Video Editing',
        tagline: 'High-retention visual pacing & motion design',
        color: '#d90429',
        skills: [
          { name: 'CapCut Pro', level: 'Expert', desc: 'Short-form pacing, speed ramps, keyframing, dynamic overlays' },
          { name: 'Motion Graphics', level: 'Proficient', desc: 'Kinetic typography, text tracking, custom video transitions' },
          { name: 'Audio Mastering', level: 'Proficient', desc: 'Beat synchronization, sound design, dialogue leveling' },
          { name: 'Color Grading', level: 'Proficient', desc: 'Cinematic tone curves, saturation balancing, filmic contrast' },
        ],
      },
    ],
  },

  projects: [
    {
      id: 'cococut-rover',
      title: 'CocoCut',
      subtitle: 'Autonomous Coconut Leaf Cutting Rover',
      category: 'Robotics & Agricultural Automation',
      tag: 'PROJECT 01 · FOUNDER VENTURE',
      priority: 1,
      founderStory: 'Co-founded with fellow engineers Nithin Vasan and Adithiya Jayan at Sri Eshwar College of Engineering. Born out of firsthand agricultural observation: manual coconut tree climbing for pruning dead fronds poses severe fall hazards and faces acute labor shortages. We engineered an autonomous mechanized climbing rover with high-torque motor drivers and cutting blades.',
      problem: 'Harvesting coconut fronds and routine canopy maintenance requires dangerous high-altitude human climbing, resulting in fatal falls and agricultural labor shortages across South India coconut groves.',
      solution: 'An autonomous mechanized rover engineered with motorized trunk-gripping rollers, dual high-torque rotary cutting blades, Raspberry Pi onboard compute, and an offline machine-learning vision system that detects and slices fronds automatically.',
      techStack: ['Raspberry Pi', 'Python', 'Machine Learning', 'Computer Vision', 'Robotics', 'Motor Controllers', 'Agricultural Automation'],
      keyFeatures: [
        'Motorized high-grip roller clamp system adapting to variable palm trunk diameters',
        'Dual high-torque serrated cutting assembly for rapid fibrous frond detachment',
        'Offline computer vision frond identification eliminating requirement for farm internet',
        'Companion wireless telemetry interface for altitude tracking and battery health',
        'Fail-safe descent lock mechanism guarding against sudden voltage drop or power failure',
      ],
      status: 'Prototyped & Field Tested',
      github: 'https://github.com/hariprasath-tech/CocoCut-Rover',
      image: '/images/the-podium-stage.jpg',
    },
    {
      id: 'cybersentinel-ai',
      title: 'CyberSentinel AI',
      subtitle: 'SIH 2026 – Predictive Network Attack Forecasting',
      category: 'Cybersecurity & AI World Models',
      tag: 'PROJECT 02 · SIH 2026 · TEAM NEURAL NEXUS',
      priority: 2,
      problem: 'Conventional intrusion detection systems (IDS) rely on static signature matching, failing against zero-day distributed attacks, encrypted anomalous payloads, and polymorphic packet flooding mapped to MITRE ATT&CK techniques.',
      solution: 'A predictive threat forecasting engine powered by LightGBM gradient boosted decision trees and SHAP explainability. CyberSentinel analyzes continuous network flow telemetry to forecast attack vectors before exploit execution.',
      techStack: ['Python', 'LightGBM', 'Scikit-learn', 'SHAP', 'Cybersecurity', 'AI World Models', 'MITRE ATT&CK', 'Fastify', 'Docker'],
      keyFeatures: [
        'Real-time network packet flow ingestion and multivariate feature extraction',
        'High-speed inference using optimized LightGBM decision trees',
        'Explainable AI via SHAP feature attribution values displaying exact attack confidence rationale',
        'Mapping of anomalous vector chains against the MITRE ATT&CK enterprise knowledge base',
        'Automated perimeter firewall rule generator and security incident alert dispatcher',
      ],
      status: 'SIH 2026 Prototype',
      github: 'https://github.com/hariprasath-tech/CyberSentinel-AI',
      image: '/images/hari-standing-cutout.png',
    },
    {
      id: 'localkart-namma-mart',
      title: 'Local Kart / Namma-Mart',
      subtitle: 'Full-Stack Local Marketplace Platform',
      category: 'Full Stack Development',
      tag: 'PROJECT 03 · FULL STACK MVP',
      priority: 3,
      problem: 'Independent neighborhood grocery merchants lose local footfall to corporate quick-commerce apps charging 25%+ commissions while offering poor regional language support.',
      solution: 'A modern, low-latency localized commerce web platform giving independent shops real-time catalog management, regional Tamil/English UI, and zero-commission ordering pipelines.',
      techStack: ['React', 'Fastify', 'TypeScript', 'Prisma', 'FastAPI', 'Machine Learning', 'MySQL'],
      keyFeatures: [
        'Bilingual consumer catalog with instant keyword and category search',
        'Merchant inventory dispatch dashboard with dynamic stock quantity alerts',
        'Type-safe database migrations using Prisma and Fastify microservice backend',
        'Machine learning product demand forecasting and dynamic neighborhood discounting',
      ],
      status: 'Full Stack Architecture Complete',
      github: 'https://github.com/hariprasath-tech/LocalKart',
      image: '/images/the-podium-stage.jpg',
    },
    {
      id: 'ev-fire-safety',
      title: 'EV Fire Safety',
      subtitle: 'EV Battery Monitoring and Fire Safety Application',
      category: 'Embedded IoT & Battery Safety',
      tag: 'PROJECT 04 · HARDWARE / IOT PROTOTYPE',
      priority: 3,
      problem: 'Electric vehicle battery packs risk thermal runaway and dangerous fires caused by undetected cell heating, electrolyte leakage, or sudden internal resistance spikes.',
      solution: 'An IoT telemetry node combining NTC thermistor array monitoring, toxic gas detection, and early warning threshold logic with a real-time mobile dashboard to trigger automatic pack disengagement before ignition.',
      techStack: ['Flutter', 'ESP32', 'Firebase', 'IoT Sensors', 'C++', 'Battery Safety'],
      keyFeatures: [
        'Multi-point cell temperature differential sensing with millisecond polling',
        'Electrolyte outgassing detection using volatile organic compound (VOC) sensors',
        'Autonomous circuit trip relay commanding immediate vehicle propulsion cutoff',
        'Flutter mobile application dashboard connected via Firebase Realtime Database',
      ],
      status: 'Hardware Prototype & Testbench',
      github: 'https://github.com/hariprasath-tech/EV-Fire-Safety',
      image: '/images/hari-standing-cutout.png',
    },
    {
      id: 'ai-carbon-monitor',
      title: 'Industrial Carbon Monitoring',
      subtitle: 'AI-Based Industrial Carbon Monitoring & Reduction',
      category: 'AI & Sustainable Engineering',
      tag: 'PROJECT 05 · APPLIED ANALYTICS',
      priority: 3,
      problem: 'Industrial manufacturing facilities lack real-time transparent reporting for chimney plume opacity and flue gas carbon output, leading to delayed environmental enforcement.',
      solution: 'An AI-driven continuous emission monitoring concept utilizing camera-based optical plume analysis and sensor fusion to predict statutory carbon threshold breaches and recommend reduction protocols.',
      techStack: ['Python', 'OpenCV', 'Scikit-learn', 'Spring Boot', 'PostgreSQL', 'Chart.js'],
      keyFeatures: [
        'Optical smoke density analysis using video frame segmentation',
        'Sensor-fusion regression estimating metric tons of carbon equivalent output',
        'Automated statutory compliance audit log generator with tamper-resistant logs',
        'Predictive breach alarms alerting plant operators 15 minutes before violations',
      ],
      status: 'Applied Project Architecture',
      github: 'https://github.com/hariprasath-tech/AI-Carbon-Monitor',
      image: '/images/the-podium-stage.jpg',
    },
    {
      id: 'nexus-token',
      title: 'Nexus Token',
      subtitle: 'Campus Exchange Application',
      category: 'Distributed Systems & Campus Economy',
      tag: 'PROJECT 06 · ENTERPRISE JAVA PROTOTYPE',
      priority: 3,
      problem: 'College symposium event attendance, hackathon prizes, and student merit exchange suffer from fragmented manual paper certificates easily lost or forged.',
      solution: 'A centralized campus token exchange application utilizing robust enterprise Java backend pipelines for student transaction balances and event reward verification.',
      techStack: ['Spring Boot', 'JDBC', 'MySQL', 'Java', 'HTML/CSS/JS'],
      keyFeatures: [
        'Direct JDBC connection pooling for high-throughput transactional integrity',
        'Student wallet balance ledger and instant token transfer validation',
        'Campus event check-in logging with automated cryptographic voucher distribution',
        'Auditable administrative reconciliation dashboard',
      ],
      status: 'Application Prototype Complete',
      github: 'https://github.com/hariprasath-tech/Nexus-Token',
      image: '/images/hari-standing-cutout.png',
    },
  ],

  videoShowcase: {
    title: 'CREATIVE VIDEO EDITING',
    subtitle: 'Inspired by cinematic visual showreels with deep red backdrops, yellow typography, and high-retention storytelling.',
    tool: 'CapCut',
    categories: [
      {
        id: 'brand',
        title: 'Brand & Product Videos',
        tagline: 'Enterprise Commercials & Promotional Media',
        items: [
          {
            id: 'brand-01',
            title: 'ISSai Technology Enterprise Commercial',
            category: 'brand',
            categoryLabel: 'Brand & Product',
            clientOrContext: 'ISSai Technology',
            duration: '1:15',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Corporate Promo', 'Color Grading', 'Pacing'],
            description: 'Commercial promotional video produced for ISSai Technology showcasing engineering capabilities and enterprise presence.',
            videoUrl: '/videos/video-editing/1A.mp4',
            thumbnailBg: 'from-red-950 via-zinc-900 to-black',
          },
          {
            id: 'brand-02',
            title: 'IDC Media Client Brand Feature',
            category: 'brand',
            categoryLabel: 'Brand & Product',
            clientOrContext: 'IDC Media',
            duration: '1:02',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Commercial', 'Graphic Lower Thirds', 'Brand Identity'],
            description: 'Brand asset produced for IDC Media client campaigns emphasizing high-energy cuts and crisp visual hierarchy.',
            videoUrl: '/videos/video-editing/600 rs Edit.mp4',
            thumbnailBg: 'from-crimson/25 via-zinc-900 to-black',
          },
          {
            id: 'brand-03',
            title: 'Hardware System Launch Teaser',
            category: 'brand',
            categoryLabel: 'Brand & Product',
            clientOrContext: 'Engineering Showcase',
            duration: '0:55',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Tech Callouts', '3D Titles', 'Dark Vibe'],
            description: 'Dramatic lighting reveals, macro shots of components, and animated technical spec badges.',
            videoUrl: '/videos/video-editing/2500.mp4',
            thumbnailBg: 'from-zinc-900 via-red-950 to-black',
          },
        ],
      },
      {
        id: 'events',
        title: 'Event & Celebration Videos',
        tagline: 'High-Energy Recaps & Cinematic Aftermovies',
        items: [
          {
            id: 'event-01',
            title: 'Inter-Department Cultural Aftermovie',
            category: 'events',
            categoryLabel: 'Event & Celebration',
            clientOrContext: 'College Cultural Fest',
            duration: '1:45',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Festival Recap', 'Bass Drops', 'Cinematic Grade'],
            description: 'High-octane aftermovie capturing stage lights, energetic student performances, and emotional crowd reactions.',
            videoUrl: '/videos/video-editing/2500.mp4',
            thumbnailBg: 'from-amber-950 via-red-950 to-black',
          },
          {
            id: 'event-02',
            title: 'Celebration & Department Awards Montage',
            category: 'events',
            categoryLabel: 'Event & Celebration',
            clientOrContext: 'Department Achievement Meet',
            duration: '0:58',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Trophy Moments', 'Filmic Warmth', 'Memory Reel'],
            description: 'Slow-motion victory moments, team celebrations, and candid student portraits wrapped in warm filmic color tones.',
            videoUrl: '/videos/video-editing/1A.mp4',
            thumbnailBg: 'from-crimson/30 via-zinc-900 to-black',
          },
        ],
      },
      {
        id: 'album',
        title: 'Album Song Videos',
        tagline: 'Lyrical Narrative & Filmic Music Edits',
        items: [
          {
            id: 'album-01',
            title: 'Cinematic Filmic Song Cut',
            category: 'album',
            categoryLabel: 'Album Song Video',
            clientOrContext: 'Independent Music Artist',
            duration: '2:10',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Beat Cut', 'Mood Lighting', 'Color Grade'],
            description: 'Emotionally synced cuts aligned with melodic rhythm and visual mood transitions.',
            videoUrl: '/videos/video-editing/2500.mp4',
            thumbnailBg: 'from-red-900 via-zinc-900 to-black',
          },
        ],
      },
      {
        id: 'interior',
        title: 'Interior Videos',
        tagline: 'Architectural Tours & Spatial Showcases',
        items: [
          {
            id: 'interior-01',
            title: 'Modern Architecture & Workspace Walkthrough',
            category: 'interior',
            categoryLabel: 'Interior Video',
            clientOrContext: 'Studio Space Showcase',
            duration: '0:50',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Smooth Pans', 'Ambient Sound', 'Clean Color'],
            description: 'Smooth gimbal-simulated pans emphasizing lighting, textures, and spatial flow.',
            videoUrl: '/videos/video-editing/1A.mp4',
            thumbnailBg: 'from-zinc-900 via-red-950 to-black',
          },
        ],
      },
      {
        id: 'reels',
        title: 'Social Media Reels',
        tagline: 'High-Retention 9:16 Vertical Content',
        items: [
          {
            id: 'reel-01',
            title: 'High-Retention Tech Explainer Reel',
            category: 'reels',
            categoryLabel: 'Social Media Reel',
            clientOrContext: 'Creator Channel / Freelance',
            duration: '0:35',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Kinetic Captions', 'Speed Ramps', 'Sound FX'],
            description: 'Fast-paced hook in first 2 seconds, synchronized sound effects, and kinetic subtitles designed to maintain 85%+ retention.',
            videoUrl: '/videos/video-editing/600 rs Edit.mp4',
            thumbnailBg: 'from-red-950 via-zinc-900 to-black',
          },
          {
            id: 'reel-02',
            title: 'Dynamic Beat-Synced Product Reel',
            category: 'reels',
            categoryLabel: 'Social Media Reel',
            clientOrContext: 'Brand Promotion',
            duration: '0:42',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Beat Sync', 'Zoom Cuts', 'Color Pop'],
            description: 'Impact transitions aligned to musical transients, highlighting product details with smooth match cuts.',
            videoUrl: '/videos/video-editing/1A.mp4',
            thumbnailBg: 'from-crimson/30 via-zinc-900 to-black',
          },
        ],
      },
      {
        id: 'promos',
        title: 'Promotional Advertisements',
        tagline: 'Conversion-Focused Campaign Ads',
        items: [
          {
            id: 'promo-01',
            title: 'Product Launch Conversion Micro-Ad',
            category: 'promos',
            categoryLabel: 'Promotional Ad',
            clientOrContext: 'E-commerce Brand',
            duration: '0:30',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Conversion Hook', 'Color Grade', 'CTA Outro'],
            description: 'Engineered for paid social conversion with dynamic product unboxing sequences and bold title cards.',
            videoUrl: '/videos/video-editing/600 rs Edit.mp4',
            thumbnailBg: 'from-red-900 via-zinc-900 to-black',
          },
        ],
      },
      {
        id: 'branding',
        title: 'Personal Branding Videos',
        tagline: 'Orator & Founder Authority Content',
        items: [
          {
            id: 'brand-pers-01',
            title: 'The Podium Public Speaking Stage Feature',
            category: 'branding',
            categoryLabel: 'Personal Branding',
            clientOrContext: 'The Podium · Episode 04',
            duration: '1:20',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Stage Spotlight', 'Speech Highlights', 'Live Audio'],
            description: 'Live orator performance capture featuring table-topic speech delivery and audience engagement moments.',
            videoUrl: '/videos/public-speaking/the-podium-speech-01.mp4',
            thumbnailBg: 'from-red-900 via-zinc-900 to-black',
          },
        ],
      },
    ],
  },

  experience: [
    {
      id: 'exp-freelance',
      role: 'Freelance Video Editor',
      organization: 'Independent / Creator Roster',
      period: '2024 – Present',
      type: 'Freelance / Contract',
      description: 'Produced 14+ client video projects across promotional reels, brand advertisements, and social media content pipelines using CapCut.',
      responsibilities: [
        'Authored custom visual pacing, beat synchronization, and kinetic typography for high-retention video reels',
        'Collaborated directly with startup creators and event coordinators to translate raw camera assets into polished deliverables',
        'Applied color grading, dynamic sound design, audio compression, and speed ramp transitions',
      ],
      tools: ['CapCut Pro', 'Motion Graphics', 'Audio Mastering', 'Color LUTs'],
    },
    {
      id: 'exp-issai',
      role: 'Part-Time Video Editor',
      organization: 'Issai Technology',
      period: '2025',
      type: 'Part-Time Engagement',
      description: 'Part-time video editing involvement for commercial brand promotions and digital product assets.',
      responsibilities: [
        'Created promotional video assets aligned with enterprise client branding guidelines',
        'Implemented sound effects, animated lower-thirds, and visual pacing adjustments',
        'Collaborated with media team members on content iteration and feedback cycles',
      ],
      tools: ['CapCut', 'Commercial Editing', 'Brand Assets'],
    },
    {
      id: 'exp-idc',
      role: 'Video Editor',
      organization: 'IDC Media',
      period: '2025',
      type: 'Professional Engagement',
      description: 'Video editing involvement handling creative video editing, client campaigns, short-form reels, and digital marketing content.',
      responsibilities: [
        'Edited social media reels and promotional campaign videos from raw shoot footage',
        'Balanced multi-track background music, voiceover leveling, and visual overlays',
        'Delivered on tight project deadlines with consistent export quality and aspect ratios',
      ],
      tools: ['CapCut', 'Video Production', 'Creative Storytelling'],
    },
    {
      id: 'exp-cococut-startup',
      role: 'Startup Founder & Hardware Lead',
      organization: 'CocoCut Agricultural Robotics',
      period: '2025 – Present',
      type: 'Startup Venture',
      description: 'Co-founded CocoCut alongside Nithin Vasan and Adithiya Jayan to automate agricultural coconut leaf pruning.',
      responsibilities: [
        'Designed mechanized climbing chassis and high-torque rotary blade assembly',
        'Integrated Raspberry Pi offline computer vision for automated frond detection',
        'Demonstrated working prototype recognized among top 5 finalists in MIT App Project Contest',
      ],
      tools: ['Raspberry Pi', 'Python', 'Computer Vision', 'Robotics Hardware'],
    },
  ],

  leadershipAchievements: [
    {
      id: 'ach-placement-coordinator',
      title: 'Placement Coordinator – CSE Section D',
      subtitle: 'Department of Computer Science & Engineering',
      role: 'Placement Coordinator',
      year: '2025 – Present',
      category: 'Leadership',
      highlight: 'Elected coordinator assisting class career readiness, training workshops, campus recruitment drives, and recruiter coordination.',
      tags: ['Leadership', 'Placement Coordinator', 'Student Mentorship'],
    },
    {
      id: 'ach-cococut-founder',
      title: 'Founder – CocoCut',
      subtitle: 'Autonomous Coconut Leaf Cutting Rover',
      role: 'Founder (Co-founders: Nithin Vasan, Adithiya Jayan)',
      year: '2025 – Present',
      category: 'Founder',
      highlight: 'Spearheaded agricultural robotics startup initiative to eliminate dangerous palm climbing through autonomous rover technology.',
      tags: ['Founder', 'Co-Founders: Nithin Vasan & Adithiya Jayan', 'Robotics'],
    },
    {
      id: 'ach-sih-2026',
      title: 'SIH 2026 Participation – Team Neural Nexus',
      subtitle: 'CyberSentinel AI Threat Defense',
      role: 'Core Member & ML Architect',
      year: '2026',
      category: 'Hackathon',
      highlight: 'Engineered predictive network defense architecture utilizing LightGBM and SHAP explainability for government threat intelligence problems.',
      tags: ['SIH 2026', 'Team Neural Nexus', 'CyberSentinel AI'],
    },
    {
      id: 'ach-mit-app',
      title: 'MIT App Project Contest – Top 5 Performers',
      subtitle: 'Institution-Wide Mobile Innovation Showcase',
      role: 'Top 5 Performer',
      year: '2025',
      category: 'Competition',
      highlight: 'Recognized in the top 5 performers out of dozens of engineering teams for innovative app architecture and responsive UX design.',
      tags: ['MIT App Project Contest', 'Top 5 Performers', 'App Innovation'],
    },
    {
      id: 'ach-mit-summer',
      title: 'Mahalingam Institute of Technology Summer Course',
      subtitle: 'Intensive Applied Engineering Training',
      role: 'Course Graduate',
      year: '21 – 25 Apr 2025',
      category: 'Course',
      highlight: 'Completed comprehensive multi-day technical training covering applied engineering methodologies and embedded software integration.',
      tags: ['Mahalingam Institute of Technology', 'Summer Course', 'Certification'],
    },
    {
      id: 'ach-the-podium',
      title: 'Public Speaking – The Podium (Episode 04)',
      subtitle: 'Inter-Department Oratory Initiative',
      role: 'Stage Table-Topic Speaker',
      year: '08 July 2026',
      category: 'Speaking',
      highlight: 'Delivered an impromptu table-topic speech in front of a live inter-department audience, earning applause for spontaneous thinking.',
      tags: ['The Podium', 'Public Speaking', 'Table-Topic Speaker'],
    },
  ],

  beyondCode: [
    {
      id: 'bc-video',
      title: 'Creative Video Editing',
      category: 'Visual Pacing & Motion',
      headline: 'The Rhythm of the Cut',
      description: 'Video editing is rhythmic code. Balancing cuts, sound design, visual hooks, and color palette creates psychological retention. Having edited 14+ client videos, this creative discipline sharpens my eye for digital product UX and frontend motion timing.',
      takeaway: 'Directly influences my UI/UX intuition for micro-interactions and visual pacing.',
      icon: 'Film',
      accentColor: '#d90429',
    },
    {
      id: 'bc-basketball',
      title: 'Basketball & Court Strategy',
      category: 'Athletics & Team Strategy',
      headline: 'Split-Second Court Decision Making',
      description: 'Basketball teaches spatial awareness, fast break decision-making, and resilient team defense. Every fast-break pass requires reading the floor in milliseconds — a mindset that translates directly to debugging race conditions and distributed architecture.',
      takeaway: 'Builds relentless endurance, spatial vision, and composure under pressure.',
      icon: 'Activity',
      accentColor: '#ff2a45',
    },
    {
      id: 'bc-handball',
      title: 'Handball & Team Athletics',
      category: 'Competitive Sports',
      headline: 'High-Impact Athletic Agility',
      description: 'Handball is intensely physical and tactical. Moving without the ball, setting perimeter screens, and anticipating defensive rotations requires synchronized trust between six teammates executing in sync.',
      takeaway: 'Cultivates deep collaborative trust and team-first defensive grit.',
      icon: 'Shield',
      accentColor: '#ffe600',
    },
    {
      id: 'bc-speaking',
      title: 'Public Speaking & Oratory',
      category: 'Communication Leadership',
      headline: 'Stage Presence & Spontaneous Ideas',
      description: 'Stepping onto the stage at The Podium (Episode 04) to deliver a table-topic speech taught me to embrace nervousness and articulate complex concepts with clarity. Software engineers who speak clearly turn technical complexity into business value.',
      takeaway: 'Transforms technical knowledge into persuasive, inspiring communication.',
      icon: 'Mic',
      accentColor: '#d90429',
    },
    {
      id: 'bc-entrepreneurship',
      title: 'Entrepreneurship & Startup Building',
      category: 'Venture Creation',
      headline: 'From Farmer Problems to Working Rover',
      description: 'Co-founding CocoCut with Nithin Vasan and Adithiya Jayan taught me the grit of hardware prototyping: talking directly to coconut farmers, ordering motor parts, soldering circuits, and iterating rover climbing wheels in the lab until it climbs.',
      takeaway: 'True software and hardware value is proven in the soil, not just on a screen.',
      icon: 'Rocket',
      accentColor: '#ffe600',
    },
  ],
}
