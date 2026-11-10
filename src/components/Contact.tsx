import SectionHeader from "./SectionHeader";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Github, Linkedin, Send } from "lucide-react";
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

          // ✅ REQUIRED BY TEMPLATE
          time: new Date().toLocaleString(),
        },
        "HcLU1Z-K2aPhEu8i8"
      );

      toast({
        title: "✅ Message Sent!",
        description: "Thanks for reaching out. I’ll reply shortly!",
      });

      setFormData({
        name: "",
        email: "",
        title: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast({
        title: "❌ Sending Failed",
        description:
          "Something went wrong while sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+250 788 548 084",
      href: "tel:+250788548084",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kigali, Rwanda",
      href: "#",
    },
    {
      icon: Mail,
      label: "Email",
      value: "gadyishimwe1@gmail.com",
      href: "mailto:gadyishimwe1@gmail.com",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/gadishiimwe",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gad-ishimwe/",
    },
  ];

  const field = "h-12 rounded-2xl bg-secondary/60 border-border focus-visible:ring-accent";
  return (
    <section id="contact" className="py-28 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader eyebrow="Contact" title={<>Let's build <span className="gradient-hero">something great</span>.</>} subtitle="Ready to work together? Tell me about your project and let's bring your ideas to life." />
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-5">
          <div className="space-y-3">
            {contactInfo.map((info) => {
              const Inner = (
                <>
                  <span className="w-11 h-11 rounded-2xl bg-secondary grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors"><info.icon className="w-5 h-5" /></span>
                  <span>
                    <span className="block text-xs text-muted-foreground">{info.label}</span>
                    <span className="block font-medium">{info.value}</span>
                  </span>
                </>
              );
              return info.href !== "#" ? (
                <a key={info.label} href={info.href} className="ring-gradient group flex items-center gap-4 rounded-3xl border border-border bg-card p-5">{Inner}</a>
              ) : (
                <div key={info.label} className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-5">{Inner}</div>
              );
            })}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="h-12 flex-1 rounded-full border border-border bg-card flex items-center justify-center gap-2 text-sm font-medium hover:bg-secondary transition-colors">
                  <s.icon className="w-4 h-4" /> {s.label}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-7 md:p-9 shadow-card space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-2 block">Name</label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className={field} />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className={field} />
              </div>
            </div>
            <div>
              <label htmlFor="title" className="text-sm font-medium mb-2 block">Subject</label>
              <Input id="title" name="title" value={formData.title} onChange={handleInputChange} required className={field} />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium mb-2 block">Message</label>
              <Textarea id="message" name="message" rows={6} value={formData.message} onChange={handleInputChange} required className="rounded-2xl bg-secondary/60 border-border resize-none focus-visible:ring-accent" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full h-12 rounded-full gradient-button text-accent-foreground font-semibold flex items-center justify-center gap-2 shadow-glow hover:brightness-110 disabled:opacity-60 transition-all">
              <Send className="w-4 h-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
