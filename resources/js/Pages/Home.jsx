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
                    <img src="/images/Menu1.png" alt="" className="h-full" />
                </figure>
            </section>
            <section className="h-screen">

            </section>
            <footer className="h-[50vh] bg-primary-1 px-28 py-16">
                <article className="h-full flex flex-row gap-10">
                    <div className="w-[40%] h-full flex flex-col text-white gap-4">
                        <img src="/images/Logo.png" alt="" className="h-28 w-28" />
                        <h3 className="font-normal text-2xl text-justify">Urban Feast is a place where bold flavors, fresh ingredients, and creative dishes come together. Join us for a dining experience that celebrates the art of food in a welcoming atmosphere.</h3>
                        <p className="mt-3">©UrbanFeast</p>
                    </div>
                    <div className="w-[0.05%] h-full bg-white opacity-30"></div>
                    <div className="w-[35%] h-full text-white">
                        <div className="">
                            <h3 className="text-2xl">Phone</h3>
                            <p className="text-xl">+62-8759 - 920 - 101</p>
                        </div>
                        <div className="">
                            <h3 className="text-2xl">Email</h3>
                            <p className="text-xl">urban_feast@gmail.com</p>
                        </div>
                        <div className="">
                            <h3 className="text-2xl">Alamat</h3>
                            <p className="text-xl">Cosco Street Avenue, Jl. Pantai Indah Kapuk 2, Kapuk, Jakarta Utara.</p>
                        </div>
                    </div>
                    <div className="w-[0.05%] h-full bg-white opacity-30"></div>
                    <div className="w-[24%] h-full"></div>

                </article>
            </footer>
        </main>
    );
}

export default Home