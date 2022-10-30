import React from 'react'
import {LocalShipping} from '@material-ui/icons'


export default function Promotion() {
  return (
    <div className='bg-[#7C3F84] justify-center p-2 flex'>
      <h2 className='text-white font-bold mx-2'>Frete, entrega e montagem grátis em assinaturas acima de R$ 220 </h2>
      <LocalShipping className='text-white'/>
    </div>
  )
}
