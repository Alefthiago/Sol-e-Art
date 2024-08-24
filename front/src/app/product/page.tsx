import { FC } from 'react';
import CardSell from '../components/productcard';
import { fetchProducts } from '../../../lib/mercadoLibreAPI';
import { Product } from '../types/product';

const ProductPage: FC = async () => {
  // Buscar produtos da API
  const products: Product[] = await fetchProducts();

  // Renderizar o componente CardSell com os produtos
  return (
    <div>
      <CardSell products={products} />
    </div>
  );
};

export default ProductPage;
