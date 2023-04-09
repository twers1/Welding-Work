import { IProductsPage } from '@/../pages'
import Layout from '@/layout/Layout'
import Colum from '@/ui/grid/Colum'
import Row from '@/ui/grid/Row'
import Image from 'next/image'
import {FC} from 'react'

const Shop: FC<IProductsPage> = ({products}) => {
    return (
        <Layout
			title='Shop'
			description='Catalog'
		>
			<Row className='bg-primary'>
                {products.map((product, index)   => (
                   <Colum size={index === 0 ? 3 : 3} key={product.id}>
                    <div className='text-gray'>
                        <Image alt={product.name} src={product.images[0]} width={220} height={220} />
                        <h3>{product.name}</h3>
                        <div className=''>ОТ {product.price} РУБ</div>
                        <button>Добавить в корзину</button>
                    </div>
                   </Colum> 
                ))}
				
			</Row>

			
		</Layout>
    )
}

export default Shop