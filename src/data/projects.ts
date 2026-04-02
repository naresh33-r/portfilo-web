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
    title: "AI DeepFake Detector",
    description: "An AI-based system that detects deepfake audio by analyzing spectral features and temporal patterns to identify inconsistencies in synthesized speech.",
    longDescription: "A comprehensive e-commerce solution built with React and Node.js featuring user authentication, product catalog, shopping cart, Stripe payment integration, and admin dashboard for inventory management.",
    techStack: ["React.js", "Python", "flask",  "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "public/IMG-20250510-WA0013.jpg",
  },
  {
    id: "2",
    title: "Queue Management ",
    description: "A web-based application that streamlines customer flow by enabling digital token generation, real-time queue tracking, and efficient service management. features.",
    longDescription: "A web-based application that streamlines customer flow by enabling digital token generation, real-time queue tracking, and efficient service management. features.",
    techStack: ["Java", "Spring Boot", "RESTAPIs", "Html", "SQL"],
    github: "https://github.com/naresh33-r/Queue-Management",
    demo: "https://queue-two.vercel.app/",
    image: "public/queue_img.jpeg",
  },
  {
    id: "3",
    title: "Family Event Reminder System",
    description: "Family Event Reminder System is a web-based application designed to help families manage and track important events such as birthdays, anniversaries, and special occasions.",
    longDescription: "An application that allows families to set reminders for important events, view upcoming events in a calendar format, and receive notifications via email or SMS.",
    techStack: ["Java", "Spring Boot", "RESTAPIs", "Html", "SQL"],
    github: "https://github.com/naresh33-r/Family-Event-Reminder",
    demo: "https://family-event-reminder-3mot.vercel.app",
    image: "/placeholder.svg",
  },
  
  
];
