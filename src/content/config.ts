import { z, defineCollection } from "astro:content";

import { productDetailsSchema } from "../schemas";

const catalogCollection = defineCollection({
	type: "content",
	schema: ({ image }) => z.object({
		name: z.string(),
		category: z.enum(['Кухни', 'Шкафы', 'Стенки', 'Детские', 'Прихожие', 'Обеденные', 'Рабочие зоны', 'Мебель для ванной']),
		price: z.number().optional(),
		isAvailable: z.boolean(),
		images: z.array(z.object({
			src: image(),
			alt: z.string().optional()
		})),
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
	schema: ({ image }) => z.object({
		title: z.string(),
		category: z.enum(['Дизайн', 'Интерьер', 'Материалы', 'Советы']),
		pubDate: z.date(),
		excerpt: z.string(),
		ttr: z.number(), // time to read
		cover: image(),
		coverAlt: z.string()
	})
})

const reviewsCollection = defineCollection({
	type: "data",
	schema: ({ image }) => z.object({
		picture: image().optional(),
		name: z.string(),
		city: z.string(),
		text: z.string().refine(text => text.length < 410, { message: 'Отзыв должен быть меньше 410 символов' }),
		rating: z.number()
	})
})

export const collections = {
	catalog: catalogCollection,
	faq: faqCollection,
	posts: postsCollection,
	reviews: reviewsCollection
};