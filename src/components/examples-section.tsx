import { ArrowUpRight, BarChart3, Github } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { exampleProjects } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function ExamplesSection() {
  return (
      <SectionShell
          id="examples"
          eyebrow=""
          title="Real-world solutions I've delivered"
          description="Here are some examples of solutions I’ve designed and built to solve real-world data and operational challenges."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {exampleProjects.map((project, index) => (
              <article
                  key={project.title}
                  className={cn(
                      "group relative overflow-hidden rounded-3xl border border-border/60 bg-white/70 p-5 backdrop-blur-sm",
                      "transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg",
                  )}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary/80">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                      Project {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-lg font-semibold leading-snug text-foreground md:text-xl">
                      {project.title}
                    </h3>

                    <p className="text-sm leading-6 text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                      <Badge
                          key={tag}
                          variant="outline"
                          className="rounded-full border-primary/15 bg-background/70 px-3 py-1 text-xs"
                      >
                        {tag}
                      </Badge>
                  ))}
                </div>

                <div className="mt-5 border-l-2 border-primary/20 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Outcome
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.impact}
                  </p>
                </div>

                {(project.sourceCodeLink || project.dashboardLink) && (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {project.sourceCodeLink && (
                          <a
                              href={project.sourceCodeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary"
                          >
                            <Github className="h-4 w-4" />
                            Source code
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                      )}

                      {project.dashboardLink && (
                          <a
                              href={project.dashboardLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary"
                          >
                            <BarChart3 className="h-4 w-4" />
                            Live demo
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                      )}
                    </div>
                )}
              </article>
          ))}
        </div>
      </SectionShell>
  );
}
