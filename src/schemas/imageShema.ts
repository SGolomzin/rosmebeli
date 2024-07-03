import { z } from "astro:content";

const imageSchema = z.object({
	url: z.string(),
	alt: z.string().optional()
});

const imagesSchema = z.array(imageSchema);

export {
	imageSchema,
	imagesSchema
};
