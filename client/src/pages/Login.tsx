import React from 'react'

export default function Login() {
      return (
    <>
        <main className=' w-[100vw] h-[100vh] flex justify-center items-center'>
            <form className='bg-[#949596] text-white w-2/5 px-20 py-10 rounded-lg'>
                <h2 className=' text-3xl ml-[95px] my-2 w-[220px] font-bold'>Olá, seja bem vindo de volta!</h2>
                <section >
                    <div className='py-2'>
                        <label>
                            Username:
                        </label><br />
                        <input type='text' className='text-black'/>
                    </div>
                    <div className='py-2'>
                        <label>
                            Senha:
                        </label><br />
                        <input type='password' className='text-black'/>
                    </div>
                    <div>
                        <p className='underline py-2 text-xs cursor-pointer'>Esqueceu sua senha?</p>
                        <p className='py-2 text-xs'>Ainda não possui conta? <span className='underline cursor-pointer'>Clique aqui</span></p>
                        <button className='bg-[#EE7DDC] mt-10 py-2 px-8 rounded ml-[138px] '>Logar</button>
                    </div>
                        
                </section>
            </form>
        </main>
    </>
  )
}
