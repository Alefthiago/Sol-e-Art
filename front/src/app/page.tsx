'use client'
import { useState } from "react";

export default function Home() {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={fetchDataFromServer} disabled={loading} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
        {loading ? 'Carregando...' : 'Buscar Dados da API'}
      </button>
      <h1>Resposta da API</h1>
      {apiData && <p>{JSON.stringify(apiData)}</p>}
    </main>
  );
  //milmeucommilteu
}
