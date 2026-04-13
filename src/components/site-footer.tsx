export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-white/30 py-8">
      <div className="container flex flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>Building data-driven systems, automations, dashboards, and forecasting tools.</p>
        <p>© {new Date().getFullYear()} Data Systems Consulting. All rights reserved.</p>
      </div>
    </footer>
  );
}
