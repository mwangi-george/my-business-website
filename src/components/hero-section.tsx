import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ctaLinks } from "@/data/site-content";

export function HeroSection() {
  const PrimaryIcon = ctaLinks.primary.icon;
  const SecondaryIcon = ctaLinks.secondary.icon;

  return (
    <section id="top" className="relative overflow-hidden scroll-mt-24 border-b border-border/50 bg-hero pb-20 pt-16 md:pb-28 md:pt-20">
      <div className="absolute inset-0 bg-grid [background-size:36px_36px] opacity-30" />
      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="max-w-3xl text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl">
              Turn messy data workflows into modern, scalable systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              Hi, my name is George Mwangi. I help organizations move from scattered spreadsheets and manual processes to dependable dashboards,
              backend systems, automations, and predictive tools that support real decisions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className={"h-12"}>
                <a href={ctaLinks.primary.href} className={"flex items-center gap-2"}>
                  <PrimaryIcon className="h-4 w-4" />
                  {ctaLinks.primary.label}
                </a>
              </Button>
              <Button size="lg" variant="outline" className={"h-12"}>
                <a href={ctaLinks.secondary.href} className={"flex items-center gap-2"}>
                  {ctaLinks.secondary.label}
                  <SecondaryIcon className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
           <img src={"hero-image.jpg"} className={"w-full h-full object-cover object-center rounded-xl"} />
          </div>
        </div>
      </div>
    </section>
  );
}
