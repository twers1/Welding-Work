import {FC}  from 'react' 
import Colum from '@/ui/grid/Colum'
import Link from 'next/link'
import Image from 'next/image'

const HeaderLogo: FC = () => {
    return <Colum size={2} isCenter={true}>
        <Link href='/' className='flex items-center'>
				<Image
					src='/images/logo.svg'
					width={100}
					height={100}
					alt='Welding store'
                    className='mr-3'
				/>
            <span>
                <span className='text-white  block font-light traking-[0.13em]'>Сварочные</span>
                <span className='text-sm text-dark-gray  traking-[0.4em] block font-extralight'>Работы</span>
            </span>
			</Link>
           
    </Colum>
}

export default HeaderLogo