// ============================================
// PROFILE DATA — Replace image paths in public/images/
// ============================================

export const profileImage = "/images/photo.png";

export const personalInfo = {
  name: "Omar Abdelazim",
  role: "Flutter Developer / Software Engineer",
  headline: "Building Cross-Platform Mobile Experiences That Matter.",
  description:
    "Flutter Developer with hands-on experience building scalable, user-focused cross-platform mobile applications using Flutter and Firebase. Experienced in integrating APIs, databases, and IoT systems while ensuring high performance and seamless user experiences. Proven ability to lead and mentor development teams through IEEE initiatives and open-source projects.",
  email: "abdelazimomar2@gmail.com",
  phone: "+201090073064",
  cvLink: "https://drive.google.com/file/d/1kR7G2iTrPvvZijrO_HLN4w4wwC5PWYuu/view?usp=sharing", // Replace with your CV link when ready
  availability: "Available for new opportunities",
  yearsExperience: "2+",
  productionApps: "7",
  githubCommits: "100+",
  certificationsCount: "9",
};

// ============================================
// NAVIGATION
// ============================================

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

// ============================================
// SOCIAL LINKS
// ============================================

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/Omar-A-Abdelazim",
  github: "https://github.com/Omar-A-Abdelazim",
  whatsapp: "https://wa.me/201090073064",
};

// ============================================
// EXPERIENCE
// ============================================

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "1",
    company: "IEEE ManCSC",
    location: "Dakahlia, Egypt",
    role: "Flutter Supervisor",
    period: "Jan 2026 – Present",
    bullets: [
      "Mentoring and guiding members through real-world mobile app projects.",
      "Reviewing code, improving best practices, and ensuring high-quality deliverables.",
      "Supporting team members in problem-solving and technical growth.",
    ],
  },
  {
    id: "2",
    company: "The Quest Career – Mansoura",
    location: "Mansoura, Egypt",
    role: "Project Manager",
    period: "Mar 2026 – Apr 2026",
    bullets: [
      "Led planning and execution of one of the largest women-focused career events in Mansoura.",
      "Managed cross-functional teams (logistics, marketing, content, partnerships).",
      "Coordinated with high-profile speakers to deliver impactful career-growth sessions.",
    ],
  },
  {
    id: "3",
    company: "IEEE VICTORIES 4",
    location: "Egypt",
    role: "Flutter Mentor",
    period: "Aug 2025 – Sep 2025",
    bullets: [
      "Mentored participants in Flutter development for competition projects.",
      "Provided technical guidance and reviewed code for competing teams.",
    ],
  },
  {
    id: "4",
    company: "Open Source Project – IEEE Man",
    location: "Egypt",
    role: "Flutter Developer",
    period: "Jul 2025 – Aug 2025",
    bullets: [
      "Developed a mobile app as an informational hub for the IEEE Mansoura team.",
      "Collaborated on responsive design and smooth user experience.",
    ],
  },
  {
    id: "5",
    company: "Medix & The British University in Egypt",
    location: "Egypt",
    role: "AI Intern",
    period: "Aug 2025",
    bullets: [
      "Completed intensive training in supervised, unsupervised, and reinforcement learning.",
      "Built and evaluated AI models for classification, regression, and clustering using Python (Pandas, Matplotlib).",
    ],
  },
];

// ============================================
// EDUCATION
// ============================================

export const education = {
  institution: "Delta University, Egypt",
  degree: "Bachelor's Degree, Communications and Electronics Engineering",
  period: "Sep 2023 – Jun 2028",
  location: "Dakahlia, Egypt",
  gpa: "3.62 / 4.0 (B+)",
  logo: "/images/DeltaLogo.png",
  tags: [
    "Programming Fundamentals",
    "Mobile App Development",
    "Flutter",
    "Communications Engineering",
  ],
};

// ============================================
// PROJECTS
// ============================================

