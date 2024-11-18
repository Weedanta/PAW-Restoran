import { Component } from "react";
import Header from "../Components/Header";

function Home({ name }) {
    return (
        <main className="flex flex-col">
            <nav className="w-full h-[10vh] bg-primary-1"></nav>
            <section className="overflow-hidden relative w-full h-[90vh]">
                <img src="/images/Hero.png" alt="Hero" className="w-full" />
            </section>
            <section className="h-screen bg-primary-2 p-10 flex flex-row justify-between">
                <article className="h-full w-[52vw] bg-primary-3">
                    LALAL
                </article>
                <figure className="h-full">
                    <img src="/images/Menu1.png" alt="" className="h-full"/>
                </figure>
            </section>
            <section className="h-screen">

            </section>
            <footer className="h-[50vh] bg-primary-1 px-28 py-16">
                <article className="h-full flex flex-row">
                    <div className="w-[32.3%] h-full flex flex-col text-white">
                        <h1>LOGO</h1>
                        <h3>Urban Feast is a place where bold flavors, fresh ingredients, and creative dishes come together. Join us for a dining experience that celebrates the art of food in a welcoming atmosphere.</h3>
                    </div>
                    <div className="w-[0.05%] h-full bg-white opacity-30"></div>
                    <div className="w-[32.3%] h-full"></div>
                    <div className="w-[0.05%] h-full bg-white opacity-30"></div>
                    <div className="w-[32.3%] h-full"></div>
                    
                </article>
            </footer>
        </main>
    );
}

export default Home