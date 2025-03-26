import {Routes, Route } from "react-router";
import Home from './Components/Home';
import Explore from './pages/explore';
import Lifestyle from './pages/lifestyle';
import Counsel from './pages/counsel';
import Navbar from './Components/Navbar';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./Components/Footer";

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <>
    <Navbar/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/lifestyle" element={<Lifestyle/>}/>
        <Route path="/counsel" element={<Counsel/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  ) : null
}

export default App
