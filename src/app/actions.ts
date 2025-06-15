// @/app/actions.ts
"use server";

import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const validatedFields = ContactFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Validation failed. Please check your input.",
        success: false,
      };
    }

    const { name, email, subject, message } = validatedFields.data;

    // Simulate form submission (e.g., send an email, save to DB)
    console.log("Contact Form Submitted:", { name, email, subject, message });
    
    // In a real app, you would integrate with an email service or CRM.
    // For now, we just simulate success.
    // await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    return { success: true, message: "Thank you! Your message has been sent successfully. We will get back to you soon." };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "An unexpected error occurred. Please try again later." };
  }
}
