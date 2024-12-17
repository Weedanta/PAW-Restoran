import React from 'react'

const CardMenu = ({title, desc}) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-10 gap-2 md:gap-4 bg-primary-3 hover:scale-105 duration-300">
            <h1 className='text-2xl  md:text-3xl font-semibold'>{title}</h1>
            <p className='text-lg md:text-xl font-semibold leading-6'>{desc}</p>
        </div>
    )
}

export default CardMenu
