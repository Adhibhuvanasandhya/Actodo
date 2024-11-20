
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Landing from "./pages/landing";
function App()
{
  const [users, setusers] = useState(
    [
        {
            username: "sandhya",
            password:"123"
        }
    ]
  )
  return(
    <div>
    <BrowserRouter>
    
 
   <Routes>
   <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
   <Route path='/signup' element={<SignUp  users={users} setusers={setusers} />}></Route>
   <Route path='/landing' element={<Landing/>}></Route>
   

   </Routes>
   </BrowserRouter>
 </div>
    
  )
}

export default App;
