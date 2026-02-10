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
    image: "E:\\portfolio\\naresh448\\IMG-20250510-WA0013.jpg",
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
    title: "Family Event Reminder System",
    description: "Family Event Reminder System is a web-based application designed to help families manage and track important events such as birthdays, anniversaries, and special occasions.",
    longDescription: "An application that allows families to set reminders for important events, view upcoming events in a calendar format, and receive notifications via email or SMS.",
    techStack: ["Java", "Spring Boot", "RESTAPIs", "Html", "SQL"],
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
  
];
