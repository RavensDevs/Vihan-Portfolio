import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';
import { referralsData } from '../data/referrals';
import { Send } from 'lucide-react';

function TestimonialCard({ referral, index }) {
  const { isDark } = useTheme();
  const ref = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`reveal p-8 flex flex-col justify-between border transition-all duration-300 ${
        isDark
          ? 'border-[rgba(176,176,176,0.2)] hover:bg-surface-container-low'
          : 'border-gray-200 hover:bg-gray-50'
      }`}
      style={{ transitionDelay: `${(index % 6) * 100}ms` }}
    >
      <blockquote
        className={`italic text-lg leading-relaxed mb-6 ${
          isDark ? 'text-on-surface' : 'text-gray-800'
        }`}
      >
        "{referral.quote}"
      </blockquote>
      <div className="flex items-center gap-5">
        <img
          src={referral.image}
          alt={referral.name}
          className={`w-12 h-12 rounded-full object-cover border ${
            isDark ? 'border-[rgba(176,176,176,0.2)]' : 'border-gray-200'
          }`}
        />
        <div>
          <div
            className={`text-sm font-bold ${
              isDark ? 'text-on-background' : 'text-gray-900'
            }`}
          >
            {referral.name}
          </div>
          <div
            className={`text-xs font-mono uppercase tracking-widest ${
              isDark ? 'text-secondary' : 'text-gray-500'
            }`}
          >
            {referral.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Referrals() {
  const { isDark } = useTheme();
  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.trim() && form.email.trim() && form.message.trim()) {
      setSubmitted(true);
    }
  };

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const inputClass = `w-full bg-transparent py-5 px-5 text-sm font-mono focus:outline-none border transition-all duration-200 ${
    isDark
      ? 'border-[rgba(176,176,176,0.2)] text-on-surface placeholder:text-outline-variant focus:border-[#1E90FF]'
      : 'border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-500'
  }`;

  return (
    <main className="max-w-[1220px] mx-auto px-4 md:px-8 pb-12 pt-28">
      {/* Header */}
      <section ref={headerRef} className="reveal pt-10 pb-6">
        <div
          className={`text-sm font-mono tracking-widest uppercase mb-2 ${
            isDark ? 'text-primary' : 'text-blue-700'
          }`}
        >
          REFERRALS
        </div>
        <h1
          className={`font-bold tracking-tighter leading-none mb-8 ${
            isDark ? 'text-on-background' : 'text-gray-900'
          }`}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            letterSpacing: '0.05em',
            lineHeight: 1.1,
          }}
        >
          Endorsements
        </h1>
        <div
          className={`h-px w-full ${
            isDark ? 'bg-[rgba(176,176,176,0.1)]' : 'bg-gray-200'
          }`}
        />
      </section>

      {/* Testimonials grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
        {referralsData.map((referral, i) => (
          <TestimonialCard key={referral.id} referral={referral} index={i} />
        ))}
      </section>

      {/* Divider */}
      <div
        className={`h-px w-full my-8 ${
          isDark ? 'bg-[rgba(176,176,176,0.1)]' : 'bg-gray-200'
        }`}
      />

      {/* Contact form */}
      <section
        ref={formRef}
        className="reveal max-w-[800px] mx-auto py-8"
      >
        <h2
          className={`text-3xl font-semibold tracking-tight mb-6 ${
            isDark ? 'text-on-background' : 'text-gray-900'
          }`}
        >
          Get in Touch
        </h2>

        {submitted ? (
          <div
            className={`text-center py-20 border ${
              isDark ? 'border-[rgba(176,176,176,0.2)]' : 'border-gray-200'
            }`}
          >
            <div className="text-4xl mb-4">✓</div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                isDark ? 'text-primary' : 'text-blue-700'
              }`}
            >
              Message Sent!
            </h3>
            <p
              className={`text-sm ${
                isDark ? 'text-on-surface-variant' : 'text-gray-600'
              }`}
            >
              Thank you for reaching out. I'll get back to you within 1–2
              business days.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: '', email: '', message: '' });
              }}
              className="mt-6 text-xs font-mono tracking-widest uppercase text-primary hover:underline"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="NAME"
              value={form.name}
              onChange={handleChange('name')}
              className={inputClass}
              required
            />
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              value={form.email}
              onChange={handleChange('email')}
              className={inputClass}
              required
            />
            <textarea
              rows={4}
              placeholder="MESSAGE"
              value={form.message}
              onChange={handleChange('message')}
              className={`${inputClass} resize-none`}
              required
            />
            <div className="flex justify-start">
              <button
                type="submit"
                className="flex items-center gap-3 bg-[#FF8C00] hover:bg-[#E67E00] text-white px-12 py-4 font-mono text-xs uppercase tracking-widest transition-all duration-200 active:scale-95"
              >
                Send Message <Send size={14} />
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
