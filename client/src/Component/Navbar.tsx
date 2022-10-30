import React from 'react'
import { Search, ShoppingCart } from '@material-ui/icons'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between text-[#F7FFF7] bg-[#0B022D] px-7 py-3 '>      
      <div className='text-[#0B022D] rounded bg-slate-600 p-2 '>  
        <input type='text' className=' w-60 bg-slate-600' />
        <Search className='cursor-pointer'/>
      </div>
      <img src="./src/assets/logoSub.png" alt="" className='h-16 text-center ' />
      <div className='flex  items-center '> 
        <ShoppingCart className='cursor-pointer'/>
        <button className=' bg-slate-500 rounded p-2 mx-5 justify-end'>Cadastrar</button>
        <button className='bg-slate-500 rounded p-2  justify-end'>Entrar</button>
      </div>
    </div>
  )
}
