"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const ProductFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I place an order for your poultry products?",
      answer:
        "You can order directly via WhatsApp (+234 812 345 6789), call us, or visit our farm in [Location]. We offer doorstep delivery for bulk orders (50+ birds) within 48 hours in Lagos/Ogun states.",
    },
    // ... (keep other FAQ items the same)
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-green-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Product <span className="text-emerald-300">FAQs</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 border-b border-emerald-900/50 last:border-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <h3 className="text-lg md:text-xl font-medium text-emerald-100 pr-4 group-hover:text-white transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3, type: "spring" }}
                  className="text-emerald-400 flex-shrink-0 group-hover:text-emerald-300 transition-colors"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.2 },
                        opacity: { duration: 0.1 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-emerald-100/80">
                      {faq.answer.split("\n").map((paragraph, i) => (
                        <p key={i} className="mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                      {index === 0 && (
                        <motion.a
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          href="https://wa.me/2348123456789"
                          className="inline-block mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-colors"
                        >
                          Chat on WhatsApp Now
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Supplemental CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-emerald-100 mb-6">
            Still have questions about our products?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+2348123456789"
            className="inline-block px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white rounded-full font-semibold shadow-lg shadow-emerald-500/20 transition-all"
          >
            Call Us Directly
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductFAQ;
