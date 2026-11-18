import type {
  Project,
  SkillCategory,
  SpeakingEngagement,
  AchievementItem,
  VideoEditingProject,
} from '../types/portfolio'

export const personalInfo = {
  name: 'Hari Prasath S',
  role: 'Backend Developer & Full Stack Engineer',
  secondaryRole: 'Computer Science Student & Video Editor',
  headline: 'Competitive programmer (600+ SkillRack) with strong foundation in Java Spring Boot, Autonomous Robotics, and Creative Video Production.',
  bio: `Aspiring Backend Developer and B.Tech Computer Science student with a strong interest in building scalable, reliable, and user-friendly applications. Passionate about problem-solving, competitive coding, public speaking, and exploring modern technologies through hands-on engineering projects.`,
  detailedBio: [
    `I am a Computer Science and Engineering student at Sri Eshwar College of Engineering (Sri Eshwar Institute of Technology). My core technical competencies lie in backend architecture, robust RESTful APIs, relational databases, and autonomous hardware-software systems.`,
    `I actively sharpen my algorithmic thinking through disciplined competitive programming, having solved over 600+ problems on SkillRack alongside continuous practice on LeetCode and HackerRank.`,
    `Beyond code, I am an active public speaker and student coordinator. I debuted at 'The Podium – Episode 04' delivering spontaneous table-topic speeches and coordinated inter-departmental college cultural events. Additionally, I work as a professional video editor for ISSai Technology and IDC Media.`,
  ],
  education: {
    institution: 'Sri Eshwar College of Engineering (SECE)',
    secondaryInstitution: 'Sri Eshwar Institute of Technology',
    degree: 'Bachelor of Engineering (B.E.)',
    major: 'Computer Science and Engineering',
    status: 'B.E. Computer Science (2025 – 2029)',
    location: 'Coimbatore, Tamil Nadu, India',
    period: '2025 – 2029',
    schooling: [
      { name: 'Veveham Matric Higher Secondary School', level: 'HSLC (Higher Secondary)', period: '2022 – 2023' },
      { name: 'Veveham Matric Higher Secondary School', level: 'SSLC (Secondary School)', period: '2024 – 2025' },
    ],
    highlights: [
      'Core focus on Data Structures & Algorithms, Object-Oriented Programming (Java/C++), and Database Design',
      'Academic Champion at Sri Eshwar College',
      'Active participant in coding challenges, hackathons, and innovation cell project teams',
    ],
  },
  contact: {
    phone: '',
    formattedPhone: '',
    email: 'irah208prasath@gmail.com',
    collegeEmail: 'hariprasath.s2025cse@sece.ac.in',
    github: 'https://github.com/hariprasath-tech',
    githubUsername: 'hariprasath-tech',
    linkedin: 'https://www.linkedin.com/in/hari-prasath-b47a38359/',
    linkedinUsername: 'hari-prasath-b47a38359',
    location: 'Coimbatore, Tamil Nadu, India',
    availabilityNotice: 'Open to Software Developer Roles, Internships & Freelance Projects',
  },
  competitiveStats: [
    { platform: 'SkillRack', count: '600+', label: 'Problems Solved', highlight: 'Top Performer' },
    { platform: 'LeetCode', count: '35+', label: 'Problems Solved', highlight: 'DSA Practice' },
    { platform: 'HackerRank', count: '30+', label: 'Problems Solved', highlight: 'Problem Solving' },
    { platform: 'CodeChef', count: 'Active', label: 'Contest Practice', highlight: 'Competitive' },
  ],
}

