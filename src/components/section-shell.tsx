import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function SectionShell({ id, eyebrow, title, description, children, className }: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-20 md:py-28", className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <p className="mb-4 inline-flex rounded-full border border-primary/15 bg-white/70 px-4 py-1 text-sm font-semibold text-primary shadow-sm">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">{title}</h2>
          {description ? <p className="mt-5 text-lg leading-8 text-muted-foreground md:text-xl">{description}</p> : null}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
