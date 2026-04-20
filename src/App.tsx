import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import FeatureStrip from './sections/FeatureStrip';
import FeaturesDeepDive from './sections/FeaturesDeepDive';
import AIAgentSection from './sections/AIAgentSection';
import PricingSection from './sections/PricingSection';
import RoadmapSection from './sections/RoadmapSection';
import Footer from './sections/Footer';
import { useSVGDraw } from './hooks/useSVGDraw';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useSVGDraw();

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf as unknown as gsap.TickerCallback);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0c1222]">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureStrip />
        <FeaturesDeepDive />
        <AIAgentSection />
        <PricingSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
}

