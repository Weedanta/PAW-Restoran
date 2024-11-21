import React from "react";

const Hero = () => {
    return (
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
    );
}

export default Hero;