"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-green-950/90 backdrop-blur-md border-t border-emerald-900/30">
      {/* Floating leaves decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: Math.random() * 100 - 50,
              x: Math.random() * 100 - 50,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20, 0],
              rotate: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute text-emerald-400/20 text-4xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            🍃
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-600/20 border border-emerald-400/30 flex items-center justify-center mr-3">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                Musabiq Farms
              </h3>
            </div>
            <p className="text-emerald-100/80 mb-6">
              Premium poultry and arable crops grown sustainably for your
              family's health.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-emerald-900/40 border border-emerald-800/30 flex items-center justify-center text-emerald-300 hover:text-white"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "Products", "Our Farm", "Testimonials"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-emerald-100/80 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2 group-hover:bg-emerald-300 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
              Our Products
            </h4>
            <ul className="space-y-3">
              {["Broilers", "Layers", "Eggs", "Maize", "Vegetables"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#products"
                      className="text-emerald-100/80 hover:text-white transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2 group-hover:bg-emerald-300 transition-colors"></span>
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail
                  className="text-emerald-300 mt-1 mr-3 flex-shrink-0"
                  size={18}
                />
                <span className="text-emerald-100/80">
                  contact@musabiqfarms.com
                </span>
              </li>
              <li className="flex items-start">
                <Phone
                  className="text-emerald-300 mt-1 mr-3 flex-shrink-0"
                  size={18}
                />
                <span className="text-emerald-100/80">+234 800 000 0000</span>
              </li>
            </ul>
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 15px rgba(52, 211, 153, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full text-sm font-medium shadow-lg shadow-emerald-500/20"
            >
              <Link href="https://wa.me/08142269261">Get In Touch</Link>
            </motion.button>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-emerald-900/30 mt-16 pt-8 text-center text-emerald-100/60 text-sm"
        >
          © {new Date().getFullYear()} Musabiq Farms. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
