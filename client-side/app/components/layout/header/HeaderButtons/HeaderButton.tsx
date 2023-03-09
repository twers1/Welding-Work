import Colum from '@/ui/grid/Colum';
import SquareButton from '@/ui/square-button/SquareButton';
import {FC} from 'react'
import {IconType} from 'react-icons'
import {BiBell, BiCart, BiSearch} from 'react-icons/bi'

const HeaderButtons: FC = () => {
    return (
    <Colum size={2} className='gap-5'>
        <SquareButton  Icon={BiSearch} onClick={() => {}}/>
        <SquareButton  Icon={BiBell} onClick={() => {}}/>
        <SquareButton  Icon={BiCart} onClick={() => {}} number={5}/>
    </Colum>
    )
}

export default HeaderButtons;