export const initialProjects: Project[] = [
  {
    id: 'cococut-rover',
    title: 'CocoCut – Autonomous Coconut Frond Cutting Rover',
    tagline: 'Autonomous agricultural rover engineered to clear fallen coconut fronds with offline ML & companion mobile app',
    description:
      'An autonomous agricultural automation rover designed to detect and cut fallen dry and green coconut fronds between trees, built as a real hardware product integrated with a companion mobile app.',
    categories: ['Robotics', 'Autonomous Rover', 'IoT', 'Machine Learning'],
    technologies: ['Raspberry Pi', 'Python', 'Computer Vision (Offline ML)', 'Obstacle Sensors', 'GPS', 'Bluetooth', 'Mobile App'],
    status: 'In Active Development',
    accentColor: '#10b981',
    image: 'cococut',
    problemStatement:
      'Coconut plantation maintenance is labor-intensive and hazardous. Heavy fallen fronds block navigation, harbor pests, and manual clearing requires significant agricultural labor in challenging farm terrain.',
    proposedSolution:
      'A rugged ground rover controlled by a Raspberry Pi with onboard camera running offline ML frond detection, 360° proximity obstacle avoidance sensors, GPS boundary marking, and a low-latency companion mobile app.',
    architecture: [
      'Raspberry Pi central compute unit running offline machine learning detection pipeline',
      'On-rover optical camera identifying dry vs green frond boundaries',
      'Surround obstacle sensing array preventing collisions with trees and uneven terrain',
      'Dual communication link: Wi-Fi telemetry for live camera feed and Bluetooth fallback for manual override',
      'Emergency hardware and software STOP commands with geofenced GPS boundaries',
    ],
    personalContribution: [
      'Formulated the overall autonomous rover architecture and companion mobile app specification',
      'Designed sensor integration logic for obstacle avoidance and tree-to-tree spacing calculations',
      'Developed emergency stop safety protocol and Bluetooth manual driving control fallback',
    ],
    implementationDetails: [
      'Benchmarking edge detection models on Raspberry Pi for real-time field performance without internet',
      'Prototyping mobile application UI for camera streaming and distance telemetry',
      'Field-testing mechanical cutting actuator response cycles',
    ],
    featured: true,
  },
  {
    id: 'ev-charging-camera',
    title: 'EV Charging & Surveillance Camera Network',
    tagline: 'Scalable smart light pole management web application with EV charging telemetry and camera monitoring',
    description:
      'A full-stack enterprise web application built in Java Spring Boot to monitor and manage distributed smart city light poles equipped with EV vehicle charging stations and surveillance camera feeds.',
    categories: ['Backend', 'Spring Boot', 'MySQL', 'Full Stack'],
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Maven', 'REST APIs', 'HTML5', 'CSS3', 'JavaScript'],
    status: 'In Active Development',
    accentColor: '#38bdf8',
    image: 'evcharging',
    problemStatement:
      'Municipalities and campus managers lack a unified, scalable system to monitor distributed smart poles, verify charging station electrical loads, audit user charging sessions, and inspect camera connectivity.',
    proposedSolution:
      'A layered Java Spring Boot web application with Spring Data JPA and MySQL, providing structured REST endpoints, strict input validation, real-time pole telemetry records, and an intuitive administrative interface.',
    architecture: [
      'Layered Maven project architecture with clean Controller-Service-Repository separation',
      'Spring Boot REST API gateway with robust schema validation and exception handling',
      'Spring Data JPA object-relational mapping to normalized MySQL database tables',
      'Responsive web dashboard displaying charging station availability and camera statuses',
    ],
    personalContribution: [
      'Designed relational database schema in MySQL for smart poles, charging sessions, and telemetry logs',
      'Implemented Spring Boot service business logic, data persistence entities, and input validation',
      'Created frontend HTML/CSS/JavaScript views for interacting with the backend REST endpoints',
    ],
    implementationDetails: [
      'Configured Maven dependencies, JPA repositories, and transaction isolation levels',
      'Built automated input sanity checks preventing duplicate charging transactions',
      'Tested REST API responses and data integrity under concurrent mock station requests',
    ],
    featured: true,
  },
  {
    id: 'cybersentinel-ai',
    title: 'CyberSentinel AI',
    tagline: 'Predictive network anomaly forecasting and threat classification using machine learning',
    description:
      'An AI-driven network security project focused on forecasting potential network attacks using traffic flow analysis, statistical feature extraction, and machine learning classifiers.',
    categories: ['AI', 'Machine Learning', 'Cybersecurity'],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Traffic Flow Analysis'],
    status: 'Concept & Prototype',
    accentColor: '#818cf8',
    image: 'cybersentinel',
    problemStatement:
      'Traditional perimeter firewalls rely on static signatures and miss zero-day anomalies or distributed subtle probe patterns before intrusion occurs.',
    proposedSolution:
      'An automated machine learning telemetry pipeline trained on network flow metadata and timing discrepancies to forecast attack probabilities.',
    architecture: [
      'Packet metadata parser converting traffic metrics into normalized feature vectors',
      'Random Forest and Gradient Boosting classification pipeline',
      'Real-time threat confidence alert generation system',
    ],
    personalContribution: [
      'Wrote data preprocessing routines in Python with Pandas and NumPy',
      'Evaluated precision/recall curves for low false-positive threat detection',
    ],
    implementationDetails: [
      'Implemented confusion matrix evaluations and hyperparameter optimization scripts',
    ],
    featured: true,
  },
  {
    id: 'localkart-commerce',
    title: 'LocalKart / Namma-Mart',
    tagline: 'Full-stack hyper-local multi-vendor commerce platform with RESTful services',
    description:
      'A full-stack local commerce platform concept integrating modern frontend architecture, resilient backend REST services, and database persistence.',
    categories: ['Full Stack', 'React', 'Node.js', 'Databases'],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Tailwind CSS'],
    status: 'In Active Development',
    accentColor: '#f59e0b',
    image: 'localkart',
    problemStatement:
      'Neighborhood merchants lack simple digital storefronts with real-time stock availability, local delivery radius control, and fair order processing.',
    proposedSolution:
      'A modular multi-vendor marketplace connecting consumers with neighborhood grocery and retail shops with reactive cart management.',
    architecture: [
      'Modular React + TypeScript client with optimistic UI updates',
      'RESTful API gateway with token-based authentication and route protection',
      'Relational database schema modeling merchants, inventory SKUs, and orders',
    ],
    personalContribution: [
      'Built reactive frontend components with TypeScript interfaces matching backend models',
      'Developed core REST controller endpoints for product querying and cart persistence',
    ],
    implementationDetails: [
      'Configured form validation using Zod and React Hook Form',
    ],
    featured: true,
  },
]

