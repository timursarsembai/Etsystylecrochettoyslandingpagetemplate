export interface Product {
  id: number;
  name: string;
  price: string;
  priceNumber: number;
  category: string;
  image: string;
  images?: string[];
  description: string;
  details: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}
