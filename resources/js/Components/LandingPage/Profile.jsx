import React from "react";
import Quality from "./Quality";

const Profile = () => {
    return (
        <section className="h-full md:h-screen bg-primary-2 p-4 md:p-10 flex flex-col-reverse md:flex-row justify-between gap-4 md:gap-0">
            <article className="h-full w-full md:w-[42%] bg-primary-3 flex justify-center items-center px-8 md:px-12 lg:px-16">
                <div className="flex flex-col text-primary-7 gap-4 py-8 md:py-0">
                    <Quality
                        title="Fresh Ingredient"
                        desc="Our dishes are made with locally sourced, premium ingredients, ensuring every bite is fresh and full of flavor."
                    />
                    <Quality
                        title="Bold Flavors"
                        desc="Expect exciting combinations that blend traditional recipes with a modern twist, creating flavors that are both familiar and new."
                    />
                    <Quality
                        title="Creative Presentation"
                        desc="Every dish is thoughtfully presented to not only delight your taste buds but also offer a visual feast that enhances your dining experience."
                    />
                    <Quality
                        title="Perfect Ambience"
                        desc="Enjoy a warm, contemporary atmosphere that makes every meal feel special, whether you’re here for a casual lunch or an evening out with friends."
                    />
                    
                </div>
            </article>
            <figure className="h-full w-full md:w-[56%] overflow-hidden hover:brightness-75 duration-300 hover:scale-105">
                <img src="/images/Menu1.png" alt="" className="w-full object-cover" draggable="false"/>
            </figure>
        </section>
    );
}

export default Profile;