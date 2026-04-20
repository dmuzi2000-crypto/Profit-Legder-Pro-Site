import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TerminalTypewriter from '../components/TerminalTypewriter';

export default function HeroSection() {
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;

    const children = el.children;
    gsap.fromTo(
      children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.12,
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section
      className="w-full bg-[#0c1222]"
      style={{ paddingTop: '160px', paddingBottom: '120px' }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Column — Text */}
          <div ref={leftRef} className="flex-1 lg:max-w-[55%]">
            <p
              className="text-xs font-medium uppercase tracking-[0.1em] text-[#10b981] mb-6"
              style={{ opacity: 0 }}
            >
              AI-POWERED ACCOUNTING
            </p>

            <h1
              className="text-4xl md:text-5xl font-bold text-[#f1f5f9] leading-[1.15] tracking-tight"
              style={{ opacity: 0, maxWidth: '540px' }}
            >
              The accounting platform your business deserves.
            </h1>

            <p
              className="text-base text-[#94a3b8] mt-6 leading-relaxed"
              style={{ opacity: 0, maxWidth: '480px' }}
            >
              Record income and expenses in plain English. Get your income statement
              instantly. Every business gets its own isolated workspace.
            </p>

            <div className="flex flex-wrap gap-4 mt-10" style={{ opacity: 0 }}>
              <a href={`${import.meta.env.VITE_APP_URL}/auth?mode=signup`} className="inline-block flex items-center justify-center px-7 py-3.5 bg-[#10b981] text-[#0c1222] font-semibold text-base rounded-lg hover:bg-[#059669] hover:scale-[1.02] transition-all duration-200">
                Start free — no card required
              </a>
              <a href={`${import.meta.env.VITE_APP_URL}/auth?mode=signup`} className="inline-block flex items-center justify-center px-7 py-3.5 border border-[#1e293b] text-[#94a3b8] font-medium text-base rounded-lg hover:border-[#10b981] hover:text-[#f1f5f9] transition-all duration-200">
                Watch demo
              </a>
            </div>

            <p className="text-sm text-[#64748b] mt-6" style={{ opacity: 0 }}>
              Trusted by 200+ businesses in early access
            </p>
          </div>

          {/* Right Column — Terminal */}
          <div className="flex-1 lg:max-w-[45%] w-full flex justify-center lg:justify-end">
            <TerminalTypewriter />
          </div>
        </div>
      </div>
    </section>
  );
}
