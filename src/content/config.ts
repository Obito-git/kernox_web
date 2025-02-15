import { OsPostCategory, OsPostSubCategory } from "@const/os";
import { ProblemCategory, ProblemDifficulty, ProblemSubCategory } from "@const/leetcode";
import type { CardEntry, ProblemCardEntry } from "@types";
import { defineCollection, z, type CollectionEntry } from "astro:content";
import type { ContentCollection } from "@const/global";

const os = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.nativeEnum(OsPostCategory),
    subcategory: z.nativeEnum(OsPostSubCategory),
    draft: z.boolean().optional()
  }),
});

const leetcode = defineCollection({
  type: "content",
  schema: z.object({
    num: z.number(),
    title: z.string(),
    category: z.nativeEnum(ProblemCategory),
    subcategories: z.array(z.nativeEnum(ProblemSubCategory)),
    difficulty: z.nativeEnum(ProblemDifficulty),
    url: z.string(),
    draft: z.boolean().optional()
  }),
});

export function mapToCardEntry(schema: CollectionEntry<ContentCollection.OS>): CardEntry {
  return {
    title: schema.data.title,
    description: schema.data.description,
    url: `/${schema.collection}/${schema.slug}`
  };
}

export function mapToProblemCardEntry(schema: CollectionEntry<ContentCollection.LEETCODE>): ProblemCardEntry {
  return {
    title: `${schema.data.num}. ${schema.data.title}`,
    url: `/${schema.collection}/${schema.slug}`,
    difficulty: schema.data.difficulty
  };
}

export const collections = { os: os, leetcode: leetcode };
