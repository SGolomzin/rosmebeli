import { z } from "astro:content";

const productDetailsSchema = z.object({
	bodyMaterials: z.array(z.string()),
	doorMaterials: z.array(z.string()),
	tableMaterials: z.array(z.string()).optional(),
	accessories: z.array(z.string()),
	timeProduction: z.string(),
	dimensions: z.string().optional(),
	configuration: z.enum(['корпусный', 'встроенный', 'угловой']).optional(),
	profile: z.enum(['симметричный', 'асимметричный']).optional()
})

type ProductDetails = z.infer<typeof productDetailsSchema>;

const productDetailsTraslation: Record<keyof ProductDetails, string> = {
	bodyMaterials: 'Материал корпуса',
	doorMaterials: 'Материал фасада',
	tableMaterials: 'Материал столешницы',
	accessories: 'Фурнитура',
	timeProduction: 'Срок изготовления',
	dimensions: 'Размеры (Ш x В x Г) /  Цвет',
	configuration: 'Конфигурация',
	profile: 'Профиль'
}

export {
	type ProductDetails,
	productDetailsSchema,
	productDetailsTraslation
};
