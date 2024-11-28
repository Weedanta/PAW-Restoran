import React, { Children } from 'react'

const OpeningSchedule = ({ title, children }) => {
    return (
        <div className='space-y-4'>
            <h3 className='text-xl font-medium'>{title}</h3>
            {children}
        </div>
    )
}

export default OpeningSchedule
