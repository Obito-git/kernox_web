import { type CardEntry } from "@types";

export enum OsPostCategory {
    X86 = "X86",
}

export const OS_CATEGORY_CARD_ENTRIES: Record<OsPostCategory, CardEntry> = {
    [OsPostCategory.X86]: {
        title: "x86",
        description: "32 bits x86 implementation.",
        url: `/os/${OsPostCategory.X86}`,
    },
};


export enum OsPostSubCategory {
    INTRODUCTION = "Introduction",
    DRAFT = "draft"
}
