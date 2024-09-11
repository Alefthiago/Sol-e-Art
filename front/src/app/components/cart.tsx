// components/Cart.tsx
import { FC, useContext } from 'react';
import { CartContext } from '../context/cartcontext';
import Link from 'next/link';

const Cart: FC = ({ }) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) return <div className='text-black'>Erro! Contexto do carrinho não encontrado.</div>;

  const { cart, removeFromCart } = cartContext;


  const valorTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      {cart.length === 0 ? (
        <p className='text-blackcontent text-center my-12'>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} className="border-b border-gray-200 py-2 text-black">
              <div className="flex items-center justify-between">
                <div className='flex gap-2 items-center max-sm:flex-col'>
                  <div className='w-[60px] '> <img src={item.thumbnail} alt="" /></div>
                  <div>
                    <Link href={`/dp-products?id=${item.id}`} passHref>
                      <h2 className="font-semibold">{item.title}</h2>
                    </Link>
                    <p className='text-sm my-1'>Quantidade: {item.quantity}</p>
                    <p className='text-sm'><span className='font-bold'>R${item.price.toFixed(2)}</span></p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:underline">
                  Remover
                </button>
              </div>
            </li>
          ))}
          <h3 className="text-lg font-bold text-blackcontent my-8 text-center"> <span className='font-light'> Total: </span>R${valorTotal.toFixed(2)}</h3>
        </ul>

      )}
    </div>
  );
};

export default Cart;
