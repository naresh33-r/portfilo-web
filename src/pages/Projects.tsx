import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";h

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { projects, Project } from "@/data/projects";

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <motion.div
    className="glass rounded-2xl overflow-hidden cursor-pointer group gradient-border"
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    onClick={onClick}
  >
    <div className="h-40 bg-muted/30 flex items-center justify-center overflow-hidden">
      <div className="text-4xl font-bold gradient-text opacity-30 group-hover:opacity-60 transition-opacity">
        {project.title[0]}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 3).map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs bg-muted/60 text-muted-foreground border-0">
            {tech}
          </Badge>
        ))}
        {project.techStack.length > 3 && (
          <Badge variant="secondary" className="text-xs bg-muted/60 text-muted-foreground border-0">
            +{project.techStack.length - 3}
          </Badge>
        )}
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
    <motion.div
      className="glass-strong rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative z-10 gradient-border"
      initial={{ scale: 0.9, y: 30 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 30 }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors p-1">
            <X size={20} />
          </button>
        </div>
        <p className="text-foreground/80 leading-relaxed mb-6">{project.longDescription}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <Badge key={tech} className="bg-primary/20 text-primary border-primary/30">{tech}</Badge>
          ))}
        </div>
        <div className="flex gap-3">
          <Button asChild size="sm" className="bg-primary hover:bg-primary/80">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <PageTransition type="scale">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="section-heading">Projects</h1>
              <p className="section-subheading mx-auto">A showcase of things I've built and contributed to.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.08}>
                <ProjectCard project={project} onClick={() => setSelected(project)} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Projects;
