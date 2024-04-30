'use client'
import { useState } from "react";

export default function Apiteste() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDataFromServer = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:8000/userCreate", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar dados da API: ${response.statusText}`);
      }

      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (

    <main>

      <div className="flex h-full flex-col items-center pt-40 gap-12">
        <button onClick={fetchDataFromServer} disabled={loading} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {loading ? 'Carregando...' : 'Buscar Dados da API'}
        </button>
        <h1 className="text-white">Resposta da API</h1>
        {apiData && <p>{JSON.stringify(apiData)}</p>}
      </div>
      
    </main>
  );
}
