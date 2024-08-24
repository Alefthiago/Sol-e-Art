import { FC } from 'react';
import CardSell from '../components/productcard';
import { fetchProducts } from '../../../lib/mercadoLibreAPI';
import { Product } from '../types/product';
import { Navbar } from '../components/navbar';

// Função para embaralhar a lista de produtos
const shuffleArray = <T,>(array: T[]): T[] => {
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

const ProductPage: FC = async () => {
  const products: Product[] = await fetchProducts();

  if (products.length === 0) {
    return <div>Não foram encontrados produtos.</div>;
  }

  // Embaralhe a lista de produtos e selecione os primeiros 7 produtos
  const shuffledProducts = shuffleArray(products);
  const uniqueProducts = shuffledProducts.slice(0, 50);

  return (
    <div>
      <Navbar />
      {/* Inicio> grid de produtos e botão de mostrar mais produtos*/}
      <div className='flex justify-center items-center flex-col gap-12'>
        <div className="grid max-sm:gap-1 sm:grid-cols-2 max-md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center max-w-5xl mt-12">
          {uniqueProducts.map((product) => (
            <CardSell key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* Fim> grid de produtos e botão de mostrar mais produtos*/}

    </div>
  );
};

export default ProductPage;

