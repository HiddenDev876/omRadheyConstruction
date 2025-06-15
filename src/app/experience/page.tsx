// src/app/experience/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, UserCircle, MessageSquareQuote } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

const testimonials = [
  {
    name: "Rohan Sharma",
    company: "GreenTech Solutions",
    testimonial: "Om Radhey Construction delivered our new office space on time and within budget. Their professionalism and attention to detail were outstanding. Highly recommended!",
    rating: 5,
    project: "Office Renovation"
  },
  {
    name: "Priya Mehta",
    company: "Homeowner",
    testimonial: "Building our dream home with Om Radhey was a fantastic experience. They listened to our needs and brought our vision to life beautifully. The quality is exceptional.",
    rating: 5,
    project: "Custom Villa Build"
  },
  {
    name: "Anil Kumar",
    company: "Retail Ventures Ltd.",
    testimonial: "The team at Om Radhey Construction is highly skilled and efficient. They handled our complex retail store construction with ease and delivered a top-notch result.",
    rating: 4,
    project: "Retail Store Construction"
  },
  {
    name: "Sunita Rao",
    company: "Educational Trust",
    testimonial: "We partnered with Om Radhey for our new school building. Their commitment to safety and quality was evident throughout. The facility is state-of-the-art.",
    rating: 5,
    project: "School Building Construction"
  },
  {
    name: "Deepak Verma",
    company: "Logistics Corp",
    testimonial: "Our warehouse project was completed ahead of schedule, thanks to Om Radhey's efficient project management. Very satisfied with their work.",
    rating: 4,
    project: "Warehouse Development"
  }
];

export default function ExperiencePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Client Experiences" },
  ];

  return (
    <section id="experience-page" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="text-center mb-12 md:mb-16">
          <MessageSquareQuote className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            What Our Clients Say
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We take pride in the positive feedback from our clients. Read about their experiences partnering with Om Radhey Construction for their projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card"
            >
              <CardHeader>
                <div className="flex items-center mb-2">
                  <UserCircle className="h-12 w-12 text-primary mr-4" />
                  <div>
                    <CardTitle className="text-lg font-headline text-primary">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.company} - {testimonial.project}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  {Array(5 - testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
