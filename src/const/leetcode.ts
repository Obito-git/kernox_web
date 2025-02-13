import { type CardEntry } from "@types";
import { PAGE_METADATA } from "./global";


export enum ProblemCategory {
    ARRAY_AND_HASHING = "Arrays & Hashing",
    STACK = "Stack"
}

// My categories
export const CATEGORY_CARD_ENTRIES: Record<ProblemCategory, CardEntry> = {
    [ProblemCategory.ARRAY_AND_HASHING]: {
        title: ProblemCategory.ARRAY_AND_HASHING,
        description: "Make it optional.",
        url: `${PAGE_METADATA.leetcode.url}/${ProblemCategory.ARRAY_AND_HASHING}`,
    },
    [ProblemCategory.STACK]: {
        title: ProblemCategory.STACK,
        description: "Make it optional.",
        url: `${PAGE_METADATA.leetcode.url}/${ProblemCategory.STACK}`,
    },
};

// Leetcode topic
export enum ProblemSubCategory {
    HASH_TABLE = "Hash table",
    ARRAY = "Array"
}

export enum ProblemDifficulty {
    EASY = "Easy",
    MEDIUM = "Medium",
    HARD = "Hard"
}
