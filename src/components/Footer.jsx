import React from 'react';
import logo from '../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="flex flex-col lg:flex-row justify-between text-sm mb-8 mx-4 lg:mx-10">
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <img src={logo} alt="logo" className="h-16 mb-4" />
          <div className="flex space-x-4 mt-4">
            <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
            <a href="#"><i className="fab fa-facebook-f fa-2x"></i></a>
            <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
            <a href="#"><i className="fab fa-pinterest fa-2x"></i></a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-20">
          <div className="flex-1">
            <h4 className="border-b-2 border-white pb-2 mb-4 text-center lg:text-left">TRENDING</h4>
            <ul className="text-center lg:text-left">
              <li className="mb-2"><a href="#" className="hover:underline">ACOSTA Collection</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Anime</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Oversized Shirt</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Oversized T-shirt</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Bottoms Women</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Bottoms Men</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Sweatshirts & Hoodies</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Jacket</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="border-b-2 border-white pb-2 mb-4 text-center lg:text-left">INFO</h4>
            <ul className="text-center lg:text-left">
              <li className="mb-2"><a href="#" className="hover:underline">Stores</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Return / Exchange – T&C</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Business</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white pt-8 mt-8 mx-4 lg:mx-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <a href="#" className="block mb-2 hover:underline">Download Our App</a>
            <a href="#" className="hover:underline">Stores Near Me</a>
          </div>
          <div className="flex space-x-4">
            <i className="fab fa-cc-visa fa-2x"></i>
            <i className="fab fa-cc-mastercard fa-2x"></i>
            <i className="fab fa-cc-paypal fa-2x"></i>
            <i className="fab fa-google-pay fa-2x"></i>
            <i className="fab fa-apple-pay fa-2x"></i>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© Ecomzy 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
