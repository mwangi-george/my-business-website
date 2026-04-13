import { SectionShell } from "@/components/section-shell";
import SocialLinks from "@/components/social-links";

export function AboutSection() {
  return (
      <SectionShell
          id="about"
          eyebrow=""
          title="Technical depth with a practical, systems-driven mindset"
          description=""
          className="bg-white/25"
      >
        <div className={"text-center text-muted-foreground leading-relaxed mx-5 md:mx-52"}>

          <p className="mb-6">
            I'm a personal consultant dedicated to helping organizations bridge the gap between messy spreadsheets and
            scalable, automated systems. With a focus on practical, maintainable solutions, I work closely with SMEs
            and NGOs to understand their unique challenges and build tools that actually make sense for their operations.
          </p>

          <p className="mb-6">
            Whether you're drowning in data or looking to automate your workflows,
            I believe technology should simplify your life, not complicate it. Let's build something together.
          </p>

          <p className="mb-8">
            My work sits at the intersection of software engineering, data analytics, and predictive modeling—bridging the
            gap between raw data and practical, decision-support tools.
          </p>

          {/* Tech Stack */}
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Core technologies I work with
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Python", "R", "SQL", "TypeScript",
                "FastAPI", "React", "Shiny",
                "Pydantic", "Pydantic AI", "Polars", "Tidyverse",
                "Plotly", "Highcharts", "ApexCharts", "ggplot2",
                "ShadCN", "TanStack Query", "TailwindCSS", "Quarto"
              ].map((tech) => (
                  <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-700 shadow-sm"
                  >
                {tech}
              </span>
              ))}
            </div>
          </div>

          <SocialLinks />

        </div>
      </SectionShell>
  );
}
