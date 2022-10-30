import React from 'react'
import { CategoriesBanner } from '../data'


export default function Categories() {
  return (
    <section >
        <h2 className='text-center font-bold text-4xl my-20'>Escolha a categoria que deseja!</h2>
        <section className='flex justify-center'>
        {CategoriesBanner.map((item) => (
            <>
            <div key={item.id} className='m-2 mb-20 overflow-hidden hover:scale-105'>
                <figure>
                    <img src={item.img} className='h-[380px] w-[380px] cursor-pointer ' />
                </figure>
                <div className='text-2xl text-center font-semibold '>
                    <h2 >{item.title}</h2>
                </div>
            </div>
            </>
        ))}
        </section>
    </section>
  )
}
