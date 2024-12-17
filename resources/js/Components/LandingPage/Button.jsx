import React from 'react'

const Button = ({link, title}) => {
    return (
        <div className=''>
            <a href={link}>
                <button className="bg-primary-4 text-white text-lg md:text-2xl px-8 py-4 md:px-20 md:py-8 rounded-full duration-300 hover:brightness-75 shadow-md font-semibold">
                    <p className="tracking-wider">{title}</p>
                </button>
            </a>
        </div>
    )
}

export default Button
