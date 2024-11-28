import React from 'react'

const MenuLandingPage = () => {
    return (
        <section className="h-screen px-10 py-10 bg-primary-2">
            <div className="bg-primary-3 w-full h-full flex">
                <div className="w-[40%] h-full relative overflow-hidden">
                    <img src="/images/MenuLandingPage/sec1-img1.png" alt="" className="object-cover w-full" />
                </div>
                <div className="h-screen w-[60%] grid grid-cols-3">
                    <div className="h-[50%] w-full overflow-hidden">Halooo</div>
                    <div className="h-[50%] w-full  ">Halo</div>
                    <div className="h-[50%] w-full overflow-hidden">Halo</div>
                    <div className="h-[50%] w-full  ">Halo</div>
                    <div className="h-[50%] w-full overflow-hidden">Halo</div>
                    <div className="h-[50%] w-full  ">Halo</div>
                </div>
            </div>
        </section>
    )
}

export default MenuLandingPage
