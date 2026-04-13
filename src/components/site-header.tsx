import { BriefcaseBusiness, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SocialLinks from "@/components/social-links";
import {useIsMobile} from "@/hooks/use-mobile";

interface NavigationItem {
  label: string;
  href: string;
}

interface SiteHeaderProps {
  navigationItems: readonly NavigationItem[];
  activeSection: string;
}

export function SiteHeader({ navigationItems, activeSection }: SiteHeaderProps) {
  const isMobile = useIsMobile()
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 font-semibold text-foreground transition-transform hover:scale-[1.01]">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
            <BriefcaseBusiness className="h-5 w-5" />
          </span>
          <span className="text-lg md:text-xl">Data Systems Consulting</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-white/70 p-1 md:flex">
          {navigationItems.map((item) => {
            const itemSection = item.href.replace("#", "");
            const isActive = activeSection === itemSection;

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "bg-primary text-primary-foreground shadow-sm hover:text-primary-foreground",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        {!isMobile && (<SocialLinks/>)}

        <div className="flex items-center gap-2">
          <Button className="hidden md:inline-flex">
            <a href="#contact">Book a call</a>
          </Button>
          <Button variant="secondary" size="icon" className="md:hidden" aria-label="Open navigation menu">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
