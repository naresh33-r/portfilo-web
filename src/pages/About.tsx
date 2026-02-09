import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const timeline = [
  { year: "2021", title: "Started CSE Degree", description: "Began the journey into Computer Science & Engineering." },
  { year: "2022", title: "First Internship", description: "Built REST APIs and learned agile development workflows." },
  { year: "2023", title: "Open Source Contributions", description: "Contributed to multiple open-source React projects." },
  { year: "2024", title: "Full-Stack Projects", description: "Developed end-to-end applications with modern tech stacks." },
  { year: "2025", title: "Final Year & Job Ready", description: "Completing degree while building production-grade applications." },
];

const About = () => {
  return (
    <PageTransition type="slideUp">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="section-heading">About Me</h1>
              <p className="section-subheading mx-auto">
                A passionate developer who loves crafting elegant solutions to complex problems.
              </p>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal delay={0.1}>
            <div className="glass rounded-2xl p-8 md:p-12 mb-16 max-w-3xl mx-auto gradient-border">
              <p className="text-foreground/90 leading-relaxed text-lg">
                I'm a final-year Computer Science student with a deep passion for building modern web applications.
                I specialize in React, TypeScript, and Java, and I enjoy exploring everything from frontend animations
                to backend microservices. When I'm not coding, you'll find me solving problems on LeetCode or
                contributing to open-source projects.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">My Journey</h2>
            </ScrollReveal>

            <div className="relative">
              {/* Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  <div className={`relative flex items-start mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 glow-purple z-10" />

                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="glass rounded-xl p-5">
                        <span className="text-sm font-mono text-neon-cyan">{item.year}</span>
                        <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
