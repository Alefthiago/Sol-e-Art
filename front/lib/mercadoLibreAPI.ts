import { Product } from '@/app/types/product';


// Jogas os produtos num array e mistura a cada requisição
let productsCache: Product[] = [];

export const fetchBiquini = async (): Promise<Product[]> => {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=biquini&limit=50');
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    productsCache = data.results;
    return productsCache;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// busca de categorias diferente (perguntar como renderizar sem criacao de novas pags)
export const fetchSunga = async (): Promise<Product[]> => {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=sunga&limit=50');
    if (!response.ok) throw new Error('Failed to fetch products');
    const data = await response.json();
    productsCache = data.results;
    return productsCache;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getRandomProduct = (): Product | null => {
  if (productsCache.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * productsCache.length);
  return productsCache[randomIndex];
};




export const fetchProductById = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    if (!response.ok) {
      throw new Error('Produto não encontrado');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar produto:', error);
    return null;
  }
};


