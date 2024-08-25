export interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  permalink: string;
  pictures: Array<{
    id: string;
    url: string;
  }>
  attributes: Array<{
    name: string;
    value_name: string;
  }>;
}
