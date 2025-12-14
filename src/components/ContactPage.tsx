import { motion } from 'motion/react';
import { Mail, MessageCircle, Instagram, Facebook, MapPin, Clock, User, Send, Check, Heart } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  onNavigate: (page: string, productId?: number) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', whatsapp: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@cozycrochet.com',
      description: 'I usually respond within 24 hours',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@cozycrochetcreations',
      description: 'See my latest creations and behind-the-scenes',
    },
    {
      icon: Facebook,
      title: 'Facebook',
      content: 'Cozy Crochet Creations',
      description: 'Join our community of crochet lovers',
    },
  ];

  const faqs = [
    {
      question: 'Do you accept custom orders?',
      answer: 'Yes! I love creating custom pieces. Just describe what you have in mind, and I\'ll bring it to life.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Domestic orders usually arrive within 5-7 business days. International shipping takes 2-3 weeks.',
    },
    {
      question: 'Are the toys safe for babies?',
      answer: 'All my toys are made with baby-safe materials. Items marked "Baby Safe" have no small parts and use extra-secure stitching.',
    },
    {
      question: 'Can I wash the toys?',
      answer: 'Yes! Hand wash in cool water with mild soap, then air dry. They\'ll stay soft and beautiful for years.',
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
              Let&apos;s Chat!
            </h1>
            <p className="max-w-2xl mx-auto text-[var(--color-soft-gray)]">
              I&apos;d love to hear from you! Whether you have a question, want a custom order, 
              or just want to say hello, don&apos;t be shy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
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
                  <method.icon className="w-8 h-8 text-[var(--color-soft-gray)]" />
                </div>
                <h3 className="text-[var(--color-soft-gray)] mb-2">{method.title}</h3>
                <p className="text-[var(--color-soft-gray)] mb-3">{method.content}</p>
                <p className="text-sm text-[var(--color-soft-gray)]/70">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-[var(--color-pastel-peach)]/30 to-[var(--color-pastel-lavender)]/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-soft-gray)] mb-12 text-center">
              Send Me a Message
            </h2>

            {submitted ? (
              <motion.div
                className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl text-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--color-pastel-mint)] to-[var(--color-pastel-lavender)] rounded-full mb-6">
                  <MessageCircle className="w-10 h-10 text-[var(--color-soft-gray)]" />
                </div>
                <h3 className="text-[var(--color-soft-gray)] mb-4">Thank You!</h3>
                <p className="text-[var(--color-soft-gray)]">
                  Your message has been sent. I&apos;ll get back to you as soon as possible!
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[var(--color-soft-gray)] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-pastel-pink)]/30 focus:border-[var(--color-pastel-lavender)] outline-none bg-white/50 text-[var(--color-soft-gray)] transition-colors"
                        placeholder="Sarah Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="whatsapp" className="block text-[var(--color-soft-gray)] mb-2">
                        Your WhatsApp Number
                      </label>
                      <input
                        type="text"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-pastel-pink)]/30 focus:border-[var(--color-pastel-lavender)] outline-none bg-white/50 text-[var(--color-soft-gray)] transition-colors"
                        placeholder="+1234567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[var(--color-soft-gray)] mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[var(--color-pastel-pink)]/30 focus:border-[var(--color-pastel-lavender)] outline-none bg-white/50 text-[var(--color-soft-gray)] transition-colors resize-none"
                      placeholder="Tell me about your dream crochet companion..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[var(--color-pastel-pink)] to-[var(--color-pastel-lavender)] text-[var(--color-soft-gray)] rounded-xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[var(--color-soft-gray)] mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-[var(--color-soft-gray)] mb-3">{faq.question}</h3>
                  <p className="text-[var(--color-soft-gray)]">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-[var(--color-pastel-mint)]/30 to-[var(--color-pastel-peach)]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-8 h-8 text-[var(--color-soft-gray)]" />
                <h3 className="text-[var(--color-soft-gray)]">Location</h3>
              </div>
              <p className="text-[var(--color-soft-gray)]">
                Based in Portland, Oregon, USA
                <br />
                Shipping worldwide with love ♡
              </p>
            </motion.div>

            <motion.div
              className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-[var(--color-soft-gray)]" />
                <h3 className="text-[var(--color-soft-gray)]">Response Time</h3>
              </div>
              <p className="text-[var(--color-soft-gray)]">
                Monday - Friday: 9 AM - 6 PM PST
                <br />
                Weekend emails answered on Monday
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}