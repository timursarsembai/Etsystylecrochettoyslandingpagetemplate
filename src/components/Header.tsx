import { motion, AnimatePresence } from 'motion/react';
import { Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartItemCount?: number;
  wishlistItemCount?: number;
}

export function Header({ currentPage, onNavigate, cartItemCount = 0, wishlistItemCount = 0 }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'all-creations', label: 'All Creations' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="relative z-20 py-6 px-6 bg-white/80 backdrop-blur-sm sticky top-0 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-2 group"
        >
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-soft-gray)] fill-current group-hover:scale-110 transition-transform" />
          <h3 className="text-[var(--color-soft-gray)] text-xl sm:text-2xl md:text-3xl">Cozy Crochet</h3>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`transition-colors ${
                currentPage === item.id
                  ? 'text-[var(--color-soft-gray)]'
                  : 'text-[var(--color-soft-gray)]/50 hover:text-[var(--color-soft-gray)]'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Wishlist Button */}
          <motion.button
            onClick={() => handleNavigate('wishlist')}
            className="relative p-2 hover:bg-[var(--color-pastel-pink)]/20 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="w-6 h-6 text-[var(--color-soft-gray)]" />
            {wishlistItemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[var(--color-pastel-peach)] to-[var(--color-pastel-pink)] rounded-full flex items-center justify-center text-xs text-white"
              >
                {wishlistItemCount}
              </motion.span>
            )}
          </motion.button>

          {/* Cart Button */}
          <motion.button
            onClick={() => handleNavigate('cart')}
            className="relative p-2 hover:bg-[var(--color-pastel-pink)]/20 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingBag className="w-6 h-6 text-[var(--color-soft-gray)]" />
            {cartItemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[var(--color-pastel-pink)] to-[var(--color-pastel-lavender)] rounded-full flex items-center justify-center text-xs text-white"
              >
                {cartItemCount}
              </motion.span>
            )}
          </motion.button>
        </nav>

        {/* Mobile Menu Button and Icons */}
        <div className="flex md:hidden items-center gap-4">
          {/* Mobile Wishlist Button */}
          <motion.button
            onClick={() => handleNavigate('wishlist')}
            className="relative p-2 hover:bg-[var(--color-pastel-pink)]/20 rounded-full transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <Heart className="w-6 h-6 text-[var(--color-soft-gray)]" />
            {wishlistItemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[var(--color-pastel-peach)] to-[var(--color-pastel-pink)] rounded-full flex items-center justify-center text-xs text-white"
              >
                {wishlistItemCount}
              </motion.span>
            )}
          </motion.button>

          {/* Mobile Cart Button */}
          <motion.button
            onClick={() => handleNavigate('cart')}
            className="relative p-2 hover:bg-[var(--color-pastel-pink)]/20 rounded-full transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <ShoppingBag className="w-6 h-6 text-[var(--color-soft-gray)]" />
            {cartItemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[var(--color-pastel-pink)] to-[var(--color-pastel-lavender)] rounded-full flex items-center justify-center text-xs text-white"
              >
                {cartItemCount}
              </motion.span>
            )}
          </motion.button>

          {/* Hamburger Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-[var(--color-pastel-pink)]/20 rounded-full transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--color-soft-gray)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--color-soft-gray)]" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <nav className="pt-6 pb-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-[var(--color-pastel-pink)]/30 to-[var(--color-pastel-lavender)]/30 text-[var(--color-soft-gray)]'
                      : 'text-[var(--color-soft-gray)]/70 hover:bg-[var(--color-pastel-pink)]/10'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}