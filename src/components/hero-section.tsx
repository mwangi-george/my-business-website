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
              <Button size="lg">
                <a href={ctaLinks.primary.href} className={"flex items-center gap-2"}>
                  <PrimaryIcon className="h-4 w-4" />
                  {ctaLinks.primary.label}
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <a href={ctaLinks.secondary.href} className={"flex items-center gap-2"}>
                  {ctaLinks.secondary.label}
                  <SecondaryIcon className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-full bg-teal-300/40 blur-3xl md:block" />
            <div className="absolute -right-6 bottom-6 hidden h-28 w-28 rounded-full bg-sky-300/50 blur-3xl md:block" />
            <div className="animate-float rounded-[32px] border border-primary/10 bg-slate-950 p-4 shadow-glow">
              <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#0e7490,#0f172a)] p-5 text-white">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-sky-100/80">Decision Support Studio</p>
                    <h3 className="mt-1 text-2xl font-semibold">Operational analytics snapshot</h3>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-300" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-rose-300" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-sky-100/70">Data pipelines monitored</p>
                    <p className="mt-3 text-4xl font-bold">18</p>
                    <div className="mt-4 h-24 rounded-xl bg-[linear-gradient(180deg,rgba(45,212,191,0.2),rgba(45,212,191,0.03))] p-3">
                      <div className="flex h-full items-end gap-2">
                        {[30, 55, 42, 64, 58, 79, 72].map((height, index) => (
                          <div key={index} className="flex-1 rounded-t-md bg-teal-300/80" style={{ height: `${height}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-sky-100/70">Forecast confidence</p>
                    <p className="mt-3 text-4xl font-bold">92%</p>
                    <div className="mt-4 grid h-24 place-items-center rounded-xl border border-dashed border-sky-100/20">
                      <div className="grid h-20 w-20 place-items-center rounded-full border-[10px] border-teal-300 border-r-amber-300 border-b-amber-300 text-xl font-semibold">
                        92
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-sky-100/70">Typical outcomes</p>
                        <p className="mt-2 text-xl font-semibold">Fewer manual tasks. Better visibility. Faster decisions.</p>
                      </div>
                      <ArrowRight className="hidden h-6 w-6 text-teal-300 sm:block" />
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {[
                        "Workflow automation",
                        "Executive dashboards",
                        "Forecasting engines",
                      ].map((item) => (
                        <div key={item} className="rounded-2xl bg-white/8 px-4 py-3 text-sm text-sky-50/90">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
