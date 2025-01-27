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

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Posts.",
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
  X86_64 = "X86_64",
}

export const CATEGORY_CARD_ENTRIES: Record<PostCategory, CardEntry> = {
  [PostCategory.X86]: {
    title: "x86",
    description: "32 bits x86 implementation.",
    url: `/blog/${PostCategory.X86}`,
  },
  [PostCategory.X86_64]: {
    title: "x86_64",
    description: "🚧 Under contruction 🚧",
    url: `/blog/${PostCategory.X86_64}`,
  },
};


export enum SubCategory {
  INTRODUCTION = "Introduction",
  CATEGORY1 = "Category 1",
  CATEGORY2 = "Category 2",
  CATEGORY3 = "Category 3",
  CATEGORY4 = "Category 4",
  CATEGORY5 = "Category 5",
}
