import React from 'react'
import HeaderText from '../Component/HeaderText'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Categories from '../Component/Categories'
import Products from '../Component/Products'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeaderText/>
      <Categories/>
      <Products />
      <Footer />
    </div>
  )
}
