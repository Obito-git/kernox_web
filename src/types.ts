import type { ProblemDifficulty } from "@const/leetcode";

export type Site = {
    name: string;
    slug: string;
    email: string;
};

export enum SitePage {
    HOME = "home",
    OS = "os",
    ABOUT = "about",
    LEETCODE = "leetcode",
}

export type Metadata = {
    title: string;
    description: string;
    url: string;
};

export type Socials = {
    name: string;
    href: string;
}[];

export interface CardEntry {
    title: string;
    description?: string;
    url: string;
}

export interface ProblemCardEntry {
    title: string;
    difficulty: ProblemDifficulty;
    url: string;
}