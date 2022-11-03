import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'

export default function InfoProducts() {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState<any>([])
  const [quantity, setQuantity] = useState(1)
  useEffect(() =>{
    const getProductById = async () => {
      try {
        const res = await publicRequest.get("products/"+id)
        
        setProduct(res.data)
      
      } catch (error) {

      }
    }
    getProductById()
  }, [id])
  
  const { title, img, desc, price } = product

  const handleQuantity = (type: string) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  return (
    <section className='md:flex md:m-20'>

        <figure className='md:flex-1 '>
            <img src={img}  className=' ms:w-[240px] my-5  ms:mx-auto md:h-[90vh]'/>
        </figure>
        {/* Container info */}
        <section className='md:flex-1' >
            <h2 className='text-[#0B022D] font-bold text-4xl '>{title}</h2>
            <p className='text-[#58565c] text-sm my-10'>{desc}</p>
            <p className='text-[#58565c] text-5xl '>R$ {price}</p>
            {/* quantity selected */}
            <div className='flex md:mt-10 my-10 mx-2 gap-3 items-center text-white'>
                <button className='px-3 py-1 bg-[#EE7DDC] rounded' onClick={()  => handleQuantity("dec")}>-</button>
                <p className='text-[#0B022D]'>{quantity}</p>
                <button className='px-3 py-1 bg-[#EE7DDC] rounded' onClick={()  => handleQuantity("asc")}>+</button>
                <button className='px-3 py-1 mx-10 bg-[#EE7DDC] rounded hover:opacity-80'>Adicionar ao Carrinho</button>
            </div>
        </section>
    </section>
  )
}
