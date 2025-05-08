import ProductFAQ from "@/components/faq";
import Footer from "@/components/Footer";
import { EmeraldHero } from "@/components/hero";
import PremiumNavbar from "@/components/NavBar";
import Products from "@/components/OurProducts";
import FarmProcess from "@/components/Process";
import Testimonials from "@/components/Testimonials";

export default function Page() {
  return (
    <>
      <PremiumNavbar />
      <EmeraldHero />
      <Products />
      <FarmProcess />
      <Testimonials />
      <ProductFAQ />
      <Footer />
    </>
  );
}
