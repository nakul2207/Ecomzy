import React from 'react';
import sher from '../assets/sher.jpg';
import hrs from '../assets/hrs.jpg';
import delivery from '../assets/delivery.jpg';

const PromoSection = () => {
    return (
        <div className="p-8 bg-gray-100">
            <div className="flex flex-col md:flex-row justify-around items-center my-2 space-y-8 md:space-y-0">
                <div className="text-center max-w-xs">
                    <div className="mb-4">
                        <img src={hrs} alt="Shipping Icon" className="w-32 h-24 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">SHIPPING WITHIN 48 HOURS</h3>
                    <p className="text-sm text-gray-600">Your order will be shipped within 48 hours from the time since order is placed!</p>
                </div>
                <div className="text-center max-w-xs">
                    <div className="mb-4">
                        <img src={delivery} alt="Delivery Icon" className="w-28 h-24 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">5% OFF || FREE DELIVERY</h3>
                    <p className="text-sm text-gray-600">5% OFF on Pre-paid orders. Free delivery on COD orders above ₹1499.</p>
                </div>
                <div className="text-center max-w-xs">
                    <div className="mb-4">
                        <img src={sher} alt="Made in India Icon" className="w-28 h-24 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">MADE IN INDIA</h3>
                    <p className="text-sm text-gray-600">Our products are 100% made in India. From raw fabric to the final product!</p>
                </div>
            </div>
        </div>
    );
}

export default PromoSection;
