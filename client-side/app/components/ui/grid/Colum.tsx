import {Children, FC, PropsWithChildren} from 'react'
import cn from  'clsx'

// ? знак означает, что это свойство необязательно

interface IColum {
     size: number
     isCenter?: true
     className?: string
}

const Colum: FC<PropsWithChildren<IColum>> = ({size, children, isCenter, className}) => {
    return <div style={{
        gridColumn: `span ${size} / span ${size}`
    }} 
        className={cn('border-r-2 border-black border-solid h-full flex items-center p-3', 
        {
            'justify-center': isCenter,
        },
        className
        )}
        >
            {children}
            </div>        
}

export default Colum