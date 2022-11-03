import { Link } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ProductsItens } from '../data'
  
export default function Products() {
    const [sort, setSort] = useState("A-Z")
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const location = useLocation()
    const cat = location.pathname.split('/')[2]
    
    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get(
            cat ? `http://localhost:3000/products?category=${cat}`
            : "http://localhost:3000/products")
          setProducts(res.data)
          
          if (sort === "A-Z") {
            const res = await axios.get(
                "http://localhost:3000/products?titlesort=asc"
              )
              setProducts(res.data)
          } else if (sort === "Z-A") {
              const res = await axios.get(
                "http://localhost:3000/products?titlesort=desc"
              )
              setProducts(res.data)
          } else if (sort === "priceasc") {
              const res = await axios.get (
                "http://localhost:3000/products?pricesort=asc"
              )
              setProducts(res.data)
          } else if (sort === "pricedesc") {
              const res = await axios.get (
                "http://localhost:3000/products?pricesort=desc"
              )
              setProducts(res.data)
            }

        } catch (error) {

        }
      }
      getProducts()
      
    }, [cat, sort])

    return (
      <div>
          <h2 className='text-center font-bold text-4xl my-20'>Produtos para assinatura! </h2>
          <div className='mx-20'> 
            <p>Ordenar por: </p>
            <select onChange={(e) => setSort(e.target.value)}>
              <option value="A-Z">A - Z</option>
              <option value="Z-A">Z - A</option>
              <option value="priceasc">Menor Preço</option>
              <option value="pricedesc">Maior Preço</option>
            </select>          
          </div>
        <section className='flex flex-wrap m-10  '>
          { products.map(({id, img, title, price}) => (
              <section key={id} className='mx-auto mb-10 cursor-pointer overflow-hidden hover:scale-105'>
                  <figure>
                      <img src={img} className='w-[300px] h-[190px]' />
                      <section className='ml-2'>
                          <p className='mt-2 text-xl'>{title}</p>
                          <p className='mb-2'> R$ {price}/mês</p>
                          <Link to={`/product/${id}`}>
                            <button className='bg-[#ED7CDB] px-5 py-3 rounded'>Mais Informação!</button>
                          </Link>
                      </section>
                  </figure>
              </section>
          ))}
        </section>
      </div>
    )
  }
  
