"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const UserPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Verifica se o token JWT está presente no localStorage
    const token = localStorage.getItem('token');

    // Se não houver token, redireciona para a página de login
    if (!token) {
      router.push('/login'); // Substitua '/login' pela rota correta do seu login
    }
  }, [router]);

  return (
    <div>
      <h1 className='text-black'>Olá, esta página é privada</h1>
    </div>
  );
};

export default UserPage;
