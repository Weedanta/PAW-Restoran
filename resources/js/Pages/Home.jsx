import { Component } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/LandingPage/Hero";
import Profile from "../Components/LandingPage/Profile";


function Home({ name }) {
    return (
        <main className="flex flex-col">
            <div className="h-screen"></div>
            {/* <Hero></Hero>
            <Profile></Profile>
            <section className="h-screen px-10 py-10 bg-primary-2 flex flex-row">
                <div className="bg-primary-3 w-full overflow-hidden">
                    <div className="w-[40%]">
                        <img src="/images/MenuLandingPage/sec1-img1.png" alt="" className="object-cover w-full" />
                    </div>
                    <div className="h-full flex flex-wrap h-50%">
                    </div>
                </div>
            </section>*/}
        </main>
    );
}

export default Home;