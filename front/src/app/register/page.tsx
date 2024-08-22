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

  // const [cep, setCep] = useState("");
  // const [address, setAddress] = useState({
  //   rua: "",
  //   bairro: "",
  //   cidade: "",
  //   estado: ""
  // });

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    password: "",
    // passwordConfirm: "",
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    uf: "",
    numero: ""
  });

  const [isDisabled, setIsDisabled] = useState(false);
  const [textButtonSubmit, setTextButtonSubmit] = useState("Cadastrar");
  const [errors, setErrors] = useState<string[]>([]);

  const handleChangeFormData = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;

    let isNumericField = ['cpf', 'numero'].includes(name);
    let newValue = isNumericField ? value.replace(/\D/g, '') : value;

    setFormData((prevState: FormData) => ({
      ...prevState,
      [name]: newValue
    }));
  };

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let isNumericField = ['cep'].includes('cep');
    let cepValue = isNumericField ? value.replace(/\D/g, '') : value;
    // setCep(cepValue);

    setFormData({ ...formData, cep: cepValue });

    let cleanCep = cepValue.replace(/\D/g, "");
    // console.log(cleanCep);
    if (cleanCep.length === 8) {
      try {
        let response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
        let data = await response.json();

        if (!data.erro) {
          setFormData({
            ...formData,
            cep: cleanCep,
            rua: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            uf: data.uf
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

  //    submit form.    //  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);
    setTextButtonSubmit("Cadastrando...");
    setErrors([]);

    let formDataObj = new FormData();

    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    fetch("http://localhost:8000/userCreate", {
      method: "POST",
      body: formDataObj,
      // headers: {
      //   "Content-Type": "application/json",
      // }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.type == `error`) {
          let newErrors = Object.keys(data.message).map((key) => data.message[key]);
          setErrors((prevState: any) => [...prevState, ...newErrors]);
        } else {
          // localStorage.setItem("token", data.token);
          window.location.href = "/screenlogin";
        }
      })
      .catch((error) => {
        setErrors((prevState: any) => [...prevState, "Erro ao cadastrar tente novamente mais tarde."]);
        console.error("Erro:", error);
      })
      .finally(() => {
        setIsDisabled(false);
        setTextButtonSubmit("Cadastrar");
      });
  };
  //   /submit form.    //  

  return (
    <div>
      <Navbar />
      <div className='flex justify-center mt-12'>
        <div className='border-4 border-pinks rounded-tl-[90px] rounded-tr-md rounded-bl-md rounded-br-[90px] p-6 max-sm:w-[400px] w-[640px] max-sm:border-none'>
          <p className='text-blackcontent text-center font-semibold text-xl my-20 max-sm:my-12 '>Cadastre-se</p>

          <div className='flex flex-col items-center'>

            <div className={`w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md ${errors.length > 0 ? 'flex' : 'hidden'}`}>
              <div className="flex items-center justify-center w-12 bg-red-500">
                <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                </svg>
              </div>

              <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                  <span className="font-semibold text-red-500">Error</span>
                  {errors.map((error: string, index: number) => (
                    <p key={index} className="text-sm text-gray-600">
                      {error}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* formulario de cadastro*/}
            <form name="cadastro" id="form-cadastro" onSubmit={handleSubmit}>
              <fieldset className='flex gap-6 max-sm:flex-col'>

                <div className='mt-6'>
                  {/* nome */}
                  <div className='flex justify-center items-center gap-2 '>
                    <svg className='max-sm:hidden' height="25" width="25" fill="none" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 9.05331C11.2155 9.05331 12.3813 8.57639 13.2408 7.72748C14.1003 6.87857 14.5832 5.7272 14.5832 4.52665C14.5832 3.32611 14.1003 2.17474 13.2408 1.32583C12.3813 0.476914 11.2155 0 10 0C8.78446 0 7.61871 0.476914 6.7592 1.32583C5.89969 2.17474 5.41682 3.32611 5.41682 4.52665C5.41682 5.7272 5.89969 6.87857 6.7592 7.72748C7.61871 8.57639 8.78446 9.05331 10 9.05331ZM10 11.0421C3.90636 11.0421 0 14.3634 0 15.9804V19H20V15.9804C20 14.0249 16.3018 11.0421 10 11.0421Z" fill="#F6587A" />
                    </svg>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent  bg-whitegray my-2 focus-within:ring-pinks' type="text" id='nome' name='nome' placeholder='Nome' value={formData.nome} onChange={handleChangeFormData} />
                  </div>

                  {/* email*/}
                  <div className='flex justify-center items-center gap-2'>
                    <svg className='max-sm:hidden' height="25" width="25" fill="none" viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.08838 3.62335L8.83651 8.68439C9.99751 9.55511 11.5938 9.55511 12.7548 8.68439L19.5029 3.62329" stroke="#F6587A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M18.4145 1.44641H3.17682C1.97459 1.44641 1 2.421 1 3.62323V14.5073C1 15.7095 1.97459 16.6841 3.17682 16.6841H18.4145C19.6167 16.6841 20.5913 15.7095 20.5913 14.5073V3.62323C20.5913 2.421 19.6167 1.44641 18.4145 1.44641Z" stroke="#F6587A" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="email" id='email' name='email' placeholder='Email' value={formData.email} onChange={handleChangeFormData} />
                  </div>

                  {/* CPF */}
                  <div className='flex justify-center items-center gap-2'>
                    <svg className='max-sm:hidden' height="27" width="27" fill="none" viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 9C21 12.7712 21 14.6569 19.8284 15.8284C18.6569 17 16.7712 17 13 17H9C5.22876 17 3.34315 17 2.17157 15.8284C1 14.6569 1 12.7712 1 9C1 5.22876 1 3.34315 2.17157 2.17157C3.34315 1 5.22876 1 9 1H13C16.7712 1 18.6569 1 19.8284 2.17157C20.4816 2.82475 20.7706 3.69989 20.8985 5" stroke="#F6587A" strokeLinecap="round" strokeWidth="2" />
                      <path d="M8 9C8 9.5523 7.55228 10 7 10C6.44772 10 6 9.5523 6 9C6 8.4477 6.44772 8 7 8C7.55228 8 8 8.4477 8 9Z" fill="#F6587A" />
                      <path d="M12 9C12 9.5523 11.5523 10 11 10C10.4477 10 10 9.5523 10 9C10 8.4477 10.4477 8 11 8C11.5523 8 12 8.4477 12 9Z" fill="#F6587A" />
                      <path d="M16 9C16 9.5523 15.5523 10 15 10C14.4477 10 14 9.5523 14 9C14 8.4477 14.4477 8 15 8C15.5523 8 16 8.4477 16 9Z" fill="#F6587A" />
                    </svg>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="text" id='cpf' name='cpf' placeholder='CPF' value={formData.cpf} onChange={handleChangeFormData} />
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

                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type={showPassword ? "text" : "password"} id='password' name='password' placeholder='Digite uma senha' value={formData.password} onChange={handleChangeFormData} />

                  </div>
                </div>


                <div className='sm:mt-6'>

                  {/* CEP */}
                  <div className='flex justify-center items-center gap-2'>

                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="text" id='cep' name='cep' placeholder='CEP'
                      value={formData.cep} onChange={handleCepChange} />
                  </div>
                  {/* Rua*/}
                  <div className='flex justify-center items-center gap-2'>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="text" id='rua' name='rua' placeholder='Rua'
                      value={formData.rua} onChange={handleChangeFormData} />
                  </div>

                  {/* Bairro*/}
                  <div className='flex justify-center items-center gap-2'>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="text" id='bairro' name='bairro' placeholder='Bairro'
                      value={formData.bairro} onChange={handleChangeFormData} />
                  </div>

                  {/* Cidade*/}
                  <div className='flex justify-center items-center gap-2'>
                    <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="text" id='cidade' name='cidade' placeholder='Cidade'
                      value={formData.cidade} onChange={handleChangeFormData} />
                  </div>

                  {/* Estado - Numero*/}
                  <div className='flex items-center gap-1 justify-center'>
                    <input className='focus:border-pinks border-none rounded-xl w-[119.5px] text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="text" id='uf' name='uf'
                      value={formData.uf} readOnly placeholder="UF" onChange={handleChangeFormData} />
                    <input className='focus:border-pinks border-none rounded-xl w-[119.5px] text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="text" id='numero' name='numero' placeholder='Número' value={formData.numero} onChange={handleChangeFormData} />
                  </div>
                </div>
                {/* Cadastrar */}

              </fieldset>

              <div className='flex justify-center my-10'>
                <input value={textButtonSubmit} type="submit" disabled={isDisabled} className={`py-3 px-12 bg-pinks text-blackcontent font-bold rounded-3xl cursor-pointer hover:bg-pink-300 ${isDisabled ? 'cursor-wait' : 'cursor-pointer'}`} />
                {/* <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" /> */}
              </div>
            </form>

            <a href='/screenlogin' className='text-blackcontent underline hover:text-gray-400 mb-12'>Já tem uma conta?</a>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
