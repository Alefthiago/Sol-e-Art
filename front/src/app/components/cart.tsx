// components/Cart.tsx
import { FC, useContext } from 'react';
import { CartContext } from '../context/cartcontext';

const Cart: FC = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) return <div className='text-black'>Erro! Contexto do carrinho não encontrado.</div>;

  const { cart, removeFromCart } = cartContext;

  return (
    <div className="p-4">
      {cart.length === 0 ? (
          <p className='text-blackcontent text-center my-12'>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} className="border-b border-gray-200 py-2 text-black">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>Quantidade: {item.quantity}</p>
                  <p>Preço: R$ {item.price.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
