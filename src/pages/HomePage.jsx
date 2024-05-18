import React, { useState,useEffect,useRef } from 'react'
import products from '../data'
import { Product } from '../components/Product'
import CarousImg from '../components/CarousImg'
import PromoSection from '../components/PromoSection'
import sale from '../assets/sale.jpg'


export const HomePage = () => {
  const[sproducts,setproducts] = useState([]);
  const sectionRef = useRef(null);

  const scrollToSection = () => {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const getAllData = async () => {
    try {
      const baseUrl = import.meta.env.VITE_BASE_URL
      // console.log(baseUrl);
      const getProduct = await fetch(
        `${baseUrl}/products`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(getProduct);
      const res = await getProduct.json();
      setproducts(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      console.error(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
    <div className="relative h-[40rem]">
        <img src={sale} alt="sale" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold  mb-4">One Stop Shop!!</h1>
            <p className="text-white text-lg md:text-xl mb-6">Indian home grown brand to provide you better</p>
            <button className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300"
            onClick={scrollToSection}>
                Shop Now
            </button>
        </div>
    </div>
    <br />
    <div ref={sectionRef}>
      <h1 className=' ml-60 mt-2 font-light text-3xl font-serif'>Featured Products</h1>
      <br />
          <div className='grid grid-rows-5 grid-flow-col gap-3 justify-center mt-3 mb-5'>{
                  sproducts.map((item) => {
                  return <Product key={item.id} props ={item}></Product>
              })
          }
      </div>     
    </div>

    <CarousImg></CarousImg>
    <PromoSection></PromoSection>
    </>
  )
}
