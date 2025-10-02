import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface BetaDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BetaDialog = ({ open, onOpenChange }: BetaDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    useCase: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.useCase) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Success
    toast.success("Welcome to the beta! We'll be in touch soon.");
    setFormData({ name: "", email: "", useCase: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Join Our Beta Program
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Welcome to the future of AI-powered development! By joining our beta program, you'll be among the first to experience groundbreaking technology that transforms how applications are built. Our platform combines cutting-edge artificial intelligence with intuitive design, enabling you to create sophisticated web applications through natural conversation.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mt-4">
              As a beta participant, you'll gain exclusive early access to features before they're released to the public. You'll have the opportunity to shape the product's direction through your feedback and suggestions. Our dedicated support team will work closely with you to ensure your success, providing personalized guidance and rapid response to any questions or issues.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Beta members receive complimentary access to premium features during the testing period, including advanced AI capabilities, priority processing, and extended usage limits. You'll be able to build real projects, test innovative ideas, and bring your vision to life faster than ever before. We're committed to your success and will provide comprehensive documentation, tutorials, and community support.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Join a community of forward-thinking developers, entrepreneurs, and creators who are pioneering new approaches to software development. Share insights, collaborate on projects, and learn from others who are pushing the boundaries of what's possible. Your participation will directly influence the evolution of the platform, making you a true partner in innovation.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              The beta program is designed for those who want to stay ahead of the curve, experiment with emerging technologies, and gain a competitive advantage in their field. Whether you're building a startup, prototyping ideas, or exploring new possibilities, our platform provides the tools and support you need to succeed. Don't miss this opportunity to be part of something revolutionary.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 pt-4 border-t border-border">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="useCase">Use Case Description</Label>
              <Textarea
                id="useCase"
                placeholder="Tell us about what you want to build and how you plan to use our platform..."
                value={formData.useCase}
                onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                className="bg-input min-h-[120px]"
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Submit Application
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
