import { motion, AnimatePresence } from 'motion/react';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface WishlistPageProps {
  items: Product[];
  onNavigate: (page: string, productId?: number) => void;
  onRemoveItem: (productId: number) => void;
  onAddToCart: (product: Product) => void;
}

export function WishlistPage({ items, onNavigate, onRemoveItem, onAddToCart }: WishlistPageProps) {
  if (items.length === 0) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <Heart className="w-24 h-24 mx-auto text-[var(--color-soft-gray)]/30" />
            </div>
            <h2 className="text-[var(--color-soft-gray)] mb-4">
              Your Wishlist is Empty
            </h2>
            <p className="text-[var(--color-soft-gray)]/70 mb-8 max-w-md mx-auto">
              Start adding items you love to your wishlist and make your dreams come true!
            </p>
            <motion.button
              onClick={() => onNavigate('all-creations')}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--color-pastel-pink)] via-[var(--color-pastel-lavender)] to-[var(--color-pastel-mint)] text-[var(--color-soft-gray)] rounded-full shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-6 h-6" />
              <span>Find Your Favorites</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <section className="relative z-10 pt-16 pb-12 px-6 bg-gradient-to-br from-[var(--color-pastel-pink)]/30 via-[var(--color-pastel-lavender)]/30 to-[var(--color-pastel-mint)]/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-[var(--color-soft-gray)] mb-4">
              My Wishlist
            </h1>
            <p className="text-[var(--color-soft-gray)]/70">
              {items.length} {items.length === 1 ? 'treasure' : 'treasures'} saved for later ♡
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wishlist Items */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {items.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg relative"
                >
                  {/* Remove Button */}
                  <motion.button
                    onClick={() => onRemoveItem(product.id)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-red-400 hover:bg-red-50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Trash2 className="w-5 h-5" />
                  </motion.button>

                  {/* Product Image - Polaroid Style */}
                  <motion.button
                    onClick={() => onNavigate('product', product.id)}
                    className="w-full mb-6 cursor-pointer"
                    whileHover={{ rotate: 2 }}
                  >
                    <div className="bg-white p-4 pb-10 shadow-md rotate-[-1deg]">
                      <div className="aspect-square overflow-hidden bg-gray-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Tape effect */}
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-white/70 rotate-[-3deg] shadow-sm -mt-4" />
                  </motion.button>

                  {/* Product Details */}
                  <div className="text-center mb-4">
                    <h3 className="text-[var(--color-soft-gray)] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xl text-[var(--color-soft-gray)]">
                      {product.price}
                    </p>
                    <p className="text-sm text-[var(--color-soft-gray)]/60 mt-2">
                      {product.category}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      onClick={() => {
                        onAddToCart(product);
                      }}
                      className="w-full py-3 bg-gradient-to-r from-[var(--color-pastel-pink)] to-[var(--color-pastel-lavender)] text-[var(--color-soft-gray)] rounded-full shadow-md flex items-center justify-center gap-2 relative overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      <ShoppingBag className="w-5 h-5 relative z-10" />
                      <span className="relative z-10">Add to Cart</span>
                    </motion.button>

                    <motion.button
                      onClick={() => onNavigate('product', product.id)}
                      className="w-full py-3 bg-white rounded-full shadow-md text-[var(--color-soft-gray)] border-2 border-[var(--color-pastel-pink)]/30 hover:border-[var(--color-pastel-pink)] transition-all flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-[var(--color-pastel-peach)]/40 to-[var(--color-pastel-lavender)]/40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-soft-gray)] mb-6">
              Ready to Make Them Yours?
            </h2>
            <p className="text-[var(--color-soft-gray)] mb-8">
              Don't wait too long! Each piece is handmade with love and might not be available forever.
            </p>
            <motion.button
              onClick={() => onNavigate('all-creations')}
              className="px-10 py-4 bg-white text-[var(--color-soft-gray)] rounded-full shadow-lg inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5" />
              <span>Explore More Creations</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
