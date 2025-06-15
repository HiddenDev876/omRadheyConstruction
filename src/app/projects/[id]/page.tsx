// src/app/projects/[id]/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, CalendarDays, HardHat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs"; // Added Breadcrumbs

// This is mock data. In a real app, you'd fetch this based on `params.id`.
const projectsData: { [key: string]: any } = {
  "1": {
    id: "1",
    title: "Modern Residential Complex",
    description: "A luxurious residential complex featuring state-of-the-art amenities and sustainable design. This project involved complex structural engineering and meticulous interior finishing to create a landmark living space.",
    longDescription: "The Modern Residential Complex stands as a testament to contemporary architecture and thoughtful urban planning. Spanning over 200,000 sq ft, it comprises three towers with over 150 units. Key features include a rooftop infinity pool, a fully-equipped gymnasium, landscaped gardens, and smart home technology integrated into every apartment. Sustainability was a core focus, with solar panels, rainwater harvesting, and energy-efficient lighting systems incorporated throughout the design. The project was completed three months ahead of schedule and within budget, showcasing Om Radhey Construction's commitment to efficiency and quality.",
    image: "https://placehold.co/800x500.png",
    images: [
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
    ],
    category: "Residential",
    status: "Completed",
    duration: "24 Months",
    services: ["Architectural Design", "Structural Engineering", "Interior Finishing", "Landscaping"],
    hint: "modern apartment"
  },
  "2": {
    id: "2",
    title: "Corporate Office Tower",
    description: "An iconic office tower designed for productivity and a modern work environment. This Grade-A commercial space features flexible floor plates and advanced building management systems.",
    longDescription: "The Corporate Office Tower is a 30-story marvel redefining the city's skyline. Designed for multinational corporations and growing businesses, it offers over 500,000 sq ft of premium office space. Features include high-speed elevators, a grand lobby, ample parking, and state-of-the-art security systems. The building is LEED Gold certified, emphasizing energy efficiency and environmental responsibility. Om Radhey Construction managed all aspects from groundbreaking to final handover.",
    image: "https://placehold.co/800x500.png",
    images: [
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
    ],
    category: "Commercial",
    status: "Completed",
    duration: "36 Months",
    services: ["Foundation Work", "High-Rise Construction", "Facade Engineering", "MEP Services"],
    hint: "office tower"
  },
  "3": {
    id: "3",
    title: "Community Shopping Mall",
    description: "A vibrant shopping mall providing a diverse retail and entertainment experience, completed with modern amenities.",
    longDescription: "This Community Shopping Mall project focused on creating a central hub for local residents. It features a wide array of retail outlets, a food court, a multiplex cinema, and ample parking. Special attention was given to accessibility and family-friendly facilities. The construction involved innovative techniques for large-span structures and energy-efficient HVAC systems. Om Radhey Construction successfully delivered this landmark project, enhancing the local community's lifestyle.",
    image: "https://placehold.co/800x500.png",
    images: [
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
    ],
    category: "Commercial",
    status: "Completed",
    duration: "30 Months",
    services: ["Retail Space Planning", "Large-Scale Construction", "Entertainment Zone Setup", "Parking Management Systems"],
    hint: "shopping mall"
  },
  "4": {
    id: "4",
    title: "Luxury Private Villa",
    description: "Exquisite private villa with bespoke design and high-end finishes, offering unparalleled luxury and comfort.",
    longDescription: "This Luxury Private Villa project was a masterpiece of bespoke design and meticulous craftsmanship. Nestled in a prime location, the villa boasts custom interiors, imported marble, smart home automation, a private pool, and landscaped gardens. Every detail was carefully considered to meet the client's discerning tastes. Om Radhey Construction ensured the highest level of quality and privacy throughout the construction process, delivering a truly exceptional residence.",
    image: "https://placehold.co/800x500.png",
    images: [
      "https://placehold.co/600x400.png",
      "https://placehold.co/600x400.png",
    ],
    category: "Residential",
    status: "Completed",
    duration: "18 Months",
    services: ["Bespoke Architectural Design", "Luxury Interior Finishing", "Smart Home Integration", "Landscape Architecture"],
    hint: "luxury home"
  }
};


export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id];

  if (!project) {
    const notFoundBreadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Project Not Found" }
    ];
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <Breadcrumbs items={notFoundBreadcrumbItems} className="justify-center"/>
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
        {/* The Back button is now part of Breadcrumbs */}
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: project.title },
  ];

  return (
    <div className="bg-secondary/30 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} /> {/* Replaced old back button */}

        <Card className="shadow-xl overflow-hidden">
          <CardHeader className="p-0 relative">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={500}
              className="object-cover w-full h-[300px] md:h-[500px]"
              data-ai-hint={project.hint}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <span className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold uppercase tracking-wider mb-2 inline-block">{project.category}</span>
                <h1 className="text-3xl md:text-5xl font-headline font-bold text-white shadow-text">{project.title}</h1>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-headline font-semibold text-primary mb-4">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.longDescription || project.description}</p>
                
                <h3 className="text-xl font-headline font-semibold text-primary mb-3">Services Provided</h3>
                <ul className="space-y-2 mb-8">
                  {project.services.map((service: string, index: number) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-1 space-y-6">
                <Card className="bg-background">
                    <CardHeader>
                        <CardTitle className="text-xl font-headline text-primary">Project Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-accent mr-3 shrink-0" />
                            <div>
                                <span className="font-semibold text-primary">Status: </span>
                                <span className="text-muted-foreground">{project.status}</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <CalendarDays className="h-5 w-5 text-accent mr-3 shrink-0" />
                            <div>
                                <span className="font-semibold text-primary">Duration: </span>
                                <span className="text-muted-foreground">{project.duration}</span>
                            </div>
                        </div>
                         <div className="flex items-center">
                            <HardHat className="h-5 w-5 text-accent mr-3 shrink-0" />
                            <div>
                                <span className="font-semibold text-primary">Category: </span>
                                <span className="text-muted-foreground">{project.category}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/discuss-project">Inquire About Similar Projects</Link>
                </Button>
              </div>
            </div>
            
            {project.images && project.images.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-headline font-semibold text-primary mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.map((imgSrc: string, index: number) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={imgSrc}
                        alt={`${project.title} - Image ${index + 1}`}
                        width={600}
                        height={400}
                        className="object-cover w-full aspect-video hover:scale-105 transition-transform duration-300"
                        data-ai-hint="architecture detail"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id,
  }));
}
