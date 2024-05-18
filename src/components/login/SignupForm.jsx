import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SignupForm = ({ setloggedIn }) => {
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    phone:"",
    address:"",
    email: "",
    password: "",
  });

  const [showpass, setshowpass] = useState(false);

  const signup = async (data) => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
  
    const savedUserResponse = await fetch(
      `${baseUrl}/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );
  
    const responseData = await savedUserResponse.json(); // Parse response JSON
  
    console.log("FORM RESPONSE......", responseData);
    if (savedUserResponse.status === 400 && responseData.success === false) {
      toast.warning("User already exists. Please try a different email."); // Show user exists message
    } else if (savedUserResponse.ok) {
      toast.success("Signed up Successfully!!"); // Show success message in toast
      navigate("/"); // Navigate only on success
    } else {
      toast.error("An error occurred. Please try again later."); // Show generic error message
    }
  };
  
  function changehandler(event) {
    setformdata((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  
  async function submithandler(event) {
    event.preventDefault();
    console.log(formdata);
    await signup(formdata); // Wait for signup to complete
  }
  
  return (
    <div className="">
      <form onSubmit={submithandler} className="">
        <div className="flex gap-2 my-4">
        <label htmlFor="firstname" className="">
          Firstname<sup>*</sup>
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Enter First Name"
          onChange={changehandler}
          value={formdata.firstname}
          className=" w-[7.5rem] text-sm px-1 h-10 rounded border-2 border-black"
        />
        <label htmlFor="lastname" className="">
          Lastname<sup>*</sup>
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Enter Last Name"
          onChange={changehandler}
          value={formdata.lastname}
          className="w-[7.5rem] text-sm px-1 h-10 rounded border-2 border-black"
        />
        </div>
        <label htmlFor="phone" className="mr-8">
          Phone<sup>*</sup></label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter Phone no."
          onChange={changehandler}
          value={formdata.phone}
          className="mb-4 text-sm px-1 h-10 w-56 rounded border-2 border-black"
          pattern="[0-9]{10}"
          title="Please enter a 10-digit phone number"
          required
          onInvalid={(e) => e.target.setCustomValidity('Please enter a 10-digit phone number')} // Set custom error message
  onInput={(e) => e.target.setCustomValidity('')} 
        />
        <br />
        <label htmlFor="address" className="mr-5">
          Address<sup>*</sup></label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Enter Address"
          onChange={changehandler}
          value={formdata.address}
          className="mb-4 text-sm px-1  h-10 w-56 rounded border-2 border-black"
          required
        />
        <br />
        <label htmlFor="email" className="mr-8">
          E-mail<sup>*</sup></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={changehandler}
          value={formdata.email}
          className="mb-4 text-sm px-1 h-10 w-56 rounded border-2 border-black"
          required
        />

        <div className="relative">
          <label htmlFor="password" className="mr-2">
            Password<sup>*</sup>
          </label>
          <input
            type={showpass ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={changehandler}
            value={formdata.password}
            className="text-sm px-1  h-10 w-56 rounded border-2 border-black"
            required         
             />
          <span className="absolute left-[17.50rem] bottom-[0.60rem] " onClick={() => setshowpass((prev) => !prev)}>
            {showpass ? <AiOutlineEyeInvisible size='1.25em'/> : <AiOutlineEye size='1.25em' />}
          </span>
        </div>
        <div className="flex justify-center items-center mt-8">
          <button className="bg-green-700 hover:bg-green-300 text-white font-bold py-1 px-4 rounded w-screen">
            <p>Create Account</p>
          </button>
        </div>
        <div className="text-center">
         <Link to='/login'>
              <span className="underline text-green-700">Already have an account?</span>
          </Link>
        </div>
      </form>
    </div>
  );
};
