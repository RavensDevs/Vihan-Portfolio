import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../context/ThemeContext';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'vihan@example.com', href: 'mailto:vihan@example.com' },
  { icon: Phone, label: 'Phone', value: '+94 71 234 5678', href: 'tel:+94712345678' },
  { icon: MapPin, label: 'Location', value: 'Colombo, Sri Lanka', href: null },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-400' },
  { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-purple-400' },
];

export default function Contact() {
  const { isDark } = useTheme();
  const headerRef = useScrollAnimation();
  const formRef = useScrollAnimation();
  const infoRef = useScrollAnimation();

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 text-base bg-transparent border transition-all duration-200 outline-none font-mono ${
      errors[field]
        ? 'border-error text-error'
        : isDark
        ? 'border-outline/30 text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary'
        : 'border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500'
    }`;

  return (
    <section
      id="contact"
      className={`pt-8 pb-8 border-t ${isDark ? 'border-outline/10' : 'border-gray-200'}`}
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="px-4 md:px-8 max-w-[1220px] mx-auto">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-8 flex items-center gap-6">
          <h2 className={`text-sm font-semibold tracking-[0.3em] uppercase ${isDark ? 'text-primary' : 'text-blue-700'}`}>
            Get In Touch
          </h2>
          <div className={`h-px flex-grow ${isDark ? 'bg-outline/20' : 'bg-gray-200'}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div ref={infoRef} className="reveal lg:col-span-2 space-y-6">
            <div>
              <h3 className={`text-3xl font-bold mb-3 ${isDark ? 'text-on-background' : 'text-gray-900'}`}>
                Let's Work Together
              </h3>
              <p className={`text-base leading-relaxed ${isDark ? 'text-on-surface-variant' : 'text-gray-600'}`}>
                Whether you're looking for a senior mechanical engineer, a design collaborator, or a
                technical consultant — I'd love to hear from you. Let's build something exceptional.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-surface-container text-primary' : 'bg-blue-50 text-blue-600'
                  }`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className={`text-sm font-mono uppercase tracking-wider mb-0.5 ${isDark ? 'text-on-surface-variant' : 'text-gray-400'}`}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href} className={`text-base font-medium transition-colors duration-200 ${isDark ? 'text-on-surface hover:text-primary' : 'text-gray-700 hover:text-blue-600'}`}>
                        {value}
                      </a>
                    ) : (
                      <span className={`text-base font-medium ${isDark ? 'text-on-surface' : 'text-gray-700'}`}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-full glass-card flex items-center justify-center transition-all duration-300 ${isDark ? 'text-on-surface-variant' : 'text-gray-500'} ${color} hover:scale-110 hover:border-primary/40`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div ref={formRef} className="reveal delay-200 lg:col-span-3">
            {submitted ? (
              <div className={`h-full flex flex-col items-center justify-center text-center p-10 glass-card`}>
                <div className={`text-4xl mb-4`}>✓</div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-primary' : 'text-blue-700'}`}>
                  Message Sent!
                </h3>
                <p className={`text-sm ${isDark ? 'text-on-surface-variant' : 'text-gray-600'}`}>
                  Thank you for reaching out. I'll get back to you within 1–2 business days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-6 text-xs font-mono tracking-widest uppercase text-primary hover:underline"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`block text-sm font-mono tracking-wider uppercase mb-2 ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={form.name}
                      onChange={handleChange('name')}
                      placeholder="John Smith"
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="mt-1 text-xs text-error">{errors.name}</p>}
                  </div>
                  <div>
                    <label className={`block text-sm font-mono tracking-wider uppercase mb-2 ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={form.email}
                      onChange={handleChange('email')}
                      placeholder="john@company.com"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="mt-1 text-xs text-error">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-mono tracking-wider uppercase mb-2 ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    value={form.subject}
                    onChange={handleChange('subject')}
                    placeholder="Project Collaboration / Consulting / Employment"
                    className={inputClass('subject')}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono tracking-wider uppercase mb-2 ${isDark ? 'text-on-surface-variant' : 'text-gray-500'}`}>
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder="Describe your project or enquiry..."
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-error">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  id="contact-submit"
                  className="flex items-center gap-2 px-8 py-4 bg-[#1E90FF] text-white text-xs font-semibold tracking-widest uppercase hover:brightness-110 hover:gap-3 transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  SEND MESSAGE <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
