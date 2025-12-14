import { motion } from 'motion/react';
import { ProductCard } from './ProductCard';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { products } from '../data/products';

interface HomePageProps {
  onNavigate: (page: string, productId?: number) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  // Show first 6 products on home page
  const displayProducts = products.slice(0, 6);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-[var(--color-pastel-pink)] rounded-full">
              <Star className="w-5 h-5 fill-current text-[var(--color-soft-gray)]" />
              <span className="text-sm">Handmade with love since 1999</span>
              <Star className="w-5 h-5 fill-current text-[var(--color-soft-gray)]" />
            </div>

            <h1 className="text-[var(--color-soft-gray)] mb-6">
              Cuddles & Smiles,
              <br />
              One Stitch at a Time
            </h1>

            <p className="max-w-2xl mx-auto mb-12 text-[var(--color-soft-gray)]">
              Discover adorable handcrafted crochet companions that bring joy to little ones and collectors alike.
              Each piece is lovingly made with premium yarn and endless care.
            </p>

            <motion.button
              onClick={() => onNavigate('all-creations')}
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-[var(--color-pastel-pink)] via-[var(--color-pastel-lavender)] to-[var(--color-pastel-mint)] text-[var(--color-soft-gray)] rounded-full shadow-xl relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/30"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <ShoppingBag className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Shop Now</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 25 Years Section */}
      <section className="relative z-10 py-24 px-6 bg-gradient-to-br from-[var(--color-pastel-peach)]/40 to-[var(--color-pastel-lavender)]/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center justify-center gap-4 mb-8">
              <Heart className="w-12 h-12 text-[var(--color-soft-gray)] fill-current" />
              <h2 className="text-[var(--color-soft-gray)]">
                25 Years of Love
                <br />
                in Every Stitch
              </h2>
              <Heart className="w-12 h-12 text-[var(--color-soft-gray)] fill-current" />
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-[var(--color-soft-gray)]">
                Since 1999, I&apos;ve been creating these little treasures from my cozy studio, 
                pouring passion and warmth into every loop and knot. What started as a hobby 
                has blossomed into a journey of spreading smiles across the world.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  { number: '10,000+', label: 'Happy Customers' },
                  { number: '25', label: 'Years of Craft' },
                  { number: '100%', label: 'Handmade' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <h3 className="text-[var(--color-soft-gray)] mb-2">{stat.number}</h3>
                    <p className="text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-soft-gray)] mb-4">
              Meet the Crew
            </h2>
            <p className="text-[var(--color-soft-gray)]">
              Each friend is unique and ready to find their forever home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {displayProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  productId={product.id}
                  onNavigate={onNavigate}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              onClick={() => onNavigate('all-creations')}
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-[var(--color-pastel-pink)] via-[var(--color-pastel-lavender)] to-[var(--color-pastel-mint)] text-[var(--color-soft-gray)] rounded-full shadow-xl relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/30"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <ShoppingBag className="w-6 h-6 relative z-10" />
              <span className="relative z-10">View All Creations</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 bg-gradient-to-t from-[var(--color-pastel-mint)]/30 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[var(--color-soft-gray)] mb-4">
            Made with love, one stitch at a time ♡
          </p>
          <p className="text-sm opacity-70">
            © 2025 Cozy Crochet Creations. All toys deserve good homes.
          </p>
        </div>
      </footer>
    </div>
  );
}