import { OsPostCategory, OsPostSubCategory } from "@const/os";
import { ProblemCategory, ProblemSubCategory } from "@const/leetcode";
import type { CardEntry } from "@types";
import { defineCollection, z, type CollectionEntry } from "astro:content";

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
    title: z.string(),
    description: z.string(),
    category: z.nativeEnum(ProblemCategory),
    subcategory: z.nativeEnum(ProblemSubCategory),
    draft: z.boolean().optional()
  }),
});

export function mapToCardEntry(schema: CollectionEntry<"os">): CardEntry {
  return {
    title: schema.data.title,
    description: schema.data.description,
    url: `/${schema.collection}/${schema.slug}`
  };
}

export const collections = { os: os, leetcode: leetcode };
