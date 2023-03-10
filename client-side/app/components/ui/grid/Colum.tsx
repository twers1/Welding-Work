import {Children, FC, PropsWithChildren} from 'react'
import cn from  'clsx'

// ? знак означает, что это свойство необязательно

interface IColum {
     size: number
     isCenter?: true
     className?: string
     isPadding?:boolean 
}

const Colum: FC<PropsWithChildren<IColum>> = ({size, children, isCenter = true, className, isPadding = true}) => {
    return <div style={{
        gridColumn: `span ${size} / span ${size}`
    }} 
        className={cn('border-r-2 border-black border-solid h-full flex items-center', 
        {
            'justify-center': isCenter,
            'p-3': isPadding
        },
        className
        )}
        >
            {children}
            </div>        
}

export default Colum