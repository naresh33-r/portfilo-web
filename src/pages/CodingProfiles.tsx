import { motion } from "framer-motion";
import { ExternalLink, Github, Code, ChefHat, Terminal, Linkedin } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { profiles } from "@/data/profiles";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={28} />,
  code: <Code size={28} />,
  "chef-hat": <ChefHat size={28} />,
  terminal: <Terminal size={28} />,
  linkedin: <Linkedin size={28} />,
};

const CodingProfiles = () => {
  return (
    <PageTransition type="zoom">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="section-heading">Coding Profiles</h1>
              <p className="section-subheading mx-auto">Find me across the web.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {profiles.map((profile, i) => (
              <ScrollReveal key={profile.name} delay={i * 0.1}>
                <motion.a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-6 flex flex-col items-center text-center group gradient-border block"
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all group-hover:scale-110"
                    style={{
                      backgroundColor: `${profile.color}20`,
                      color: profile.color,
                      boxShadow: `0 0 20px ${profile.color}30`,
                    }}
                  >
                    {iconMap[profile.icon]}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{profile.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{profile.description}</p>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CodingProfiles;
