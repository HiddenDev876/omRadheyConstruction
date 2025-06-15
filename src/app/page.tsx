import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsGallery } from '@/components/sections/projects-gallery';
import { ExperienceSection } from '@/components/sections/experience-section';
import { TeamSection } from '@/components/sections/team-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <ProjectsGallery />
      <ExperienceSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}
