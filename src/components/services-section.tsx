import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionShell } from "@/components/section-shell";
import { services } from "@/data/site-content";

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      eyebrow=""
      title="What I can help you build"
      description="From dashboards to backend systems and forecasting workflows, the focus is always practical value, maintainability, and measurable time savings."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Card key={service.title} className="group transition-transform duration-300 hover:-translate-y-1 rounded-xl">
              <CardHeader>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              {/*<CardContent>*/}
                {/*<ul className="space-y-3 text-sm text-muted-foreground">*/}
                {/*  {service.bullets.map((bullet) => (*/}
                {/*    <li key={bullet} className="flex items-center gap-3">*/}
                {/*      <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />*/}
                {/*      <span>{bullet}</span>*/}
                {/*    </li>*/}
                {/*  ))}*/}
                {/*</ul>*/}
              {/*</CardContent>*/}
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}
