import React from 'react'
import Button from '../LandingPage/Button'

const Description2 = () => {
    return (
        <section className='h-full md:h-screen w-full md:p-28 px-4 py-6 bg-primary-2 flex   items-center' >
            <div className="w-full flex justify-between items-center gap-4 md:gap-10 lg:gap-16 flex-col-reverse md:flex-row">
                <article className='text-white flex flex-col text-center md:text-justify gap-6 md:gap-10 px-6 md:px-0'>
                    <h1 className='text-4xl font-semibold'>A Taste of Our Journey!</h1>
                    <p className='text-xl md:text-2xl'>Since 2015, we’ve been crafting unforgettable dishes that blend tradition with innovation. Our menu reflects the journey of Urban Feast, featuring flavors that have evolved over the years while staying true to our commitment to fresh, high-quality ingredients. Explore our menu and taste the story behind every dish.</p>
                    <Button 
                    link={"/menu"}
                    title={"See Our Menu!"}
                    />
                </article>
                <img src="/images/aboutUs/menu.png" alt="" className="object-cover h-full" draggable="false" />
            </div>
        </section>
    )
}

export default Description2
