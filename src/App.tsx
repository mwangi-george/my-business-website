import { AboutSection } from "@/components/about-section";
import { ApproachSection } from "@/components/approach-section";
import { ContactSection } from "@/components/contact-section";
import { ExamplesSection } from "@/components/examples-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { navigationItems } from "@/data/site-content";
import { useActiveSection } from "@/hooks/use-active-section";

function App() {
  const activeSection = useActiveSection(["services", "approach", "examples", "about", "contact"]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader navigationItems={navigationItems} activeSection={activeSection} />
      <main>
        <HeroSection />
        <ServicesSection />
        <ApproachSection />
        <ExamplesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
