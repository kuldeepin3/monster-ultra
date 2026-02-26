import SmoothScroll from "@/components/SmoothScroll";
import CanvasHero from "@/components/CanvasHero";
import FeatureGrid from "@/components/FeatureGrid";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import CinematicTransition from "@/components/CinematicTransition";

export default function Home() {
  return (
    <SmoothScroll>
      <CinematicTransition />
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <CanvasHero />
        <AboutUs />
        <FeatureGrid />
        <Footer />
      </main>
    </SmoothScroll>
  );
}


