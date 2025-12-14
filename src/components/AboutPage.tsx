import { motion } from 'motion/react';
import { Heart, Scissors, Sparkles, Star } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string, productId?: number) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const milestones = [
    { year: '1999', event: 'Started crocheting as a hobby' },
    { year: '2005', event: 'First custom order from a friend' },
    { year: '2010', event: 'Opened online shop' },
    { year: '2015', event: 'Reached 5,000 happy customers' },
    { year: '2020', event: 'Published crochet pattern book' },
    { year: '2025', event: 'Celebrating 25 years!' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every stitch is crafted with care and passion, making each toy truly special.',
    },
    {
      icon: Sparkles,
      title: 'Quality Materials',
      description: 'Only the finest, softest, and safest yarns are used for all creations.',
    },
    {
      icon: Star,
      title: 'Unique Designs',
      description: 'Each toy has its own personality and charm, no two are exactly alike.',
    },
    {
      icon: Scissors,
      title: 'Handcrafted',
      description: '100% handmade by me in my cozy home studio, never mass-produced.',
    },
  ];

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
              Hello, I&apos;m Sarah!
            </h1>
            <p className="max-w-2xl mx-auto text-[var(--color-soft-gray)]">
              The heart and hands behind every crochet creation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white/60 backdrop-blur-sm p-12 rounded-3xl shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-soft-gray)] mb-8 text-center">
              My Story
            </h2>
            <div className="space-y-6 text-[var(--color-soft-gray)]">
              <p>
                It all began on a rainy afternoon in 1999 when my grandmother taught me my first crochet stitch. 
                I was mesmerized by how simple loops of yarn could transform into something beautiful and meaningful.
              </p>
              <p>
                What started as a quiet hobby soon became my passion. I began creating little animals and characters, 
                each one unique and full of personality. Friends and family would light up when I gifted them these 
                handmade treasures, and I knew I had found my calling.
              </p>
              <p>
                Today, 25 years later, I still feel the same joy with every piece I create. Each toy carries a piece 
                of my heart, made with the same care and attention as that very first stitch my grandmother showed me. 
                My cozy home studio is filled with colorful yarns, happy memories, and the warm feeling of knowing 
                these little companions will bring smiles to children and collectors around the world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-[var(--color-pastel-peach)]/30 to-[var(--color-pastel-lavender)]/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-soft-gray)] mb-12 text-center">
              My Journey
            </h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-6 bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[var(--color-pastel-pink)] to-[var(--color-pastel-lavender)] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-[var(--color-soft-gray)]">{milestone.year}</span>
                  </div>
                  <div className="flex-1 pt-4">
                    <p className="text-[var(--color-soft-gray)]">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-soft-gray)] mb-12 text-center">
              What I Believe In
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-pastel-pink)] to-[var(--color-pastel-lavender)] rounded-full mb-6">
                    <value.icon className="w-8 h-8 text-[var(--color-soft-gray)]" />
                  </div>
                  <h3 className="text-[var(--color-soft-gray)] mb-3">{value.title}</h3>
                  <p className="text-sm text-[var(--color-soft-gray)]">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-[var(--color-pastel-mint)]/30 to-[var(--color-pastel-peach)]/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-soft-gray)] mb-6">
              Ready to Find Your
              <br />
              Perfect Companion?
            </h2>
            <p className="text-[var(--color-soft-gray)] mb-8">
              Browse my collection or get in touch for a custom creation
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <motion.button
                onClick={() => onNavigate('all-creations')}
                className="px-10 py-4 bg-gradient-to-r from-[var(--color-pastel-pink)] to-[var(--color-pastel-lavender)] text-[var(--color-soft-gray)] rounded-full shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Collection
              </motion.button>
              <motion.button
                onClick={() => onNavigate('contact')}
                className="px-10 py-4 bg-white text-[var(--color-soft-gray)] rounded-full shadow-lg border-2 border-[var(--color-pastel-lavender)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}