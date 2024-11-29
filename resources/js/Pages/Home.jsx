import { Component } from "react";
import Hero from "../Components/LandingPage/Hero";
import Profile from "../Components/LandingPage/Profile";
import MenuLandingPage from "../Components/LandingPage/MenuLandingPage";
import Button from "../Components/LandingPage/Button";


function Home() {
    return (
        <main className="flex flex-col">
            <Hero image={"/images/Hero.png"}>
                <h1 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-2 leading-tight">
                    Flavors That Speak <br /> for Themselves
                </h1>
                <p className="text-lg lg:text-xl mb-6 font-medium md:tracking-widest">
                    Experience bold, creative dishes made with fresh, quality<br className="hidden md:block"></br>ingredients. A feast for your senses.
                </p>
                <Button
                link={"/reservation"}
                title={"Reserve Now!"}
                />

            </Hero>
            <Profile />
            <MenuLandingPage />
        </main>
    );
}

export default Home;