export const initialSpeaking: SpeakingEngagement[] = [
  {
    id: 'speaking-the-podium-01',
    title: 'The Podium – A Public Speaking Initiative | Episode 04',
    event: 'The Podium · Conducted on 08 July 2026',
    description:
      'Delivered a first-time impromptu table-topic speech in front of an audience of peers and mentors across different departments. Cultivated spontaneous speaking confidence, vocal clarity, and live idea articulation.',
    duration: 'Live Session Video (Part 1)',
    date: '08 July 2026',
    localVideoUrl: '/videos/public-speaking/the-podium-speech-01.mp4',
    isPlaceholder: false,
    topics: ['Public Speaking', 'Spontaneous Thinking', 'Confidence', 'The Podium'],
  },
  {
    id: 'speaking-the-podium-02',
    title: 'The Podium – Impromptu Table Topic Presentation (Part 2)',
    event: 'The Podium · Conducted on 08 July 2026',
    description:
      'Continued impromptu speech addressing impromptu audience prompts with structured reasoning, voice modulation, and audience engagement.',
    duration: 'Live Session Video (Part 2)',
    date: '08 July 2026',
    localVideoUrl: '/videos/public-speaking/the-podium-speech-02.mp4',
    isPlaceholder: false,
    topics: ['Public Speaking', 'Communication', 'Audience Engagement'],
  },
  {
    id: 'speaking-03',
    title: 'Autonomous Agricultural Rovers & Edge ML (CocoCut Architecture)',
    event: 'College Technical Symposium & Innovation Showcase',
    description:
      'Presented the engineering system behind autonomous rover frond cutting, detailing Raspberry Pi camera processing, offline ML inference, and Bluetooth safety controls.',
    duration: '15 mins',
    date: '2025 / 2026',
    isPlaceholder: true,
    topics: ['Robotics', 'Raspberry Pi', 'Edge ML'],
  },
]

