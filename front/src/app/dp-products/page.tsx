"use client"; 
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { fetchProductById } from '../../../lib/mercadoLibreAPI';
import { Product } from '@/app/types/product';

const ProductPage: FC = () => {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const productId = searchParams.get('id');
    if (productId) {
      fetchProductById(productId).then(setProduct);
    }
  }, [searchParams]);

  if (!product) {
    return <div className='text-blackcontent text-center'>Carregando...</div>;
  }

  return (
    <div className='text-blackcontent text-center'>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>R$ {product.price}</p>
      <a href={product.permalink} target="_blank" rel="noopener noreferrer">
        Comprar no Mercado Livre
      </a>
    </div>
  );
};

export default ProductPage;

