import { Component } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/LandingPage/Hero";
import Profile from "../Components/LandingPage/Profile";


function Home({ name }) {
    return (
        <main className="flex flex-col">
            <Hero image={"/images/Hero.png"}>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-2 leading-tight">
                    Flavors That Speak <br /> for Themselves
                </h1>
                <p className="sm:text-base md:text-lg lg:text-xl mb-6 font-medium md:tracking-widest">
                    Experience bold, creative dishes made with fresh, quality<br className="hidden md:block"></br>ingredients. A feast for your senses.
                </p>

                <button className="hover:bg-primary-4 bg-primary-5 text-white text-2xl px-8 py-4 md:px-20 md:py-8 rounded-full shadow-md font-semibold">
                    <p className="tracking-wider">Reserve now!</p>
                </button>

            </Hero>
            {/* <section className="h-screen px-10 py-10 bg-primary-2 flex flex-row">
                <div className="bg-primary-3 w-full overflow-hidden">
                    <div className="w-[40%]">
                        <img src="/images/MenuLandingPage/sec1-img1.png" alt="" className="object-cover w-full" />
                    </div>
                    <div className="h-full flex flex-wrap h-50%">
                    </div>
                </div>
            </section> */}
        </main>
    );
}

export default Home;