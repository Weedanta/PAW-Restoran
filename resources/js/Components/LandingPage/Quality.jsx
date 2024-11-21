import React from "react";

const Quality = ({ title, desc }) => {
    return (
        <div className="flex flex-row justify-center items-center">
            <img src="/images/Centang.svg" alt="" draggable="false"/>
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <p className="text-lg font-semibold">{desc}</p>
            </div>
        </div>
    );
}

export default Quality;