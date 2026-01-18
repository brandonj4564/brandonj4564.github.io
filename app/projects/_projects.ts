export interface Project {
    name: string;
    description: string;
    image: string;
    href: string;
    tags: string[];
    dates: string;
    opacity?: number;
    caseStudy?: boolean;
}

// The first 3 projects are shown on the homepage
export const ProjectList: Project[] = [
    {
        name: "MyNextStage",
        description: "An in-development platform that generates personality profiles for job applicants, hiring managers, and teams, then uses matching algorithms to predict candidate–manager fit and model a candidate’s impact on overall team dynamics.",
        image: "/project-images/mynextstage.PNG",
        href: "/projects/mynextstage",
        tags: ["Tailwind CSS", "TypeScript", "Makerkit", "Next.js", "Supabase", "Applied Matching Algorithms", "SaaS"],
        dates: "September 2025 - Present",
        opacity: 0.7,
        caseStudy: true,
    },
    {
        name: "Virtual Cowboy",
        description: "A proof-of-concept mobile app built with Expo to allow farmers to replace their physical fencing with virtual drawn boundaries, simplifying the task of herding cattle.",
        image: "/project-images/virtual-cowboy.png",
        href: "/projects/virtual-cowboy",
        tags: ["React Native", "TypeScript", "Expo", "Figma"],
        dates: "January - May 2024",
        opacity: 0.8,
        caseStudy: true,
    },
    {
        name: "Independent Content Registry",
        description: "A tool which allows creators to license their content for AI to use in training models and get paid for it.",
        image: "/project-images/credtent.png",
        href: "/projects/independent-content-registry",
        tags: ["Tailwind CSS", "TypeScript", "Makerkit", "React Remix", "Supabase", "Figma", "Shadcn UI"],
        dates: "May 2025 - September 2025",
        opacity: 0.9,
        caseStudy: true,
    },
    {
        name: "TinyOS Network",
        description: "Developed a simulated network using TinyOS and NesC, implementing core networking protocols including network flooding, node neighbor discovery, link state routing, and a rudimentary version of TCP.",
        image: "/project-images/tinyos-network.PNG",
        href: "https://github.com/brandonj4564/tinyos-network",
        tags: ["nesC", "TinyOS", "Networks", "TCP"],
        dates: "September - December 2024",
        opacity: 0.7,
        caseStudy: false,
    },
    {
        name: "Rate my Peers",
        description: "A parody web application inspired by Rate My Professor, designed for students to rate each other’s qualities in a rather unflattering way.",
        image: "/project-images/ratemypeers.PNG",
        href: "https://github.com/brandonj4564/rate-my-peers",
        tags: ["Next.js", "TypeScript", "Mantine UI", "Figma", "Flask", "SQLite"],
        dates: "November - December 2024",
        opacity: 0.8,
        caseStudy: false,
    },
    {
        name: "NVI Therapeutics",
        description: "A company website I designed and built for NVI Therapeutics, a biotechnology startup.",
        image: "/project-images/nvi-therapeutics.PNG",
        href: "/projects/nvi-therapeutics",
        tags: ["Next.js", "TypeScript", "Mantine UI", "Figma", "Sanity CMS"],
        dates: "March 2025 - Present",
        opacity: 0.8,
        caseStudy: true,
    },
    {
        name: "Data Browser for UC Merced Woo Lab",
        description: "This project is a Shiny for Python web application that visualizes Zebrafish data collected at UC Merced's Woo Laboratory, providing plots like UMAPs, Feature, and Dot plots.",
        image: "/project-images/woo-data-browser.png",
        href: "https://github.com/brandonj4564/woo-data-browser",
        tags: ["Python", "Shiny", "matplotlib", "scanpy", "R Language"],
        dates: "October - December 2024",
        opacity: 0.9,
        caseStudy: false,
    },
    {
        name: "Novel Site Multipurpose Bot",
        description: "A Discord bot built for a novel translation community which periodically scraped novel metadata from a specific site and stored it in PostgreSQL, while exposing Discord commands for browsing novels, managing translator assignments, and subscribing to update pings.",
        image: "/project-images/novelsitemultipurposebot.PNG",
        href: "https://github.com/brandonj4564/NovelSiteMultipurposeBot",
        tags: ["Discord API", "Node.js", "Javascript"],
        dates: "December 2023 - January 2024",
        opacity: 0.8,
        caseStudy: false,
    },
    {
        name: "The website you're on",
        description: "What? Is there a problem? My portfolio isn't going to pad itself out, so I have to be the hero that does it.",
        image: "/project-images/personal-site.PNG",
        href: "https://github.com/brandonj4564/brandonj4564.github.io",
        tags: ["Next.js", "TypeScript", "Mantine UI", "Figma", "Tailwind CSS", "Framer Motion"],
        dates: "August 2025",
        opacity: 0.9,
        caseStudy: false,
    }
]