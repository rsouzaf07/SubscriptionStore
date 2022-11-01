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
    
    <section className='relative h-[300px] md:h-[500px] flex overflow-hidden w-screen'>
    
    
    {carouselItens.map((item, index) => (
      
      <div key={index} >
        {index === carouselIndex && 
        (
        <>
        {/* image from a map */}
        <img src={item.img} className='flex w-screen h-[300px] md:h-[500px]'/>
        {/* container title */}
        <div className='h-[300px] absolute top-0 left-0 bg-[rgba(0,0,0,0.7)] md:w-[600px] md:h-[500px] text-center text-white' >
          <h2 className='text-2xl md:text-5xl font-bold my-5 md:mt-20'>{item.title}</h2>
          <p className='text-left text-lg md:text-3xl md:mt-20 mx-10 '>{item.desc}</p>
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
