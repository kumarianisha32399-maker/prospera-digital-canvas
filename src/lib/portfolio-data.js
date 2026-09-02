import heroBanner from "../assets/hero-banner.jpg";
import aboutVisual from "../assets/about-visual.jpg";
import projectEcommerce from "../assets/project-ecommerce.jpg";
import projectPortfolio from "../assets/project-portfolio.jpg";
import projectDashboard from "../assets/project-dashboard.jpg";
import projectLanding from "../assets/project-landing.jpg";

export const STORAGE_KEY = "prospera-arcon-portfolio-v1";
export const AUTH_KEY = "prospera-arcon-admin-session";

export const ADMIN_CREDENTIALS = { username: "admin", password: "admin123" };

export const initialData = {
  hero: {
    badge: "TECHNICAL PORTFOLIO • PUNE",
    heading: "Building Digital Experiences With Clean Code & Creative Thinking",
    description:
      "Welcome to my digital space. This demo portfolio is a showcase of my technical skills, creative design experiments, and clean code implementation across various web applications.",
    primaryButton: "View My Work",
    secondaryButton: "Let's Connect",
    image: heroBanner,
    stats: [
      { id: "hs1", label: "Modern UI", value: "Design System Driven" },
      { id: "hs2", label: "Responsive Design", value: "Every Breakpoint" },
      { id: "hs3", label: "Clean Code", value: "Maintainable Components" },
      { id: "hs4", label: "Performance Focused", value: "Lightweight Builds" },
    ],
  },
  about: {
    heading: "A Portfolio Built as a Living Resume",
    description:
      "This website is a concept portfolio designed to demonstrate modern web development practices, responsive UI/UX, and seamless user experiences. Built as a living resume, it serves as a testing ground for integrating new technologies, optimizing site performance, and displaying interactive components.",
    image: aboutVisual,
    highlights: [
      "Component-driven React architecture with reusable building blocks",
      "Accessible, semantic markup with clear focus states",
      "Mobile-first responsive layouts across every section",
      "Frontend-only data layer using mock data and local persistence",
    ],
    stats: [
      { id: "as1", value: "20+", label: "Projects" },
      { id: "as2", value: "5+", label: "Years Learning & Building" },
      { id: "as3", value: "100%", label: "Responsive" },
      { id: "as4", value: "Always", label: "Continuous Innovation" },
    ],
  },
  skills: [
    { id: "sk1", title: "React Development", description: "Composable interfaces built with hooks, context and predictable state." },
    { id: "sk2", title: "Frontend Architecture", description: "Clear folder structure, shared primitives and consistent data flow." },
    { id: "sk3", title: "Responsive Web Design", description: "Fluid layouts that hold up from small phones to wide desktops." },
    { id: "sk4", title: "UI/UX Implementation", description: "Turning design intent into accurate, usable interfaces." },
    { id: "sk5", title: "JavaScript Development", description: "Modern ES syntax, clean utilities and readable logic." },
    { id: "sk6", title: "Performance Optimization", description: "Lean bundles, native lazy loading and efficient rendering." },
    { id: "sk7", title: "Component-Based Design", description: "Reusable, documented components instead of one-off markup." },
    { id: "sk8", title: "Interactive Web Experiences", description: "Considered motion, hover states and micro-interactions." },
    { id: "sk9", title: "Clean Code Practices", description: "Naming, structure and formatting that stay easy to maintain." },
  ],
  technologies: [
    { id: "t1", name: "HTML", category: "Markup", description: "Semantic structure and accessible document outlines." },
    { id: "t2", name: "CSS", category: "Styling", description: "Modern layout with flexbox, grid and custom properties." },
    { id: "t3", name: "JavaScript", category: "Language", description: "Application logic, state handling and interactivity." },
    { id: "t4", name: "React", category: "Framework", description: "Component-based UI with hooks and context." },
    { id: "t5", name: "Vite", category: "Tooling", description: "Fast dev server and optimized production builds." },
    { id: "t6", name: "Tailwind CSS", category: "Styling", description: "Utility-first styling driven by design tokens." },
    { id: "t7", name: "Git", category: "Workflow", description: "Version control with readable, incremental commits." },
    { id: "t8", name: "Responsive Design", category: "Practice", description: "Mobile-first layouts tested across breakpoints." },
  ],
  projects: [
    {
      id: "p1",
      title: "Modern E-Commerce Experience",
      category: "E-Commerce",
      description: "A responsive shopping experience focused on clean product discovery and intuitive navigation.",
      image: projectEcommerce,
      technologies: ["React", "Vite", "Tailwind CSS"],
      featured: true,
      status: "Completed",
      url: "#",
    },
    {
      id: "p2",
      title: "Business Portfolio Platform",
      category: "Corporate",
      description: "A modern professional website designed around strong visual hierarchy and responsive layouts.",
      image: projectPortfolio,
      technologies: ["React", "Tailwind CSS"],
      featured: true,
      status: "Completed",
      url: "#",
    },
    {
      id: "p3",
      title: "Interactive Dashboard Concept",
      category: "Dashboard",
      description: "A frontend dashboard concept demonstrating structured information architecture and interactive components.",
      image: projectDashboard,
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      featured: false,
      status: "In Progress",
      url: "#",
    },
    {
      id: "p4",
      title: "Creative Landing Page",
      category: "UI/UX",
      description: "A visually focused landing page concept built around modern responsive design.",
      image: projectLanding,
      technologies: ["HTML", "CSS", "JavaScript"],
      featured: false,
      status: "Concept",
      url: "#",
    },
  ],
  projectFilters: ["All", "Web Apps", "E-Commerce", "Dashboard", "Corporate", "UI/UX"],
  services: [
    { id: "sv1", icon: "</>", title: "Web Development", description: "Modern responsive web applications with clean and maintainable frontend architecture." },
    { id: "sv2", icon: "◧", title: "UI/UX Implementation", description: "Converting design concepts into polished, responsive user experiences." },
    { id: "sv3", icon: "★", title: "Portfolio Development", description: "Professional digital portfolios designed to showcase skills, projects and experience." },
    { id: "sv4", icon: "⚡", title: "Performance Optimization", description: "Improving frontend performance, responsiveness and overall usability." },
    { id: "sv5", icon: "▣", title: "Responsive Design", description: "Layouts optimized for desktop, tablet and mobile devices." },
    { id: "sv6", icon: "✦", title: "Creative Web Experiments", description: "Interactive concepts for testing new technologies and interface ideas." },
  ],
  experience: [
    { id: "e1", year: "2026", title: "Continuous Innovation", description: "Experimenting with modern frontend technologies and interactive experiences." },
    { id: "e2", year: "2025", title: "Advanced Web Projects", description: "Focused on responsive applications, reusable components and better UX." },
    { id: "e3", year: "2024", title: "Frontend Development", description: "Expanded expertise in modern JavaScript and component-based development." },
  ],
  whyChoose: [
    { id: "w1", title: "Clean Implementation", description: "Readable components, predictable state and no unnecessary dependencies." },
    { id: "w2", title: "Responsive First", description: "Layouts designed for mobile, then scaled up with intent." },
    { id: "w3", title: "Performance Focused", description: "Lightweight assets, native lazy loading and lean rendering." },
    { id: "w4", title: "Continuous Experimentation", description: "A living space for testing new interface and tooling ideas." },
  ],
  testimonials: [
    { id: "ts1", name: "Demo Client", role: "Product Lead (Demo)", content: "An impressive demonstration of modern frontend development and thoughtful UI design.", image: "" },
    { id: "ts2", name: "Demo Reviewer", role: "Design Consultant (Demo)", content: "Clear structure, strong hierarchy and a genuinely pleasant experience on mobile.", image: "" },
    { id: "ts3", name: "Demo Partner", role: "Startup Founder (Demo)", content: "The interface feels premium without being flashy, exactly right for a business portfolio.", image: "" },
  ],
  contact: {
    businessName: "Prospera Arcon LLP Pune",
    ownerName: "Vikesh Kantilal Chhajed",
    address:
      "F 8 Clover Pinnacle Ridge, S.No. 33/2/75, Kondhwa, Pune City, Pune, Maharashtra, India - 411048",
    phone: "+91 90350 92921",
    email: "support.prosperaarconllp.com",
    socials: [
      { id: "so1", label: "LinkedIn", url: "#" },
      { id: "so2", label: "GitHub", url: "#" },
      { id: "so3", label: "X", url: "#" },
      { id: "so4", label: "Dribbble", url: "#" },
    ],
  },
  settings: {
    siteTitle: "Prospera Arcon LLP Pune | Digital Portfolio",
    siteDescription:
      "A modern digital portfolio showcasing technical skills, creative web experiments, projects and responsive user experiences by Prospera Arcon LLP Pune.",
    footerCopyright: "© 2026 Prospera Arcon LLP Pune. All Rights Reserved.",
    accentColor: "cyan",
    demoMode: true,
  },
};
