"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const NeonHero = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"
        />
      </div>

      {/* Floating Particles (simplified) */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, x: Math.random() * 100 - 50 }}
          animate={{
            y: [0, Math.random() * 100 - 50, 0],
            x: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute rounded-full ${
            i % 3 === 0
              ? "bg-amber-400/30"
              : i % 2 === 0
              ? "bg-green-400/30"
              : "bg-purple-400/30"
          }`}
          style={{
            width: `${Math.random() * 10 + 2}px`,
            height: `${Math.random() * 10 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Hero Content - Perfectly Centered */}
      <div className="container mx-auto h-full flex flex-col justify-center items-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl"
        >
          {/* Main Heading with Gradient Glow */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-green-300 to-emerald-400">
              Musabiq Farms
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="block text-white mt-2 text-xl sm:text-2xl md:text-3xl font-light"
            >
              Where{" "}
              <span className="font-medium text-amber-300">
                Premium Poultry
              </span>{" "}
              Meets{" "}
              <span className="font-medium text-green-300">Organic Crops</span>
            </motion.span>
          </h1>

          {/* Subheading with animated border */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto relative py-4"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400/0 via-green-400 to-emerald-400/0"
            />
            Farm-fresh excellence delivered to your doorstep. Certified organic,
            sustainably grown.
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="absolute top-0 right-0 h-0.5 bg-gradient-to-l from-amber-400/0 via-green-400 to-emerald-400/0"
            />
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(74, 222, 128, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-medium text-sm sm:text-base shadow-lg shadow-green-500/30"
            >
              Order Now
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-amber-400 text-amber-400 rounded-full font-medium text-sm sm:text-base shadow-lg shadow-amber-500/20"
            >
              Farm Tour
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce w-6 h-10 border-4 border-emerald-400/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-emerald-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const EmeraldHero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-gradient-to-b from-green-950 to-black">
      {/* Animated Leaf Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: Math.random() * 100 - 50,
            x: Math.random() * 100 - 50,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: [0, Math.random() * 80 - 40, 0],
            x: [0, Math.random() * 60 - 30, 0],
            rotate: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute text-green-400/20"
          style={{
            fontSize: `${Math.random() * 20 + 10}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          🍃
        </motion.div>
      ))}

      {/* Layered Green Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3 }}
          className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-emerald-900/40 to-black"
        />
      </div>

      {/* Hero Content - Perfect Vertical Center */}
      <div className="container mx-auto h-full flex flex-col justify-center items-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center max-w-5xl"
        >
          {/* Logo/Brand Mark */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mb-8 mx-auto w-24 h-24 rounded-full bg-green-800/50 border-2 border-emerald-400/30 flex items-center justify-center shadow-lg shadow-emerald-500/10"
          >
            <span className="text-4xl">🌱</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-lime-300">
              Musabiq Farms
            </span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl text-green-200/90 mb-12 max-w-3xl mx-auto font-light tracking-wide"
          >
            <span className="bg-green-900/40 px-2 py-1 rounded">
              Poultry Excellence
            </span>{" "}
            ×
            <span className="bg-emerald-900/40 px-2 py-1 rounded ml-2">
              Sustainable Crops
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(52, 211, 153, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full font-medium text-lg shadow-lg shadow-emerald-500/30 flex items-center gap-2"
            >
              <span>Order Fresh Produce</span>
              <span>→</span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(16, 185, 129, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent border-2 border-emerald-400/60 text-emerald-100 rounded-full font-medium text-lg shadow-lg shadow-green-500/10"
            >
              Visit Our Farm
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated Harvest Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-green-400/80 text-4xl"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⬇
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
