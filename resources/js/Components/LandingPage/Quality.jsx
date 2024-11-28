import React from "react";

const Quality = ({ title, desc }) => {
    return (
        <div className="flex flex-row justify-center items-center">
            <img src="/images/Centang.svg" alt="" draggable="false" className="hidden md:block"/>
            <img src="/images/CentangBulet.svg" alt="" draggable="false" className="block md:hidden"/>
            <div className="flex flex-col gap-0 md:gap-1">
                <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
                <p className="text-xs md:text-sm font-semibold">{desc}</p>
            </div>
        </div>
    );
}

export default Quality;