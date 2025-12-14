import { motion } from 'motion/react';
import { useState } from 'react';
import { ShoppingBag, Heart, Check, ChevronLeft } from 'lucide-react';
import { Product } from '../types';

interface ProductPageProps {
  product: Product;
  onNavigate: (page: string, productId?: number) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onAddToWishlist?: (product: Product) => void;
  onRemoveFromWishlist?: (productId: number) => void;
  isInWishlist?: boolean;
}

export function ProductPage({ product, onNavigate, onAddToCart, onAddToWishlist, onRemoveFromWishlist, isInWishlist = false }: ProductPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [showWishlistFeedback, setShowWishlistFeedback] = useState(false);

  const images = product.images || [product.image];

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleToggleWishlist = () => {
    if (isInWishlist && onRemoveFromWishlist) {
      onRemoveFromWishlist(product.id);
    } else if (onAddToWishlist) {
      onAddToWishlist(product);
    }
    setShowWishlistFeedback(true);
    setTimeout(() => setShowWishlistFeedback(false), 2000);
  };

  return (
    <div className="min-h-screen relative">
      {/* Back Button */}
      <section className="relative z-10 pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => onNavigate('all-creations')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full shadow-md text-[var(--color-soft-gray)] hover:shadow-lg transition-all"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Back to All Creations</span>
          </motion.button>
        </div>
      </section>

      {/* Product Details */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image - Polaroid Style */}
              <div className="bg-white p-6 pb-16 shadow-2xl rotate-[-1deg] mb-8">
                <div className="aspect-square overflow-hidden bg-gray-100 rounded-sm">
                  <img
                    src={images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Handwritten caption */}
                <div className="mt-6 text-center">
                  <p className="text-[var(--color-soft-gray)]">{product.name}</p>
                </div>

                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-white/70 rotate-[-3deg] shadow-md" />
              </div>

              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="flex gap-4 justify-center flex-wrap">
                  {images.map((img, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative bg-white p-2 shadow-md transition-all ${
                        selectedImage === index
                          ? 'ring-2 ring-[var(--color-pastel-pink)] scale-105'
                          : 'hover:scale-105'
                      }`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-20 h-20 overflow-hidden bg-gray-100">
                        <img
                          src={img}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                <h1 className="text-[var(--color-soft-gray)] mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-4xl text-[var(--color-soft-gray)]">
                    {product.price}
                  </span>
                  <span className="px-4 py-1 bg-[var(--color-pastel-mint)] rounded-full text-sm text-[var(--color-soft-gray)]">
                    Handmade
                  </span>
                </div>

                <p className="text-[var(--color-soft-gray)]/80 mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Details List */}
                <div className="mb-8 space-y-3">
                  {product.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <Check className="w-5 h-5 text-[var(--color-pastel-lavender)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--color-soft-gray)]/70 text-sm">
                        {detail}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-[var(--color-soft-gray)] mb-3">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <motion.button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[var(--color-soft-gray)] hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      -
                    </motion.button>
                    <div className="w-20 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                      <span className="text-[var(--color-soft-gray)]">{quantity}</span>
                    </div>
                    <motion.button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[var(--color-soft-gray)] hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      +
                    </motion.button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <motion.button
                    onClick={handleAddToCart}
                    className={`w-full py-5 rounded-full shadow-xl relative overflow-hidden group flex items-center justify-center gap-3 transition-all ${
                      isAdded
                        ? 'bg-gradient-to-r from-green-400 to-green-500'
                        : 'bg-gradient-to-r from-[var(--color-pastel-pink)] via-[var(--color-pastel-lavender)] to-[var(--color-pastel-mint)]'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isAdded}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    {isAdded ? (
                      <>
                        <Check className="w-6 h-6 relative z-10 text-white" />
                        <span className="relative z-10 text-white">Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-6 h-6 relative z-10 text-[var(--color-soft-gray)]" />
                        <span className="relative z-10 text-[var(--color-soft-gray)]">
                          Add to Cart
                        </span>
                      </>
                    )}
                  </motion.button>

                  <motion.button
                    onClick={handleToggleWishlist}
                    className={`w-full py-4 rounded-full shadow-md flex items-center justify-center gap-3 transition-all relative overflow-hidden ${
                      isInWishlist
                        ? 'bg-gradient-to-r from-[var(--color-pastel-peach)] to-[var(--color-pastel-pink)] text-white border-2 border-transparent'
                        : 'bg-white text-[var(--color-soft-gray)] border-2 border-[var(--color-pastel-pink)]/30 hover:border-[var(--color-pastel-pink)]'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={showWishlistFeedback}
                  >
                    {!isInWishlist && (
                      <motion.div
                        className="absolute inset-0 bg-[var(--color-pastel-pink)]/10"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                    <Heart 
                      className={`w-5 h-5 relative z-10 transition-all ${
                        isInWishlist ? 'fill-white' : ''
                      }`} 
                    />
                    <span className="relative z-10">
                      {showWishlistFeedback 
                        ? (isInWishlist ? 'Added!' : 'Removed!') 
                        : (isInWishlist ? 'In Wishlist ♡' : 'Add to Wishlist')
                      }
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Additional Info */}
              <motion.div
                className="mt-6 p-6 bg-gradient-to-br from-[var(--color-pastel-peach)]/40 to-[var(--color-pastel-lavender)]/40 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-sm text-[var(--color-soft-gray)]/70 text-center">
                  ♡ Each piece is lovingly handmade to order. Please allow 3-5 business days for creation before shipping.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}