import { IProductsPage } from '@/../pages'
import Layout from '@/layout/Layout'
import Colum from '@/ui/grid/Colum'
import Row from '@/ui/grid/Row'
import Image from 'next/image'
import {FC} from 'react'
import ProductItem from './ProductItem'

const Shop: FC<IProductsPage> = ({products}) => {
    return (
        <Layout
			title='Shop'
			description='Catalog'
		>
			<Row className='bg-primary'>
                {products.map((product, index)   => (
                   <ProductItem key={product.id} product={product} index={index} />
                ))}
				
			</Row>

			
		</Layout>
    )
}

export default Shop