
// src/app/projects/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Briefcase } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

// Mock data, in a real app, this would come from a CMS or database
const projects = [
  {
    id: "1",
    title: "Modern Residential Complex",
    description: "A luxurious residential complex featuring state-of-the-art amenities and sustainable design. This project involved complex structural engineering and meticulous interior finishing.",
    image: "https://placehold.co/600x400.png",
    category: "Residential",
    hint: "apartment complex"
  },
  {
    id: "2",
    title: "Corporate Office Tower",
    description: "An iconic office tower designed for productivity and a modern work environment. This Grade-A commercial space features flexible floor plates.",
    image: "https://placehold.co/600x400.png",
    category: "Commercial",
    hint: "corporate tower"
  },
  {
    id: "3",
    title: "Community Shopping Mall",
    description: "A vibrant shopping mall providing a diverse retail and entertainment experience, completed with modern amenities and ample parking.",
    image: "https://placehold.co/600x400.png",
    category: "Commercial",
    hint: "mall interior"
  },
   {
    id: "4",
    title: "Luxury Private Villa",
    description: "Exquisite private villa with bespoke design and high-end finishes, offering unparalleled luxury and comfort to its residents.",
    image: "https://placehold.co/600x400.png",
    category: "Residential",
    hint: "luxury villa"
  },
  {
    id: "5",
    title: "Industrial Warehouse Facility",
    description: "A large-scale industrial warehouse designed for optimal logistics and storage solutions, featuring high ceilings and advanced loading docks.",
    image: "https://placehold.co/600x400.png",
    category: "Industrial",
    hint: "warehouse building"
  },
  {
    id: "6",
    title: "Educational Institute Campus",
    description: "A modern educational campus with state-of-the-art classrooms, laboratories, and recreational facilities for students.",
    image: "https://placehold.co/600x400.png",
    category: "Institutional",
    hint: "school campus"
  }
];

export default function ProjectsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Projects" },
  ];

  return (
    <section id="projects-page" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="text-center mb-12 md:mb-16">
          <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Our Diverse Portfolio
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the range of projects successfully delivered by Om Radhey Construction. Each project reflects our commitment to quality, innovation, and client satisfaction across various sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover aspect-[3/2] w-full"
                  data-ai-hint={project.hint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <span className="text-xs text-accent font-semibold uppercase tracking-wider">{project.category}</span>
                <CardTitle className="mt-2 mb-2 text-xl font-headline text-primary">{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" asChild className="text-accent p-0 hover:underline">
                  <Link href={`/projects/${project.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
         <div className="mt-12 md:mt-16 text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md shadow-md">
            <Link href="/discuss-project">Have a Project in Mind? Let's Talk</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
