import { FC } from 'react';
import { Product } from '../types/product';

interface Props {
  products: Product[];
}

const CardSell: FC<Props> = ({ products }) => {
  return (
    <div>
      <h1>Produtos de Moda Praia</h1>
      <div className="products-grid">
        {products.map((product) => (
          <a
            href={product.permalink}
            key={product.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="product-card">
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>Preço: R$ {product.price}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CardSell;
