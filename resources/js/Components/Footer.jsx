const Footer = () => {
    return (
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
    );
}

export default Footer;