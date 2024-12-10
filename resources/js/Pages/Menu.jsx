import React from 'react'
import Hero from '../Components/LandingPage/Hero'


const OurMenu = ({menus}) => {
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
      {menus.map(menu => 
        <div>{menu.nama_menu}</div>
      )}
    </main>
  )
}

export default OurMenu
