"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const ProductFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    // Ordering Process
    {
      question: "How do I place an order for your poultry products?",
      answer:
        "You can order through:\n• WhatsApp: +234 812 345 6789 (Fastest response)\n• Phone call: +234 700 000 0000\n• Farm visit: Open Mon-Sat 8AM-5PM\n• Website coming soon!",
    },
    {
      question: "What's the minimum order quantity?",
      answer:
        "Minimum orders:\n• Broilers: 10 birds\n• Layers: 5 birds\n• Eggs: 1 crate (30 eggs)\n• Crops: 10kg per variety\nBulk discounts available for 50+ units",
    },

    // Product Quality
    {
      question: "Are your chickens vaccinated?",
      answer:
        "All poultry receive:\n1. Marek's vaccine (day 1)\n2. Gumboro vaccine (week 2)\n3. Newcastle vaccine (week 4)\n4. Monthly vet checkups\nHealth certificates provided",
    },
    {
      question: "How fresh are your eggs?",
      answer:
        "Egg freshness guarantee:\n• Collected twice daily\n• Maximum 2 days old when delivered\n• Stamped with collection date\n• 100% refund for any spoiled eggs",
    },

    // Delivery & Logistics
    {
      question: "What are your delivery options?",
      answer:
        "Delivery services:\n• FREE for Lagos/Ogun (orders ₦50,000+)\n• Express 24hr delivery (+₦5,000)\n• Nationwide via transport partners\n• Farm pickup (5% discount)",
    },
    {
      question: "Do you deliver to other states?",
      answer:
        "Yes! We deliver nationwide through:\n1. ABC Transport (South/East)\n2. GU Transport (North)\n3. DHL for frozen products\nDelivery fees: ₦3,000-₦15,000 based on location",
    },

    // Payments & Pricing
    {
      question: "What payment methods do you accept?",
      answer:
        "Payment options:\n• Bank transfer (Guaranty Trust Bank)\n• Cash on delivery (Lagos/Ogun only)\n• POS at farm\n• Crypto (5% BTC/ETH discount)\n• Installments (50% deposit)",
    },
    {
      question: "Do prices change seasonally?",
      answer:
        "Yes, our pricing adjusts based on:\n• Feed costs (70% of production)\n• Seasonal demand\n• Transportation costs\nGet weekly updates via our WhatsApp broadcast list",
    },

    // Farming Support
    {
      question: "Do you offer farming training?",
      answer:
        "Training programs:\n1. Free starter guide with first order\n2. Weekend workshop (₦25,000)\n3. 3-month mentorship (₦150,000)\n4. Farm setup consultation",
    },
    {
      question: "Can I get farming supplies from you?",
      answer:
        "We sell complete starter kits:\n• 50 birds + feed + meds = ₦180,000\n• Crop bundles (seeds + fertilizer)\n• Equipment rental available\nAll kits come with 3 months support",
    },

    // Farm Visits
    {
      question: "Can I visit your farm?",
      answer:
        "Farm visit details:\n• Open Thursdays 10AM-2PM\n• Must book 24hrs in advance\n• Biosecurity protocols enforced\n• Group tours (max 10 people)\n• No children under 12",
    },
    {
      question: "Do you offer internship programs?",
      answer:
        "Our 3-tier internship:\n1. 1-month observer (₦15,000)\n2. 3-month practical (₦35,000/mo)\n3. 6-month professional (Stipend)\nApplications open quarterly",
    },
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