export const initialAchievements: AchievementItem[] = [
  {
    id: 'achieve-cultural-coord',
    title: 'Student Coordinator – Inter-Department Cultural Event',
    organization: 'Sri Eshwar College Student Council',
    category: 'Cultural Coordination',
    period: 'Event Coordinator',
    description:
      'Served as Student Coordinator for the inter-departmental college cultural event. Contributed to event planning, schedule execution, stage management, team coordination, and behind-the-scenes logistics alongside fellow student coordinators.',
    verified: true,
    tags: ['Leadership', 'Event Management', 'Team Coordination', 'Collaboration'],
  },
  {
    id: 'achieve-the-podium',
    title: 'Table-Topic Speaker – The Podium (Episode 04)',
    organization: 'The Podium Public Speaking Initiative',
    category: 'Public Speaking',
    period: '08 July 2026',
    description:
      'Delivered a first-time table-topic speech before an audience of students from different engineering departments, demonstrating spontaneous thinking, poise, and structured communication.',
    verified: true,
    tags: ['Public Speaking', 'The Podium', 'Communication', 'Confidence'],
  },
  {
    id: 'achieve-01',
    title: 'Top Performer – MIT APP Project Contest',
    organization: 'MIT APP Project Contest',
    category: 'Hackathon',
    period: '2025',
    description:
      'Awarded Top Performer recognition for designing and demonstrating an innovative application prototype with practical real-world impact.',
    verified: true,
    tags: ['Top Performer', 'Project Contest', 'Innovation', 'Prototyping'],
  },
  {
    id: 'achieve-02',
    title: 'Academic Champion – Sri Eshwar College',
    organization: 'Sri Eshwar College of Engineering',
    category: 'College Technical Activity',
    period: 'Academic Distinction',
    description:
      'Recognized as Academic Champion for outstanding academic performance, engineering coursework mastery, and departmental excellence.',
    verified: true,
    tags: ['Academic Champion', 'SECE', 'Engineering Excellence'],
  },
  {
    id: 'achieve-03',
    title: 'Competitive Coding Milestone: 600+ Problems on SkillRack',
    organization: 'SkillRack & Competitive Coding Platforms',
    category: 'Project Demonstration',
    period: 'Continuous Practice',
    description:
      'Solved 600+ algorithmic and coding challenges on SkillRack, alongside 35+ on LeetCode and 30+ on HackerRank, demonstrating strong consistency and problem-solving velocity.',
    verified: true,
    tags: ['600+ Solved', 'SkillRack', 'LeetCode', 'HackerRank', 'DSA'],
  },
  {
    id: 'achieve-04',
    title: 'Youth for Climate Action Contributor',
    organization: 'Youth for Climate Action Initiative',
    category: 'Team Collaboration',
    period: 'Initiative Participant',
    description:
      'Actively participated in Youth for Climate Action initiatives, promoting environmental awareness, clean tech applications, and sustainable community solutions.',
    verified: true,
    tags: ['Climate Action', 'Sustainability', 'Youth Leadership'],
  },
  {
    id: 'achieve-05',
    title: 'Certified in C Programming',
    organization: 'Technical Certification Authority',
    category: 'Technical Leadership',
    period: 'Certified',
    description:
      'Earned formal certification in C Programming, validating expertise in pointers, low-level memory handling, data structures, and procedural algorithm implementation.',
    verified: true,
    tags: ['C Certification', 'Memory Management', 'Algorithms'],
  },
]

export const videoEditingProjects: VideoEditingProject[] = [
  {
    id: 've-01',
    title: 'Commercial Brand & Product Promotion Video',
    client: 'ISSai Technology',
    type: 'Promotional Video',
    tool: 'CapCut / Professional Suite',
    videoUrl: '/videos/video-editing/1A.mp4',
    description: 'Dynamic pacing, custom transitions, color correction, and audio mastering for enterprise promotional media.',
    tags: ['Promotional', 'Pacing', 'Brand Asset'],
  },
  {
    id: 've-02',
    title: 'Social Media Content & Influencer Edit',
    client: 'IDC Media / Client Showcase',
    type: 'Social Media Reel',
    tool: 'CapCut',
    videoUrl: '/videos/video-editing/600 rs Edit.mp4',
    description: 'High-retention reel editing with motion graphics, captions, sound effects, and kinetic typography.',
    tags: ['Social Media', 'Motion Graphics', 'Short Form'],
  },
  {
    id: 've-03',
    title: 'Event & Creative Video Production',
    client: 'Freelance Client Project',
    type: 'Creative Edit',
    tool: 'CapCut',
    videoUrl: '/videos/video-editing/2500.mp4',
    description: 'Full-length creative video project combining beat-synced cuts, visual effects, and cinematic color grading.',
    tags: ['Cinematic', 'Beat Sync', 'Creative'],
  },
]

