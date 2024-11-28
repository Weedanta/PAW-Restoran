import { Component } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/LandingPage/Hero";
import Profile from "../Components/LandingPage/Profile";
import MenuLandingPage from "../Components/LandingPage/MenuLandingPage";


function Home({ name }) {
    return (
        <main className="flex flex-col">
            <Hero image={"/images/Hero.png"}>
                <h1 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-2 leading-tight">
                    Flavors That Speak <br /> for Themselves
                </h1>
                <p className="text-lg lg:text-xl mb-6 font-medium md:tracking-widest">
                    Experience bold, creative dishes made with fresh, quality<br className="hidden md:block"></br>ingredients. A feast for your senses.
                </p>

                <button className="hover:bg-primary-4 bg-primary-5 text-white text-lg md:text-2xl px-8 py-4 md:px-20 md:py-8 rounded-full shadow-md font-semibold">
                    <p className="tracking-wider">Reserve now!</p>
                </button>

            </Hero>
            <Profile/>
            <MenuLandingPage/>
        </main>
    );
}

export default Home;