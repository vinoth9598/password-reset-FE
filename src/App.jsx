import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Signup from './component/Signup';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Forgetpassword from './component/Forgetpassword';
import Resetpassword from './component/Resetpassword';
function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/Dashboard' element={<Dashboard/>}/>
                <Route path='/forgetpassword' element={<Forgetpassword/>}/>
                <Route path='/resetpassword' element={<Resetpassword/>}/>
                <Route path='*' element={<Login/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App;
