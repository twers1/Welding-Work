import { Product } from '@prisma/client'

export interface IProductPart extends Pick<Product, 'name' | 'images'> {}

export const products: IProductPart[] = [
	{
		name: 'Откатные ворота',
		images: [
			'/uploads/images/products/vorota.jpg'
		]
	},
	{
		name: 'Заборы',
		images: ['/uploads/images/products/zabor.jpg']
	},
	{
		name: 'Навесы',
		images: ['/uploads/images/products/arrival.jpg']
	},
	{
		name: 'Ангары',
		images: ['/uploads/images/products/angar1.jpg']
	}
]
