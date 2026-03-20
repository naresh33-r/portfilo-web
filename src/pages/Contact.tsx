import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Download, CheckCircle, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // EmailJS integration goes here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageTransition type="flip">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="section-heading">Get In Touch</h1>
              <p className="section-subheading mx-auto">Have a project in mind? Let's work together.</p>
            </div>
          </ScrollReveal>

          <div className="max-w-xl mx-auto">
            <ScrollReveal delay={0.1}>
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 gradient-border space-y-5">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center py-12 gap-4"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle className="h-16 w-16 text-neon-cyan" />
                      </motion.div>
                      <p className="text-lg font-semibold text-foreground">Message Sent!</p>
                      <p className="text-sm text-muted-foreground">I'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" className="space-y-5">
                      <div>
                        <Input
                          placeholder="Your Name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          required
                          className="bg-muted/30 border-border/50 focus:border-primary focus:ring-primary/30 transition-all"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          required
                          className="bg-muted/30 border-border/50 focus:border-primary focus:ring-primary/30 transition-all"
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Your Message"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          required
                          rows={5}
                          className="bg-muted/30 border-border/50 focus:border-primary focus:ring-primary/30 transition-all"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/80 glow-purple">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-10 text-center space-y-4">
                <div className="flex justify-center gap-4">
                  {[
                    { icon: <Github size={20} />, href: "https://github.com/naresh33-r" },
                    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/naresh448" },
                    { icon: <Mail size={20} />, href: "mailto:nareshmarquez448@gmail.com" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow-purple transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <Button variant="outline" className="border-border/50">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
