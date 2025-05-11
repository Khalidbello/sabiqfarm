"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function PremiumNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");

  const navItems = [
    { name: "Products", href: "#products" },
    { name: "Our Farm", href: "#farm" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-green-950/80 backdrop-blur-md border-b border-emerald-900/30">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with glow effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center group">
              <div className="w-10 h-10 rounded-full bg-emerald-600/20 border border-emerald-400/30 flex items-center justify-center mr-3 group-hover:bg-emerald-600/30 transition-all duration-300">
                <span className="text-xl">🌱</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                Musabiq Farms
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem("")}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={`px-2 py-1 text-green-100/90 hover:text-white transition-colors duration-300 ${
                    hoveredItem === item.name ? "font-medium" : "font-normal"
                  }`}
                >
                  {item.name}
                </Link>
                {hoveredItem === item.name && (
                  <motion.div
                    layoutId="navHover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400/80 rounded-full"
                  />
                )}
              </motion.div>
            ))}

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(52, 211, 153, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full text-sm font-medium shadow-lg shadow-emerald-500/20 flex items-center gap-1"
            >
              <span>Contact</span>
              <span className="text-xs">→</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-green-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-4 pb-6 space-y-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-green-100 hover:bg-green-900/50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-medium shadow-lg shadow-emerald-500/20"
              >
                <Link href="https://wa.me/08142269261">Contact Us</Link>
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
