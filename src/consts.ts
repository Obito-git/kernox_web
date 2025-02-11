import type { Site, Metadata, Socials, CardEntry } from "@types";

export const SITE: Site = {
  NAME: "kernOx",
  SLUG: "rust kernel from scratch",
  EMAIL: "antonmyroshnychenko@gmail.com",
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Home.",
};

export const OS: Metadata = {
  TITLE: "OS",
  DESCRIPTION: "Kernel from scratch.",
};

export const ABOUT_ME: Metadata = {
  TITLE: "About me",
  DESCRIPTION: "My description.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/Obito-git"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/amyroshn/",
  }
];

export enum PostCategory {
  X86 = "X86",
}

export const CATEGORY_CARD_ENTRIES: Record<PostCategory, CardEntry> = {
  [PostCategory.X86]: {
    title: "x86",
    description: "32 bits x86 implementation.",
    url: `/os/${PostCategory.X86}`,
  },
};


export enum SubCategory {
  INTRODUCTION = "Introduction",
  DRAFT = "draft"
}
