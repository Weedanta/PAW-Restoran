import React from 'react'

const CardMenu = ({title, desc}) => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center px-10 gap-4">
            <h1 className='text-3xl font-semibold'>{title}</h1>
            <p className='text-xl font-semibold leading-6'>{desc}</p>
        </div>
    )
}

export default CardMenu
