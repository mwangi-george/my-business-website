import { SectionShell } from "@/components/section-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { approachSteps } from "@/data/site-content";

export function ApproachSection() {
  return (
    <SectionShell
      id="approach"
      eyebrow="Approach"
      title="A clear path from problem to production"
      description="A straightforward process focused on understanding your needs and delivering practical solutions"
      className="bg-white/25"
    >
      <div className="grid gap-6 lg:grid-cols-4">
        {approachSteps.map((step) => {
          const Icon = step.icon;

          return (
            <div key={step.number} className="relative overflow-hidden">
              <CardHeader className="items-center justify-center">
                <div className="items-center justify-center flex">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-soft">
                    {step.number}
                  </div>
                </div>
                <div className="items-center justify-center flex">
                  <CardTitle className="pt-4 text-2xl justify-center items-center">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <div className="items-center justify-center flex mx-3 md:mx-10 text-center">
                <p className="leading-7 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
