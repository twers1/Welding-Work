import Colum from '@/ui/grid/Colum'
import Row from '@/ui/grid/Row'
import {FC} from 'react'
import Image from 'next/image'

const HomeInformation: FC = () => {
    return (
        <Row isBorder={false}>
            <Colum size={4}  className='flex-col border-t-2 border-black border-r-2 py-14'>
                <div className=''>Наши навесы</div>
            <Image src='/images/arrival.jpg' alt='' width={200} height={100} />
            </Colum>
            <Colum size={8} className='flex-col border-t-2 border-black' isBorder={false} >
                <div>Наши заборы</div>
            <Image src='/images/zabor.jpg' alt='' width={300} height={100} />
            </Colum>
        </Row>
    )
}

export default HomeInformation