import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { skillCategories } from "@/data/skills";

const CircularProgress = ({ level, size = 80 }: { level: number; size?: number }) => {
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="hsl(var(--muted))" strokeWidth={strokeWidth} />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="url(#gradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--neon-purple))" />
          <stop offset="50%" stopColor="hsl(var(--neon-blue))" />
          <stop offset="100%" stopColor="hsl(var(--neon-cyan))" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Skills = () => {
  return (
    <PageTransition type="slideRight">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="section-heading">Skills</h1>
              <p className="section-subheading mx-auto">Technologies and tools I work with.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((cat, ci) => (
              <ScrollReveal key={cat.category} delay={ci * 0.1}>
                <div className="glass rounded-2xl p-6 gradient-border h-full">
                  <h2 className="text-xl font-semibold text-foreground mb-6">{cat.category}</h2>
                  <div className="space-y-5">
                    {cat.skills.map((skill, si) => (
                      <motion.div
                        key={skill.name}
                        className="flex items-center gap-4 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: si * 0.08 }}
                      >
                        <div className="relative flex-shrink-0">
                          <CircularProgress level={skill.level} size={56} />
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
