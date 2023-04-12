import {FC, PropsWithChildren} from 'react'
import cn from  'clsx'

interface IRow {
    isBorder?: boolean
    className?: string
}

const Row: FC<PropsWithChildren<IRow>> = ({children, className, isBorder = true}) => {
    return <div className={cn('grid w-full grid-cols-12 ',
    {
        'border-b-2 border-black border-solid': isBorder
    },
className
    )}>
        {children}
    </div>
}

export default Row