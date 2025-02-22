import { type CardEntry } from "@types";
import { PAGE_METADATA } from "./global";


export enum ProblemCategory {
    ARRAY_AND_HASHING = "Arrays & Hashing",
    STACK = "Stack",
    TWO_POINTERS = "Two pointers"
}

export const CATEGORY_CARD_ENTRIES: Record<ProblemCategory, CardEntry> = {
    [ProblemCategory.ARRAY_AND_HASHING]: {
        title: ProblemCategory.ARRAY_AND_HASHING,
        url: `${PAGE_METADATA.leetcode.url}/${ProblemCategory.ARRAY_AND_HASHING}`,
    },
    [ProblemCategory.STACK]: {
        title: ProblemCategory.STACK,
        url: `${PAGE_METADATA.leetcode.url}/${ProblemCategory.STACK}`,
    },
    [ProblemCategory.TWO_POINTERS]: {
        title: ProblemCategory.TWO_POINTERS,
        url: `${PAGE_METADATA.leetcode.url}/${ProblemCategory.TWO_POINTERS}`,
    },
};

// Leetcode topic
export enum ProblemSubCategory {
    HASH_TABLE = "Hash Table",
    ARRAY = "Array",
    STACK = "Stack",
    DESIGN = "Design",
    TWO_POINTERS = "Two pointers",
    DYN_PROGRAMMING = "Dynamic programming",
    MONOTONIC_STACK = "Monotonic Stack",
    STRING = "String",
    MATH = "Math",
    SORTING = "Sorting",
    DEVIDE_AND_CONQUER = "Devide and Conquer",
    HEAP_PRIORIRY_QUEUE = "Heap (Priority Queue)",
    BUCKET_SORT = "Bucket Sort",
    COUNTING = "Counting",
    QUICK_SELECT = "Quick select"
}

export enum ProblemDifficulty {
    EASY = "Easy",
    MEDIUM = "Medium",
    HARD = "Hard"
}

export const difficultyOrder = {
    Easy: 0,
    Medium: 1,
    Hard: 2,
};
