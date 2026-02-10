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
     
      { name: "HTML", level: 90, icon: "🎨" },
      { name: "CSS", level: 85, icon: "💨" },
      { name: "JAVASCRIPT", level: 70, icon: "✨" },
    ],
  },
  {
    category: "Backend",
    skills: [
      
      { name: "JAVA", level: 80, icon: "☕" },
      { name: "REST APIs", level: 85, icon: "🔗" },
      { name: "SPRING BOOT", level: 75, icon: "🌱" }
    ],
  },
  {
    category: "Database",
    skills: [
     
      { name: "MySQL", level: 72, icon: "🗄️" }
     
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 85, icon: "📦" },
      { name: "Postman", level: 65, icon: "🐳" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "Intellij", level: 70, icon: "🐧" },
      
    ],
  },
];
