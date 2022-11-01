import React, { useState } from 'react'
import { Menu, Search, ShoppingCart } from '@material-ui/icons'

export default function Navbar() {
  const [hiddenMenu, setHiddenMenu] = useState(false)


  return (
    <section>

      <div className='flex items-center justify-between text-[#F7FFF7] bg-[#0B022D] px-7 py-3 '>      

      {/* Navbar search */ }
        <div className='hidden md:flex text-[#0B022D] rounded bg-slate-600 p-2 '>  
          <input type='text' className=' w-60 bg-slate-600' />
          <Search className='cursor-pointer'/>
        </div>
        
        {/* Logo */ }
        <img src="./src/assets/logoSub.png" className='h-14 md:h-16 text-center ' />
        
        {/* Navbar buttons */ }

        <div className='hidden  md:flex  items-center '> 
          <ShoppingCart className='cursor-pointer'/>
          <button className=' bg-slate-500 rounded p-2 mx-5 justify-end'>Cadastrar</button>
          <button className='bg-slate-500 rounded p-2  justify-end'>Entrar</button>
        </div>

        {/* Navbar menu with responsivity */ }
        <div className='md:hidden flex items-center'>
          <ShoppingCart className='cursor-pointer mx-2'/>
          <Menu className='cursor-pointer' onClick={() => setHiddenMenu(!hiddenMenu)}/>
        </div>        
      </div>

      {/* hide/show mobile buttons in menu */}
      {
      hiddenMenu ? <>
      <div className={`${hiddenMenu} text-[#F7FFF7] bg-[#0B022D]`}>
        <div className='flex justify-center '>
          <input type='text' className='w-3/4 bg-[#64748B] rounded-md' />
          <Search className='mx-2'/>
        </div>
        <p className='p-2 cursor-pointer hover:opacity-70'>Cadastrar</p>
        <p className='p-2 cursor-pointer hover:opacity-70'>Entrar</p>
      </div>
      </> : null 
      }
    </section>
  )
}
