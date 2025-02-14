import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LatestRelease from "@/components/LatestRelease";
import VideoSection from "@/components/VideoSection";
import About from "@/components/About";
import TourDates from "@/components/TourDates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-metal-dark text-white">
      <Navigation />
      <Hero />
      <LatestRelease />
      <TourDates />
      <VideoSection />
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;