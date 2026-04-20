export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#0c1222]" style={{ borderTop: '1px solid #1e293b' }}>
      <div className="max-w-[1200px] mx-auto px-6" style={{ padding: '64px 24px 32px' }}>
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
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
          <div className="flex flex-wrap gap-6">
            <button
              onClick={() => scrollToSection('features')}
              className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200"
            >
              Roadmap
            </button>
            <a href={`${import.meta.env.VITE_APP_URL}/auth?mode=signin`} className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200">
              Sign In
            </a>
            <a href={`${import.meta.env.VITE_APP_URL}/auth?mode=signup`} className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200">
              Create Account
            </a>
          </div>
        </div>

        {/* Middle Row */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ marginTop: '48px' }}
        >
          <p className="text-sm text-[#64748b]">Built for operators, not accountants.</p>
          <p className="text-sm text-[#64748b]">Privacy Policy &middot; Terms of Service</p>
        </div>

        {/* Bottom */}
        <div className="text-center" style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #1e293b' }}>
          <p className="text-xs text-[#64748b]">&copy; 2026 Profit Ledger Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
