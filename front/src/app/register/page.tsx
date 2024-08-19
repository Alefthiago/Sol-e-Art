"use client";
import React from 'react';
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';
import { useState } from "react";

const Register: React.FC = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    rua: "",
    bairro: "",
    cidade: "",
    estado: ""
  });

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const cepValue = e.target.value;
    setCep(cepValue);

    const cleanCep = cepValue.replace(/\D/g, "");
    if (cleanCep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        const data = await response.json();

        if (!data.erro) {
          setAddress({
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf
          });
        } else {
          alert("CEP não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
        alert("Erro ao buscar o CEP.");
      }
    }
  };


  return (
    <div>
      <Navbar />
      <div className='flex justify-center mt-12'>
        <div className='border-4 border-pinks rounded-tl-[90px] rounded-tr-md rounded-bl-md rounded-br-[90px] p-6 max-sm:w-[400px] w-[640px] max-sm:border-none'>
          <p className='text-blackcontent text-center font-semibold text-xl my-20 max-sm:my-12 '>Cadastre-se</p>
          <div className='flex flex-col items-center'>

            {/* formulario de cadastro*/}
            <form name="cadastro" >
              <fieldset className='flex gap-6 max-sm:flex-col'>

                <div className='mt-6'>
                  {/* nome */}
                  <div className='flex justify-center items-center gap-2 '>
                    <svg className='max-sm:hidden' height="25" width="25" fill="none" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 9.05331C11.2155 9.05331 12.3813 8.57639 13.2408 7.72748C14.1003 6.87857 14.5832 5.7272 14.5832 4.52665C14.5832 3.32611 14.1003 2.17474 13.2408 1.32583C12.3813 0.476914 11.2155 0 10 0C8.78446 0 7.61871 0.476914 6.7592 1.32583C5.89969 2.17474 5.41682 3.32611 5.41682 4.52665C5.41682 5.7272 5.89969 6.87857 6.7592 7.72748C7.61871 8.57639 8.78446 9.05331 10 9.05331ZM10 11.0421C3.90636 11.0421 0 14.3634 0 15.9804V19H20V15.9804C20 14.0249 16.3018 11.0421 10 11.0421Z" fill="#F6587A" />
                    </svg>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent  bg-whitegray my-2 focus-within:ring-pinks' type="text" id='nome' placeholder='Nome' />
                  </div>

                  {/* email*/}
                  <div className='flex justify-center items-center gap-2'>
                    <svg className='max-sm:hidden' height="25" width="25" fill="none" viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.08838 3.62335L8.83651 8.68439C9.99751 9.55511 11.5938 9.55511 12.7548 8.68439L19.5029 3.62329" stroke="#F6587A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M18.4145 1.44641H3.17682C1.97459 1.44641 1 2.421 1 3.62323V14.5073C1 15.7095 1.97459 16.6841 3.17682 16.6841H18.4145C19.6167 16.6841 20.5913 15.7095 20.5913 14.5073V3.62323C20.5913 2.421 19.6167 1.44641 18.4145 1.44641Z" stroke="#F6587A" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="email" id='email' placeholder='Email' />
                  </div>

                  {/* CPF */}
                  <div className='flex justify-center items-center gap-2'>
                    <svg className='max-sm:hidden' height="27" width="27" fill="none" viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 9C21 12.7712 21 14.6569 19.8284 15.8284C18.6569 17 16.7712 17 13 17H9C5.22876 17 3.34315 17 2.17157 15.8284C1 14.6569 1 12.7712 1 9C1 5.22876 1 3.34315 2.17157 2.17157C3.34315 1 5.22876 1 9 1H13C16.7712 1 18.6569 1 19.8284 2.17157C20.4816 2.82475 20.7706 3.69989 20.8985 5" stroke="#F6587A" strokeLinecap="round" strokeWidth="2" />
                      <path d="M8 9C8 9.5523 7.55228 10 7 10C6.44772 10 6 9.5523 6 9C6 8.4477 6.44772 8 7 8C7.55228 8 8 8.4477 8 9Z" fill="#F6587A" />
                      <path d="M12 9C12 9.5523 11.5523 10 11 10C10.4477 10 10 9.5523 10 9C10 8.4477 10.4477 8 11 8C11.5523 8 12 8.4477 12 9Z" fill="#F6587A" />
                      <path d="M16 9C16 9.5523 15.5523 10 15 10C14.4477 10 14 9.5523 14 9C14 8.4477 14.4477 8 15 8C15.5523 8 16 8.4477 16 9Z" fill="#F6587A" />
                    </svg>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="text" id='cpf' placeholder='CPF' />
                  </div>

                  {/* Senha */}
                  <div className='flex justify-center items-center gap-2'>

                    <button type="button" onClick={togglePasswordVisibility} className="max-sm:hidden">
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

                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type={showPassword ? "text" : "password"} id='password' placeholder='Digite uma senha' />

                  </div>
                </div>


                <div className='sm:mt-6'>

                  {/* CEP */}
                  <div className='flex justify-center items-center gap-2'>

                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="text" id='endereco' placeholder='CEP'
                      value={cep} onChange={handleCepChange} />
                  </div>
                  {/* Rua*/}
                  <div className='flex justify-center items-center gap-2'>

                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="text" id='rua' placeholder='Rua'
                      value={address.rua} />
                  </div>

                  {/* Bairro*/}
                  <div className='flex justify-center items-center gap-2'>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="text" id='bairro' placeholder='Bairro'
                      value={address.bairro} />
                  </div>

                  {/* Cidade*/}
                  <div className='flex justify-center items-center gap-2'>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="text" id='cidade' placeholder='Cidade'
                      value={address.cidade} />
                  </div>

                  {/* Estado - Numero*/}
                  <div className='flex items-center gap-1 justify-center'>
                    <input className='focus:border-pinks border-none rounded-xl w-[119.5px] text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="text" id='estado'
                      value={address.estado} readOnly placeholder="UF" />
                    <input className='focus:border-pinks border-none rounded-xl w-[119.5px] text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="text" id='numero' placeholder='Número' />
                  </div>
                </div>
                {/* Cadastrar */}

              </fieldset>
              <div className='flex justify-center my-10'>
                <input value="Cadastrar" type="submit" className="py-3 px-12 bg-pinks text-blackcontent font-bold rounded-3xl cursor-pointer hover:bg-pink-300 " />
              </div>
            </form>

            <a href='/login' className='text-blackcontent underline hover:text-gray-400 mb-12'>Já tem uma conta?</a>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
