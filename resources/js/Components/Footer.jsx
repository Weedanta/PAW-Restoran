const Footer = () => {
    return (
        <footer className="bg-primary-1 px-6 md:px-28 py-10 md:py-16">
            <article className="flex flex-col md:flex-row gap-10 text-white">
                {/* Logo and Description */}
                <div className="flex flex-col md:items-start gap-4 w-full md:w-[40%]">
                    <img src="/images/Logo.png" alt="Logo" className="h-20 w-20 md:h-28 md:w-28" draggable='false'/>
                    <h3 className="font-normal text-justify text-lg md:text-xl">
                        Urban Feast is a place where bold flavors, fresh ingredients, and creative dishes come together. Join us for a dining experience that celebrates the art of food in a welcoming atmosphere.
                    </h3>
                    <p className="mt-3">©UrbanFeast</p>
                </div>

                {/* Divider Line */}
                <div className="hidden md:block w-px bg-gray-400 opacity-50"></div>

                {/* Contact Information */}
                <div className="w-full md:w-[35%] flex flex-col md:items-start md:justify-center gap-5 md:px-8 ">
                    <div className="flex md:flex-col gap-6 md:gap-0 ">
                        <h3 className="text-lg md:text-xl font-bold ">Phone</h3>
                        <p className="text-base md:text-lg font-normal">+62-8759 - 920 - 101</p>
                    </div>
                    <div className="flex md:flex-col gap-8 md:gap-0 ">
                        <h3 className="text-lg md:text-xl font-bold">Email</h3>
                        <p className="text-base md:text-lg font-normal">urban_feast@gmail.com</p>
                    </div>
                    <div className="flex md:flex-col gap-4 md:gap-0 ">
                        <h3 className="text-lg md:text-xl font-bold">Alamat</h3>
                        <p className="text-base md:text-lg font-normal md:text-left">
                            Cosco Street Avenue, Jl. Pantai Indah Kapuk 2, Kapuk, Jakarta Utara.
                        </p>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="hidden md:block w-px bg-gray-400 opacity-50"></div>

                {/* Social Media Links */}
                <div className="w-full md:w-[24%] flex md:flex-col justify-center items-center md:items-start gap-4 md:px-8 md:justify-center">
                    <div className="flex items-center gap-3">
                        <img src="/images/SocialMedia/instagram.svg" alt="Instagram" className="h-6 w-6" />
                        <p className="hidden md:block">@UrbanFeast</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src="/images/SocialMedia/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
                        <p className="hidden md:block">Urbanfeast</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src="/images/SocialMedia/tiktok.svg" alt="TikTok" className="h-6 w-6" />
                        <p className="hidden md:block">@urbanfeastt</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src="/images/SocialMedia/line.svg" alt="Line" className="h-6 w-6" />
                        <p className="hidden md:block">@urban_feast</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src="/images/SocialMedia/twitter.svg" alt="Twitter" className="h-6 w-6" />
                        <p className="hidden md:block">@urban.feast</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src="/images/SocialMedia/youtube.svg" alt="YouTube" className="h-6 w-6" />
                        <p className="hidden md:block">Urban Feast</p>
                    </div>
                </div>
            </article>
        </footer>
    );
};

export default Footer;
