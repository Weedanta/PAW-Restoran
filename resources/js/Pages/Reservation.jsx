import React from 'react'
import Hero from '../Components/LandingPage/Hero'

const Reservation = () => {
  return (
    <main className='bg-primary-3'>
      <Hero image={"/images/reservation/background.png"}>
        <h1 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-2 leading-tight">
          Make a Reservation
        </h1>
        <p className="text-lg lg:text-xl mb-6 font-medium md:tracking-widest px-5">
          Book your table in just a few minutes and enjoy a special dining experience at <br className='hidden md:block'/> our restaurant.
        </p>

        <button className="hover:bg-primary-4 bg-primary-5 text-white text-lg md:text-2xl px-8 py-4 md:px-20 md:py-8 rounded-full shadow-md font-semibold">
          <p className="tracking-wider">Reserve now!</p>
        </button>
      </Hero>
     
    </main>
  )
}

export default Reservation
