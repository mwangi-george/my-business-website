import { BriefcaseBusiness, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SocialLinks from "@/components/social-links";
import { useState } from "react";

interface NavigationItem {
  label: string;
  href: string;
}

interface SiteHeaderProps {
  navigationItems: readonly NavigationItem[];
  activeSection: string;
}

export function SiteHeader({ navigationItems, activeSection }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between gap-4">

          {/* Logo */}
          <a
              href="#top"
              className="flex items-center gap-3 font-semibold text-foreground transition-transform hover:scale-[1.01]"
          >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
            <BriefcaseBusiness className="h-5 w-5" />
          </span>
            <span className="text-lg md:text-xl">Data Systems Consulting</span>
          </a>

          {/* Desktop Nav */}
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
                          isActive && "bg-primary text-primary-foreground shadow-sm hover:text-primary-foreground"
                      )}
                  >
                    {item.label}
                  </a>
              );
            })}
          </nav>

          {/* Desktop Right */}
          <span className="hidden md:block">
          <SocialLinks />
        </span>

          <div className="flex items-center gap-2">
            <Button className="hidden md:inline-flex">
              <a href="#contact">Book a call</a>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
                variant="secondary"
                size="icon"
                className="md:hidden"
                aria-label="Toggle navigation menu"
                onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden border-t border-border/60 bg-white/95 backdrop-blur-xl">
              <div className="container py-6 flex flex-col gap-4">

                {/* Navigation Items */}
                {navigationItems.map((item) => {
                  const itemSection = item.href.replace("#", "");
                  const isActive = activeSection === itemSection;

                  return (
                      <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                              "text-base font-medium transition-colors",
                              isActive
                                  ? "text-primary"
                                  : "text-muted-foreground hover:text-foreground"
                          )}
                      >
                        {item.label}
                      </a>
                  );
                })}

                {/* Divider */}
                <div className="h-px bg-border my-2" />

                <div className="flex items-center gap-2 justify-between">
                  {/* CTA */}
                  <Button className="rounded-2xl" size={"lg"}>
                    <a href="#contact" onClick={() => setIsOpen(false)}>
                      Book a call
                    </a>
                  </Button>

                  {/* Social Links */}
                  <div className="flex justify-center">
                    <SocialLinks />
                  </div>
                </div>
              </div>
            </div>
        )}
      </header>
  );
}
