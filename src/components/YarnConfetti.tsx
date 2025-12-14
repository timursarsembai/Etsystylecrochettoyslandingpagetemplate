import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface YarnPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  rotation: number;
}

export function YarnConfetti() {
  const [yarnPieces, setYarnPieces] = useState<YarnPiece[]>([]);

  useEffect(() => {
    const pieces: YarnPiece[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      color: ['#FFE5E5', '#E5E5FF', '#E5FFF0', '#FFE5D9', '#FFF0E5'][Math.floor(Math.random() * 5)],
      rotation: Math.random() * 360,
    }));
    setYarnPieces(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {yarnPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute -top-8 w-6 h-6 rounded-full opacity-70"
          style={{
            left: `${piece.x}%`,
            backgroundColor: piece.color,
          }}
          animate={{
            y: ['0vh', '110vh'],
            rotate: [piece.rotation, piece.rotation + 360],
            x: [0, Math.sin(piece.id) * 50],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      ))}
    </div>
  );
}
