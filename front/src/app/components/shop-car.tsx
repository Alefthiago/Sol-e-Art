"use client";

import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";

// Tipos para os itens no carrinho
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export function ShopCar() {
  const [openModal, setOpenModal] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Carregar o carrinho do localStorage ao inicializar o componente
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Atualizar o localStorage sempre que o carrinho mudar
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Função para adicionar um item ao carrinho
  const addItemToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // Se o item já existe, apenas incrementa a quantidade
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Se o item é novo, adiciona ao carrinho
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Função para remover um item do carrinho
  const removeItemFromCart = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calcular o total do carrinho
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <button
        className="cursor-pointer hover:scale-110 hover:bg-pinks active:bg-pinks transition ease-in-out rounded-xl"
        onClick={() => setOpenModal(true)}
      >
        {/* SVG Desktop */}
        <svg
          className="mx-4 my-2 hidden lg:flex"
          width="93"
          height="25"
          viewBox="0 0 93 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.03305 4.33333H24L21.5556 12.5H7.34931M22.7778 17.1667H8.11111L5.66667 2H2M9.33333 21.8333C9.33333 22.4777 8.78612 23 8.11111 23C7.4361 23 6.88889 22.4777 6.88889 21.8333C6.88889 21.189 7.4361 20.6667 8.11111 20.6667C8.78612 20.6667 9.33333 21.189 9.33333 21.8333ZM22.7778 21.8333C22.7778 22.4777 22.2306 23 21.5556 23C20.8805 23 20.3333 22.4777 20.3333 21.8333C20.3333 21.189 20.8805 20.6667 21.5556 20.6667C22.2306 20.6667 22.7778 21.189 22.7778 21.8333Z"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* SVG Mobile */}
        <svg
          className="mx-2 my-1 lg:hidden"
          width="30"
          height="25"
          viewBox="0 0 30 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.94659 5.08679H7.73341L7.73341 6.33316M8.97329 18.2854H3.86666L2.61914 1.97429H0.573729M4.90989 22.7317C4.90989 23.3723 4.36443 23.8985 3.69383 23.8985C3.02323 23.8985 2.47776 23.3723 2.47776 22.7317C2.47776 22.091 3.02323 21.5648 3.69383 21.5648C4.36443 21.5648 4.90989 22.091 4.90989 22.7317ZM11.817 22.7317C11.817 23.3723 11.2716 23.8985 10.601 23.8985C9.9304 23.8985 9.38493 23.3723 9.38493 22.7317C9.38493 22.091 9.9304 21.5648 10.601 21.5648C11.2716 21.5648 11.817 22.091 11.817 22.7317Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <span className="text-pinks text-xl font-bold">Meu Carrinho</span>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <div className="flex items-center">
                      <Button
                        className="bg-red-500 text-white mr-2"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        -
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        className="bg-green-500 text-white ml-2"
                        onClick={() => addItemToCart(item)}
                      >
                        +
                      </Button>
                    </div>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Seu carrinho está vazio.
              </p>
            )}
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${getTotalPrice()}</span>
            </div>
            <Button
              className="w-full bg-pinks hover:bg-pinks-dark text-white font-semibold py-2 px-4 rounded-lg"
              onClick={() => setOpenModal(false)}
            >
              Continuar Comprando
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}