import { z, defineCollection } from "astro:content";

import {
	imageSchema,
	imagesSchema,
	productDetailsSchema
} from "../schemas";

const catalogCollection = defineCollection({
	type: "content",
	schema: z.object({
		name: z.string(),
		category: z.enum(['Кухни', 'Шкафы', 'Стенки', 'Детские', 'Прихожие', 'Обеденные', 'Рабочие зоны', 'Мебель для ванной']),
		variant: z.string().optional(),
		price: z.number(),
		rating: z.number(),
		isAvailable: z.boolean(),
		images: imagesSchema,
		details: productDetailsSchema,
	})
})

const faqCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string()
	})
});

const postsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		category: z.enum(['Дизайн', 'Интерьер', 'Материалы', 'Советы']),
		pubDate: z.date(),
		excerpt: z.string(),
		ttr: z.number(), // time to read
		image: imageSchema,
	})
})

const reviewsCollection = defineCollection({
	type: "data",
	schema: z.object({
		image: imageSchema.optional(),
		name: z.string(),
		city: z.string(),
		text: z.string(),
		isLongText: z.boolean().optional(),
		rating: z.number()
	})
})

export const collections = {
	catalog: catalogCollection,
	faq: faqCollection,
	posts: postsCollection,
	reviews: reviewsCollection
};