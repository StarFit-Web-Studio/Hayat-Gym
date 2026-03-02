import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Membership from "@/components/Membership";
import Trainers from "@/components/Trainers";
import Gallery from "@/components/Gallery";
import Transformation from "@/components/Transformation";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Services />
      <Gallery />
      <Transformation />
      <Membership />
      <Trainers />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
