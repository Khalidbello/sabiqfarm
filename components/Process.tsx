"use client";
import { motion } from "framer-motion";

const FarmProcess = () => {
  const processes = [
    {
      head: "Organic Feed Preparati=on",
      note: "We grow & mix 100% organic feed for our livestock chemical free, nutrient rich, and sustainably sourced. Enhances health, growth, and productivity naturally.",
    },
    {
      head: "Free-Range Rearing",
      note: "Our animals roam freely, grazing on open pastures and organic feed. No cages, no stress—just pure, natural growth for healthier, happier livestock.",
    },
    {
      head: "Daily Health Checks",
      note: "We monitor our livestock closely every day catching early signs of illness, ensuring proper nutrition, and maintaining peak herd health. Prevention is our best medicine.",
    },
    {
      head: "Eco-Friendly Harvesting",
      note: "We nurture the land that feeds us. Our sustainable harvesting methods protect soil health, conserve water, and leave zero chemical footprint because tomorrow’s harvest depends on today’s care.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-green-950">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white"
        >
          Our <span className="text-emerald-300">Sustainable</span> Process
        </motion.h2>

        <div className="relative">
          {/* Timeline line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-emerald-900/50 transform -translate-x-1/2" />

          {processes.map((process, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`mb-8 sm:mb-12 flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Mobile: Center-aligned */}
              <div className="md:hidden w-full flex justify-center mb-4">
                <div className="w-8 h-8 rounded-full bg-emerald-500 border-4 border-green-950 flex items-center justify-center z-10">
                  <span className="text-green-950 font-bold">{i + 1}</span>
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`w-full md:w-1/2 p-4 ${
                  i % 2 === 0 ? "md:pr-6 lg:pr-12" : "md:pl-6 lg:pl-12"
                }`}
              >
                <div className="bg-green-900/50 backdrop-blur-sm p-5 sm:p-6 rounded-xl border border-emerald-900/30">
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-emerald-300 mb-2">
                    {process.head}
                  </h3>
                  <p className="text-sm sm:text-base text-emerald-100/80">
                    {process.note}
                  </p>
                </div>
              </div>

              {/* Desktop: Number Indicator */}
              <div className="hidden md:flex w-1/2 justify-center">
                <div className="w-8 h-8 rounded-full bg-emerald-500 border-4 border-green-950 flex items-center justify-center z-10">
                  <span className="text-green-950 font-bold">{i + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmProcess;
