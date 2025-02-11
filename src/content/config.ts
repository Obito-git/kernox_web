import { PostCategory, SubCategory } from "@os/consts";
import type { CardEntry } from "@types";
import { defineCollection, z, type CollectionEntry } from "astro:content";

const os = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.nativeEnum(PostCategory),
    subcategory: z.nativeEnum(SubCategory),
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

export const collections = { os: os };
