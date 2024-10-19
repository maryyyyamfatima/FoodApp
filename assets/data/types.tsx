// image: string | null; | => union(OR) type
// enum

export type Product = {
  id: number;
  image: string | null; // Union Type
  name: string;
  price: number;
};

export type PizzaSize = 'S' | 'M' | 'L' | 'XL';

export enum PizzaSizes {
  Small,
  Medium,
  Large,
  XLarge,
  map
}

export type CartItem = {
  id: string;
  product: Product;
  // product_id: number;
  size: PizzaSize;
  quantity: number;
};
