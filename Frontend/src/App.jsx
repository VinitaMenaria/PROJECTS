import React from "react";
import Signup from "./pages/Signup"
import Login from "./pages/Login" 
import {Routes , Route} from 'react-router-dom'
import {Toaster} from 'sonner';
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement } from "./redux/counterSlice"
import PrivateRoute from "./components/PrivateRoute.jsx";
import Homepage from "./pages/Homepage.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
    
      const dispatch=useDispatch()
        const {count}=useSelector((state)=>state.count
          // console.log(state.count.count)
)
     
    const handleIncrement=()=>{
      dispatch(increment())
    }
    const handleDecrement=()=>{
      dispatch(decrement())
    }
  
  return (
    <div>
       {/* <p>count:{count}</p> */}
      {/* <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button> */}
 <Routes>
    <Route path="/register" element={<Signup/>} />
    <Route path="/login" element={<Login/>}/>
    <Route element={<PrivateRoute allowrole={["admin"]}/>}>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Route>

    <Route element={<PrivateRoute allowrole={["user"]}/>}>
      <Route path="/" element={<Homepage/>}/>
    </Route>

  </Routes>
  <Toaster position="bottom-right"/>
    </div>
)
}


