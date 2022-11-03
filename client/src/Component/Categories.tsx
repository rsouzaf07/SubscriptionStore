import React from 'react'
import { Link } from 'react-router-dom'
import { CategoriesBanner } from '../data'


export default function Categories() {
  return (
    <section >
        {/* Title */}
        <h2 className='text-center font-bold text-4xl my-20'>Escolha a categoria que deseja!</h2>
        <section className=' md:flex justify-center'>
        {CategoriesBanner.map((item) => (
            <>
            {/* return data from map */}
            <Link to= {`/products?category=${item.category}`}> 
            <div key={item.id} className='m-2 mb-20 overflow-hidden hover:scale-105'>
                <figure className=''>
                    <img src={item.img} className='m-auto h-[200px] w-[250px] md:h-[380px] md:w-[380px] cursor-pointer' />
                </figure>
                <div className='text-2xl text-center font-semibold '>
                    <h2 >{item.title}</h2>
                </div>
            </div>
            </Link>
            </>
        ))}
        
        </section>
    </section>
  )
}
