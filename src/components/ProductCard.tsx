import { motion } from 'motion/react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  productId?: number;
  onNavigate?: (page: string, productId?: number) => void;
}

export function ProductCard({ image, name, price, productId, onNavigate }: ProductCardProps) {
  const handleClick = () => {
    if (onNavigate && productId) {
      onNavigate('product', productId);
    }
  };

  return (
    <motion.div
      className="relative group cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={handleClick}
    >
      {/* Polaroid frame */}
      <div className="bg-white p-4 pb-12 shadow-lg rotate-[-2deg] group-hover:rotate-0 transition-transform duration-300">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Handwritten product name */}
        <div className="mt-4 text-center">
          <h3 className="text-[var(--color-soft-gray)]">{name}</h3>
          <p className="mt-1 text-[var(--color-soft-gray)]">{price}</p>
        </div>
      </div>

      {/* Tape effect */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-white/60 rotate-[-5deg] shadow-sm" />
    </motion.div>
  );
}