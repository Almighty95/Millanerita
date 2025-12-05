import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import FeaturedDishes from "@/components/sections/FeaturedDishes";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Welcome />
      <FeaturedDishes />
      <Testimonials />
      <Location />
    </Layout>
  );
}
