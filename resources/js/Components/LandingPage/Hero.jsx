import React from "react";

const Hero = ({image, children}) => {
    return (
        <section className="overflow-hidden relative w-full h-[90vh]">
                <img src={image} alt="Hero" className="w-full relative z-0 brightness-50 object-cover" draggable='false' />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-opacity-50 sm:gap-2 md:gap-4 lg:gap-6 pb-12">
                    {children}
                </div>
            </section>
    );
}

export default Hero;