export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 85, icon: "⚛️" },
      { name: "TypeScript", level: 80, icon: "📘" },
      { name: "HTML/CSS", level: 90, icon: "🎨" },
      { name: "Tailwind CSS", level: 85, icon: "💨" },
      { name: "Framer Motion", level: 70, icon: "✨" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75, icon: "🟢" },
      { name: "Java", level: 80, icon: "☕" },
      { name: "Python", level: 70, icon: "🐍" },
      { name: "Express.js", level: 72, icon: "🚀" },
      { name: "REST APIs", level: 85, icon: "🔗" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "PostgreSQL", level: 70, icon: "🐘" },
      { name: "MySQL", level: 72, icon: "🗄️" },
      { name: "Redis", level: 60, icon: "🔴" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 85, icon: "📦" },
      { name: "Docker", level: 65, icon: "🐳" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "Linux", level: 70, icon: "🐧" },
      { name: "Figma", level: 60, icon: "🎯" },
    ],
  },
];
