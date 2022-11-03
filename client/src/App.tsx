import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/Home'
import './global.css'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart' 
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/products"  element={<ProductList/>}/>
        <Route path="/:category" element={<ProductList/>}/>
        <Route path="/product/:id"  element={<Product/>}/>
        <Route path="/cart"  element={<Cart/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/register"  element={<Register/>}/>
        </Routes>
    </Router>
  )
}

export default App
