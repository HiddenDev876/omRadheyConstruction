# Om Radhey Construction - Next.js Website

This is a Next.js-based website for Om Radhey Construction, designed to showcase their services, projects, team, and client experiences. It's built with modern web technologies and designed for easy customization.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
  - [Running in Production Mode](#running-in-production-mode)
- [Project Structure](#project-structure)
- [Customization: Making It Your Own](#customization-making-it-your-own)
  - [1. Company Information & Contact Details](#1-company-information--contact-details)
  - [2. Theme and Styling](#2-theme-and-styling)
  - [3. Logo & Favicon](#3-logo--favicon)
  - [4. Images (Placeholders)](#4-images-placeholders)
  - [5. Hero Section Slides](#5-hero-section-slides)
  - [6. About Us Content](#6-about-us-content)
  - [7. Projects Data](#7-projects-data)
  - [8. Client Testimonials/Experiences](#8-client-testimonialsexperiences)
  - [9. Team Members](#9-team-members)
  - [10. Form Submissions](#10-form-submissions)
- [AI Features (Genkit)](#ai-features-genkit)
- [Deployment](#deployment)

## Project Overview

This website serves as a digital presence for Om Radhey Construction. It features:
- A dynamic homepage with a hero swiper and sections for About, Projects, Experience, Team, and Contact.
- Dedicated pages for:
  - About Us (detailed company information)
  - Our Projects (full portfolio)
  - Project Details (individual project showcases)
  - Client Experiences (all testimonials)
  - Our Team (all team members)
  - Discuss Your Project (project inquiry form)
- Light/Dark mode theme toggle.
- Responsive design for various screen sizes.
- Skeleton loading states and a custom 404 page for better UX.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI Components:** ShadCN UI
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form, Server Actions
- **Theme Management:** next-themes
- **Icons:** Lucide React
- **AI (Optional):** Genkit (Google AI)

## Getting Started

### Prerequisites

- Node.js (version 18.x or later recommended)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server (usually on `http://localhost:9002` or `http://localhost:3000`):

```bash
npm run dev
# or
yarn dev
```

The site will auto-reload when you make changes to the code.

### Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

This command will generate a `.next` folder with the production-ready application.

### Running in Production Mode

After building, you can start the application in production mode:

```bash
npm run start
# or
yarn start
```

## Project Structure

Here's a brief overview of the key directories:

-   `src/app/`: Contains all the pages and layouts (using Next.js App Router).
    -   `layout.tsx`: The root layout for the entire application.
    -   `globals.css`: Global styles and Tailwind CSS theme variables.
    -   `page.tsx`: The main homepage.
    -   `(pages)/`: Subdirectories for different pages (e.g., `about/page.tsx`, `projects/page.tsx`).
    -   `actions.ts`: Server Actions for form submissions.
-   `src/components/`: Reusable UI components.
    -   `layout/`: Components like Navbar, Footer, Breadcrumbs.
    -   `sections/`: Components for homepage sections (Hero, About, Projects, etc.).
    -   `ui/`: ShadCN UI components (Button, Card, Dialog, etc.).
    -   `theme-provider.tsx`: Manages light/dark themes.
    -   `mode-toggle.tsx`: The theme toggle button.
-   `src/hooks/`: Custom React hooks (e.g., `use-toast.ts`).
-   `src/lib/`: Utility functions (e.g., `cn` for classnames).
-   `src/ai/`: (If using Genkit) Contains AI-related flows and configurations.
    -   `genkit.ts`: Genkit initialization.
-   `public/`: Static assets like images (though this project primarily uses placeholder URLs).
-   `tailwind.config.ts`: Tailwind CSS configuration.
-   `next.config.ts`: Next.js configuration.

## Customization: Making It Your Own

This website uses placeholder data and images. You'll need to replace these with your actual content.

**IMPORTANT:** Most data is hardcoded directly into the respective components or page files.

### 1. Company Information & Contact Details

-   **Company Name, Email, Phone Number:**
    -   File: `src/components/layout/navbar.tsx` (for top bar and mobile menu)
    -   File: `src/components/layout/footer.tsx`
    -   File: `src/components/sections/contact-section.tsx`
-   **Address:**
    -   File: `src/components/layout/footer.tsx`
    -   File: `src/components/sections/contact-section.tsx`
-   **Site Title & Metadata:**
    -   File: `src/app/layout.tsx` (update the `metadata` object)

### 2. Theme and Styling

-   **Colors, Fonts, Radius:**
    -   File: `src/app/globals.css` (CSS HSL variables for light and dark themes)
    -   File: `tailwind.config.ts` (font families, additional theme extensions)
-   ShadCN UI components are styled using these theme variables.

### 3. Logo & Favicon

-   **Logo Icon (Building2):**
    -   Currently uses `Building2` from `lucide-react`.
    -   Modify in `src/components/layout/navbar.tsx` and `src/components/layout/footer.tsx`. You can replace it with an `<Image>` component if you have an SVG or image logo.
-   **Favicon:**
    -   Next.js looks for `favicon.ico` in the `public` directory by default, or you can define it in `src/app/layout.tsx` metadata. This project does not explicitly create one.

### 4. Images (Placeholders)

-   All images currently use `https://placehold.co/` URLs.
-   **How to Update:**
    1.  Replace the `src` attribute of `next/image` components with the path to your actual images (e.g., `/images/your-image.jpg` if stored in `public/images/`) or a direct URL if hosted elsewhere.
    2.  Update the `alt` text for accessibility.
    3.  **`data-ai-hint` Attribute:** This attribute is present on placeholder images. It contains keywords that were used to suggest image types. You can remove this attribute once you replace the placeholder with your actual image.
-   **Image Locations:**
    -   `src/components/sections/hero-section.tsx` (slides background images)
    -   `src/components/sections/about-section.tsx`
    -   `src/components/sections/projects-gallery.tsx` (project preview images)
    -   `src/components/sections/team-section.tsx` (team member photos)
    -   `src/app/about/page.tsx`
    -   `src/app/projects/page.tsx` (project list images)
    -   `src/app/projects/[id]/page.tsx` (project detail and gallery images)
    -   `src/app/team/page.tsx` (team member photos)

### 5. Hero Section Slides

-   The content (titles, subtitles, button links, and images) for the homepage hero swiper is defined in an array.
-   File: `src/components/sections/hero-section.tsx`
-   Look for the `slidesData` constant.

### 6. About Us Content

-   **Homepage About Section:**
    -   File: `src/components/sections/about-section.tsx` (summary text, core values)
-   **Dedicated About Us Page:**
    -   File: `src/app/about/page.tsx` (company story, mission, vision, detailed core values)

### 7. Projects Data

-   **Homepage Projects Gallery (Preview):**
    -   File: `src/components/sections/projects-gallery.tsx`
    -   The `projects` array contains data for the first few projects shown on the homepage.
-   **All Projects Page:**
    -   File: `src/app/projects/page.tsx`
    -   The `projects` array here should list all your projects for the dedicated projects page.
-   **Individual Project Detail Pages:**
    -   File: `src/app/projects/[id]/page.tsx`
    -   The `projectsData` object maps project IDs to their detailed information (long description, multiple images, category, status, duration, services). You'll need to update this for each project.

### 8. Client Testimonials/Experiences

-   **Homepage Experience Section (Preview):**
    -   File: `src/components/sections/experience-section.tsx`
    -   The `testimonials` array contains a few featured testimonials.
-   **All Client Experiences Page:**
    -   File: `src/app/experience/page.tsx`
    -   The `testimonials` array here should list all client testimonials.

### 9. Team Members

-   **Homepage Team Section (Preview):**
    -   File: `src/components/sections/team-section.tsx`
    -   The `teamMembers` array shows a few key team members.
-   **All Team Members Page:**
    -   File: `src/app/team/page.tsx`
    -   The `teamMembers` array here should list all team members with their details (name, role, image, bio, social links).

### 10. Form Submissions

-   Contact and Project Inquiry forms use Next.js Server Actions.
-   File: `src/app/actions.ts` (contains `submitContactForm`)
-   Currently, `submitContactForm` only logs the data to the console and simulates success.
-   **To make forms functional:** You need to integrate this action with your backend, an email service (like SendGrid, Resend), or a CRM. Modify the logic inside `submitContactForm` to send the data where it needs to go.

## AI Features (Genkit)

-   This project is set up with Genkit (`@genkit-ai/googleai`) for potential AI features.
-   The Genkit configuration is in `src/ai/genkit.ts`.
-   The `src/ai/dev.ts` file is where you would import and develop your Genkit flows.
-   No specific AI features are implemented in the current version of the site, but the foundation is there if you wish to add AI-powered functionalities (e.g., project cost estimation, design suggestions, AI chat support).

## Deployment

This Next.js application can be deployed to any platform that supports Node.js applications, such as:
- Vercel (Recommended for Next.js)
- Netlify
- Firebase Hosting (with Cloud Functions or Cloud Run for Next.js backend features)
- AWS Amplify
- DigitalOcean App Platform

Refer to the Next.js deployment documentation and the documentation of your chosen hosting provider for specific instructions. The `apphosting.yaml` file suggests configuration for Firebase App Hosting.

---

This README should provide a good starting point for understanding and customizing your Om Radhey Construction website. Happy building!
