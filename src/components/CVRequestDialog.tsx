import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CVRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CVRequestDialog = ({ open, onOpenChange }: CVRequestDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`CV Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Please send your CV to this email address.`
    );
    
    window.location.href = `mailto:gadyishimwe1@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Request Sent!",
      description: "Your CV request has been prepared. Please send the email from your email client.",
    });
    
    setFormData({ name: "", email: "", company: "", message: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Request My Resume</DialogTitle>
          <DialogDescription>
            Fill out the form below and I'll send you my latest resume via email.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium mb-2 flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              required
              className="bg-secondary border-border"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              required
              className="bg-secondary border-border"
            />
          </div>
          <div>
            <label htmlFor="company" className="text-sm font-medium mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Company / Organization
            </label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your Company Name"
              className="bg-secondary border-border"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium mb-2 block">
              Additional Message (Optional)
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Let me know if you have any specific requirements..."
              rows={4}
              className="bg-secondary border-border resize-none"
            />
          </div>
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
          >
            <Mail className="w-5 h-5 mr-2" />
            Request Resume
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CVRequestDialog;
