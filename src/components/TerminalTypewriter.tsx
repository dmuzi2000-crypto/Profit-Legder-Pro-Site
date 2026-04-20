import { useEffect, useRef, useCallback } from 'react';

interface Phrase {
  text: string;
  result: {
    description: string;
    account: string;
    contact: string;
    amount: string;
    category: string;
  };
}

const phrases: Phrase[] = [
  {
    text: 'Paid AWS $480 this month',
    result: {
      description: 'AWS Subscription',
      account: 'Software Subscriptions (6200)',
      contact: 'AWS',
      amount: '-$480.00',
      category: 'Operational Expense',
    },
  },
  {
    text: 'Received $8500 from TechWave for consulting',
    result: {
      description: 'Consulting Revenue',
      account: 'Service Revenue (4100)',
      contact: 'TechWave',
      amount: '+$8,500.00',
      category: 'Revenue',
    },
  },
  {
    text: 'Paid rent for office $12000 yesterday',
    result: {
      description: 'Office Rent',
      account: 'Rent & Utilities (6100)',
      contact: 'Landlord',
      amount: '-$12,000.00',
      category: 'Operational Expense',
    },
  },
  {
    text: 'Bought office supplies from Staples for $320',
    result: {
      description: 'Office Supplies',
      account: 'Office Expenses (6400)',
      contact: 'Staples',
      amount: '-$320.00',
      category: 'Operational Expense',
    },
  },
];

export default function TerminalTypewriter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    currentPhrase: 0,
    isRunning: false,
    typeInterval: null as ReturnType<typeof setInterval> | null,
  });

  const reset = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML =
      '<div class="terminal-body"><div class="line"><span class="prompt">$</span><span class="typing-text"></span></div></div>';
  }, []);

  const cleanup = useCallback(() => {
    const state = stateRef.current;
    if (state.typeInterval) {
      clearInterval(state.typeInterval);
      state.typeInterval = null;
    }
    state.isRunning = false;
  }, []);

  const showResult = useCallback((result: Phrase['result']) => {
    const container = containerRef.current;
    if (!container) {
      cleanup();
      return;
    }
    const body = container.querySelector('.terminal-body');
    if (!body) {
      cleanup();
      return;
    }

    const resultHTML = `
      <div class="result-block show">
        <div class="result-row">
          <span class="result-label">Description</span>
          <span class="result-value">${result.description}</span>
        </div>
        <div class="result-row">
          <span class="result-label">Account</span>
          <span class="result-value">${result.account}</span>
        </div>
        <div class="result-row">
          <span class="result-label">Contact</span>
          <span class="result-value">${result.contact}</span>
        </div>
        <div class="result-row">
          <span class="result-label">Amount</span>
          <span class="result-value">${result.amount}</span>
        </div>
        <div class="result-row">
          <span class="result-label">Category</span>
          <span class="result-value">${result.category}</span>
        </div>
      </div>
      <div class="success-badge">
        <span>&#10003;</span> Posted to ledger
      </div>
    `;
    body.insertAdjacentHTML('beforeend', resultHTML);

    setTimeout(() => {
      const state = stateRef.current;
      state.currentPhrase = (state.currentPhrase + 1) % phrases.length;
      state.isRunning = false;
      startAnimation();
    }, 3000);
  }, [cleanup]);

  const showProcessing = useCallback((result: Phrase['result']) => {
    const container = containerRef.current;
    if (!container) {
      cleanup();
      return;
    }
    const textSpan = container.querySelector('.typing-text');
    if (!textSpan) {
      cleanup();
      return;
    }

    const phrase = phrases[stateRef.current.currentPhrase];
    textSpan.innerHTML = `<span class="typing-text">${phrase.text}</span><span class="cursor"></span>`;

    const body = container.querySelector('.terminal-body');
    if (body) {
      const statusEl = document.createElement('div');
      statusEl.className = 'status-line';
      statusEl.innerHTML = '<span class="status-dot"></span> Processing with AI...';
      body.appendChild(statusEl);
    }

    setTimeout(() => {
      showResult(result);
    }, 1200);
  }, [cleanup, showResult]);

  const typePhrase = useCallback(() => {
    const state = stateRef.current;
    const phrase = phrases[state.currentPhrase];
    const container = containerRef.current;
    if (!container) {
      cleanup();
      return;
    }
    const textSpan = container.querySelector('.typing-text');
    if (!textSpan || !phrase) {
      cleanup();
      return;
    }

    let i = 0;
    const typeSpeed = 60;

    state.typeInterval = setInterval(() => {
      if (i < phrase.text.length) {
        textSpan.textContent = phrase.text.substring(0, i + 1);
        i++;
      } else {
        if (state.typeInterval) {
          clearInterval(state.typeInterval);
          state.typeInterval = null;
        }
        setTimeout(() => {
          showProcessing(phrase.result);
        }, 300);
      }
    }, typeSpeed);
  }, [cleanup, showProcessing]);

  const startAnimation = useCallback(() => {
    const state = stateRef.current;
    if (state.isRunning) return;
    state.isRunning = true;
    reset();
    typePhrase();
  }, [reset, typePhrase]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = () => {
      if (!stateRef.current.isRunning) {
        startAnimation();
      }
    };

    container.addEventListener('click', handleClick);
    const timeout = setTimeout(() => {
      startAnimation();
    }, 1500);

    return () => {
      container.removeEventListener('click', handleClick);
      clearTimeout(timeout);
      cleanup();
    };
  }, [startAnimation, cleanup]);

  return (
    <div
      ref={containerRef}
      className="terminal-container w-full max-w-[520px]"
      style={{ cursor: 'pointer' }}
    >
      <div className="terminal-header">
        <span className="dot-red"></span>
        <span className="dot-amber"></span>
        <span className="dot-green"></span>
        <span className="terminal-title">AI Entry</span>
      </div>
      <div className="terminal-body">
        <div className="line">
          <span className="prompt">$</span>
          <span className="typing-text"></span>
        </div>
      </div>
    </div>
  );
}
