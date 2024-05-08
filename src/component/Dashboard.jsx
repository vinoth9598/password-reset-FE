import React, { useEffect, useState } from 'react';
import userLogout from '../hooks/userLogout';
import '../App.css';


function Dashboard() {
  const logout=userLogout();

  const [userName,setUserName]=useState('');
  useEffect(()=>{
    let userName=sessionStorage.getItem('username')

    if(userName){
      setUserName(userName)
    }
  },[])
  
  return (
    
      <div className='dash'>
        <div className='wel' style={{width:"200px",padding:"20px",color:'blue',margin:"10px"}}>
            WELCOME,<span style={{color:"red",padding:"10px", fontWeight:"bold"}}>{userName}</span>
        </div>
        <div>
            <button id='log' style={{fontWeight:"bold",width:"200px",cursor:"pointer",background:"skyblue" ,color:"red",padding:"10px" ,border:"1px solid white",borderRadius:"10px"}}>
                <span onClick={logout} >LOGOUT</span>
            </button>
        </div>
        
      </div>
 
   
  )
}

export default Dashboard;
