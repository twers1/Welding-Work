import {Children, FC, PropsWithChildren} from 'react'

const Colum: FC<PropsWithChildren<{size: number}>> = ({size, children}) => {
    return <div className={`col-span-${size}`}>
        {children}
        </div>
}

export default Colum