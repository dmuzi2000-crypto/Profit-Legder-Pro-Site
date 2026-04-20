import ScrollReveal from '../components/ScrollReveal';

interface AgentCard {
  badge: string;
  badgeClass: string;
  title: string;
  body: string;
  example: string;
}

const agentCards: AgentCard[] = [
  {
    badge: 'LIVE',
    badgeClass: 'bg-[#10b981]/10 text-[#10b981]',
    title: 'Single Entry Agent',
    body: 'Type one sentence. AI parses into a complete ledger entry. Review and confirm.',
    example: '$ Paid AWS $480 this month\n→ Operational Expense\n→ Software Subscriptions (6200)\n→ AWS, -$480.00',
  },
  {
    badge: 'COMING SOON',
    badgeClass: 'bg-[#f59e0b]/10 text-[#f59e0b]',
    title: 'Batch Entry Agent',
    body: 'Describe your whole week. Post it all at once. Multiple transactions from a single prompt.',
    example: '$ This week: rent 12000, AWS 480,\n  payroll 45000, supplies 320\n→ 4 entries parsed\n→ Review table → Post All',
  },
  {
    badge: 'PLANNED',
    badgeClass: 'bg-[#1e293b] text-[#94a3b8]',
    title: 'Full Control Agent',
    body: 'Create accounts, run reports, manage contacts — all from one prompt. Full agent control.',
    example: '$ Create account Marketing Budget\n  under OpEx code 6300\n→ Account created\n→ Opening balance set',
  },
];

export default function AIAgentSection() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0c1222 0%, #111827 100%)',
        padding: '120px 0',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#f1f5f9] tracking-tight max-w-[600px] mx-auto">
              Your AI bookkeeper, built in.
            </h2>
            <p className="text-base text-[#94a3b8] mt-4 max-w-[500px] mx-auto">
              Not a chatbot. Not an add-on. Native to the platform.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agentCards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className="bg-[#111827] border border-[#1e293b] rounded-xl p-8 h-full flex flex-col hover:border-[#10b981]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <span
                  className={`inline-block self-start text-xs font-medium px-3 py-1 rounded ${card.badgeClass} mb-4`}
                >
                  {card.badge}
                </span>
                <h3 className="text-xl font-semibold text-[#f1f5f9] mb-3">{card.title}</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-5">{card.body}</p>
                <div className="mt-auto bg-[#1a2236] rounded-lg p-4 font-mono text-[13px] text-[#94a3b8] whitespace-pre-line leading-relaxed">
                  {card.example}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
