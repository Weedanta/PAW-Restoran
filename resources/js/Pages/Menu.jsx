import React from 'react';
import Hero from '../Components/LandingPage/Hero';

const OurMenu = ({ menus }) => {
  // Group menus by category
  const groupedMenus = menus.reduce((acc, menu) => {
    acc[menu.kategori] = acc[menu.kategori] || [];
    acc[menu.kategori].push(menu);
    return acc;
  }, {});

  return (
    <main>
      <Hero image={"/images/Menu/Hero.png"}>
        <h1 className="text-3xl md:text-5xl font-semibold">
          Promo of the Day
        </h1>
        <h1 className="text-3xl md:text-5xl font-semibold mb-8 md:mb-2">
          Get a discount on all our menu
        </h1>
      </Hero>

      {/* Menu Sections */}
      <div className="container mx-auto px-6 md:px-28 py-4 md:py-14 bg-gradient-to-tr from-primary-3 to-primary-5 ">
        {Object.entries(groupedMenus).map(([category, items], index) => (
          <React.Fragment key={category}>
            {index > 0 && (
              <div className="my-8 border-t-4 border-black w-full mx-auto"></div>
            )}
            <section className="mb-12 ">
              <h2 className="text-4xl font-bold text-center mb-6 ">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((menu) => (
                  <div
                    key={menu.id}
                    className="bg-primary-7 w-full brightness-75 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-2">{menu.nama_menu}</h3>
                      <p className="text-gray-500 text-sm mb-4">
                        {menu.deskripsi || 'No description provided.'}
                      </p>
                      <div className="text-red-600 font-bold text-lg">
                        Rp {menu.harga.toLocaleString('id-ID')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </React.Fragment>
        ))}
      </div>
    </main>
  );
};

export default OurMenu;
