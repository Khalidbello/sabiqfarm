"use client";
import { motion } from "framer-motion";

export const Testimonials = () => {
  const customerReviews = [
    {
      id: 1,
      name: "Rebecca Isah",
      role: "Homemaker & Kitchen Gardener",
      review:
        "The organic eggs from your free-range hens taste completely different! My children actually finish their breakfast now. The yolks are so rich and golden - worth every rupee!",
      rating: 5,
      date: "2024-03-15",
    },
    {
      id: 2,
      name: "Musa Garaba",
      role: "Office Worker (Weekend Farmer)",
      review:
        "Started buying your organic feed for my backyard chickens and the difference is night and day. Healthier birds, more eggs, and I feel good knowing it's chemical-free. Delivery is always prompt too!",
      rating: 4,
      date: "2024-04-22",
    },
    {
      id: 3,
      name: "VAnessa Temitope",
      role: "Eco-Conscious Parents",
      review:
        "We can taste the care in your products. The milk from your pasture-raised cows is the only one our toddler will drink without fuss. Thank you for keeping it natural and ethical!",
      rating: 5,
      date: "2024-05-10",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-[url('/farm_bg.jpeg')] bg-cover relative">
      <div className="absolute inset-0 bg-green-950/70" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          What Farmers <span className="text-amber-300">Say</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {customerReviews.map((review, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-green-900/60 backdrop-blur-sm p-6 rounded-xl border border-amber-400/20"
            >
              <div className="text-amber-300 text-4xl mb-4">"</div>
              <p className="text-emerald-100/90 mb-6">{review.review}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-800 mr-4" />
                <div>
                  <h4 className="font-medium text-white">{review.name}</h4>
                  <p className="text-sm text-emerald-300">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
