import { ExternalLink, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { articles } from "@/data/articles";

const Articles = () => {
  return (
    <PageTransition type="rotate">
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h1 className="section-heading">Featured Articles</h1>
              <p className="section-subheading mx-auto">Thoughts, tutorials, and insights on modern web development.</p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-6">
            {articles.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 0.1}>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass rounded-2xl p-6 group hover:bg-card/60 transition-all gradient-border"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{article.description}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {article.readTime}
                        </span>
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-muted/60 border-0">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Articles;
