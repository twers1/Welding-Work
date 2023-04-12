import { useAuth } from '@/hooks/useAuth'
import Colum from '@/ui/grid/Colum'
import SquareButton from '@/ui/square-button/SquareButton'
import Link from 'next/link'
import {FC} from 'react'
import { BiUser } from 'react-icons/bi'

const HeaderProfile: FC = () => {
    const {isLoggedIn} = useAuth()
    return (
    <Colum size={3} className='flex items-center'>
        {isLoggedIn ? <>
        <SquareButton Icon={BiUser} />
        <div className='ml-3'>
            <div className='text-gray text-sm'>Sima Tarverdyan</div>
            <button className='btn_link'>Выйти из профиля</button>
        </div>
        </> : <Link href="/auth">Регистрация</Link>}
    </Colum>
    )
}

export default HeaderProfile