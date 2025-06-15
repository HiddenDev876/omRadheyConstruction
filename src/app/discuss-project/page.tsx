// src/app/discuss-project/page.tsx
"use client";

import { useFormStatus } from "react-dom";
import { useEffect, useState, useActionState } from "react"; // Updated import
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Send, Loader2, CheckCircle, Building } from "lucide-react";
import { submitContactForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

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
      {pending ? "Submitting..." : "Submit Project Inquiry"}
    </Button>
  );
}

export default function DiscussProjectPage() {
  const [state, formAction] = useActionState(submitContactForm, initialState); // Updated hook
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.success && state.message) {
      setIsSuccessDialogOpen(true);
      const form = document.getElementById("discuss-project-form") as HTMLFormElement;
      if(form) form.reset(); 
    } else if (state?.message && state?.errors) {
       toast({
        variant: "destructive",
        title: "Validation Error",
        description: state.message,
      });
    } else if (state?.message && !state.success && !state.errors) { 
       toast({
        variant: "destructive",
        title: "Submission Error",
        description: state.message,
      });
    }
  }, [state, toast]);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Discuss Your Project" },
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                    Let's Build Your Vision
                </h1>
                <p className="text-lg text-muted-foreground">
                    Have a project in mind? Share the details with us, and our experts will get back to you to discuss how we can turn your ideas into reality.
                </p>
            </div>

            <Card className="shadow-xl">
                <CardHeader>
                <CardTitle className="text-2xl font-headline text-primary">Project Inquiry Form</CardTitle>
                <CardDescription>Please provide as much detail as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                <form id="discuss-project-form" action={formAction} className="space-y-6">
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
                    <Label htmlFor="subject" className="font-medium">Project Type / Subject</Label>
                    <Input id="subject" name="subject" type="text" placeholder="e.g., Residential Construction, Office Renovation" required className="mt-1" />
                    {state?.errors?.subject && <p className="text-sm text-red-500 mt-1">{state.errors.subject[0]}</p>}
                    </div>
                    <div>
                    <Label htmlFor="message" className="font-medium">Project Description & Requirements</Label>
                    <Textarea id="message" name="message" placeholder="Tell us about your project, expected timeline, budget, specific needs, etc." rows={6} required className="mt-1" />
                    {state?.errors?.message && <p className="text-sm text-red-500 mt-1">{state.errors.message[0]}</p>}
                    </div>
                    <SubmitButton />
                </form>
                </CardContent>
            </Card>
             <div className="mt-8 text-center">
                <p className="text-muted-foreground">Prefer to talk? Call us at <a href="tel:+919876543210" className="text-primary hover:underline font-medium">+91 98765 43210</a> or visit our <Link href="/#contact" className="text-primary hover:underline font-medium">contact page</Link> for more options.</p>
            </div>
        </div>
      </div>
      <AlertDialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              Inquiry Sent Successfully!
            </AlertDialogTitle>
            <AlertDialogDescription>
              {state?.success && state.message ? state.message : "Thank you for your project inquiry! We have received your details and will contact you shortly to discuss it further."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsSuccessDialogOpen(false)} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
