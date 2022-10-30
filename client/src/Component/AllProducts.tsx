import React from 'react'
import { ProductsItens } from '../data'
  
export default function Products() {
    return (
      <div>
          <h2 className='text-center font-bold text-4xl my-20'>Produtos para assinatura! </h2>
          <div className='mx-20'> 
            <p>Ordenar por: </p>
            <select>
              <option>A - Z</option>
              <option>Z - A</option>
              <option>Menor Preço</option>
              <option>Maior Preço</option>
            </select>          
          </div>
        <section className='flex flex-wrap m-10  '>
          {ProductsItens.map((item) => (
              <section key={item.id} className='mx-auto mb-10 cursor-pointer overflow-hidden hover:scale-105'>
                  <figure>
                      <img src={item.img} className='w-[300px] h-[190px]' />
                      <section className='ml-2'>
                          <p className='mt-2 text-xl'>{item.title}</p>
                          <p className='mb-2'> R$ {item.preco}/mês</p>
                          <button className='bg-[#ED7CDB] px-5 py-3 rounded'>Mais Informação!</button>
                      </section>
                  </figure>
              </section>
          ))}
        </section>
      </div>
    )
  }
  
