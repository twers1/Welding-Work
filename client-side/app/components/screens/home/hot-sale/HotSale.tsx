import { formatToCurrency } from '@/utils/format-to-currency'
import {FC} from 'react'

const HotSale: FC = () => {
    return(
         <div className='text-gray py-16 px-8'>

        
        <h1 className='text-5xl font-normal mt-5 mb-14 font-serif'>Изготовление навесов, ангаров, заборов и откатных ворот в Краснодаре</h1>
        <div className="flex items-center justify-between">
            <div>
               <span className='font-normal text-3xl mr-2'>ОТ XXXX РУБЛЕЙ</span> 
               {/*Для перечеркивания цены <span className="line-through opacity-50 text-sm">{formatToCurrency(295)}</span> */}
            </div>
            {/* <button className="border-b border-white/20 uppercase text-gray text-sm ">Позвонить сейчас</button> */}
            <a href="tel:+79284100569" className='border-b border-white/20 uppercase text-gray text-sm '>Позвонить сейчас</a>
        </div>
        </div>
    )
}

export default HotSale