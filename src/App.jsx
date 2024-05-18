import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { Routes,Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CartPage } from './pages/CartPage'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/login/login'
import Signup from './components/login/signup'
import { Temp } from './components/Temp'
import { Footer } from './components/Footer'
import AboutUs from './components/AboutUs'
import ContactUs from './components/Contactus'


function App() {
  const [loggedIn,setloggedIn] = useState(false);
  const [user,setuser] = useState({});

  return (
    <>
    <div>
      <div className='text-center bg-red-700 text-white font-semibold text-sm  px-1 py-1'>End of Season Sale is here!!</div>
      <NavBar></NavBar>

      <ToastContainer style={{ position: 'fixed', top: '8rem', right: '2rem' }}></ToastContainer>
      <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/cart' element={<CartPage/>}></Route>
          <Route path='/Aboutus' element={<AboutUs></AboutUs>}></Route>
          <Route path='/Contactus' element={<ContactUs></ContactUs>}></Route>
          <Route
            path='/login'
            element={
              !loggedIn ? (
                <Login setloggedIn={setloggedIn} setuser={setuser} />
              ) : (
                <Temp user={user}></Temp>
              )
            }
          />
          <Route path='/signup' element={<Signup setloggedIn={setloggedIn}/>}></Route>
      </Routes>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