export interface Project {
  id: string;
  title: string;
  status: "Production" | "Under Development" | "Coming Soon";
  problem: string;
  solution: string;
  image: string;
  tech: string[];
  links: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AmpX – Smart Battery Monitoring & Charging App",
    status: "Production",
    problem:
      "Users lacked real-time visibility into EV/battery performance and nearby charging options.",
    solution:
      "Built a Flutter app connected to IoT hardware (ESP) with Firebase Realtime Database for live battery monitoring, a map-based charging station locator, and transaction/savings analytics.",
    image: "/images/ampx.png",
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "ESP Integration",
      "Google Maps",
      "Realtime Database",
      "GPS",
      "IoT",
      "Provider",
    ],
    links: [],
  },
  {
    id: "2",
    title: "Shifaa Bridge – Smart Medicine Marketplace",
    status: "Production",
    problem:
      "Pharmacies had no efficient way to sell near-expiry medication, and users lacked smart recommendations.",
    solution:
      "Developed an AI-powered marketplace connecting pharmacies and users, using the Gemini API for dynamic pricing suggestions, a behavior-based recommendation system, a credit-reward system, and pharmacy verification via document/image validation.",
    image: "/images/shefaa.png",
    tech: [
      "Flutter",
      "Dart",
      "Gemini API",
      "REST APIs",
      "Firebase",
      "AI",
      "Image Validation",
      "Provider",
      "CRUD",
    ],
    links: [],
  },
  {
    id: "3",
    title: "Expenzo – Expense Tracker",
    status: "Production",
    problem:
      "Users needed a reliable offline-first way to track personal expenses.",
    solution:
      "Built a Flutter app with a local SQLite database, full CRUD operations, and a Figma-to-app UI integration, with persistent data across sessions.",
    image: "/images/expenzo.png",
    tech: [
      "Flutter",
      "Dart",
      "SQLite",
      "Figma",
      "Local Storage",
      "CRUD",
      "Provider",
      "UI/UX",
    ],
    links: [],
  },
  {
    id: "4",
    title: "Evently – Event Management App",
    status: "Production",
    problem:
      "Users needed a bilingual event management app with seamless authentication, real-time updates, and personalized favorites.",
    solution:
      "Built a Flutter app with Firebase Auth (Email/Password + Google Sign-In), Firestore for real-time event CRUD operations, category filtering, a favorites system, and full Arabic/English localization with light/dark theme support.",
    image: "/images/evently.png",
    tech: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Firebase Firestore",
      "Google Sign-In",
      "Provider",
      "Intl",
      "Localization",
      "Theme Support",
      "CRUD",
    ],
    links: [],
  },
  {
    id: "5",
    title: "Hungry – Restaurant Food Ordering App",
    status: "Production",
    problem:
      "Users needed an easy way to browse and order a variety of sandwiches and restaurant meals from a live menu.",
    solution:
      "Developed a Flutter app that fetches restaurant menu data (sandwiches and meals) from a live API, with a clean browsing and ordering experience.",
    image: "/images/hungry.png",
    tech: [
      "Flutter",
      "Dart",
      "REST API",
      "Provider",
      "JSON",
      "HTTP",
      "UI/UX",
    ],
    links: [],
  },
  
];

// ============================================
// SKILLS
// ============================================

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Development",
    icon: "📱",
    skills: [
      "Flutter",
      "Dart",
      "State Management",
      "Navigation",
      "CRUD Operations",
      "Local Storage (Sqflite)",
    ],
  },
  {
    title: "Languages",
    icon: "💻",
    skills: ["Dart", "JavaScript", "HTML5", "CSS3", "C++", "Python"],
  },
  {
    title: "Backend & Database",
    icon: "🔥",
    skills: [
      "Firebase (Auth, Firestore, Storage)",
      "SQLite",
      "REST APIs",
    ],
  },
  {
    title: "UI/UX",
    icon: "🎨",
    skills: ["Figma", "UI/UX Design Integration", "Responsive Design"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Android Studio"],
  },
  {
    title: "Core Skills",
    icon: "🧠",
    skills: [
      "Problem Solving",
      "Data Structures",
      "Algorithms",
      "Debugging",
      "Team Mentoring",
    ],
  },
];

// ============================================
// CERTIFICATES — Empty for now, add later
// ============================================

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: string;
  period: string;
  duration: string;
  image: string;
  link: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Flutter Development Course",
    issuer: "Sprints",
    category: "Mobile Development",
    period: "Jan 2025",
    duration: "40 Hours",
    image: "/images/certi1.png",
    link: "https://www.linkedin.com/posts/omar-a-abdelazim_flutter-mobiledevelopment-sprints-activity-7344031407964352513-50BN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEhZ3sgBr-4MtgCmMkpMdjAPmtbjs0oFA6Q", // Replace with actual certificate link
  },
  {
    id: "2",
    title: "AI Internship",
    issuer: "Medix",
    category: "Introduction to AI",
    period: "Jan 2025",
    duration: "15 Hours",
    image: "/images/certi2.png",
    link: "https://www.linkedin.com/posts/omar-a-abdelazim_artificialintelligence-machinelearning-generativeai-activity-7367402594316468224-fr1b?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEhZ3sgBr-4MtgCmMkpMdjAPmtbjs0oFA6Q", // Replace with actual certificate link
  }
  ,
  {
    id: "3",
    title: "Nasa Space Apps",
    issuer: "Nasa",
    category: "Competitions",
    period: "Oct 2024",
    duration: "48 Hours",
    image: "/images/nasa.png",
    link: "https://www.linkedin.com/posts/omar-a-abdelazim_nasa-spaceappscairo-hackathon-activity-7297717693615366145-BGkh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEhZ3sgBr-4MtgCmMkpMdjAPmtbjs0oFA6Q", // Replace with actual certificate link
  },
  {
    id: "4",
    title: "Ideation Camp",
    issuer: "Creativa",
    category: "Business",
    period: "Dec 2024",
    duration: "36 Hours",
    image: "/images/certi3.png",
    link: "https://www.linkedin.com/posts/omar-a-abdelazim_innovation-creativa-mansoura-activity-7246197849351147520-KHhC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEhZ3sgBr-4MtgCmMkpMdjAPmtbjs0oFA6Q",
  },
];

// ============================================
// CONTACT
// ============================================

export const contactInfo = [
  {
    label: "Email Me",
    sublabel: "I usually respond within 24 hours",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: "Mail",
  },
  {
    label: "Call Me",
    sublabel: "Available for meetings and calls",
    value: personalInfo.phone,
    href: `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`,
    icon: "Phone",
  },
  {
    label: "LinkedIn",
    sublabel: "Connect and follow my journey",
    value: "View Profile",
    href: socialLinks.linkedin,
    icon: "Linkedin",
  },
  {
    label: "GitHub",
    sublabel: "Check out my latest projects",
    value: "View Code",
    href: socialLinks.github,
    icon: "Github",
  },
];