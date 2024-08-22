"use client";
import React from 'react';
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';
import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const [textButtonSubmit, setTextButtonSubmit] = useState("Login");
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, [e.target.id]: e.target.value
    });
  };

  //    submit form.    //  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);
    setTextButtonSubmit("Buscando...");
    setErrors([]);

    let formDataObj = new FormData();

    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    fetch("http://localhost:8000/userLogin", {
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
          localStorage.setItem("token", data.token);
          alert("Login efetuado com sucesso! Seu token: " + data.token);
        }
      })
      .catch((error) => {
        setErrors((prevState: any) => [...prevState, "Erro ao cadastrar tente novamente mais tarde."]);
        console.error("Erro:", error);
      })
      .finally(() => {
        setIsDisabled(false);
        setTextButtonSubmit("Login");
      });
  };
  //   /submit form.    //

  return (
    <div>
      <Navbar />
      <div className='flex justify-center mt-12'>
        <div className='border-4 border-pinks rounded-tl-[90px] rounded-tr-md rounded-bl-md rounded-br-[90px] p-6 max-sm:w-[400px] w-[640px] max-sm:border-none'>
          <p className='text-blackcontent text-center font-semibold text-xl my-20 max-sm:my-12'>Faça o login</p>
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

            {/* Formulário de login */}
            <form name="login" onSubmit={handleSubmit}>
              <fieldset className='flex flex-col gap-6'>

                {/* Email */}
                <div className='flex justify-center items-center gap-2'>
                  <svg className='max-sm:hidden' height="25" width="25" fill="none" viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.08838 3.62335L8.83651 8.68439C9.99751 9.55511 11.5938 9.55511 12.7548 8.68439L19.5029 3.62329" stroke="#F6587A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M18.4145 1.44641H3.17682C1.97459 1.44641 1 2.421 1 3.62323V14.5073C1 15.7095 1.97459 16.6841 3.17682 16.6841H18.4145C19.6167 16.6841 20.5913 15.7095 20.5913 14.5073V3.62323C20.5913 2.421 19.6167 1.44641 18.4145 1.44641Z" stroke="#F6587A" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                  <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type="email" id='email' placeholder='Email' value={formData.email} onChange={handleChange} />
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
                  <input className='focus:border-pinks border-none rounded-xl text-blackcontent bg-whitegray my-2 focus-within:ring-pinks' type={showPassword ? "text" : "password"} id='password' placeholder='Digite sua senha' value={formData.password} onChange={handleChange} />
                </div>

              </fieldset>
              <div className='flex justify-center my-10'>
                <input value={textButtonSubmit} type="submit" disabled={isDisabled} className={`py-3 px-12 bg-pinks text-blackcontent font-bold rounded-3xl cursor-pointer hover:bg-pink-300 ${isDisabled ? 'cursor-wait' : 'cursor-pointer'}`} />
              </div>
            </form>

            <a href='/register' className='text-blackcontent underline hover:text-gray-400 mb-12'>Ainda não tem uma conta?</a>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;