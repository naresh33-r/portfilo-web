import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, Download, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const HeroScene = lazy(() => import("@/three/HeroScene"));

const Index = () => {
  return (
    <PageTransition type="fade">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* 3D Scene */}
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-sm md:text-base font-mono text-neon-cyan tracking-widest uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Hello, World! I'm
            </motion.p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="gradient-text">Naresh R</span>
              <br />
              <span className="text-foreground"></span>
            </h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Junior Software Developer | Final Year CSE Student
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/80 glow-purple px-8">
                <Link to="/projects">
                  <FolderOpen className="mr-2 h-5 w-5" />
                  View Projects
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-border/50 hover:bg-muted/30 px-8">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Index;
