import axios from 'axios';
import { Product } from '@/app/types/product';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(
      'https://api.mercadolibre.com/sites/MLB/search',
      {
        params: {
          q: 'biquini',
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
