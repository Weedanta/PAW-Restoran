import React from 'react'

const Button = ({link, title}) => {
    return (
        <div>
            <a href={link}>
                <button className="hover:bg-primary-4 bg-primary-5 text-white text-lg md:text-2xl px-8 py-4 md:px-20 md:py-8 rounded-full shadow-md font-semibold">
                    <p className="tracking-wider">{title}</p>
                </button>
            </a>
        </div>
    )
}

export default Button
