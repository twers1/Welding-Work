
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC, useRef, useState } from 'react'

import { useCart } from '@/hooks/useCart'

import { BiShoppingBag } from 'react-icons/bi'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import { PaymentService } from '@/services/PaymentService'
import SquareButton from '@/ui/square-button/SquareButton'
import { useOutSide } from '@/hooks/useOutside'
import cn from 'clsx'

const Cart: FC = () => {
	const {isShow, setIsShow, ref} = useOutSide(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const { cart, total } = useCart()

	const { push } = useRouter()

	const { mutate } = useMutation(
		['create payment'],
		() => PaymentService.createPayment(total),
		{
			onSuccess(data) {
				push(data.confirmation.confirmation_url)
			}
		}
	)

	return (
		<div className='relative' ref={ref}>
			<SquareButton Icon={BiShoppingBag} onClick={() => {setIsShow(!isShow)}} number={5} />

			<div className={cn('absolute top-[4.2rem] w-80 -left-[12.5rem] bg-[#131313] px-5 py-3 text-sm menu', 
			isShow ? 'open-menu' : 'close-menu'
			)}	
			>
				
					
					<div className='font--normal mb-5 text-lg'>Моя Корзина</div>

					
						<div className={styles.cart}>
							{cart.length ? (
								cart.map(item => <CartItem item={item} key={item.id} />)
							) : (
								<div className='font-light'>Корзина пуста!</div>
							)}
						</div>
					

					
						<div className={styles.footer}>
							<div>Итоговая сумма:</div>
							<div>total</div>
						</div>
						<div className='text-center'>
						<button onClick={() => mutate()} className='btn_link mt-5 mb-2'>
							Payment
						</button>
						</div>
					
			</div>
		</div>
	)
}

export default Cart
