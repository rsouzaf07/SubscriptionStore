import React from 'react'


export default function Register() {
  return (
    <>
        <main className=' w-[100vw] h-[100vh] flex justify-center items-center'>
            <form className='bg-[#949596] text-white w-2/5 px-20 py-10 rounded-lg'>
                <h2 className=' text-3xl ml-[85px] my-2 w-[220px] font-bold'>CRIE SUA CONTA</h2>
                <section >
                    <div className='py-2'>
                        <label>
                            Nome:
                        </label><br />
                        <input type='text' className='text-black'/>
                    </div>
                    <div className='py-2'>
                        <label>
                            Username:
                        </label><br />
                        <input type='text' className='text-black'/>
                    </div>
                    <div className='py-2'>
                        <label>
                            Email:
                        </label><br />
                        <input type='email'className='text-black'/>
                    </div>
                    <div className='py-2'>
                        <label>
                            Senha:
                        </label><br />
                        <input type='password'className='text-black'/>
                    </div>
                    <div className='py-2'>
                        <label>
                            Repita a senha:
                        </label><br />
                        <input type='password'className='text-black'/>
                    </div>
                        <p className='text-xs mt-2'>- Ao preencher o formulário, concordo em receber comunicações de acordo com meus interesses</p>
                        <p className='text-xs'>- Ao informar meus dados, eu concordo com a Política de privacidade.</p>
                        <button className='bg-[#EE7DDC] mt-10 py-2 px-5 rounded ml-[138px] '>Cadastrar</button>
                </section>
            </form>
        </main>
    </>
  )
}
