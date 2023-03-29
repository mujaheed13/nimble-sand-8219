import React from 'react'
import {Routes,Route,Link} from  "react-router-dom"
import Homepage from  "../pages/homepage/Homepage"
import Loginpage from '../pages/login/Loginpage'
const AllRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/signup" element={<Homepage/>}/>
        <Route path="/appoinment" element={<Homepage/>}/>
        <Route path="/consult" element={<Homepage/>}/>
        <Route path="/about" element={<Homepage/>}/>
        <Route path="/contact" element={<Homepage/>}/>
    </Routes>
  )
}

export default AllRoute