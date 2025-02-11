import { type Site, type Metadata, type Socials, SitePage } from "@types";


export const SITE: Site = {
    name: "kernOx",
    slug: "rust kernel from scratch",
    email: "anton@kernox.me",
};

export const PAGE_METADATA: Record<SitePage, Metadata> = {
    [SitePage.HOME]: {
        title: "Home",
        description: "Home.",
        url: "/",
    },
    [SitePage.OS]: {
        title: "OS",
        description: "Kernel from scratch.",
        url: "/os",
    },
    [SitePage.ABOUT]: {
        title: "About me",
        description: "My description.",
        url: "/about",
    },
    [SitePage.LEETCODE]: {
        title: "LeetCode",
        description: "My LeetCode solutions.",
        url: "/leetcode",
    },
};

export const SOCIALS: Socials = [
    {
        name: "github",
        href: "https://github.com/Obito-git"
    },
    {
        name: "linkedin",
        href: "https://www.linkedin.com/in/amyroshn/",
    }
];
