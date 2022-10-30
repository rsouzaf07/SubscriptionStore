import React from 'react'
import { GitHub, LinkedIn } from '@material-ui/icons'
export default function footer() {
  return (
    <>
    <footer className='bg-[#404040] px-20 py-10  text-white'>
          <div className='flex'>
            <section className='flex-1 '>
                <p className='font-bold text-xl mb-3'>Entre em contato com a gente:</p>
                <ul>
                    <li>
                          Telefone: (21) xxxx-xxxx
                    </li>
                    <li>
                          email: subscriptionstore@mail.com
                    </li>
                    <li>
                          Localização: Rua X, Rio de Janeiro - BR 
                    </li>
                </ul>
            </section>
            <section className='  flex-1 '>
                <h2 className='font-bold text-xl mb-3'>ASSINE NOSSA NEWSLETTER</h2>
                <p className='mb-3 '>Quer saber todas as novidades em primeira mão? Assine nossa Newsletter e tenha tudo no seu email.</p>
                <input type='email' className='rounded mr-10 bg-[#64748B]'/>
                <button className='px-5 py-1 rounded-md bg-[#EE7DDC]'>Assinar</button>
            </section>
          </div>
          <section>
            <h2 className='font-bold text-xl my-3' >Nos encontre em nossas redes sociais:</h2>
            <a href='https://github.com/rsouzaf07'>
                <GitHub className='mr-3 hover:text-[#EE7DDC] cursor-pointer'/>
            </a>
            <a href='https://www.linkedin.com/in/rafael-de-souza-freire-96a94171/'>
                <LinkedIn className='hover:text-[#EE7DDC] cursor-pointer'/>
            </a>
          </section>
      </footer>
      <div className='bg-[#4D4D4D] text-center text-white'>Copyright &copy; 2022 Subscription Store </div>
      </>
    
  )
}
