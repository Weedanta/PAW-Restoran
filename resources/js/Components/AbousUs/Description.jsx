import React from 'react'

const Description = () => {
    return (
        <>
            <section className='h-full md:h-screen bg-primary-3 w-full px-4 md:px-10 flex items-center justify-center py-12 md:pt-0'>
                <div className="h-full  md:h-[72%] w-full bg-primary-1 flex flex-col md:flex-row justify-between px-6 md:px-10 lg:px-16 items-center rounded-3xl text-white gap-12 pt-12 md:pt-0 pb-6 md:pb-0">
                    <article className=''>
                        <p className='font-medium md:text-lg lg:text-3xl text-justify'>Founded in 2015, Urban Feast was born out of a passion for bringing together bold flavors and fresh ingredients in a modern, welcoming atmosphere. Our mission is simple: to offer a dining experience that celebrates creativity, quality, and the joy of great food. From our carefully crafted dishes to the vibrant ambiance, every meal is an invitation to savor something truly special.</p>
                    </article>
                    <img src="/images/aboutUs/description.png" alt="" className="object-cover h-full md:h-[120%]" draggable="false" />
                </div>
                .
            </section>
        </>
    )
}

export default Description
