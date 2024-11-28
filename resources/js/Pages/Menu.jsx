import React from 'react'
import Hero from '../Components/LandingPage/Hero'


const OurMenu = () => {
  return (
    <main>
      <Hero image={"/images/Menu/Hero.png"}>
        <h1 className="text-3xl md:text-5xl font-semibold">
          Promo of the Day
        </h1>
        <h1 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-2">
          Get a discount on all our menu
        </h1>
      </Hero>
    </main>
  )
}

export default OurMenu
