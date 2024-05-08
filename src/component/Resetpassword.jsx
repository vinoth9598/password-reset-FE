import React, { useState } from 'react'
import AxiosService from '../commen/Apiservice';
import {  useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


function Resetpassword() {

  const [showpassword,setShowpassword]=useState(false)
  const [password,setPassword]=useState('');
  const navigate=useNavigate();

  const togglePasswordVisibility=()=>{
    setShowpassword(!showpassword)
  }
  const {randomString,expirationTimeStamp}=useParams();

  const resetPassword=async (e)=>{
    e.preventDefault();

    try{

      let res= await AxiosService.post(`/user/reset-password/${randomString}/${expirationTimeStamp}`,{
        newPassword:password
      })
      if(res.status == 200){
        toast.success('Password Updated');
        navigate('/login')
      }

    }catch(error){
      if(error.response && error.response.status == 400){
        toast.error('Invalid token or token has expired.Please request a new reset link');
      }else{
        console.log(error);
       
      }
    }
  

  }
  return (
    <div className='signup'>
      <div className='login' style={{color:"purple"}}>
        <h2>Reset password</h2>
        <h3>Enter your new password</h3>
      </div>
        <form className="login-form">
            <div className='textbox'>
                <input
                  type={showpassword ? "text":"password"}
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                />
                <span className='material-symbols-outlined'>lock {' '}</span>
            </div>
            <div style={{display:"flex"}}>
                <input style={{width:'15px'}}
                    type="checkbox"
                    checked={showpassword}
                    onChange={togglePasswordVisibility}
                />
                <span  style={{color:"#157ae1", margin:"10px"}}>Show password</span>
            </div>
            <div>
                <button type='submit' onClick={resetPassword} style={{width:"300px" ,margin:"10px"}}>Set password</button>
            </div>
        </form>
    </div>
  )
}

export default Resetpassword;
