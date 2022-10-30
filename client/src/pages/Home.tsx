import React from 'react'
import HeaderText from '../Component/HeaderText'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Categories from '../Component/Categories'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeaderText/>
      <Categories/>
      <Footer />
    </div>
  )
}
