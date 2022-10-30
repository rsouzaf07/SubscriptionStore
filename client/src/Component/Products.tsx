import React from 'react'
import { HotProducts } from '../data'

export default function Products() {
  return (
    <div>
        <h2 className='text-center font-bold text-4xl mb-20'>Produtos mais assinados! </h2>
      <section className='flex flex-wrap m-10 mx-auto '>
        {HotProducts.map((item) => (
            <section key={item.id} className='m-2 mb-10 cursor-pointer overflow-hidden hover:scale-105'>
                <figure>
                    <img src={item.img} className='w-[250px] h-[200px]' />
                    <section className='ml-2'>
                        <p>{item.title}</p>
                        <p> R$ {item.preco}/mês</p>
                    </section>
                </figure>
            </section>
        ))}
      </section>
    </div>
  )
}
