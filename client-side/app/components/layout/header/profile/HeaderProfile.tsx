import Colum from '@/ui/grid/Colum'
import SquareButton from '@/ui/square-button/SquareButton'
import {FC} from 'react'
import { BiUser } from 'react-icons/bi'

const HeaderProfile: FC = () => {
    return (
    <Colum size={3} className='flex items-center'>
        <SquareButton Icon={BiUser} />
        <div className='ml-3'>
            <div className='text-gray text-sm'>Sima Tarverdyan</div>
        </div>
    </Colum>
    )
}

export default HeaderProfile