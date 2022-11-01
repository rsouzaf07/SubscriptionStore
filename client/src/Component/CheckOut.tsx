import React from 'react'

export default function CheckOut() {
  return (
    <section className='border-2 h-[500px] w-[320px] max-md:mx-auto my-[96px] '>
      <h2 className='mx-2 px-2 mt-5 font-bold pb-[2px] border-b-2'>Valor total:</h2>
      <div className='flex mx-2 px-2 py-10 justify-between border-b-2'>
        <p>Subtotal</p>
        <p> R$ 120</p>
      </div>
      <div className='flex mx-2 px-2 pt-10 justify-between items-center'>
        <div>
            <p>Taxas</p>
        </div>
        <div>
            <p className='mb-3'>Frete</p>
            <p>Montagem</p>
        </div>
        <div>
            <p className='mb-3'>R$ 25</p>
            <p>R$ 30</p>
        </div>
      </div>
      <p className='flex mx-2 mt-2 px-2 pb-10 border-b-2 font-light text-xs '>Valores poderão ser atualizados durante a assinatura</p>
      <div className='flex mx-2 px-2 py-10 justify-between '>
        <h2>TOTAL:</h2>
        <p>R$ 175</p>
      </div>
      <div className='flex justify-center'>
        <button className='px-7 py-2 bg-[#EE7DDC] rounded-md text-white hover:opacity-70 '>Assinar!</button>
      </div>
      
    </section>
  )
}
