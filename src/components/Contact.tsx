import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_foacfph",
        "template_dtdb3uu",
        {
          name: formData.name,
          email: formData.email,
          title: formData.title,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "HcLU1Z-K2aPhEu8i8"
      );

      toast({
        title: "Message sent successfully",
        description: "Thanks for reaching out. I’ll get back to you soon.",
      });
      setFormData({ name: "", email: "", title: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Unable to send your message",
        description: "Please try again or contact me directly by email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gadyishimwe1@gmail.com",
      href: "mailto:gadyishimwe1@gmail.com",
      detail: "Best way to reach me",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+250 781 166 081",
      href: "tel:+250781166081",
      detail: "Call or send a message",
    },
    {
      icon: MapPin,
      label: "Based in",
      value: "Kigali, Rwanda",
      detail: "Available for remote collaboration",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", handle: "@gadishiimwe", href: "https://github.com/gadishiimwe" },
    { icon: Linkedin, label: "LinkedIn", handle: "Connect professionally", href: "https://www.linkedin.com/in/gad-ishimwe/" },
  ];

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-section-bg py-24 md:py-28">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" />
            Have an idea?
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Get In <span className="gradient-hero">Touch</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Looking for a developer, exploring an idea, or interested in working together? Tell me what you have in mind. I’m open to a thoughtful conversation, a project brief, or a meeting.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="space-y-7">
            <div className="px-1">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Contact details</p>
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">Let’s talk.</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                Whether you’re hiring, need a website or web application, want to improve a business process, or simply see a potential fit, I’d be glad to hear from you and discuss how I could contribute.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hairline bg-secondary text-foreground transition-colors group-hover:bg-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">{info.label}</span>
                      <span className="mt-1 block break-words font-semibold text-foreground">{info.value}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">{info.detail}</span>
                    </span>
                    {info.href && <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
                  </>
                );

                return info.href ? (
                  <a key={info.label} href={info.href} className="group flex items-center gap-4 rounded-2xl border border-hairline bg-card/65 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card hover:shadow-md md:p-5">
                    {content}
                  </a>
                ) : (
                  <div key={info.label} className="flex items-center gap-4 rounded-2xl border border-hairline bg-card/65 p-4 shadow-sm md:p-5">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="border-t border-hairline pt-7">
              <div className="mb-4">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Elsewhere on the web</p>
                <p className="mt-1 text-sm text-muted-foreground">Explore my work and connect with me professionally.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-2xl border border-hairline bg-card/75 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-md">
                      <Icon className="h-5 w-5" />
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold">{social.label}</span>
                        <span className="block truncate text-xs text-muted-foreground">{social.handle}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <Card className="overflow-hidden rounded-3xl border-hairline bg-card/95 shadow-2xl shadow-foreground/10">
            <div className="h-1.5 w-full bg-gradient-to-r from-accent via-accent/70 to-primary/20" />
            <CardHeader className="px-6 pb-2 pt-7 md:px-8">
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary">
                <Send className="h-5 w-5" />
              </div>
              <CardTitle className="text-2xl tracking-tight md:text-3xl">Start a conversation</CardTitle>
              <CardDescription className="max-w-md text-sm leading-relaxed">
                Share a little about the opportunity, project, or idea. I’ll review your message and get back to you.
              </CardDescription>
            </CardHeader>

            <CardContent className="px-6 pb-7 md:px-8 md:pb-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold">Your name <span className="text-muted-foreground">*</span></label>
                    <Input id="name" name="name" placeholder="e.g. Alex Johnson" autoComplete="name" value={formData.name} onChange={handleInputChange} required className="h-12 rounded-xl border-hairline bg-background px-4 focus-visible:ring-accent" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold">Email address <span className="text-muted-foreground">*</span></label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" value={formData.email} onChange={handleInputChange} required className="h-12 rounded-xl border-hairline bg-background px-4 focus-visible:ring-accent" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-semibold">Subject <span className="text-muted-foreground">*</span></label>
                  <Input id="title" name="title" placeholder="What would you like to discuss?" value={formData.title} onChange={handleInputChange} required className="h-12 rounded-xl border-hairline bg-background px-4 focus-visible:ring-accent" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold">Your message <span className="text-muted-foreground">*</span></label>
                  <Textarea id="message" name="message" rows={6} placeholder="Tell me about your project, idea, or how we could work together..." value={formData.message} onChange={handleInputChange} required className="min-h-36 resize-y rounded-xl border-hairline bg-background px-4 py-3 leading-relaxed focus-visible:ring-accent" />
                </div>

                <Button type="submit" variant="hero" size="lg" className="group h-12 w-full rounded-xl text-sm font-semibold" disabled={isSubmitting}>
                  {isSubmitting ? "Sending your message..." : "Send message"}
                  {!isSubmitting && <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />}
                </Button>
                <p className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Your message goes directly to my inbox.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
