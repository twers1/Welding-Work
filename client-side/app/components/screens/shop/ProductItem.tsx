import { IProduct } from '@/types/product.interface'
import Colum from '@/ui/grid/Colum'
import {FC} from 'react'
import Image from 'next/image'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

interface IProductItem{
    product: IProduct
    index: number
}

const ProductItem: FC<IProductItem>=({index,product}) => {

    const {cart} = useCart()

    const {addToCart, removeFromCart } = useActions()

    const currentElement = cart.find(
        cartItem => cartItem.product.id === product.id 
    )

    return (
        <Colum size={index === 0 ? 3 : 3} >
        <div className='text-gray text-center pb-5'>
            <div className='mb-4 '>
            <Image alt={product.name} src={product.images[0]} width={220} height={220} />
            <h2 className='font-serif mb-2 text-lg'>{product.name}</h2>
            <div className='mb-3'>ОТ {product.price} РУБ</div>
            <button className='btn_link' onClick={() =>
            currentElement
                ? removeFromCart({id: currentElement.id})
                : addToCart({
                    product,
                    quantity: 1
                })
            }>{currentElement ? 'Удалить из корзины' : 'Добавить в корзину'}</button>
            </div>
        </div>
       </Colum> 
    )
}

export default ProductItem