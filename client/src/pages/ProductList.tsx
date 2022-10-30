import React from 'react'
import AllProducts from '../Component/AllProducts'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Promotion from '../Component/Promotion'
export default function ProductList() {
  return (
    <div>
      <Navbar/>
      <Promotion/>
      <AllProducts />
      <Footer />
    </div>
  )
}
