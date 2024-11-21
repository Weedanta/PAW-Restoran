import { Component } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/LandingPage/Hero";
import Profile from "../Components/LandingPage/Profile";

function Home({ name }) {
    return (
        <main className="flex flex-col">
            <nav className="w-full h-[10vh] bg-primary-1"></nav>
            <Hero></Hero>
            <Profile></Profile>
            <section className="h-screen px-10 bg-primary-2 flex flex-row">
                <img src="/images/MenuLandingPage/sec1-img1.png" alt="" />
                <div className="bg-white h-full flex flex-wrap h-50%">
                    
                    
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
}

export default Home;