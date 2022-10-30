import React, { useState } from 'react'
import { KeyboardArrowLeft , KeyboardArrowRight } from '@material-ui/icons'
import { carouselItens } from '../data'

export default function HeaderText() {

  const [carouselIndex, setCarouselIndex] = useState(0)

  const goToNext = () => {
    const isLastIndex = carouselIndex === carouselItens.length -1
    const newIndex = isLastIndex ? 0 : carouselIndex + 1
    setCarouselIndex(newIndex)
  }

  const goToPrevious = () => {
    const isFirstSlide = carouselIndex === 0
    const newIndex = isFirstSlide ? carouselItens.length - 1 : carouselIndex - 1
    setCarouselIndex(newIndex)
  }



  return (
    
    <section className='relative h-screen flex overflow-hidden w-screen'>
    
    {carouselItens.map((item, index) => (
      
      <div key={index}>
        {index === carouselIndex && 
        (
        <>
        <img src={item.img} className='flex w-screen h-[500px]'/>
        <div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] w-[600px] h-[500px] text-center text-white' >
          <h2 className='text-5xl font-bold mt-20'>{item.title}</h2>
          <p className='text-left text-3xl mt-20 mx-10 '>{item.desc}</p>
          <button className='mt-20 px-5 py-3 bg-[#EE7DDC] rounded-lg'>Assine já</button>
        </div>
        </>
       
        )}

      </div>

    ))}
    
      <KeyboardArrowLeft 
      onClick= {() => goToPrevious()} 
      className='absolute flex items-center justify-center top-0 bottom-0 left-3 m-auto cursor-pointer'/>
      
      <KeyboardArrowRight 
      onClick= {() => goToNext()}
      className='absolute flex items-center justify-center top-0 bottom-0 right-3 m-auto cursor-pointer'/>
    </section>
    
  )
}
