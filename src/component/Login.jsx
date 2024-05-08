import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../commen/Apiservice';
import { toast } from 'react-toastify';


function Login() {

  const [showpassword,setShowpassword]=useState(false)
  const [email ,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const navigate=useNavigate();
  const togglePasswordVisibility=()=>{
    setShowpassword(!showpassword);
  }

  const existUser=async(e)=>{
    e.preventDefault();

    try{
      let res=await AxiosService.post('/user/login',{
        email,
        password
      })
      if(res.status == 201){
        toast.success('Login successfully')
        sessionStorage.setItem('username',res.data.user.username)
        sessionStorage.setItem('email',res.data.user.email)
        navigate('/dashboard')
      }

    }catch (error) {
      console.log(error)
      toast.error("Incorrct email or password")
    }

  }
  return (
    <div className='signup'>
        <div className='login' style={{height:"50px" ,padding:"10px", color:"blue", marginBottom:"50px"}}>
            <h2>Login</h2>
            <h3>Welcome back</h3>
        </div>
        <form className='login-form'>
          <div className='textbox'>
              <input
                type="email"
                placeholder='Email'
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
              <span className="material-symbols-outlined">email</span>

          </div>
          <div className='textbox'>
              <input
                  type={showpassword ? "text":"password"}
                  placeholder='Password'
                  onChange={(e)=>setPassword(e.target.value)}
                  required
              />
              <span className="material-symbols-outlined">
                lock {" "}
              </span>

          </div>
          <div id='ch' style={{display:'flex'}}>
            <input style={{width:"15px",margin:""}}
              type="checkbox"
              checked={showpassword}
              onChange={togglePasswordVisibility}
            />
            <span id='sp' style={{margin:"10px",color:'blue'}}>
                show password
            </span>
            &nbsp; &nbsp;
            <span id='sp' style={{color:"#157ae1",cursor:"pointer", margin:"10px"}}
              onClick={()=>navigate('/forgetpassword')}
            >
              Forget Password 
            </span>

          </div>
          <button type='submit' onClick={(e)=>existUser(e)}>LOGIN</button>
          <p>
            Create Account ? &nbsp; &nbsp;
            <span style={{cursor:"pointer"}} onClick={()=>navigate('/signup')}>
                Signup
            </span>
          </p>
        </form>
    </div>
  )
}

export default Login;
