import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import ProductCart from '../Component/ProductCart'
import CheckOut from '../Component/CheckOut'

export default function Cart() {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <ProductCart />
        <CheckOut />
      </div>
      <Footer />
    </div>
  )
}
