import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c1222]/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      style={{ borderBottom: '1px solid #1e293b' }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl text-[#f1f5f9] tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Profit Ledger Pro
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('features')}
            className="text-sm font-medium text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-sm font-medium text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('roadmap')}
            className="text-sm font-medium text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200"
          >
            Roadmap
          </button>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <a href={`${import.meta.env.VITE_APP_URL}/auth?mode=signin`} className="hidden sm:block text-sm font-medium text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200">
            Sign In
          </a>
          <a href={`${import.meta.env.VITE_APP_URL}/auth?mode=signup`} className="text-sm font-semibold bg-[#10b981] text-[#0c1222] px-5 py-2 rounded-lg hover:bg-[#059669] hover:scale-[1.02] transition-all duration-200">
            Get Started Free
          </a>
        </div>
      </div>
    </nav>
  );
}
