import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../commen/Apiservice';
import { toast } from 'react-toastify';
import '../App.css';
function Signup() {

  const [showpassword,setShowpassword]=useState(false);

  const navigate=useNavigate();

  const togglePasswordVisibility=()=>{
    setShowpassword(!showpassword);
  }

  let [username,setUserName]=useState("");
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("");

  const createUser= async(e)=>{
    e.preventDefault();
    try{
        let res=await AxiosService.post('/user/signup',{
          username,
          email,
          password
        })
        if(res.status==201){
          toast.success('User created successfully');
          navigate('/login');
        }
    }catch(error){
      console.log(error);
      toast.error("Fill all the details");
    }
   
  }

  return (
    <div className='signup'>
        <div className='login' style={{height:"50px" ,padding:"10px", color:"blue"}}>
           <h2>Register</h2>
        </div>
        <form className='login-form'>
          <div className="textbox">
            <input
                type="text"
                placeholder='Username'
                onChange={(e)=>setUserName(e.target.value)}
                required
            />
            <span className='material-symbols-outlined'>account_circle</span>
         
          </div>
          <div className='textbox'>
              <input
                  type="email"
                  placeholder='Email..,'
                  onChange={(e)=>setEmail(e.target.value)}
                  required

              />
              <span className='material-symbols-outlined'>email</span>

          </div>
          <div className='textbox'>
              <input
                  type={showpassword ? "text":"password"}
                  placeholder="Password.."
                  onChange={(e)=>setPassword(e.target.value)}
                  pattern=".{8,)"
                  title='password must be at least 8 characters'
                  required
              />
              <span className="material-symbols-outlined"
                style={{paddingBottom:"70px"}}
              >lock{" "}</span>
          </div>
          <div style={{display:"flex"}}>
            <input
              style={{width:"15px"}}
              type="checkbox"
              checked={showpassword}
              onChange={togglePasswordVisibility}
            />
            <span style={{
                  padding:"10px",
                  color:"#157ae1"
                }}>
                showpassword
            </span>

          </div>
          <button type='submit' onClick={(e)=>createUser(e)}>SIGNUP</button>
          <p style={{color:"#157ae1" ,fontSize:"18px",marginTop:"5px"}}>
            Already have an account ?&nbsp; &nbsp;
            <span 
              style={{cursor:'pointer'}}
              onClick={()=>navigate('/login')}
            >
              Login
            </span>
          </p>
        </form>
    </div>
  )
}

export default Signup;
