import {Children, FC, PropsWithChildren} from 'react'
import cn from  'clsx'

// ? знак означает, что это свойство необязательно

interface IColum {
     size: number
     isCenter?: boolean
     className?: string
     isPadding?:boolean 
     isBorder?:boolean
}

const Colum: FC<PropsWithChildren<IColum>> = ({size, children, isCenter = true, className, isPadding = true, isBorder = true}) => {
    return <div style={{
        gridColumn: `span ${size} / span ${size}`
    }} 
        className={cn('h-full flex items-center', 
        {
            'justify-center': isCenter,
            'p-3': isPadding,
            'border-r-2 border-black border-solid ': isBorder
        },
        className
        )}
        >
            {children}
            </div>        
}

export default Colum