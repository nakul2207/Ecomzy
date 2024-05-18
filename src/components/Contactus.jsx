import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const ContactUs = () => {
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function changeHandler(event) {
        // Update state with the current input values
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        toast.success('Message Sent Successfully!!');
        // Reset form fields after successful submission
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    }

    return (
        <div className="max-w-4xl mx-auto p-6 text-gray-800">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="mb-6">
                We're here to help! Whether you have a question about our products, your order, or anything else, our team is ready to assist you.
            </p>
            <form className="space-y-6" onSubmit={onSubmitHandler}>
                {/* Attach onSubmitHandler to the form's onSubmit event */}
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formdata.name}
                        onChange={changeHandler}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formdata.email}
                        onChange={changeHandler}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formdata.message}
                        onChange={changeHandler}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    ></textarea>
                </div>
                <div className='text-center'>
                    <button
                        type="submit"
                        className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactUs;
