import { motion } from 'motion/react';
import { useState } from 'react';
import { CreditCard, Truck, MapPin, Phone, Mail, User, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutPageProps {
  items: CartItem[];
  onNavigate: (page: string) => void;
  onClearCart: () => void;
}

export function CheckoutPage({ items, onNavigate, onClearCart }: CheckoutPageProps) {
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.product.priceNumber * item.quantity, 0);
  const shippingCost = shippingMethod === 'express' ? 15.99 : shippingMethod === 'standard' ? 5.99 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shippingCost + tax;

  const shippingOptions = [
    { id: 'standard', name: 'Standard Shipping', time: '5-7 business days', price: 5.99 },
    { id: 'express', name: 'Express Shipping', time: '2-3 business days', price: 15.99 },
    { id: 'pickup', name: 'Local Pickup', time: 'Available next day', price: 0 },
  ];

  const paymentOptions = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'paypal', name: 'PayPal', icon: CreditCard },
    { id: 'bank', name: 'Bank Transfer', icon: CreditCard },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      setTimeout(() => {
        onClearCart();
        onNavigate('home');
      }, 3000);
    }, 2000);
  };

  if (items.length === 0 && !isComplete) {
    onNavigate('cart');
    return null;
  }

  if (isComplete) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-center px-6 max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center"
          >
            <Check className="w-12 h-12 text-white" />
          </motion.div>
          
          <h1 className="text-[var(--color-soft-gray)] mb-4">
            Order Complete!
          </h1>
          <p className="text-[var(--color-soft-gray)]/70 mb-8">
            Thank you for your order! Your adorable companions are being lovingly crafted and will be on their way soon. 
            A confirmation email has been sent to you.
          </p>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="text-sm text-[var(--color-soft-gray)]/60">
              Redirecting to home page...
            </p>
          </div>
        </motion.div>
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
            className="text-center"
          >
            <h1 className="text-[var(--color-soft-gray)] mb-4">
              Checkout
            </h1>
            <p className="text-[var(--color-soft-gray)]/70">
              Just a few more steps until your new friends arrive!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="relative z-10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Forms */}
              <div className="lg:col-span-2 space-y-8">
                {/* Shipping Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-[var(--color-pastel-lavender)]" />
                    <h2 className="text-[var(--color-soft-gray)]">Shipping Information</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[var(--color-soft-gray)] mb-2 text-sm">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[var(--color-soft-gray)]/20 focus:border-[var(--color-pastel-lavender)] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--color-soft-gray)] mb-2 text-sm">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[var(--color-soft-gray)]/20 focus:border-[var(--color-pastel-lavender)] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--color-soft-gray)] mb-2 text-sm">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[var(--color-soft-gray)]/20 focus:border-[var(--color-pastel-lavender)] focus:outline-none transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--color-soft-gray)] mb-2 text-sm">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[var(--color-soft-gray)]/20 focus:border-[var(--color-pastel-lavender)] focus:outline-none transition-colors"
                        placeholder="New York"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[var(--color-soft-gray)] mb-2 text-sm">
                        Address
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[var(--color-soft-gray)]/20 focus:border-[var(--color-pastel-lavender)] focus:outline-none transition-colors"
                        placeholder="123 Main Street, Apt 4B"
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--color-soft-gray)] mb-2 text-sm">
                        State/Province
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[var(--color-soft-gray)]/20 focus:border-[var(--color-pastel-lavender)] focus:outline-none transition-colors"
                        placeholder="NY"
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--color-soft-gray)] mb-2 text-sm">
                        Zip/Postal Code
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[var(--color-soft-gray)]/20 focus:border-[var(--color-pastel-lavender)] focus:outline-none transition-colors"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Shipping Method */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Truck className="w-6 h-6 text-[var(--color-pastel-lavender)]" />
                    <h2 className="text-[var(--color-soft-gray)]">Shipping Method</h2>
                  </div>

                  <div className="space-y-4">
                    {shippingOptions.map((option) => (
                      <motion.label
                        key={option.id}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          shippingMethod === option.id
                            ? 'border-[var(--color-pastel-lavender)] bg-[var(--color-pastel-lavender)]/10'
                            : 'border-[var(--color-soft-gray)]/20 hover:border-[var(--color-pastel-lavender)]/50'
                        }`}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="flex items-center gap-4">
                          <input
                            type="radio"
                            name="shipping"
                            value={option.id}
                            checked={shippingMethod === option.id}
                            onChange={(e) => setShippingMethod(e.target.value)}
                            className="w-5 h-5"
                          />
                          <div>
                            <p className="text-[var(--color-soft-gray)]">{option.name}</p>
                            <p className="text-sm text-[var(--color-soft-gray)]/60">{option.time}</p>
                          </div>
                        </div>
                        <span className="text-[var(--color-soft-gray)]">
                          {option.price === 0 ? 'FREE' : `$${option.price.toFixed(2)}`}
                        </span>
                      </motion.label>
                    ))}
                  </div>
                </motion.div>

                {/* Payment Method */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <CreditCard className="w-6 h-6 text-[var(--color-pastel-lavender)]" />
                    <h2 className="text-[var(--color-soft-gray)]">Payment Method</h2>
                  </div>

                  <div className="space-y-4 mb-6">
                    {paymentOptions.map((option) => (
                      <motion.label
                        key={option.id}
                        className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          paymentMethod === option.id
                            ? 'border-[var(--color-pastel-lavender)] bg-[var(--color-pastel-lavender)]/10'
                            : 'border-[var(--color-soft-gray)]/20 hover:border-[var(--color-pastel-lavender)]/50'
                        }`}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={option.id}
                          checked={paymentMethod === option.id}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-5 h-5 mr-4"
                        />
                        <option.icon className="w-5 h-5 mr-3 text-[var(--color-soft-gray)]/60" />
                        <span className="text-[var(--color-soft-gray)]">{option.name}</span>
                      </motion.label>
                    ))}
                  </div>

                  {paymentMethod === 'card' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-[var(--color-soft-gray)] mb-2 text-sm">
                          Card Number
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[var(--color-soft-gray)]/20 focus:border-[var(--color-pastel-lavender)] focus:outline-none transition-colors"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[var(--color-soft-gray)] mb-2 text-sm">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white border border-[var(--color-soft-gray)]/20 focus:border-[var(--color-pastel-lavender)] focus:outline-none transition-colors"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-[var(--color-soft-gray)] mb-2 text-sm">
                            CVV
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white border border-[var(--color-soft-gray)]/20 focus:border-[var(--color-pastel-lavender)] focus:outline-none transition-colors"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Right Column - Order Summary */}
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

                  {/* Order Items */}
                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex gap-3">
                        <div className="w-16 h-16 bg-white rounded-lg overflow-hidden shadow-sm flex-shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-[var(--color-soft-gray)]">{item.product.name}</p>
                          <p className="text-xs text-[var(--color-soft-gray)]/60">Qty: {item.quantity}</p>
                          <p className="text-sm text-[var(--color-soft-gray)]">
                            ${(item.product.priceNumber * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 mb-6 border-t border-[var(--color-soft-gray)]/20 pt-4">
                    <div className="flex justify-between text-[var(--color-soft-gray)]/70">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[var(--color-soft-gray)]/70">
                      <span>Shipping</span>
                      <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-[var(--color-soft-gray)]/70">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-[var(--color-soft-gray)]/20 pt-3">
                      <div className="flex justify-between">
                        <span className="text-[var(--color-soft-gray)]">Total</span>
                        <span className="text-[var(--color-soft-gray)] text-2xl">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-5 bg-gradient-to-r from-[var(--color-pastel-pink)] via-[var(--color-pastel-lavender)] to-[var(--color-pastel-mint)] text-[var(--color-soft-gray)] rounded-full shadow-xl flex items-center justify-center gap-3 relative overflow-hidden group disabled:opacity-50"
                    whileHover={!isProcessing ? { scale: 1.02 } : {}}
                    whileTap={!isProcessing ? { scale: 0.98 } : {}}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    {isProcessing ? (
                      <span className="relative z-10">Processing...</span>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">Complete Order</span>
                      </>
                    )}
                  </motion.button>

                  <div className="mt-6 p-4 bg-gradient-to-br from-[var(--color-pastel-peach)]/40 to-[var(--color-pastel-lavender)]/40 rounded-xl">
                    <p className="text-xs text-[var(--color-soft-gray)]/70 text-center">
                      ♡ Secure checkout powered by love and care
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
