import { formatToCurrency } from '@/utils/format-to-currency'
import {FC} from 'react'

const HotSale: FC = () => {
    return(
         <div className='text-gray py-16 px-8'>

        
        <h1 className='text-5xl font-medium mt-5 mb-14 font-serif'>Изготовление навесов, ангаров, заборов</h1>
        <div className="flex items-center justify-between">
            <div>
               <span className='font-normal text-3xl mr-2'>{formatToCurrency(195)}</span> 
               {/*Для перечеркивания цены <span className="line-through opacity-50 text-sm">{formatToCurrency(295)}</span> */}
            </div>
            <button className="border-b border-[rgba(255,255,255,.6)] uppercase text-gray ">Позвонить сейчас</button>
        </div>
        </div>
    )
}

export default HotSale