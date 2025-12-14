import { motion } from 'motion/react';
import { ProductCard } from './ProductCard';
import { useState } from 'react';
import { Filter } from 'lucide-react';
import { products } from '../data/products';

interface AllCreationsPageProps {
  onNavigate: (page: string, productId?: number) => void;
}

export function AllCreationsPage({ onNavigate }: AllCreationsPageProps) {
  const [filter, setFilter] = useState('all');

  const allProducts = products;

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'animals', name: 'Animals' },
    { id: 'dinosaurs', name: 'Dinosaurs' },
    { id: 'sea', name: 'Sea Creatures' },
    { id: 'fantasy', name: 'Fantasy' },
    { id: 'sets', name: 'Sets' },
    { id: 'baby', name: 'Baby Safe' },
  ];

  const filteredProducts = filter === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === filter);

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20 px-6 bg-gradient-to-br from-[var(--color-pastel-pink)]/30 via-[var(--color-pastel-lavender)]/30 to-[var(--color-pastel-mint)]/30">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[var(--color-soft-gray)] mb-6">
              All Our Lovely
              <br />
              Creations
            </h1>
            <p className="max-w-2xl mx-auto text-[var(--color-soft-gray)]">
              Explore our complete collection of handcrafted crochet companions.
              Each one is unique and waiting to bring joy to your life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative z-10 py-8 px-6 bg-white/60 backdrop-blur-sm sticky top-[88px] border-b border-[var(--color-soft-gray)]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[var(--color-soft-gray)] flex-shrink-0">
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">Filter:</span>
            </div>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory flex-1 md:flex-wrap md:justify-center pb-2 md:pb-0 -mb-2 md:mb-0">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2 rounded-full transition-all flex-shrink-0 snap-center ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-[var(--color-pastel-pink)] to-[var(--color-pastel-lavender)] text-[var(--color-soft-gray)] shadow-md'
                      : 'bg-white text-[var(--color-soft-gray)]/60 hover:text-[var(--color-soft-gray)] hover:shadow-sm'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-8 text-center text-[var(--color-soft-gray)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'creation' : 'creations'}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
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
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-[var(--color-soft-gray)] mb-8">
              I love creating custom pieces! Get in touch and let&apos;s bring your dream crochet companion to life.
            </p>
            <motion.button
              onClick={() => onNavigate('custom-order')}
              className="px-10 py-4 bg-white text-[var(--color-soft-gray)] rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Custom Order
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}