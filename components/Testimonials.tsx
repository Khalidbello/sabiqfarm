"use client";
import { motion } from "framer-motion";

export const Testimonials = () => (
  <section className="py-16 md:py-24 bg-[url('/farm-bg-dark.jpg')] bg-cover relative">
    <div className="absolute inset-0 bg-green-950/80" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl md:text-5xl font-bold text-center mb-16 text-white"
      >
        What Farmers <span className="text-amber-300">Say</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="bg-green-900/60 backdrop-blur-sm p-6 rounded-xl border border-amber-400/20"
          >
            <div className="text-amber-300 text-4xl mb-4">"</div>
            <p className="text-emerald-100/90 mb-6">
              Musabiq's poultry changed my farm's profitability. The layers
              produce 30% more eggs!
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-800 mr-4" />
              <div>
                <h4 className="font-medium text-white">Oluwaseun K.</h4>
                <p className="text-sm text-emerald-300">Poultry Farmer, Ogun</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
