import { useState } from 'react';
import { YarnConfetti } from './components/YarnConfetti';
import { ScatteredDecor } from './components/ScatteredDecor';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AllCreationsPage } from './components/AllCreationsPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ProductPage } from './components/ProductPage';
import { CartPage } from './components/CartPage';
import { CheckoutPage } from './components/CheckoutPage';
import { WishlistPage } from './components/WishlistPage';
import { CustomOrderPage } from './components/CustomOrderPage';
import { CartItem, Product } from './types';
import { getProductById } from './data/products';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  const handleNavigate = (page: string, productId?: number) => {
    setCurrentPage(page);
    if (productId) {
      setSelectedProductId(productId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prevItems, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddToWishlist = (product: Product) => {
    setWishlistItems((prevItems) => {
      const exists = prevItems.find(item => item.id === product.id);
      if (exists) return prevItems;
      return [...prevItems, product];
    });
  };

  const handleRemoveFromWishlist = (productId: number) => {
    setWishlistItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const handleWishlistAddToCart = (product: Product) => {
    handleAddToCart(product, 1);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistItemCount = wishlistItems.length;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <YarnConfetti />
      <ScatteredDecor />
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        cartItemCount={cartItemCount} 
        wishlistItemCount={wishlistItemCount}
      />
      
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'all-creations' && <AllCreationsPage onNavigate={handleNavigate} />}
      {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
      {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      {currentPage === 'product' && selectedProductId && getProductById(selectedProductId) && (
        <ProductPage
          product={getProductById(selectedProductId)!}
          onNavigate={handleNavigate}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
          onRemoveFromWishlist={handleRemoveFromWishlist}
          isInWishlist={wishlistItems.some(item => item.id === selectedProductId)}
        />
      )}
      {currentPage === 'cart' && (
        <CartPage
          items={cartItems}
          onNavigate={handleNavigate}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveFromCart}
        />
      )}
      {currentPage === 'checkout' && (
        <CheckoutPage
          items={cartItems}
          onNavigate={handleNavigate}
          onClearCart={handleClearCart}
        />
      )}
      {currentPage === 'wishlist' && (
        <WishlistPage
          items={wishlistItems}
          onNavigate={handleNavigate}
          onRemoveItem={handleRemoveFromWishlist}
          onAddToCart={handleWishlistAddToCart}
        />
      )}
      {currentPage === 'custom-order' && <CustomOrderPage onNavigate={handleNavigate} />}
    </div>
  );
}