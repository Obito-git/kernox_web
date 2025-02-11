import { type CardEntry } from "@types";

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
