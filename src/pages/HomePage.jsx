import React, { useState, useEffect, useRef } from 'react';
import { Product } from '../components/Product';
import CarousImg from '../components/CarousImg';
import PromoSection from '../components/PromoSection';
import sale from '../assets/sale.jpg';

export const HomePage = () => {
  const [sproducts, setproducts] = useState([]);
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const getAllData = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const getProduct = await fetch(
        `${baseUrl}/products`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const res = await getProduct.json();
      setproducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div className="relative h-[25rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem]">
        <img src={sale} alt="sale" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 px-4">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">One Stop Shop!!</h1>
          <p className="text-white text-base md:text-lg mb-6">Indian home grown brand to provide you better</p>
          <button
            className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300"
            onClick={scrollToSection}
          >
            Shop Now
          </button>
        </div>
      </div>
      <div ref={sectionRef} className="px-4 md:px-16">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-light font-serif mt-8">Featured Products</h1>
        <br />
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-3 mb-5 justify-items-center">
          {sproducts.map((item) => (
            <Product key={item.id} props={item} />
          ))}
        </div>
      </div>
      <CarousImg />
      <PromoSection />
    </>
  );
};
