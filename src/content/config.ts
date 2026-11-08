import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Pablo Candela'),
    readingTime: z.string().default('5 min de lectura'),
    tags: z.array(z.string()).default(['Liderazgo Industrial']),
    image: z.string().default('/images/og-default.jpg'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
