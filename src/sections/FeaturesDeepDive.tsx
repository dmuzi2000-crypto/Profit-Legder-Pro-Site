import { useEffect, useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const ringIcons = [
  <svg key="1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>,
  <svg key="2" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>,
  <svg key="3" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>,
  <svg key="4" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg key="5" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>,
  <svg key="6" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
  <svg key="7" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>,
  <svg key="8" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
];

function OrbitalFeatureRing() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const ring = container.querySelector('.ring');
    if (!ring) return;

    const radius = 220;
    const itemCount = 8;
    const items = Array.from(ring.querySelectorAll('.ring-item'));

    items.forEach((item, index) => {
      const angle = (index / itemCount) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = Math.sin(angle * 2) * 80;
      const rotateY = (angle * 180) / Math.PI;
      (item as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotateY}deg)`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ring.classList.remove('paused');
          } else {
            ring.classList.add('paused');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="ring-container hidden lg:block">
      <div className="ring">
        {ringIcons.map((icon, i) => (
          <div key={i} className="ring-item">
            <div className="ring-icon">{icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Feature mock UI components */
function AIMockup() {
  return (
    <div className="w-full bg-[#111827] border border-[#1e293b] rounded-xl p-5 font-mono text-sm">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1e293b]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
        <span className="text-xs text-[#64748b] ml-2">AI Entry</span>
      </div>
      <div className="space-y-3">
        <div className="bg-[#1a2236] rounded-lg p-3 border border-[#1e293b]">
          <span className="text-[#64748b] text-xs">Input</span>
          <p className="text-[#f1f5f9] mt-1">Paid AWS $480 this month</p>
        </div>
        <div className="text-[#10b981] text-xs text-center">&#8595; Parsed by AI</div>
        <div className="bg-[#0c1222] rounded-lg p-3 border border-[#10b981]/30">
          <div className="flex justify-between text-xs py-1">
            <span className="text-[#64748b]">Account</span>
            <span className="text-[#f1f5f9]">Software Subscriptions</span>
          </div>
          <div className="flex justify-between text-xs py-1">
            <span className="text-[#64748b]">Contact</span>
            <span className="text-[#f1f5f9]">AWS</span>
          </div>
          <div className="flex justify-between text-xs py-1">
            <span className="text-[#64748b]">Amount</span>
            <span className="text-[#ef4444]">-$480.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LedgerMockup() {
  return (
    <div className="w-full bg-[#111827] border border-[#1e293b] rounded-xl p-5 font-mono text-xs overflow-hidden">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1e293b]">
        <span className="text-xs text-[#64748b]">Transactions</span>
      </div>
      <div className="space-y-2">
        {[
          { sr: '001', desc: 'AWS Subscription', account: 'Software (6200)', contact: 'AWS', amt: '-$480.00', color: 'text-[#ef4444]' },
          { sr: '002', desc: 'Consulting Revenue', account: 'Service Rev (4100)', contact: 'TechWave', amt: '+$8,500.00', color: 'text-[#10b981]' },
          { sr: '003', desc: 'Office Rent', account: 'Rent (6100)', contact: 'Landlord', amt: '-$12,000.00', color: 'text-[#ef4444]' },
          { sr: '004', desc: 'Office Supplies', account: 'Office Exp (6400)', contact: 'Staples', amt: '-$320.00', color: 'text-[#ef4444]' },
        ].map((row, i) => (
          <div key={i} className="flex items-center gap-3 py-2 px-2 rounded hover:bg-[#1a2236] transition-colors">
            <span className="text-[#64748b] w-8">{row.sr}</span>
            <span className="text-[#f1f5f9] flex-1 truncate">{row.desc}</span>
            <span className="text-[#94a3b8] hidden sm:block w-28 truncate">{row.account}</span>
            <span className={`${row.color} w-20 text-right`}>{row.amt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function IncomeStatementMockup() {
  const rows = [
    { label: 'Revenue', value: '$45,000', indent: 0, bold: true, color: 'text-[#10b981]' },
    { label: 'Cost of Sales', value: '-$8,000', indent: 1, bold: false, color: 'text-[#ef4444]' },
    { label: 'Gross Profit', value: '$37,000', indent: 0, bold: true, color: 'text-[#10b981]' },
    { label: 'Operating Expenses', value: '-$15,000', indent: 1, bold: false, color: 'text-[#ef4444]' },
    { label: 'EBITDA', value: '$22,000', indent: 0, bold: true, color: 'text-[#10b981]' },
    { label: 'Tax Expense', value: '-$4,400', indent: 1, bold: false, color: 'text-[#ef4444]' },
    { label: 'Net Profit', value: '$17,600', indent: 0, bold: true, color: 'text-[#10b981]' },
  ];

  return (
    <div className="w-full bg-[#111827] border border-[#1e293b] rounded-xl p-5 font-mono text-xs overflow-hidden">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1e293b]">
        <span className="text-xs text-[#64748b]">Income Statement</span>
      </div>
      <div className="space-y-1">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex justify-between py-1.5 px-2 rounded ${row.bold ? 'bg-[#1a2236]' : ''}`}
            style={{ paddingLeft: `${8 + row.indent * 16}px` }}
          >
            <span className={row.bold ? 'text-[#f1f5f9] font-semibold' : 'text-[#94a3b8]'}>
              {row.label}
            </span>
            <span className={`${row.color} ${row.bold ? 'font-semibold' : ''}`}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChartOfAccountsMockup() {
  const categories = [
    { name: 'Assets', code: '1000-1999', color: 'text-[#3b82f6]' },
    { name: 'Liabilities', code: '2000-2999', color: 'text-[#f59e0b]' },
    { name: 'Equity', code: '3000-3999', color: 'text-[#a855f7]' },
    { name: 'Revenue', code: '4000-4999', color: 'text-[#10b981]' },
    { name: 'Expenses', code: '5000-6999', color: 'text-[#ef4444]' },
  ];

  return (
    <div className="w-full bg-[#111827] border border-[#1e293b] rounded-xl p-5 font-mono text-xs overflow-hidden">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1e293b]">
        <span className="text-xs text-[#64748b]">Chart of Accounts</span>
      </div>
      <div className="space-y-2">
        {categories.map((cat, i) => (
          <div key={i} className="flex items-center justify-between py-2 px-2 rounded hover:bg-[#1a2236] transition-colors">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${cat.color.replace('text-', 'bg-')}`}></span>
              <span className="text-[#f1f5f9]">{cat.name}</span>
            </div>
            <span className="text-[#64748b]">{cat.code}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkspaceMockup() {
  return (
    <div className="w-full bg-[#111827] border border-[#1e293b] rounded-xl p-5 font-mono text-xs overflow-hidden">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1e293b]">
        <span className="text-xs text-[#64748b]">Multi-Tenant Architecture</span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-full bg-[#0c1222] border border-[#10b981]/30 rounded-lg p-3 text-center">
          <span className="text-[#10b981] font-semibold">Database Layer</span>
          <p className="text-[#64748b] mt-1">Row Level Security</p>
        </div>
        <div className="text-[#64748b]">&#8595;</div>
        <div className="flex gap-3 w-full">
          {['Workspace A', 'Workspace B', 'Workspace C'].map((ws, i) => (
            <div key={i} className="flex-1 bg-[#0c1222] border border-[#1e293b] rounded-lg p-2 text-center">
              <span className="text-[#f1f5f9]">{ws}</span>
              <div className="w-full h-1 bg-[#1e293b] rounded mt-2"></div>
              <div className="w-full h-1 bg-[#1e293b] rounded mt-1"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const featureRows = [
  {
    eyebrow: 'NATURAL LANGUAGE ENTRY',
    headline: 'Just describe what happened. Our AI records it.',
    body: "Type 'Paid AWS $480 this month' and watch it become a structured ledger entry — account, contact, amount, date. All parsed instantly.",
    link: 'See how it works',
    imageLeft: true,
    mockup: <AIMockup />,
  },
  {
    eyebrow: 'PERFECT ORGANIZATION',
    headline: 'Every transaction, perfectly organized.',
    body: 'Serial numbers, dates, accounts, contacts, amounts. Fully editable, sortable, and real-time. Your complete financial record, always up to date.',
    link: null,
    imageLeft: false,
    mockup: <LedgerMockup />,
  },
  {
    eyebrow: 'AUTO-GENERATED REPORTS',
    headline: 'Your P&L, always up to date.',
    body: 'Revenue → Gross Profit → EBITDA → Net Profit. Your income statement auto-generates from every entry. No spreadsheets, no manual calculations.',
    link: null,
    imageLeft: true,
    mockup: <IncomeStatementMockup />,
  },
  {
    eyebrow: 'STRUCTURED ACCOUNTING',
    headline: 'Structure built for real accounting.',
    body: 'Asset, Liability, Equity, Revenue, Expense — fully customizable with opening balances. Default chart seeded automatically for new workspaces.',
    link: null,
    imageLeft: false,
    mockup: <ChartOfAccountsMockup />,
  },
  {
    eyebrow: 'COMPLETE ISOLATION',
    headline: 'Every business gets its own workspace.',
    body: 'Row Level Security at the database level. No data leakage, no cross-tenant access. Your business data is completely isolated and secure.',
    link: null,
    imageLeft: true,
    mockup: <WorkspaceMockup />,
  },
];

export default function FeaturesDeepDive() {
  return (
    <section id="features" className="w-full bg-[#0c1222] relative overflow-hidden" style={{ padding: '120px 0' }}>
      {/* Orbital Ring */}
      <div className="absolute inset-0 pointer-events-none">
        <OrbitalFeatureRing />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-[#10b981] mb-4">
              FEATURES
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f1f5f9] tracking-tight">
              Everything you need to know your numbers.
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {featureRows.map((feature, i) => (
            <ScrollReveal key={i} delay={0.1}>
              <div
                className={`flex flex-col ${
                  feature.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-10 lg:gap-16`}
              >
                <div className="flex-1 w-full lg:max-w-[45%]">{feature.mockup}</div>
                <div className="flex-1 lg:max-w-[55%]">
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-[#10b981] mb-3">
                    {feature.eyebrow}
                  </p>
                  <h2 className="text-2xl md:text-4xl font-semibold text-[#f1f5f9] tracking-tight leading-tight">
                    {feature.headline}
                  </h2>
                  <p className="text-base text-[#94a3b8] mt-4 leading-relaxed">{feature.body}</p>
                  {feature.link && (
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-[#10b981] font-medium mt-4 hover:underline"
                    >
                      {feature.link} <span>&#8594;</span>
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
