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
    name: 'HARI PRASATH S',
    firstName: 'HARI PRASATH',
    lastName: 'S',
    greeting: "Hello, I'm",
    headline: 'BUILDING IDEAS INTO REALITY.',
    roles: ['Developer.', 'Creator.', 'Founder.'],
    subroles: [
      'Full Stack Developer (Java Spring Boot & React)',
      'Autonomous Robotics Architect (CocoCut Rover)',
      'AI/ML Cybersecurity Enthusiast (CyberSentinel AI)',
      'Freelance Video Editor & Content Storyteller',
    ],
    availabilityBadge: 'Available for Opportunities',
    bio: 'Computer Science and Engineering student at Sri Eshwar College of Engineering, Coimbatore. Passionate about engineering high-performance software systems, prototyping autonomous agricultural robotics, exploring predictive AI security, and producing high-retention video narratives. Committed to continuous problem solving with 600+ algorithmic challenges solved.',
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
    title: 'THE JOURNEY SO FAR',
    tagline: 'Engineering rigor meets entrepreneurial initiative and creative storytelling.',
    paragraphs: [
      'I am an aspiring software architect and engineering student currently pursuing my Bachelor of Engineering in Computer Science at Sri Eshwar College of Engineering, Coimbatore.',
      'My technical work centers on practical execution: from engineering the mechanical, electronic, and computer-vision architecture of CocoCut (an autonomous rover for harvesting coconut fronds) to designing predictive machine learning defense models for Smart India Hackathon (SIH 2026) under Team Neural Nexus.',
      'Beyond software and hardware, I have built a thriving freelance creative discipline as a video editor for commercial brands like ISSai Technology and IDC Media, transforming complex narratives into high-retention visual assets.',
    ],
    facts: [
      { label: 'Institution', value: 'Sri Eshwar College of Engineering' },
      { label: 'Degree', value: 'B.E. Computer Science & Engineering' },
      { label: 'Academic Batch', value: '2025 – 2029' },
      { label: 'Location', value: 'Coimbatore, Tamil Nadu' },
      { label: 'Specialization', value: 'Full Stack Systems, Robotics & AI' },
      { label: 'Leadership', value: 'Placement Coordinator (CSE-D)' },
    ],
    timeline: [
      {
        year: '2025',
        title: 'College Inception & Algorithmic Mastery',
        detail: 'Joined Sri Eshwar College of Engineering, Coimbatore. Commenced rigorous algorithmic problem solving, solving 600+ problems on SkillRack and developing core proficiency in Java, Python, and C.',
      },
      {
        year: '2025',
        title: 'Commercial Video Editing & Media Production',
        detail: 'Began freelance and part-time video editing for ISSai Technology and IDC Media. Mastered CapCut, kinetic pacing, and motion graphics across 14+ client video releases.',
      },
      {
        year: '2025–2026',
        title: 'CocoCut Founder & MIT App Contest Top 5',
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
    title: 'TECHNICAL ARSENAL',
    subtitle: 'Comprehensive toolkit across systems engineering, distributed web, AI/ML, and media production.',
    categories: [
      {
        id: 'programming',
        title: 'PROGRAMMING',
        tagline: 'Core computational languages & data structures',
        color: '#d90429',
        skills: [
          { name: 'Java', level: 'Advanced', desc: 'Object-Oriented Programming, Multithreading, Core Architecture' },
          { name: 'Python', level: 'Advanced', desc: 'Scripting, Automation, ML Pipelines, OpenCV, Scikit-learn' },
          { name: 'C', level: 'Certified', desc: 'Pointers, Memory Management, Low-Level Algorithm Design' },
          { name: 'C++', level: 'Intermediate', desc: 'Object-Oriented Patterns, STL, Performance Code' },
        ],
      },
      {
        id: 'frontend',
        title: 'FRONTEND',
        tagline: 'High-performance interactive interfaces',
        color: '#ff2a45',
        skills: [
          { name: 'HTML5', level: 'Proficient', desc: 'Semantic Structure, Accessibility (a11y), SEO' },
          { name: 'CSS3', level: 'Proficient', desc: 'Custom Keyframe Animations, Flexbox, CSS Grid, Responsive Tokens' },
          { name: 'JavaScript (ES6+)', level: 'Advanced', desc: 'Asynchronous Programming, DOM APIs, Closures' },
          { name: 'TypeScript', level: 'Proficient', desc: 'Strong Typing, Strict Interfaces, Generics' },
          { name: 'React 18 / 19', level: 'Advanced', desc: 'Component Architecture, Custom Hooks, State Management' },
          { name: 'Tailwind CSS', level: 'Advanced', desc: 'Utility-First Styling, Custom Themes, JIT Compiler' },
        ],
      },
      {
        id: 'backend',
        title: 'BACKEND',
        tagline: 'Scalable server microservices & REST APIs',
        color: '#ffe600',
        skills: [
          { name: 'Spring Boot', level: 'Advanced', desc: 'Enterprise Java, RESTful Web Services, Spring Data JPA, Security' },
          { name: 'Fastify', level: 'Intermediate', desc: 'Ultra-low overhead Node.js REST API microservices' },
          { name: 'Node.js', level: 'Proficient', desc: 'Event Loop, Express, RESTful Routing, Middleware Pipelines' },
          { name: 'REST APIs', level: 'Advanced', desc: 'Stateless Architecture, JSON Contracts, HTTP Status Standards' },
        ],
      },
      {
        id: 'databases',
        title: 'DATABASES',
        tagline: 'Relational & distributed data stores',
        color: '#d90429',
        skills: [
          { name: 'MySQL', level: 'Advanced', desc: 'Relational Schemas, Foreign Keys, Complex Joins, Indexing' },
          { name: 'PostgreSQL', level: 'Intermediate', desc: 'Relational Queries, ACID Transactions, JSONB Data' },
          { name: 'MongoDB', level: 'Proficient', desc: 'Document Collections, BSON Schemas, Aggregation Pipelines' },
        ],
      },
      {
        id: 'aiml',
        title: 'AI / MACHINE LEARNING',
        tagline: 'Predictive modeling & computer vision',
        color: '#ff2a45',
        skills: [
          { name: 'LightGBM', level: 'Proficient', desc: 'Gradient Boosting Trees for High-Speed Network Anomaly Detection' },
          { name: 'Scikit-learn', level: 'Proficient', desc: 'Classification, Regression, Pipeline Preprocessing, Metrics' },
          { name: 'SHAP', level: 'Applied', desc: 'Explainable AI Feature Attribution & Interpretability' },
          { name: 'Computer Vision', level: 'Applied', desc: 'OpenCV Object Detection & Obstacle Tracking' },
        ],
      },
      {
        id: 'tools',
        title: 'DEVELOPER TOOLS',
        tagline: 'Productivity, version control & build workflows',
        color: '#ffe600',
        skills: [
          { name: 'Git & GitHub', level: 'Advanced', desc: 'Branching, PRs, Version Control, Commit Hygiene' },
          { name: 'Flutter', level: 'Intermediate', desc: 'Cross-platform mobile UI development for robotics telemetry' },
          { name: 'VS Code', level: 'Advanced', desc: 'Full development ecosystem, extensions, workspace debugging' },
          { name: 'Antigravity IDE', level: 'Advanced', desc: 'Agentic development workflow & workflow scripts' },
          { name: 'Docker', level: 'Basics', desc: 'Containerization, reproducible deployment environments' },
        ],
      },
      {
        id: 'creative',
        title: 'CREATIVE & MEDIA',
        tagline: 'Cinematic visual pacing & sound design',
        color: '#d90429',
        skills: [
          { name: 'CapCut Pro', level: 'Expert', desc: 'Short-form pacing, keyframing, speed ramps, visual overlays' },
          { name: 'Motion Graphics', level: 'Proficient', desc: 'Kinetic typography, text tracking, custom video transitions' },
          { name: 'Audio Mastering', level: 'Proficient', desc: 'Beat synchronization, sound effects design, multi-track mixing' },
          { name: 'Color Grading', level: 'Proficient', desc: 'Cinematic look LUTs, high-contrast saturation balancing' },
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
      tag: 'Priority 01 · Hero Project · Startup Concept',
      priority: 1,
      founderStory: 'Co-founded with fellow engineers Nithin Vasan and Adithiya Jayan at Sri Eshwar College of Engineering. Born out of firsthand agricultural observation: manual coconut tree climbing for pruning dead fronds poses severe fall hazards and faces acute labor shortages. We engineered an autonomous mechanized climbing rover with high-torque motor drivers and cutting blades.',
      problem: 'Harvesting coconut fronds and routine canopy maintenance requires dangerous high-altitude human climbing, resulting in fatal falls and agricultural labor shortages across South India coconut groves.',
      solution: 'An autonomous mechanized rover engineered with motorized trunk-gripping rollers, dual high-torque rotary cutting blades, Raspberry Pi onboard compute, and an offline machine-learning vision system that detects and slices fronds automatically.',
      techStack: ['Raspberry Pi', 'Python', 'Computer Vision', 'Motor Controllers', 'IoT Sensors', 'Telemetry App'],
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
      subtitle: 'Predictive Network Threat Defense & Forensics',
      category: 'AI / Machine Learning & Cybersecurity',
      tag: 'Priority 02 · SIH 2026 Initiative · Team Neural Nexus',
      priority: 2,
      problem: 'Conventional intrusion detection systems (IDS) rely on static signature matching, failing against zero-day distributed attacks, encrypted anomalous payloads, and polymorphic packet flooding.',
      solution: 'A predictive threat forecasting engine powered by LightGBM gradient boosted decision trees and SHAP explainability. CyberSentinel analyzes continuous network flow telemetry to forecast attack vectors before exploit execution.',
      techStack: ['Python', 'LightGBM', 'Scikit-learn', 'SHAP', 'Fastify', 'React', 'Docker'],
      keyFeatures: [
        'Real-time network packet flow ingestion and multivariate feature extraction',
        'High-speed inference using optimized LightGBM decision trees',
        'Explainable AI via SHAP feature attribution values displaying exact attack confidence rationale',
        'Automated perimeter firewall rule generator and security incident alert dispatcher',
      ],
      status: 'SIH 2026 Prototype',
      github: 'https://github.com/hariprasath-tech/CyberSentinel-AI',
      image: '/images/hari-standing-cutout.png',
    },
    {
      id: 'localkart-namma-mart',
      title: 'LocalKart / Namma-Mart',
      subtitle: 'Hyperlocal Merchant Commerce Platform',
      category: 'Full Stack Web Development',
      tag: 'Priority 03 · Full Stack MVP',
      priority: 3,
      problem: 'Independent neighborhood grocery merchants lose local footfall to corporate quick-commerce apps charging 25%+ commissions while offering poor regional language support.',
      solution: 'A modern, low-latency localized commerce web platform giving independent shops real-time catalog management, regional Tamil/English UI, and zero-commission ordering pipelines.',
      techStack: ['React', 'TypeScript', 'Node.js', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
      keyFeatures: [
        'Bilingual consumer catalog with instant keyword and category search',
        'Merchant inventory dispatch dashboard with dynamic stock quantity alerts',
        'Multi-stage cart persistence and automated printable order slips',
        'Secure RESTful API integration with robust data normalization and audit logs',
      ],
      status: 'Full Stack Architecture Complete',
      github: 'https://github.com/hariprasath-tech/LocalKart',
      image: '/images/the-podium-stage.jpg',
    },
    {
      id: 'ev-fire-safety',
      title: 'EV Fire Safety Monitoring',
      subtitle: 'Real-Time Battery Thermal Telemetry',
      category: 'Embedded IoT & Battery Telemetry',
      tag: 'Priority 04 · Hardware / IoT Prototype',
      priority: 3,
      problem: 'Electric vehicle battery packs risk thermal runaway and dangerous fires caused by undetected cell heating, electrolyte leakage, or sudden internal resistance spikes.',
      solution: 'An IoT telemetry node combining NTC thermistor array monitoring, toxic gas detection, and early warning threshold logic to trigger automatic pack disengagement before ignition.',
      techStack: ['ESP32', 'IoT Sensors', 'Python', 'MQTT', 'Spring Boot API', 'Telemetry Dashboard'],
      keyFeatures: [
        'Multi-point cell temperature differential sensing with millisecond polling',
        'Electrolyte outgassing detection using volatile organic compound (VOC) sensors',
        'Autonomous circuit trip relay commanding immediate vehicle propulsion cutoff',
        'Cloud telemetry synchronization via lightweight MQTT protocol',
      ],
      status: 'Hardware Prototype & Testbench',
      github: 'https://github.com/hariprasath-tech/EV-Fire-Safety',
      image: '/images/hari-standing-cutout.png',
    },
    {
      id: 'ai-carbon-monitor',
      title: 'AI Industrial Carbon Monitoring',
      subtitle: 'Computer Vision & Factory Flue Emission Analytics',
      category: 'AI & Sustainable Engineering',
      tag: 'Priority 05 · Applied Analytics',
      priority: 3,
      problem: 'Industrial manufacturing facilities lack real-time transparent reporting for chimney plume opacity and flue gas carbon output, leading to delayed environmental enforcement.',
      solution: 'An AI-driven continuous emission monitoring concept utilizing camera-based optical plume analysis and sensor fusion to predict statutory carbon threshold breaches.',
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
      subtitle: 'Decentralized Campus Activity & Reward Protocol',
      category: 'Distributed Systems & Web3',
      tag: 'Priority 06 · Web3 Concept',
      priority: 3,
      problem: 'College symposium event attendance, hackathon prizes, and student merit points suffer from fragmented manual paper certificates easily lost or forged.',
      solution: 'A tokenized digital badge protocol where event attendees, project winners, and coordinators earn cryptographic tokens verifying proof-of-contribution.',
      techStack: ['Solidity', 'Web3.js', 'React', 'Tailwind CSS', 'Ethereum Testnet'],
      keyFeatures: [
        'Gas-efficient token issuance for verified event coordinators and winners',
        'Transparent ledger explorer enabling recruiters to verify student accomplishments',
        'Self-custody student wallet login with zero vendor lock-in',
      ],
      status: 'Smart Contract Prototype',
      github: 'https://github.com/hariprasath-tech/Nexus-Token',
      image: '/images/hari-standing-cutout.png',
    },
  ],

  videoShowcase: {
    title: 'CINEMATIC VIDEO EDITING SHOWCASE',
    subtitle: 'High-retention commercial promotional media, viral short-form reels, and cinematic event aftermovies.',
    categories: [
      {
        id: 'reels',
        title: 'SHORT-FORM REELS',
        tagline: 'High-Retention 9:16 Social Media Content',
        items: [
          {
            id: 'reel-01',
            title: 'High-Retention Tech Explainer Reel',
            category: 'reels',
            categoryLabel: 'Short-Form Reel',
            clientOrContext: 'Creator Channel / Freelance',
            duration: '0:35',
            tool: 'CapCut Pro',
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
            categoryLabel: 'Short-Form Reel',
            clientOrContext: 'Brand Promotion',
            duration: '0:42',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Beat Sync', 'Zoom Cuts', 'Color Pop'],
            description: 'Impact transitions aligned to musical transients, highlighting product details with smooth match cuts.',
            videoUrl: '/videos/video-editing/1A.mp4',
            thumbnailBg: 'from-crimson/30 via-zinc-900 to-black',
          },
          {
            id: 'reel-03',
            title: 'Motion Graphic Narrative Short',
            category: 'reels',
            categoryLabel: 'Short-Form Reel',
            clientOrContext: 'Client Showcase',
            duration: '0:28',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Text Tracking', 'Glitch FX', 'Story Hook'],
            description: 'Punchy visual storytelling using tracking labels, subtle camera shakes, and crisp dialogue mixing.',
            videoUrl: '/videos/video-editing/2500.mp4',
            thumbnailBg: 'from-amber-950 via-zinc-900 to-black',
          },
          {
            id: 'reel-04',
            title: 'Viral Commercial Micro-Ad',
            category: 'reels',
            categoryLabel: 'Short-Form Reel',
            clientOrContext: 'E-commerce Brand',
            duration: '0:30',
            tool: 'CapCut Pro',
            aspectRatio: '9:16',
            tags: ['Conversion Hook', 'Color Grade', 'CTA Outro'],
            description: 'Engineered for paid social conversion with dynamic product unboxing sequences and bold title cards.',
            videoUrl: '/videos/video-editing/600 rs Edit.mp4',
            thumbnailBg: 'from-red-900 via-zinc-900 to-black',
          },
        ],
      },
      {
        id: 'brand',
        title: 'BRAND & PRODUCT VIDEOS',
        tagline: 'Enterprise Commercials & Promotional Media',
        items: [
          {
            id: 'brand-01',
            title: 'ISSai Technology Enterprise Commercial',
            category: 'brand',
            categoryLabel: 'Brand Promotion',
            clientOrContext: 'ISSai Technology',
            duration: '1:15',
            tool: 'CapCut / Professional Suite',
            aspectRatio: '9:16',
            tags: ['Corporate Promo', 'Color Grading', 'Pacing'],
            description: 'Commercial promo video for ISSai Technology showcasing technical capabilities, brand presence, and professional atmosphere.',
            videoUrl: '/videos/video-editing/1A.mp4',
            thumbnailBg: 'from-red-950 via-zinc-900 to-black',
          },
          {
            id: 'brand-02',
            title: 'Hardware System Launch Teaser',
            category: 'brand',
            categoryLabel: 'Product Video',
            clientOrContext: 'Engineering Showcase',
            duration: '0:55',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Tech Callouts', '3D Titles', 'Dark Vibe'],
            description: 'Dramatic lighting reveals, macro shots of components, and animated technical spec badges.',
            videoUrl: '/videos/video-editing/2500.mp4',
            thumbnailBg: 'from-zinc-900 via-red-950 to-black',
          },
          {
            id: 'brand-03',
            title: 'IDC Media Client Promotional',
            category: 'brand',
            categoryLabel: 'Brand Video',
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
            id: 'brand-04',
            title: 'SaaS Platform Walkthrough Reel',
            category: 'brand',
            categoryLabel: 'Product Video',
            clientOrContext: 'Digital Product Launch',
            duration: '0:48',
            tool: 'CapCut Pro',
            aspectRatio: '9:16',
            tags: ['UI Mockup', 'Smooth Zoom', 'Feature Tour'],
            description: 'Showcasing key dashboard interactions and user flow highlights with clean cursor animations and sound triggers.',
            videoUrl: '/videos/video-editing/1A.mp4',
            thumbnailBg: 'from-red-950 via-zinc-900 to-black',
          },
        ],
      },
      {
        id: 'event',
        title: 'EVENT & CELEBRATION VIDEOS',
        tagline: 'High-Energy Recaps & Cinematic Aftermovies',
        items: [
          {
            id: 'event-01',
            title: 'Inter-Department Cultural Aftermovie',
            category: 'event',
            categoryLabel: 'Event Aftermovie',
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
            title: 'The Podium Public Speaking Stage Promo',
            category: 'event',
            categoryLabel: 'Stage Presentation',
            clientOrContext: 'The Podium · Episode 04',
            duration: '1:20',
            tool: 'CapCut',
            aspectRatio: '9:16',
            tags: ['Stage Spotlight', 'Speech Highlights', 'Live Audio'],
            description: 'Live orator performance capture featuring table-topic speech delivery and audience engagement moments.',
            videoUrl: '/videos/public-speaking/the-podium-speech-01.mp4',
            thumbnailBg: 'from-red-900 via-zinc-900 to-black',
          },
          {
            id: 'event-03',
            title: 'Tech Symposium Highlights Reel',
            category: 'event',
            categoryLabel: 'Symposium Recap',
            clientOrContext: 'SECE Tech Fest',
            duration: '1:10',
            tool: 'CapCut Pro',
            aspectRatio: '9:16',
            tags: ['Fast Cut', 'Neon Tone', 'Crowd Energy'],
            description: 'Fast montage tracking hackathon teams, keynote speakers, and project demonstrations across event venues.',
            videoUrl: '/videos/public-speaking/the-podium-speech-02.mp4',
            thumbnailBg: 'from-zinc-900 via-red-950 to-black',
          },
          {
            id: 'event-04',
            title: 'Celebration & Awards Montage',
            category: 'event',
            categoryLabel: 'Celebration Reel',
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
    ],
  },

  experience: [
    {
      id: 'exp-freelance',
      role: 'Freelance Video Editor',
      organization: 'Self-Employed / Independent',
      period: '2024 – Present',
      type: 'Freelance / Contract',
      description: 'Produced 14+ client video projects across promotional reels, brand advertisements, and social media content pipelines.',
      responsibilities: [
        'Authored custom visual pacing, beat synchronization, and kinetic typography for high-retention video reels',
        'Collaborated directly with startup creators and event coordinators to translate raw camera assets into polished deliverables',
        'Applied color grading, dynamic sound design, audio compression, and speed ramp transitions',
      ],
      tools: ['CapCut Pro', 'Motion Graphics', 'Audio Mastering', 'Color LUTs'],
      placeholderNote: 'Active ongoing freelance engagements with diverse creator and brand clients.',
    },
    {
      id: 'exp-issai',
      role: 'Part-Time Video Editor',
      organization: 'Issai Technology',
      period: '2025',
      type: 'Part-Time Engagement',
      description: 'Edited commercial brand promotions, social media assets, and digital marketing visuals for technology product showcases.',
      responsibilities: [
        'Created promotional video assets aligned with enterprise client branding guidelines',
        'Implemented sound effects, animated lower-thirds, and visual pacing adjustments',
        'Collaborated with media team members on content iteration and feedback cycles',
      ],
      tools: ['CapCut', 'Commercial Editing', 'Brand Assets'],
      placeholderNote: '[Details to be added — client NDAs & specific project metrics reserved]',
    },
    {
      id: 'exp-idc',
      role: 'Video Editor',
      organization: 'IDC Media',
      period: '2025',
      type: 'Professional Engagement',
      description: 'Handled creative video editing, client campaigns, short-form reels, and digital marketing content.',
      responsibilities: [
        'Edited social media reels and promotional campaign videos from raw shoot footage',
        'Balanced multi-track background music, voiceover leveling, and visual overlays',
        'Delivered on tight project deadlines with consistent export quality and aspect ratios',
      ],
      tools: ['CapCut', 'Video Production', 'Creative Storytelling'],
      placeholderNote: '[Details to be added — ongoing client roster & release schedule]',
    },
  ],

  leadershipAchievements: [
    {
      id: 'ach-cococut-founder',
      title: 'Founder & Hardware Systems Lead',
      subtitle: 'CocoCut – Autonomous Agricultural Rover',
      role: 'Founder (Co-founders: Nithin Vasan, Adithiya Jayan)',
      year: '2025 – Present',
      category: 'Founder',
      highlight: 'Spearheaded agricultural robotics startup initiative to eliminate dangerous palm climbing through autonomous rover technology.',
      tags: ['Startup Builder', 'Robotics', 'Hardware Lead', 'Agriculture'],
    },
    {
      id: 'ach-placement-coordinator',
      title: 'Student Placement Coordinator',
      subtitle: 'Department of Computer Science & Engineering (CSE-D)',
      role: 'Placement Coordinator',
      year: '2025 – Present',
      category: 'Leadership',
      highlight: 'Elected coordinator assisting class career readiness, training workshops, campus recruitment drives, and recruiter coordination.',
      tags: ['Leadership', 'Event Coordination', 'Student Mentorship'],
    },
    {
      id: 'ach-sih-2026',
      title: 'Smart India Hackathon 2026 Initiative',
      subtitle: 'Team Neural Nexus – CyberSentinel AI',
      role: 'Core Member & ML Architect',
      year: '2026',
      category: 'Hackathon',
      highlight: 'Engineered predictive network defense architecture utilizing LightGBM and SHAP explainability for government threat intelligence problems.',
      tags: ['SIH 2026', 'Cybersecurity', 'Predictive ML', 'Team Neural Nexus'],
    },
    {
      id: 'ach-mit-app',
      title: 'MIT App Project Contest – Top 5 Finalist',
      subtitle: 'Institution-Wide Mobile Innovation Showcase',
      role: 'Top 5 Finalist',
      year: '2025',
      category: 'Competition',
      highlight: 'Recognized in the top 5 finalists out of dozens of engineering teams for innovative app architecture and responsive UX design.',
      tags: ['Top 5 Finalist', 'App Innovation', 'UI/UX Design'],
    },
    {
      id: 'ach-the-podium',
      title: 'The Podium – Public Speaking (Episode 04)',
      subtitle: 'Inter-Department Oratory Initiative',
      role: 'Stage Table-Topic Speaker',
      year: '08 July 2026',
      category: 'Speaking',
      highlight: 'Delivered an impromptu table-topic speech in front of a live inter-department audience, earning applause for spontaneous thinking.',
      tags: ['The Podium Ep 04', 'Public Speaking', 'Spontaneous Thinking'],
    },
    {
      id: 'ach-mit-summer',
      title: 'Mahalingam Institute of Technology Summer Course',
      subtitle: 'Intensive Applied Engineering Training',
      role: 'Course Graduate',
      year: '21 – 25 Apr 2025',
      category: 'Course',
      highlight: 'Completed comprehensive multi-day technical training covering applied engineering methodologies and embedded software integration.',
      tags: ['Engineering Course', 'Hands-On Training', 'Certification'],
    },
  ],

  beyondCode: [
    {
      id: 'bc-video',
      title: 'Video Editing & Motion Storytelling',
      category: 'Creative Visual Craft',
      headline: 'The Rhythm of the Edit',
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
