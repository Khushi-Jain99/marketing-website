export type ProductCategory = 'Plywood' | 'Laminates' | 'Boards' | 'Hardware';

export interface Product {
  id: number;
  name: string;
  description: string;
  category: ProductCategory;
  image: string;
}