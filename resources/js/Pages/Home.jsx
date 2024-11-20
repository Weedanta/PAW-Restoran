import { Component } from "react";
import Header from "../Components/Header";

function Home({ name }) {
    return (
        <main className="flex flex-col">
            <nav className="w-full h-[10vh] bg-primary-1"></nav>
            <section className="overflow-hidden relative w-full h-[90vh]">
                <img src="/images/Hero.png" alt="Hero" className="w-full relative z-0 brightness-50" draggable='false' />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-opacity-50 gap-10">
                    
                    <h1 className="text-6xl font-semibold mb-2 leading-tight">
                        Flavors That Speak <br /> for Themselves
                    </h1>
                    <p className="text-3xl mb-6 font-medium tracking-widest">
                        Experience bold, creative dishes made with fresh, quality<br></br>ingredients. A feast for your senses.
                    </p>
                    <button className="bg-primary-4 text-white text-3xl px-20 py-8 rounded-full shadow-md font-semibold">
                        Reserve now!
                    </button>
                </div>
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
                <article className="h-full flex flex-row gap-10  text-white">
                    <div className="w-[40%] h-full flex flex-col gap-4">
                        <img src="/images/Logo.png" alt="" className="h-28 w-28" />
                        <h3 className="font-normal text-2xl text-justify">Urban Feast is a place where bold flavors, fresh ingredients, and creative dishes come together. Join us for a dining experience that celebrates the art of food in a welcoming atmosphere.</h3>
                        <p className="mt-3">©UrbanFeast</p>
                    </div>
                    <div className="w-[0.05%] h-full bg-white opacity-30"></div>
                    <div className="w-[35%] h-full flex flex-col gap-5 px-10 align-middle justify-center">
                        <div className="">
                            <h3 className="text-2xl font-bold">Phone</h3>
                            <p className="text-xl font-normal">+62-8759 - 920 - 101</p>
                        </div>
                        <div className="">
                            <h3 className="text-2xl font-bold">Email</h3>
                            <p className="text-xl font-normal">urban_feast@gmail.com</p>
                        </div>
                        <div className="">
                            <h3 className="text-2xl font-bold">Alamat</h3>
                            <p className="text-xl font-normal">Cosco Street Avenue, Jl. Pantai Indah Kapuk 2, Kapuk, Jakarta Utara.</p>
                        </div>
                    </div>
                    <div className="w-[0.05%] h-full bg-white opacity-30"></div>
                    <div className="w-[24%] h-full flex flex-col justify-center font-bold gap-4 pl-12">
                        <div className="flex flex-row gap-2">
                            <img src="/images/SocialMedia/instagram.svg" alt="" />
                            <p>@UrbanFeast</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <img src="/images/SocialMedia/linkedin.svg" alt="" />
                            <p>@UrbanFeast</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <img src="/images/SocialMedia/tiktok.svg" alt="" />
                            <p>@UrbanFeast</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <img src="/images/SocialMedia/line.svg" alt="" />
                            <p>@UrbanFeast</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <img src="/images/SocialMedia/twitter.svg" alt="" />
                            <p>@UrbanFeast</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <img src="/images/SocialMedia/youtube.svg" alt="" />
                            <p>@UrbanFeast</p>
                        </div>

                    </div>

                </article>
            </footer>
        </main>
    );
}

export default Home