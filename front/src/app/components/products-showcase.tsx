//tela com produtos (vc escolhe na chamada a quantidade de produtos a ser exubidos).

"use client";
import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import { fetchBiquini, fetchSunga } from '../../../lib/mercadoLibreAPI';
import { Product } from '../types/product';
import CardSell from '../components/productcard';

interface ProductShowcaseProps {
  quant: number; // Adiciona quant como uma prop
}

// Função para embaralhar a lista de produtos
export const shuffleArray = <T,>(array: T[]): T[] => {
  let currentIndex = array.length, randomIndex;

  // Enquanto houver elementos a serem embaralhados...
  while (currentIndex !== 0) {
    // Escolha um elemento restante...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // E troque-o com o elemento atual.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const ProductShowcase: FC<ProductShowcaseProps> = ({ quant }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAndSetProducts = async () => {
      try {
        // Busca produtos de ambas as fontes
        const [biquiniProducts, sungaProducts]: [Product[], Product[]] = await Promise.all([
          fetchBiquini(),
          fetchSunga()
        ]);

        // Combina os arrays de produtos
        const combinedProducts = [...biquiniProducts, ...sungaProducts];
        
        setProducts(combinedProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetProducts();
  }, []); // Dependências de useEffect são vazias, então ele roda apenas na montagem

  if (loading) {
    return <div>Carregando...</div>; // Mensagem de carregamento
  }

  // Embaralhe a lista de produtos e selecione os primeiros `quant` produtos
  const shuffledProducts = shuffleArray(products);
  const uniqueProducts = shuffledProducts.slice(0, quant);

  return (
    <div className='flex justify-center items-center flex-col gap-12'>
      <div className="grid max-sm:gap-1 sm:grid-cols-2 max-md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center max-w-5xl mt-12">
        {uniqueProducts.map((product) => (
          <CardSell key={product.id} product={product} />
        ))}
      </div>
      <div>
        <button className='bg-pinks p-4 px-6 text-blackcontent rounded-2xl hover:scale-105 duration-300 hover:bg-pink-300'>
          <a className='font-bold' href="/products">Veja mais Produtos</a>
        </button>
      </div>
    </div>
  );
};

export default ProductShowcase;

