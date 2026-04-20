import ScrollReveal from '../components/ScrollReveal';

const checkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

interface PricingPlan {
  name: string;
  price: string;
  featured?: boolean;
  features: string[];
  cta: string;
  ctaStyle: 'primary' | 'secondary';
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '5',
    features: [
      'Up to 500 entries',
      '1 workspace',
      'AI Entry',
      'Income Statement',
      'Chart of Accounts',
      'Vendors & Customers',
    ],
    cta: 'Get Started',
    ctaStyle: 'secondary',
  },
  {
    name: 'Pro',
    price: '15',
    featured: true,
    features: [
      'Unlimited entries',
      '1 workspace',
      'Up to 5 team members',
      'AI Entry',
      'Income Statement',
      'Chart of Accounts',
      'Vendors & Customers',
      'CSV Export',
    ],
    cta: 'Get Started',
    ctaStyle: 'primary',
  },
  {
    name: 'Enterprise',
    price: '30',
    features: [
      'Unlimited entries',
      'Unlimited workspaces',
      'Unlimited team members',
      'AI Entry',
      'Income Statement',
      'Chart of Accounts',
      'Vendors & Customers',
      'CSV Export',
      'API Access',
      'Custom Branding',
      'Priority Support',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'secondary',
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full bg-[#0c1222] relative overflow-hidden" style={{ padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f1f5f9] tracking-tight">
              Simple pricing. No surprises.
            </h2>
            <p className="text-base text-[#94a3b8] mt-4">
              All features free during early access.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative">
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-[#10b981] text-[#0c1222] text-xs font-medium px-3 py-1 rounded">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div
                  className={`bg-[#111827] rounded-xl p-8 h-full flex flex-col hover:-translate-y-1 transition-all duration-300 ${
                    plan.featured
                      ? 'border-2 border-[#10b981] shadow-[0_0_40px_rgba(16,185,129,0.1)]'
                      : 'border border-[#1e293b]'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-[#f1f5f9]">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-4 mb-6">
                    <span className="text-5xl font-display text-[#f1f5f9]">${plan.price}</span>
                    <span className="text-sm text-[#94a3b8]">/mo</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-[#94a3b8]">
                        {checkIcon}
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`${import.meta.env.VITE_APP_URL}/auth?mode=signup`}
                    className={`block text-center w-full py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                      plan.ctaStyle === 'primary'
                        ? 'bg-[#10b981] text-[#0c1222] hover:bg-[#059669] hover:scale-[1.02]'
                        : 'border border-[#1e293b] text-[#94a3b8] hover:border-[#10b981] hover:text-[#f1f5f9]'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Early Access Banner */}
        <ScrollReveal delay={0.3}>
          <div
            className="mt-12 flex items-center gap-3 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-lg px-6 py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
            <p className="text-sm text-[#f59e0b]">
              All features are free during early access. Billing coming with 30-day notice. Sign up now for discounted rates.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
