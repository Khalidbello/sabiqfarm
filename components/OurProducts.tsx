"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Product data with image paths
const products = [
  {
    title: "Poultry",
    items: [
      { name: "Broilers", image: "/broiler.jpeg" },
      { name: "Layers", image: "/broiler.jpeg" },
      { name: "Eggs", image: "/broiler.jpeg" },
      { name: "Processed Chicken", image: "/broiler.jpeg" },
    ],
    bgGradient: "bg-gradient-to-br from-amber-500/10 to-pink-500/10",
    glowColor: "shadow-amber-500/30",
  },
  {
    title: "Arable Crops",
    items: [
      { name: "Maize", image: "/broiler.jpeg" },
      { name: "Soybeans", image: "/broiler.jpeg" },
      { name: "Cassava", image: "/broiler.jpeg" },
      { name: "Vegetables", image: "/broiler.jpeg" },
    ],
    bgGradient: "bg-gradient-to-br from-green-500/10 to-emerald-500/10",
    glowColor: "shadow-emerald-500/30",
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-green-400">
            Premium
          </span>{" "}
          Products
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products2.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${product.bgGradient} rounded-2xl p-1 shadow-lg ${product.glowColor} hover:shadow-xl transition-all duration-300`}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 h-full">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-white flex items-center">
                  <span
                    className={`w-3 h-3 rounded-full mr-2 ${product.glowColor.replace(
                      "shadow",
                      "bg"
                    )}`}
                  ></span>
                  {product.title}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {product.items.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative overflow-hidden rounded-lg"
                    >
                      <div className="aspect-square relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 p-3 w-full">
                        <p className="text-white font-medium text-sm md:text-base">
                          {item.name}
                        </p>
                        <div
                          className={`h-0.5 w-8 mt-1 ${product.glowColor.replace(
                            "shadow",
                            "bg"
                          )}`}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const products2 = [
  {
    title: "Poultry",
    items: [
      { name: "Broilers", image: "/broiler.jpeg" },
      { name: "Layers", image: "/broiler.jpeg" },
      { name: "Eggs", image: "/broiler.jpeg" },
      { name: "Processed Chicken", image: "/broiler.jpeg" },
    ],
    bgGradient: "bg-gradient-to-br from-emerald-900/20 to-green-900/30",
    glowColor: "shadow-emerald-500/40",
    accentColor: "bg-emerald-500",
  },
  {
    title: "Arable Crops",
    items: [
      { name: "Maize", image: "/broiler.jpeg" },
      { name: "Soybeans", image: "/broiler.jpeg" },
      { name: "Cassava", image: "/broiler.jpeg" },
      { name: "Vegetables", image: "/broiler.jpeg" },
    ],
    bgGradient: "bg-gradient-to-br from-green-900/20 to-emerald-900/30",
    glowColor: "shadow-green-500/40",
    accentColor: "bg-green-500",
  },
];

export const Products2 = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-green-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-300">
            Farm-Fresh
          </span>{" "}
          Products
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products2.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${product.bgGradient} rounded-2xl p-1 shadow-lg ${product.glowColor} hover:shadow-xl transition-all duration-300 border border-emerald-900/30`}
            >
              <div className="bg-green-950/80 backdrop-blur-sm rounded-xl p-6 h-full">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-white flex items-center">
                  <span
                    className={`w-3 h-3 rounded-full mr-2 ${product.accentColor}`}
                  ></span>
                  {product.title}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {product.items.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative overflow-hidden rounded-lg border border-emerald-900/30"
                    >
                      <div className="aspect-square relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 p-3 w-full">
                        <p className="text-white font-medium text-sm md:text-base drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                          {item.name}
                        </p>
                        <div
                          className={`h-0.5 w-8 mt-1 ${product.accentColor}`}
                        ></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
