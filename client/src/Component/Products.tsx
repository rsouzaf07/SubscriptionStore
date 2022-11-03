import React, { useEffect, useState } from 'react'
import { HotProducts } from '../data'
import axios from 'axios'


export default function Products() {
  
  const [products,setProdutcs] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/products")
        setProdutcs(res.data)
        }
       catch (error) {

      }
    }
    getProducts()
    
  }, [])
  
  return (
    <div>
      {/* Title */}
        <h2 className='text-center font-bold text-4xl mb-20'>Produtos mais assinados! </h2>
      <section className='flex flex-wrap m-10  '>
       {/* Container Product returning from map  */}
        {products.slice(6,15).map(({id, img, title, price}) => (
            
            <section key={id} className='m-auto mx-auto md:m-2 mb-10 cursor-pointer overflow-hidden hover:scale-105'>
                <figure>
                    <img src={img} className='w-[250px] h-[200px]' />
                    <section className='ml-2'>
                        <p>{title}</p>
                        <p> R$ {price}/mês</p>
                    </section>
                </figure>
            </section>
        ))}
      </section>
    </div>
  )
}
