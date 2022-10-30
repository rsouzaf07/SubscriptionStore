import React from 'react'

export default function InfoProducts() {
  return (
    <section className='flex m-20 '>
        <figure className='flex-1'>
            <img src='./src/assets/armario-bebe.jpg'  className=' h-[90vh]'/>
        </figure>
        <section className='flex-1' >
            <h2 className='text-[#0B022D] font-bold text-4xl '>Quarto bebê</h2>
            <p className='text-[#58565c] text-sm my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quaerat voluptas et recusandae magni perferendis assumenda beatae ipsam cum unde. Expedita doloribus sequi optio nemo maxime ad pariatur dicta ipsa.
            Ex dolor perferendis inventore vitae iste nam obcaecati debitis quibusdam magnam deleniti. Nobis libero tempora, rerum illo corrupti est modi autem beatae, voluptate unde distinctio iusto non molestiae porro at?
            Delectus quo eaque natus quam a fugiat, repellendus dolorem ipsa, ut exercitationem sed porro. Id magnam, aperiam ullam pariatur, nulla temporibus ea ab voluptatem non aspernatur a facilis quibusdam quas!</p>
            <p className='text-[#58565c] text-5xl '>R$ 20</p>
            <div className='flex mt-10 gap-3 items-center text-white'>
                <button className='px-3 py-1 bg-[#EE7DDC] rounded'>-</button>
                <p className='text-[#0B022D]'>0</p>
                <button className='px-3 py-1 bg-[#EE7DDC] rounded'>+</button>
                <button className='px-3 py-1 mx-10 bg-[#EE7DDC] rounded hover:opacity-80'>Adicionar ao Carrinho</button>
            </div>
        </section>
    </section>
  )
}
