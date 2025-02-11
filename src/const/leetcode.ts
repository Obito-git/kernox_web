import { type CardEntry } from "@types";


export enum ProblemCategory {
    Easy = "Easy",
}

export const CATEGORY_CARD_ENTRIES: Record<ProblemCategory, CardEntry> = {
    [ProblemCategory.Easy]: {
        title: "Title lol",
        description: "Description of cat.",
        url: `/os/${ProblemCategory.Easy}`,
    },
};


export enum ProblemSubCategory {
    HashMap = "HashMap"
}
