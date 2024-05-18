import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from 'react-toastify'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const LoginForm = ({ setloggedIn,setuser }) => {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const [showpass, setshowpass] = useState(false);

  
  const login = async (data) => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data }),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        // Successful login
        navigate('/');
        setloggedIn(true);
        const { token, user, message } = responseData;
        console.log(user.firstname);
        setuser(user);
        
        // Store token in localStorage or sessionStorage for future requests
        localStorage.setItem('token', token);
        // You can also store user information if needed
        // localStorage.setItem('user', JSON.stringify(user));
        toast.success(message);
        return { success: true, user };
      } else {
        // Login failed
        toast.error(responseData.message);
        return { success: false, message: responseData.message };
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Login request failed');
      return { success: false, message: 'Login request failed' };
    }
  };
  
  

  function changehandler(event){
    setformdata((prevData)=>({
        ...prevData,
        [event.target.name]:event.target.value
    }))
  }

  async function submithandler(event) {
    event.preventDefault();
    await login(formdata); // Wait for signup to complete
  }

  return (
    <div>
      <form onSubmit={submithandler}>
        <label htmlFor="email" className="mr-8">
          E-mail<sup>*</sup>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={changehandler}
          value={formdata.email}
          className="text-m px-1 h-10 w-56 rounded border-2 border-black"
        />
        <br />

        <div className="relative mt-4">
          <label htmlFor="password" className="mr-2">
            Password<sup>*</sup>
          </label>
          <input
            type={showpass ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={changehandler}
            value={formdata.password}
            className="text-m px-1 h-10 w-56 rounded border-2 border-black"
          />

          <span className="absolute left-[17.50rem] bottom-[0.72rem]" onClick={() => setshowpass((prev) => !prev)}>
            {showpass ? <AiOutlineEyeInvisible size="1.2em" /> : <AiOutlineEye size= "1.2em"/>}
          </span>
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-green-700 hover:bg-green-300 text-white font-bold py-1 px-4 rounded w-screen">
            <p>Login</p>
          </button>
        </div>
        <div className="text-center">
         <Link to='/signup'>
              <span className="underline text-black">Create Account</span>
          </Link>
        </div>
      </form>
    </div>
  );
};
