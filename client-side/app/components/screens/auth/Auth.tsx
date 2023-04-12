import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import Layout from '@/layout/Layout'
import { IEmailPassword } from '@/store/auth/auth.types'
import { useRouter } from 'next/router'
import {FC, useEffect, useState} from 'react'

const Auth: FC = () => {

    const {isLoggedIn} = useAuth()

    const {push} = useRouter()
    useEffect(() =>{
        if(isLoggedIn)   push('/')
    }, [isLoggedIn])

    const [inputData, setInputData] = useState<IEmailPassword>({
        email: '',
        password: ''
    })
    
    const {login, register} = useActions()

    return (
        <Layout title='Auth'>
            <div className='mx-auto w-1/4'>
                <h1 className='font-medium text-2xl mb-2'>Регистрация</h1>
            <input value={inputData.email} className='  bg-[#121111]  block mb-2 outline-none border-none px-3 py-2'
            onChange={(e) => setInputData({...inputData, email: e.target.value})}
            placeholder='Почта'
            />
            <input type='password' value={inputData.password} className=' bg-[#121111]  block mb-2 outline-none border-none px-3 py-2' 
            onChange={(e) => setInputData({...inputData, password: e.target.value})}
            placeholder='Пароль'
            />
            <div>
            </div>
            <button className='btn_link mr-3 text-center' onClick={()=> login(inputData)}>
                Регистрация
            </button>
            <button className='btn_link text-center' onClick={() => register(inputData)}>
                Войти
            </button>
            </div>
        </Layout>
    )
}

export default Auth