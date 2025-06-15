// src/app/about/page.tsx
'use client';

import Image from "next/image";
import { CheckCircle, Building, Target, Eye, Users, Award } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const coreValues = [
  { name: "Integrity", description: "Upholding the highest ethical standards in all our dealings, ensuring transparency and honesty.", icon: Award },
  { name: "Quality", description: "Committing to superior craftsmanship, materials, and attention to detail in every project.", icon: CheckCircle },
  { name: "Safety", description: "Prioritizing the well-being of our team, clients, and the public through rigorous safety protocols.", icon: Users },
  { name: "Innovation", description: "Embracing new technologies, materials, and methods to deliver efficient and cutting-edge solutions.", icon: Target },
];

export default function AboutUsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About Us" },
  ];

  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
        
        <header className="text-center mb-12 md:mb-16">
          <Building className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            About Om Radhey Construction
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building excellence with a foundation of trust, quality, and innovation for over a decade. We are committed to turning your visions into tangible realities.
          </p>
        </header>

        <section className="mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative aspect-video rounded-lg shadow-xl overflow-hidden">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Om Radhey Construction team planning"
                width={600}
                height={450}
                className="object-cover w-full h-full"
                data-ai-hint="construction planning"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-headline font-semibold text-primary">
                Our Story: A Decade of Dedication
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded over ten years ago, Om Radhey Construction began with a simple mission: to provide exceptional construction services built on a foundation of integrity and client satisfaction. From humble beginnings, we have grown into a respected name in the industry, known for our commitment to quality, innovation, and timely project delivery.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey has been marked by a continuous pursuit of excellence, adapting to new technologies, and fostering a team of passionate professionals. We believe that every structure we build is a testament to our dedication and a step towards a better-built environment.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:order-2">
              <h2 className="text-2xl md:text-3xl font-headline font-semibold text-primary">
                Mission & Vision
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="flex items-center text-xl font-semibold text-primary mb-2">
                    <Target className="h-6 w-6 text-accent mr-2" />
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver high-quality, sustainable, and innovative construction solutions that exceed client expectations, while fostering a culture of safety, respect, and continuous improvement for our team and community.
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center text-xl font-semibold text-primary mb-2">
                    <Eye className="h-6 w-6 text-accent mr-2" />
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the leading construction company recognized for our unwavering commitment to excellence, integrity, and client-centric approach, shaping a future where quality infrastructure enhances lives and communities.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg shadow-xl overflow-hidden md:order-1">
              <Image
                src="https://placehold.co/600x450.png"
                alt="Blueprint and construction tools"
                width={600}
                height={450}
                className="object-cover w-full h-full"
                data-ai-hint="blueprint tools"
              />
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl md:text-3xl font-headline font-semibold text-primary text-center mb-8 md:mb-12">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreValues.map((value) => (
              <Card key={value.name} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  <value.icon className="h-10 w-10 text-accent mb-3" />
                  <CardTitle className="text-xl font-headline text-primary">{value.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16 md:mt-24 text-center">
            <h2 className="text-2xl md:text-3xl font-headline font-semibold text-primary mb-6">
                Partner with Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Whether you're planning a new construction, a renovation, or require specialized project management, Om Radhey Construction has the expertise to bring your project to successful completion.
            </p>
            <Link
                href="/discuss-project"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-accent-foreground bg-accent hover:bg-accent/90"
            >
                Discuss Your Project
            </Link>
        </section>

      </div>
    </div>
  );
}
