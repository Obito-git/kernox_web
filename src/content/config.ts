import { PostCategory, SubCategory } from "@consts";
import type { CardEntry } from "@types";
import { defineCollection, z, type CollectionEntry } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.nativeEnum(PostCategory),
    subcategory: z.nativeEnum(SubCategory),
    draft: z.boolean().optional()
  }),
});

export function mapToCardEntry(schema: CollectionEntry<"blog">): CardEntry {
  return {
    title: schema.data.title,
    description: schema.data.description,
    url: `/${schema.collection}/${schema.slug}`
  };
}

export const collections = { blog };
