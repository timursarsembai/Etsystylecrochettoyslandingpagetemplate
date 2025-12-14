import { motion } from 'motion/react';
import { useState } from 'react';
import { Heart, MessageCircle, User, Send, Check } from 'lucide-react';

interface CustomOrderPageProps {
  onNavigate: (page: string) => void;
}

export function CustomOrderPage({ onNavigate }: CustomOrderPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Здесь можно добавить отправку данных на сервер
    console.log('Form submitted:', formData);
    
    setIsSubmitted(true);
    
    // Сброс формы через 3 секунды
    setTimeout(() => {
      setFormData({ name: '', whatsapp: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-12 px-6 bg-gradient-to-br from-[var(--color-pastel-pink)]/30 via-[var(--color-pastel-lavender)]/30 to-[var(--color-pastel-mint)]/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <Heart className="w-16 h-16 mx-auto text-[var(--color-pastel-pink)] fill-current" />
            </div>
            <h1 className="text-[var(--color-soft-gray)] mb-4">
              Request a Custom Order
            </h1>
            <p className="text-[var(--color-soft-gray)]/70 max-w-2xl mx-auto">
              Have a special idea in mind? I'd love to bring your dream crochet creation to life! 
              Share your vision and I'll get back to you on WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="flex items-center gap-2 text-[var(--color-soft-gray)] mb-3"
                  >
                    <User className="w-5 h-5" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="How should I call you?"
                    className="w-full px-6 py-4 bg-white rounded-2xl shadow-md border-2 border-transparent focus:border-[var(--color-pastel-pink)] focus:outline-none transition-all text-[var(--color-soft-gray)]"
                  />
                </div>

                {/* WhatsApp Field */}
                <div>
                  <label 
                    htmlFor="whatsapp" 
                    className="flex items-center gap-2 text-[var(--color-soft-gray)] mb-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Number *</span>
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    placeholder="+1 234 567 8900"
                    className="w-full px-6 py-4 bg-white rounded-2xl shadow-md border-2 border-transparent focus:border-[var(--color-pastel-pink)] focus:outline-none transition-all text-[var(--color-soft-gray)]"
                  />
                  <p className="mt-2 text-sm text-[var(--color-soft-gray)]/60">
                    Include country code so I can reach you easily
                  </p>
                </div>

                {/* Message Field (Optional) */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="flex items-center gap-2 text-[var(--color-soft-gray)] mb-3"
                  >
                    <Heart className="w-5 h-5" />
                    <span>Tell me about your dream creation (Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your custom order idea: colors, size, character, style..."
                    className="w-full px-6 py-4 bg-white rounded-2xl shadow-md border-2 border-transparent focus:border-[var(--color-pastel-pink)] focus:outline-none transition-all text-[var(--color-soft-gray)] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
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
                  <Send className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Send Request</span>
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center"
                >
                  <Check className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-[var(--color-soft-gray)] mb-4">
                  Request Sent! ♡
                </h2>
                <p className="text-[var(--color-soft-gray)]/70 mb-8">
                  Thank you for your interest! I'll reach out to you on WhatsApp soon to discuss your custom order.
                </p>
                <motion.button
                  onClick={() => onNavigate('home')}
                  className="px-8 py-3 bg-white text-[var(--color-soft-gray)] rounded-full shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Home
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {/* Info Cards */}
          {!isSubmitted && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-[var(--color-pastel-peach)]/40 to-[var(--color-pastel-pink)]/40 rounded-2xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-[var(--color-soft-gray)] mb-3">
                  Fast Response ⚡
                </h3>
                <p className="text-sm text-[var(--color-soft-gray)]/70">
                  I typically respond within 24 hours on WhatsApp to discuss your custom project
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-[var(--color-pastel-lavender)]/40 to-[var(--color-pastel-mint)]/40 rounded-2xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-[var(--color-soft-gray)] mb-3">
                  Handmade with Love ♡
                </h3>
                <p className="text-sm text-[var(--color-soft-gray)]/70">
                  Every custom piece is crafted with care and attention to detail, just for you
                </p>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Back to Browse Section */}
      {!isSubmitted && (
        <section className="relative z-10 py-12 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-[var(--color-soft-gray)]/70 mb-6">
                Want to see what's already available?
              </p>
              <motion.button
                onClick={() => onNavigate('all-creations')}
                className="px-8 py-3 bg-white/60 backdrop-blur-sm text-[var(--color-soft-gray)] rounded-full shadow-md hover:shadow-lg transition-all border-2 border-[var(--color-pastel-pink)]/30 hover:border-[var(--color-pastel-pink)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse All Creations
              </motion.button>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
