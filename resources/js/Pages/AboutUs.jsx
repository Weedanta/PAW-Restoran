import React from 'react'
import Hero from '../Components/LandingPage/Hero'
import Description from '../Components/AbousUs/Description'
import Description2 from '../Components/AbousUs/Description2'



const AboutUs = () => {
  return (
    <main>
      <Hero image={"/images/Reservation/background.png"}>
        <h1 className="text-3xl md:text-5xl font-semibold">
          Uncover the Essence of
        </h1>
        <h1 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-2">
          Who We Truly Are and What Sets Us Apart.
        </h1>
      </Hero>
      <Description/>
      <Description2/>


    </main>
  )
}

export default AboutUs
