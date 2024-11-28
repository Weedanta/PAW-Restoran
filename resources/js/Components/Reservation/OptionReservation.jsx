import React from 'react'
import OpeningSchedule from './OpeningSchedule'


const day = [
    {
        
    }
]

const OptionReservation = () => {
    return (
        <section className='h-full px-28 py-20 text-white'>
            <div className=" h-screen w-full flex">
                <div className="w-[60%] h-full space-y-10">
                    <h1 className='text-5xl font-semibold'>Hours & Dining Options</h1>
                    <div className="h-full w-full flex">
                        <OpeningSchedule title={"Weekdays"}>
                            <div className="bg-black h-full w-full">lalal</div>
                        </OpeningSchedule>
                        <div className=""></div>
                    </div>
                </div>
                <div className="w-[40%]">
                    <img src="/images/Hero.png" alt="" className="object-cover w-full" draggable="false" />
                </div>

            </div>
        </section>
    )
}

export default OptionReservation
