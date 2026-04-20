import ScrollReveal from '../components/ScrollReveal';

interface RoadmapColumn {
  title: string;
  dotColor: string;
  items: string[];
}

const columns: RoadmapColumn[] = [
  {
    title: 'Done',
    dotColor: 'bg-[#10b981]',
    items: [
      'AI single entry',
      'Transactions table',
      'Income statement',
      'Chart of accounts',
      'Vendors & customers',
      'Multi-tenant auth',
    ],
  },
  {
    title: 'In Progress',
    dotColor: 'bg-[#f59e0b]',
    items: [
      'Batch AI entry',
      'Contacts linked to transactions',
      'Accounts linked to transactions',
    ],
  },
  {
    title: 'Coming Soon',
    dotColor: 'bg-[#3b82f6]',
    items: [
      'Full AI agent V3',
      'CSV/PDF export',
      'Role-based team access',
      'Balance sheet',
      'Cash flow statement',
      'Recurring entries',
      'Bank reconciliation',
    ],
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="w-full bg-[#111827] relative overflow-hidden" style={{ padding: '120px 0' }}>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f1f5f9] tracking-tight">
              Building in public.
            </h2>
            <p className="text-base text-[#94a3b8] mt-4">
              See what's live, what's next, and what's coming.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-[#0c1222] border border-[#1e293b] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#1e293b]">
                  <span className={`w-2 h-2 rounded-full ${col.dotColor}`}></span>
                  <h4 className="text-lg font-semibold text-[#f1f5f9]">{col.title}</h4>
                </div>
                <ul className="space-y-0">
                  {col.items.map((item, j) => (
                    <li
                      key={j}
                      className="py-3 text-sm text-[#94a3b8] border-b border-[#1e293b] last:border-b-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
