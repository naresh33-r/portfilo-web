export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "1",
    title: "AI DeepFake Detector",
    description: "A deep dive into patterns and best practices for scaling React apps with proper state management and code splitting.",
    date: "2025-12-15",
    readTime: "8 min read",
    link: "#",
    tags: ["React", "Architecture"],
  },
  {
    id: "2",
    title: "Understanding TypeScript Generics",
    description: "Master TypeScript generics with practical examples — from basic constraints to advanced conditional types.",
    date: "2025-11-20",
    readTime: "6 min read",
    link: "#",
    tags: ["TypeScript", "Tutorial"],
  },
  {
    id: "3",
    title: "Getting Started with Three.js in React",
    description: "Learn how to create stunning 3D experiences in your React applications using React Three Fiber.",
    date: "2025-10-05",
    readTime: "10 min read",
    link: "#",
    tags: ["Three.js", "React", "3D"],
  },
  {
    id: "4",
    title: "Microservices vs Monolith: A Practical Guide",
    description: "When to choose microservices over monolithic architecture and the trade-offs involved.",
    date: "2025-09-12",
    readTime: "7 min read",
    link: "#",
    tags: ["Architecture", "Backend"],
  },
  {
    id: "5",
    title: "CSS Grid Mastery: Advanced Layouts",
    description: "Go beyond basic grids — learn subgrid, auto-placement algorithms, and responsive patterns without media queries.",
    date: "2025-08-28",
    readTime: "5 min read",
    link: "#",
    tags: ["CSS", "Frontend"],
  },
];
