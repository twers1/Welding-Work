import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC, useState } from 'react'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { ICartItem } from '@/types/cart.interface'
import { BiMinus, BiPlus, BiTrash } from 'react-icons/bi'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {

	const { removeFromCart, changeQuantity } = useActions()

	const { cart } = useCart()
	const quantity = cart.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<div className='mt-3'>
				<div className='flex items-center gap-3'>
				 <button onClick={() => changeQuantity({ id: item.id, type: 'minus' })} disabled={quantity === 1}>
					<BiMinus fontSize={13} />
				</button>

				<input disabled readOnly value={quantity} className='w-10 bg-black text-center'/>

				<button onClick={() => changeQuantity({ id: item.id, type: 'plus' })}>
					<BiPlus fontSize={13} />
				</button>
				<Button onClick={() => removeFromCart({id: item.id})} className='ml-3 text-red'>
				<BiTrash />
				</Button>
				</div>
			

			
	
		</div>
	)
}

 export default CartActions;
