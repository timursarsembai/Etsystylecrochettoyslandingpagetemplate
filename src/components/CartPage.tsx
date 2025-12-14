import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartPageProps {
  items: CartItem[];
  onNavigate: (page: string) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

export function CartPage({ items, onNavigate, onUpdateQuantity, onRemoveItem }: CartPageProps) {
  const subtotal = items.reduce((sum, item) => sum + item.product.priceNumber * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

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
              <ShoppingBag className="w-24 h-24 mx-auto text-[var(--color-soft-gray)]/30" />
            </div>
            <h2 className="text-[var(--color-soft-gray)] mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-[var(--color-soft-gray)]/70 mb-8 max-w-md mx-auto">
              Looks like you haven't added any adorable friends yet. Let's find your perfect companion!
            </p>
            <motion.button
              onClick={() => onNavigate('all-creations')}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--color-pastel-pink)] via-[var(--color-pastel-lavender)] to-[var(--color-pastel-mint)] text-[var(--color-soft-gray)] rounded-full shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag className="w-6 h-6" />
              <span>Start Shopping</span>
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
              Your Shopping Cart
            </h1>
            <p className="text-[var(--color-soft-gray)]/70">
              {items.length} {items.length === 1 ? 'item' : 'items'} waiting for a loving home
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex gap-6">
                      {/* Product Image - Polaroid style */}
                      <div className="flex-shrink-0">
                        <div className="bg-white p-3 pb-6 shadow-md rotate-[-2deg] w-32">
                          <div className="w-24 h-24 overflow-hidden bg-gray-100">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-[var(--color-soft-gray)] mb-2">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-[var(--color-soft-gray)]/60 mb-4">
                            {item.product.category}
                          </p>
                          <p className="text-xl text-[var(--color-soft-gray)]">
                            {item.product.price}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <motion.button
                              onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[var(--color-soft-gray)] hover:shadow-lg transition-shadow"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Minus className="w-4 h-4" />
                            </motion.button>
                            <div className="w-16 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                              <span className="text-[var(--color-soft-gray)]">{item.quantity}</span>
                            </div>
                            <motion.button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[var(--color-soft-gray)] hover:shadow-lg transition-shadow"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Plus className="w-4 h-4" />
                            </motion.button>
                          </div>

                          {/* Remove Button */}
                          <motion.button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="p-3 text-red-400 hover:bg-red-50 rounded-full transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Trash2 className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Continue Shopping Button */}
              <motion.button
                onClick={() => onNavigate('all-creations')}
                className="w-full py-4 bg-white rounded-full shadow-md text-[var(--color-soft-gray)] border-2 border-[var(--color-pastel-pink)]/30 hover:border-[var(--color-pastel-pink)] transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Continue Shopping
              </motion.button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg sticky top-24"
              >
                <h2 className="text-[var(--color-soft-gray)] mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[var(--color-soft-gray)]/70">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[var(--color-soft-gray)]/70">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-[var(--color-soft-gray)]/60">
                      Free shipping on orders over $50!
                    </p>
                  )}
                  <div className="border-t border-[var(--color-soft-gray)]/20 pt-4">
                    <div className="flex justify-between">
                      <span className="text-[var(--color-soft-gray)]">Total</span>
                      <span className="text-[var(--color-soft-gray)] text-2xl">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={() => onNavigate('checkout')}
                  className="w-full py-5 bg-gradient-to-r from-[var(--color-pastel-pink)] via-[var(--color-pastel-lavender)] to-[var(--color-pastel-mint)] text-[var(--color-soft-gray)] rounded-full shadow-xl flex items-center justify-center gap-3 relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Proceed to Checkout</span>
                  <ArrowRight className="w-5 h-5 relative z-10" />
                </motion.button>

                <div className="mt-6 p-4 bg-gradient-to-br from-[var(--color-pastel-peach)]/40 to-[var(--color-pastel-lavender)]/40 rounded-xl">
                  <p className="text-sm text-[var(--color-soft-gray)]/70 text-center">
                    ♡ Each item is handmade with love just for you!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
