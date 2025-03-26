import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {logout} from '../store/authSlice'
import { useSelector } from "react-redux";
import logoutbtn from '../images/logoutbtn.png'
import { useNavigate } from "react-router-dom";

const Logoutbtn = () => {
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const authStatus = useSelector((state) => state.auth.status);
  const logoutHandler= ()=>{
    authService.logout().then(()=>{
       dispatch(logout())
    }).finally(()=>navigate('/'))

  }
  return (
    authStatus && (<div className="w-10 h-10">
      <button onClick={logoutHandler}>
      <img src={logoutbtn} alt="" />
      </button>
    </div>)
  );
};

export default Logoutbtn;