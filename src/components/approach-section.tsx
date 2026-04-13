import { SectionShell } from "@/components/section-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { approachSteps } from "@/data/site-content";

export function ApproachSection() {
  return (
    <SectionShell
      id="approach"
      eyebrow="Approach"
      title="A clear path from problem to production"
      description="The process is lightweight, collaborative, and grounded in the realities of your operations, timelines, and data quality."
      className="bg-white/25"
    >
      <div className="grid gap-6 lg:grid-cols-4">
        {approachSteps.map((step) => {
          const Icon = step.icon;

          return (
            <Card key={step.number} className="relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-teal-400 to-sky-300" />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-soft">
                    {step.number}
                  </div>
                  <Icon className="h-6 w-6 text-primary/70" />
                </div>
                <CardTitle className="pt-4 text-2xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}
