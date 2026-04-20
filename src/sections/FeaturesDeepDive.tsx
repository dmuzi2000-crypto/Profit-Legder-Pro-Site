import ScrollReveal from '../components/ScrollReveal';

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
