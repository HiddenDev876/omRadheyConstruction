// @/components/sections/contact-section.tsx
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare, Send, Loader2 } from "lucide-react";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: null,
  errors: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Success!",
        description: state.message,
      });
      // Optionally reset form here if not handled by useFormState clearing
      const form = document.getElementById("contact-form") as HTMLFormElement;
      if(form) form.reset();

    } else if (state?.message && state?.errors) { // Error with specific field issues
       toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: state.message,
      });
    } else if (state?.message && !state.success && !state.errors) { // General error message
       toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast]);


  const companyName = "Om Radhey Construction";
  const email = "info@omradheyconstruction.com";
  const contactNumber = "+91 98765 43210";
  const address = "123 Construction Ave, Builder City, ST 12345";

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 animate-slide-in-from-bottom" style={{animationDelay: '0.1s'}}>
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-from-bottom" style={{animationDelay: '0.2s'}}>
            Have a project in mind or need more information? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Form Card */}
          <Card className="shadow-xl animate-slide-in-from-bottom" style={{animationDelay: '0.3s'}}>
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-primary">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form id="contact-form" action={formAction} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="font-medium">Full Name</Label>
                  <Input id="name" name="name" type="text" placeholder="Your Name" required className="mt-1" />
                  {state?.errors?.name && <p className="text-sm text-red-500 mt-1">{state.errors.name[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="font-medium">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="mt-1" />
                  {state?.errors?.email && <p className="text-sm text-red-500 mt-1">{state.errors.email[0]}</p>}
                </div>
                 <div>
                  <Label htmlFor="subject" className="font-medium">Subject</Label>
                  <Input id="subject" name="subject" type="text" placeholder="Project Inquiry" required className="mt-1" />
                  {state?.errors?.subject && <p className="text-sm text-red-500 mt-1">{state.errors.subject[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="message" className="font-medium">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your project or query..." rows={5} required className="mt-1" />
                  {state?.errors?.message && <p className="text-sm text-red-500 mt-1">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>

          {/* Contact Information Card */}
          <Card className="shadow-xl animate-slide-in-from-bottom" style={{animationDelay: '0.4s'}}>
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-primary">Contact Information</CardTitle>
              <CardDescription>Reach out to us directly through these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-secondary/30 rounded-lg">
                <MapPin className="h-8 w-8 text-accent mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Our Office</h4>
                  <p className="text-muted-foreground">{address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-secondary/30 rounded-lg">
                <Mail className="h-8 w-8 text-accent mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Email Us</h4>
                  <a href={`mailto:${email}`} className="text-muted-foreground hover:text-accent transition-colors">{email}</a>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 bg-secondary/30 rounded-lg">
                <Phone className="h-8 w-8 text-accent mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Call Us</h4>
                  <a href={`tel:${contactNumber}`} className="text-muted-foreground hover:text-accent transition-colors">{contactNumber}</a>
                </div>
              </div>
              <div className="mt-6">
                 <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <MessageSquare className="mr-2 h-5 w-5" /> Live Chat (Coming Soon)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
