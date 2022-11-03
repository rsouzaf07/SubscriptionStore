import React, { useState } from 'react'
import AllProducts from '../Component/AllProducts'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Promotion from '../Component/Promotion'
import { useLocation } from 'react-router-dom'



export default function ProductList() {

  
  return (
    <div>
      <Navbar/>
      <Promotion/>
      <AllProducts/>
      <Footer />
    </div>
  )
}
