import React, { useState } from 'react';
import{ useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import AxiosService from '../commen/Apiservice';
import '../App.css';

function Forgetpassword() {

  const [email,setEmail]=useState('');
  const navigate=useNavigate();

  const Forgetpassword=async(e)=>{
    e.preventDafault();
    try{

      let res=await AxiosService.post('/user/forget-password',{
        email
      })
      if(res.status == 200){
        toast.success("Reset link send successfully to your email.please check the email ")
      }

    }catch(error){
        console.log(error);
        toast.error("Invalid email");
        
    }
  }

  return (
    <div className='signup'>
        <div className='login' style={{color:"black"}}>
            <h2>Forget Password</h2>
            <h3>Enter your email to get reset link</h3>
        </div>
        <form className='login-form'>
          <div className='textbox'>
              <input
                  type="email"
                  placeholder='Email'
                  onChange={(e)=>setEmail(e.target.value)}
              />
              <span className='material-symbols-outlined'>email</span>
          </div>
          <button type="submit" onClick={Forgetpassword}>Send</button>
          <p style={{color:"#157ae1",fontSize:"18px"}}>
              Remember your password ? &nbsp; &nbsp;
              <span style={{cursor:"pointer"}} onClick={()=>navigate('/login')}>
                  Login
              </span>
          </p>
        </form>
    </div>
  )
}

export default Forgetpassword;
