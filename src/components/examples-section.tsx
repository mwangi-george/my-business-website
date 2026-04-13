import { SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { exampleProjects } from "@/data/site-content";

export function ExamplesSection() {
  return (
    <SectionShell
      id="examples"
      eyebrow=""
      title="Real-world solutions I've delivered"
      description="Here are some examples of solutions I’ve designed and built to solve real-world data and operational challenges."
    >
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {exampleProjects.map((project) => (
          <Card key={project.title} className="group h-full border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <CardDescription>{project.summary}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="rounded-2xl bg-secondary/70 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Outcome</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.impact}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
