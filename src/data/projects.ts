export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  github: string;
  demo: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with payment integration and real-time inventory management.",
    longDescription: "A comprehensive e-commerce solution built with React and Node.js featuring user authentication, product catalog, shopping cart, Stripe payment integration, and admin dashboard for inventory management.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team features.",
    longDescription: "A Kanban-style project management application with drag-and-drop functionality, real-time WebSocket updates, team collaboration features, and analytics dashboard.",
    techStack: ["React", "TypeScript", "Firebase", "Framer Motion"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "AI Chat Assistant",
    description: "Intelligent chatbot with NLP capabilities and context-aware responses.",
    longDescription: "An AI-powered chat assistant leveraging OpenAI API with conversation memory, multi-turn dialogue support, and a modern, responsive chat interface.",
    techStack: ["Python", "FastAPI", "React", "OpenAI", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media performance across platforms.",
    longDescription: "A data visualization dashboard aggregating social media metrics from multiple platforms with interactive charts, scheduled reporting, and export functionality.",
    techStack: ["React", "D3.js", "Express", "Redis", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    title: "Weather Forecast App",
    description: "Beautiful weather application with location-based forecasts and interactive maps.",
    longDescription: "A feature-rich weather application with 7-day forecasts, interactive radar maps, severe weather alerts, and location-based automatic detection using modern APIs.",
    techStack: ["React Native", "TypeScript", "REST API", "Mapbox"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/placeholder.svg",
  },
  {
    id: "6",
    title: "Portfolio CMS",
    description: "Headless CMS for managing portfolio content with a visual editor.",
    longDescription: "A custom content management system designed for developer portfolios with markdown support, media management, SEO optimization, and deployment automation.",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Vercel"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/placeholder.svg",
  },
  {
    id: "7",
    title: "Fitness Tracker",
    description: "Personal fitness tracking application with workout logging and progress charts.",
    longDescription: "A comprehensive fitness tracker with exercise library, custom workout builder, progress tracking with charts, calorie counting, and social sharing features.",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js", "PWA"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/placeholder.svg",
  },
];