export const initialSkills: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    tagline: 'Core languages for algorithm design, data structures, and competitive problem solving',
    icon: 'Code2',
    skills: [
      { name: 'Python', category: 'Programming', verified: true, description: 'Scripting, Automation, ML prototyping, Scikit-learn, Data analysis with Pandas/NumPy' },
      { name: 'C', category: 'Programming', verified: true, description: 'Certified in C, Low-level pointers, Memory management, Algorithm implementation' },
      { name: 'Java', category: 'Programming', verified: true, description: 'OOP, Collections framework, Spring Boot backend development, Exception handling' },
    ],
  },
  {
    id: 'technologies-frameworks',
    title: 'Frameworks & Web Stack',
    tagline: 'Backend enterprise frameworks, RESTful services, and modern responsive frontends',
    icon: 'Globe',
    skills: [
      { name: 'Spring Boot', category: 'Frameworks', verified: true, description: 'Spring Data JPA, RESTful API controllers, Layered Maven architecture' },
      { name: 'React', category: 'Web Stack', verified: true, description: 'Modern functional components, Hooks, State management, Component lifecycle' },
      { name: 'JavaScript & TypeScript', category: 'Web Stack', verified: true, description: 'ES6+ async/await, DOM APIs, Strict type contracts and interfaces' },
      { name: 'HTML5 & CSS3', category: 'Web Stack', verified: true, description: 'Semantic markup, Tailwind CSS, Responsive Flexbox & Grid layouts' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    tagline: 'Relational data modeling, schema design, and query optimization',
    icon: 'Database',
    skills: [
      { name: 'MySQL', category: 'Databases', verified: true, description: 'Relational schemas, Joins, Primary/Foreign keys, ACID transactions, JPA mapping' },
      { name: 'MongoDB', category: 'Databases', verified: true, description: 'Document schemas, Collections, CRUD operations, BSON structures' },
    ],
  },
  {
    id: 'competitive-tools',
    title: 'Coding Platforms & Tools',
    tagline: 'Competitive programming platforms, version control, and developer environments',
    icon: 'Wrench',
    skills: [
      { name: 'SkillRack (600+ Solved)', category: 'Platforms', verified: true, description: 'Extensive algorithmic problem solving, daily coding tracks' },
      { name: 'LeetCode (35+ Solved)', category: 'Platforms', verified: true, description: 'Data structures, two pointers, arrays, strings, math' },
      { name: 'HackerRank & CodeChef', category: 'Platforms', verified: true, description: 'Problem solving badges, algorithmic challenges' },
      { name: 'GitHub & Git', category: 'Tools', verified: true, description: 'Version control, repositories, pull requests, commit hygiene' },
      { name: 'VS Code', category: 'Tools', verified: true, description: 'Full-stack development, debugging configurations, extensions' },
    ],
  },
  {
    id: 'core-creative',
    title: 'Core CS Concepts & Video Editing',
    tagline: 'Computer science fundamentals and professional digital media production',
    icon: 'Cpu',
    skills: [
      { name: 'Data Structures & Algorithms (Basics)', category: 'Core', verified: true, description: 'Arrays, Linked Lists, Stacks, Queues, Searching, Sorting' },
      { name: 'Design & Analysis of Algorithms (DAA)', category: 'Core', verified: true, description: 'Time & space complexity, Greedy techniques, Divide & Conquer' },
      { name: 'Video Editing (CapCut)', category: 'Creative', verified: true, description: 'Part-time Video Editor at ISSai Technology & IDC Media; Freelance promotional video editor' },
      { name: 'Photo Editing & Poster Design', category: 'Creative', verified: true, description: 'Technical event posters, visual branding, social media assets' },
    ],
  },
]

export const aboutHighlights = [
  {
    title: 'Backend & Enterprise Java',
    subtitle: 'Spring Boot & MySQL',
    description: 'Layered Maven architectures, Spring Data JPA repositories, RESTful service contracts, and robust schema modeling.',
    icon: 'Server',
  },
  {
    title: 'Competitive Problem Solver',
    subtitle: '600+ SkillRack Solved',
    description: 'Disciplined algorithmic problem solver with 600+ challenges on SkillRack, 35+ on LeetCode, and 30+ on HackerRank.',
    icon: 'Trophy',
  },
  {
    title: 'Autonomous Robotics Prototyper',
    subtitle: 'CocoCut Rover Architect',
    description: 'Hands-on hardware-software developer integrating Raspberry Pi, offline ML computer vision, and sensors for agricultural rovers.',
    icon: 'Bot',
  },
  {
    title: 'Public Speaker & Event Leader',
    subtitle: 'The Podium & Cultural Coordinator',
    description: 'Table-topic speaker at The Podium Episode 04 and Student Coordinator for inter-departmental college cultural events.',
    icon: 'Mic',
  },
]
