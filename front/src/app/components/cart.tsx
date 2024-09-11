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
                  <svg height="29" width="27" fill="none" viewBox="0 0 46 51" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 25.5L28 35.5M28 25.5L18 35.5M3 10.5H43M33 10.5L32.3235 8.47017C31.6677 6.50312 31.3398 5.5196 30.7318 4.79245C30.1948 4.15032 29.5052 3.6533 28.7262 3.34695C27.844 3 26.8075 3 24.734 3H21.266C19.1925 3 18.156 3 17.2738 3.34695C16.4948 3.6533 15.8052 4.15032 15.2682 4.79245C14.6601 5.5196 14.3323 6.50312 13.6766 8.47017L13 10.5M38 10.5V36C38 40.2005 38 42.3005 37.1825 43.905C36.4635 45.3162 35.3162 46.4635 33.905 47.1825C32.3005 48 30.2005 48 26 48H20C15.7996 48 13.6994 48 12.0951 47.1825C10.6839 46.4635 9.5365 45.3162 8.81745 43.905C8 42.3005 8 40.2005 8 36V10.5" stroke="#F6587A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
                  </svg>
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
