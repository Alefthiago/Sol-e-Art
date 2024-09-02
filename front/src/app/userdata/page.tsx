"use client";
import React from 'react'
import { Navbar } from '../components/navbar'
import { useState } from 'react';
import { Know } from '../components/getknow';

// Tela de configuracao de usuário
const UserData = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Navbar />

            {/* Informações de tela */}
            <div className='flex justify-center items-center h-screen flex-col gap-12'>
                <p className='text-blackcontent text-center font-bold text-xl'>Visualizar Conta</p>
                <div className='flex flex-col'>
                    <span className='text-gray-400 font-light ml-1'>Email</span>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray mb-2 focus-within:ring-pink ' type="email" id='email' name='email' />
                    <span className='text-gray-400 font-light ml-1'>Nome</span>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray mb-2 focus-within:ring-pink ' type="text" id='name' name='name' />
                    <span className='text-gray-400 font-light ml-1'>Cep</span>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray mb-2 focus-within:ring-pink ' type="text" id='cep' name='cep' />
                    <span className='text-gray-400 font-light ml-1'>Número</span>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray mb-2 focus-within:ring-pink ' type="text" id='number' name='number' />
                    <span className='text-gray-400 font-light ml-1'>Senha</span>
                    <div className='flex'>
                        <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type={showPassword ? "text" : "password"} id='password' name='password' />
                        <button type="button" onClick={togglePasswordVisibility} className="mx-2">
                            {showPassword ? (
                                <svg height="26" width="26" fill="none" viewBox="0 0 22 14" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.77629 7C3.61959 9.867 6.51982 12.5 11 12.5C15.4802 12.5 18.3805 9.867 20.2238 7C18.3805 4.133 15.4802 1.5 11 1.5C6.51982 1.5 3.61959 4.133 1.77629 7ZM0.234194 6.61412C2.19938 3.37616 5.5653 0 11 0C16.4347 0 19.8007 3.37616 21.7658 6.61412L22 7L21.7658 7.38587C19.8007 10.6239 16.4347 14 11 14C5.5653 14 2.19938 10.6239 0.234194 7.38587L0 7L0.234194 6.61412ZM11 3.125C8.83521 3.125 7.08033 4.85987 7.08033 7C7.08033 9.14012 8.83521 10.875 11 10.875C13.1648 10.875 14.9197 9.14012 14.9197 7C14.9197 4.85987 13.1648 3.125 11 3.125Z" fill="#F6587A" fillRule="evenodd" />
                                </svg>
                            ) : (
                                <svg height="20" width="24" fill="none" viewBox="0 0 24 11" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.4375 5L2.375 7.66667M23 1C22.1216 2.4196 20.9939 3.8392 19.5636 5.00133M19.5636 5.00133C17.6354 6.568 15.1577 7.66667 12 7.66667M19.5636 5.00133L19.5625 5M19.5636 5.00133L21.625 7.66667M12 7.66667C6.5 7.66667 3.0625 4.33333 1 1M12 7.66667V11M16.125 7L17.5 10.3333M7.875 7L6.5 10.3333" stroke="#F6587A" strokeWidth="2" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className='flex justify-center mt-10 mb-20'>
                        <button className='py-3 px-12 bg-pinks text-blackcontent font-bold rounded-3xl cursor-pointer hover:bg-pink-300'> Logout </button>
                        {/* <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" /> */}
                    </div>

                    <Know></Know>

                </div>
            </div>
        </>
    )
}

export default UserData
