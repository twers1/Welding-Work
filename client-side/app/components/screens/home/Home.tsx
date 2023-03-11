import { FC } from 'react'

import Layout from '@/layout/Layout'

import { IProductsPage } from '@/../pages'
import Row from '@/ui/grid/Row'
import Colum from '@/ui/grid/Colum'
import Image from 'next/image'
import HotSale from './hot-sale/HotSale'
import HomeInformation from './home-information/HomeInformation'

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Row className='bg-primary'>
				<Colum size={7} isPadding={false}>
					<Image src='/images/main-4x.png' alt='' width={720} height={628} />
				</Colum>

				<Colum size={5} isPadding={false} isCenter={false} className='flex-col'>
					<HotSale />
					<HomeInformation />
				</Colum>
			</Row>

			
		</Layout>
	)
}

export default Home
