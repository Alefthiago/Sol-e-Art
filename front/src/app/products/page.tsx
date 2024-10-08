'use client';
import { FC } from 'react';
import CardSell from '../components/productcard';
import { fetchBiquini, fetchSunga } from '../../../lib/mercadoLibreAPI';
import { Product } from '../types/product';
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';
import Link from 'next/link';
import ProtectedRoute from '../components/protectedRoute';

// Função para embaralhar a lista de produtos
const shuffleArray = <T,>(array: T[]): T[] => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

// Func para paginar e continuação de Sufflearray
interface ProductPageProps {
  searchParams: { page?: string }; // Tipo dos parâmetros de busca
}
const ProductPage: FC<ProductPageProps> = async ({ searchParams }) => {
  const currentPage = parseInt(searchParams.page || '1');
  const pageSize = 20; // Quantidade de itens por página


  const allProductsBiquini: Product[] = await fetchBiquini();
  const allProductsSunga: Product[] = await fetchSunga();
  const allProducts = allProductsBiquini.concat(allProductsSunga)
  const shuffledProducts = shuffleArray(allProducts);

  const totalPages = Math.ceil(shuffledProducts.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const products = shuffledProducts.slice(startIndex, endIndex);

  if (products.length === 0) {
    return <div className=''><Navbar /> <div className='text-blackcontent h-screen flex items-center justify-center'>
      Não foram encontrados produtos.</div></div>;
  }

  return (
    <div>
      <ProtectedRoute>
        <Navbar />
        <p className='text-blackcontent font-semibold text-lg text-center mt-24'>Nossos Produtos</p>
        <div className='flex justify-center items-center flex-col gap-12'>
          <div className="grid max-sm:gap-1 sm:grid-cols-2 max-md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center max-w-5xl mt-12">
            {products.map((product) => (
              <CardSell key={product.id} product={product} />
            ))}
          </div>
        </div>
        {/* Navegação de Paginação */}
        <div className="pagination text-blackcontent flex justify-center items-center my-20 gap-6">
          {currentPage > 1 && (
            <Link href={`?page=${currentPage - 1}`}>
              <p className='cursor-pointer hover:scale-110 hover:bg-pinks duration-300 rounded-xl bg-whitegray px-6 py-2 '>Anterior </p>
            </Link>
          )}
          <span> Página {currentPage} de {totalPages} </span>
          {currentPage < totalPages && (
            <Link href={`?page=${currentPage + 1}`}>
              <p className='cursor-pointer hover:scale-110 hover:bg-pinks duration-300 rounded-xl bg-whitegray px-6 py-2 '>Próximo </p>
            </Link>
          )}
        </div>
        <Footer />
      </ProtectedRoute>
      
    </div>
  );
};

export default ProductPage;
