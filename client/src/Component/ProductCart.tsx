import React from 'react'

export default function ProductCart() {
  return (
    <div className='md:w-9/12'>
      <h2 className='m-5 p-5 text-3xl font-bold pb-5 border-b-2'>Seu carrinho de compra</h2>  
      <div className='m-5'>
        <table className='mb-20'>
          <thead className='w-3/4 mb-10 border-b-2'>
            <th className='w-[250px]'></th>
            <th className='w-[250px]'>Produto</th>
            <th className='w-[250px]'>Preço</th>
            <th className='w-[250px]'>Quantidade</th>
            <th className='max-md:hidden md:w-[250px]'>Subtotal</th>
          </thead>
          <tbody className='text-center border-b-2'>
            <td >
              <img src='./src/assets/armario-bebe.jpg' className='w-[120px] h-[100px] m-2' />
            </td>
            <td>Titulo</td>
            <td>R$ 40</td>
            <td>
              <p>
                <span className='mx-2 cursor-pointer'>-</span>
                  1
                <span className='mx-2 cursor-pointer'>+</span>
              </p>
            </td>
            <td className='max-md:hidden'>R$ 40</td>
            <td className='px-1 bg-red-500 text-white hover:opacity-50'>X</td>
          </tbody>
          <tr className='text-center border-b-2'>
            <td >
              <img src='./src/assets/armario-bebe.jpg' className='w-[120px] h-[100px] m-2' />
            </td>
            <td>Titulo</td>
            <td>R$ 40</td>
            <td>
              <p>
                <span className='mx-2 cursor-pointer'>-</span>
                  1
                <span className='mx-2 cursor-pointer'>+</span>
              </p>
            </td>
            <td className='max-md:hidden'>R$ 40</td>
            <td className='px-1 bg-red-500 text-white hover:opacity-50'>X</td>
          </tr>
          <tr className='text-center border-b-2'>
            <td >
              <img src='./src/assets/armario-bebe.jpg' className='w-[120px] h-[100px] m-2' />
            </td>
            <td>Titulo</td>
            <td>R$ 40</td>
            <td>
              <p>
                <span className='mx-2 cursor-pointer'>-</span>
                  1
                <span className='mx-2 cursor-pointer'>+</span>
              </p>
            </td>
            <td className='max-md:hidden'>R$ 40</td>
            <td className='px-1 bg-red-500 text-white hover:opacity-50'>X</td>
          </tr>
        </table>
      </div>
        
    </div>
  )
}
