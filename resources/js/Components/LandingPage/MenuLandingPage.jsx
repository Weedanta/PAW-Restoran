import React from 'react'
import CardMenu from './CardMenu'


const MenuLandingPage = () => {
    return (
        <section className="h-full px-10 pb-10 bg-primary-2">
            <div className="bg-primary-3 w-full h-screen flex">
                <div className="w-[40%] h-full relative overflow-hidden">
                    <img src="/images/MenuLandingPage/sec1-img1.png" alt="" className="object-cover w-full" />
                </div>
                <div className="h-screen w-[60%]">
                    <div className="h-[50%] grid grid-cols-3">
                        <div className="h-full w-full overflow-hidden bg-black">
                            <img src="/images/MenuLandingPage/menu1.png" alt="" className="object-cover w-full" />
                        </div>
                        <CardMenu
                            title={"Savory Lasagna"}
                            desc={"Layers of rich, creamy sauce, tender pasta, and seasoned meats. A comforting dish that’s both hearty and satisfying."}
                        />
                        <div className="h-full  w-full overflow-hidden bg-black">
                            <img src="/images/MenuLandingPage/menu1.png" alt="" className="object-cover w-full" />
                        </div>
                    </div>
                    <div className="h-[50%] grid grid-cols-3">
                        <CardMenu
                            title={"Pizza Perfection"}
                            desc={"A thin, crispy crust topped with fresh ingredients, baked to golden perfection. Every bite is a celebration of flavor."}
                        />
                        <div className="h-full  w-full overflow-hidden bg-black">
                            <img src="/images/MenuLandingPage/menu1.png" alt="" className="object-cover w-full" />
                        </div>
                        <CardMenu
                        title={"Bold Steak & Spicy Wings"}
                        desc={"Juicy, tender steaks grilled to your liking, paired with our fiery spicy wings—perfect for those who crave bold flavors."}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MenuLandingPage
