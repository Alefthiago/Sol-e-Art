"use client";
import React from 'react'
import { Navbar } from '../components/navbar';
import { Cardsell } from '../components/productcard';
import { Footer } from '../components/footer';

const ShopPage = () => {
  return (
    <>
      <Navbar />
      <h1 className='text-center text-blackcontent font-bold max-sm:mt-32 mt-4'>Nossos Produtos</h1>

      {/* Inicio> grid de produtos e botão de mostrar mais produtos*/}
      <div className='flex justify-center items-center flex-col gap-12'>
        <div className="grid max-sm:gap-1 sm:grid-cols-3 max-md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center max-w-5xl mt-12">
          <Cardsell /><Cardsell /><Cardsell /><Cardsell /><Cardsell /><Cardsell /><Cardsell /><Cardsell /><Cardsell /><Cardsell /><Cardsell /><Cardsell /><Cardsell /><Cardsell /><Cardsell />
        </div>
      </div>
      {/* Fim> grid de produtos e botão de mostrar mais produtos*/}

      <Footer/>

    </>
  )
}

export default ShopPage