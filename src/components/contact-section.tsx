import { Mail, MapPin, Send, Share2 } from "lucide-react";
import { SectionShell } from "@/components/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ContactSection() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Let’s talk about your data, workflows, and systems"
      description="If you're looking to improve your data, streamline workflows, or build scalable systems, I’d love to hear from you. Use the form below or connect with me directly—let’s discuss how I can support your work."
    >
      <div className="mx-1 md:mx-20">
        <Card className="p-8 md:p-10">
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-foreground">Your name</span>
                <input
                  className="h-12 w-full rounded-2xl border border-input bg-background px-4 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  placeholder="Your name"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-foreground">Organization</span>
                <input
                  className="h-12 w-full rounded-2xl border border-input bg-background px-4 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                  placeholder="Organization name"
                />
              </label>
            </div>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-foreground">Email address</span>
              <input
                type="email"
                className="h-12 w-full rounded-2xl border border-input bg-background px-4 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                placeholder="you@example.com"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-foreground">What would you like help with?</span>
              <textarea
                rows={6}
                className="w-full rounded-[24px] border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                placeholder="Describe your current systems, reporting needs, and what kind of outcome you want."
              />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit">
                <Send className="h-4 w-4" />
                Send message
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </SectionShell>
  );
}
