import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiCheckCircle, FiSend, FiLoader, FiCheck } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../constants';
import { fadeIn, staggerContainer } from '../animations/variants';

export default function Contact({ isDark }: { isDark: boolean }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const headerRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    setError('');

    // Check if keys are custom placeholders
    if (EMAILJS_PUBLIC_KEY === 'your_public_key') {
      // Direct mock response for testing/production demo
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      }, 1500);
      return;
    }

    if (formRef.current) {
      emailjs
        .sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            setSuccess(true);
            confetti({
              particleCount: 120,
              spread: 80,
              origin: { y: 0.6 },
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSuccess(false), 5000);
          },
          (err) => {
            setLoading(false);
            setError('Failed to send message. Please try again later.');
            console.error('EmailJS Error:', err);
          }
        );
    }
  };

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden border-t ${
        isDark ? 'border-slate-900/50 bg-slate-950/20' : 'border-slate-200/50 bg-slate-50/20'
      }`}
    >
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accentPurple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accentBlue/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentBlue to-accentPurple">Touch</span>
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-accentBlue to-accentPurple mx-auto rounded-full mb-4" />
          <p className={`max-w-xl mx-auto text-sm md:text-base ${isDark ? 'text-slate-400' : 'text-slate-550'}`}>
            Have an exciting opportunity, project in mind, or just want to connect? Send a message below!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="space-y-6">
              
              {/* Status Indicator Card */}
              <motion.div
                variants={fadeIn('up', 0.5)}
                className={`p-6 rounded-2xl border flex items-center gap-4 ${
                  isDark ? 'glass-card-dark border-white/5' : 'glass-card-light border-black/5'
                }`}
              >
                <div className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Status Update</h4>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Available for full-time internships & roles
                  </p>
                </div>
              </motion.div>

              {/* Email Contact Card */}
              <motion.div
                variants={fadeIn('up', 0.5)}
                className={`p-6 rounded-2xl border flex items-center gap-4 ${
                  isDark ? 'glass-card-dark border-white/5' : 'glass-card-light border-black/5'
                }`}
              >
                <div className={`p-3.5 rounded-xl ${isDark ? 'bg-slate-900 text-accentBlue' : 'bg-slate-100 text-accentBlue'}`}>
                  <FiMail size={22} />
                </div>
                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Email Address
                  </h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold hover:underline">
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                variants={fadeIn('up', 0.5)}
                className={`p-6 rounded-2xl border flex items-center gap-4 ${
                  isDark ? 'glass-card-dark border-white/5' : 'glass-card-light border-black/5'
                }`}
              >
                <div className={`p-3.5 rounded-xl ${isDark ? 'bg-slate-900 text-accentPurple' : 'bg-slate-100 text-accentPurple'}`}>
                  <FiMapPin size={22} />
                </div>
                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    Location
                  </h4>
                  <span className="text-sm font-semibold text-slate-850 dark:text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Bottom Graphic decoration card */}
            <motion.div
              variants={fadeIn('up', 0.5)}
              className={`p-6 rounded-3xl border text-center flex-1 flex flex-col justify-center ${
                isDark ? 'glass-card-dark border-white/5' : 'glass-card-light border-black/5'
              }`}
            >
              <h4 className="text-lg font-bold mb-2">Let's collaborate!</h4>
              <p className={`text-xs leading-relaxed max-w-xs mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                I look forward to discussing developer internships, open source integration, or technical consulting.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              ref={formRef}
              onSubmit={handleSendEmail}
              className={`p-8 md:p-10 rounded-3xl border space-y-6 ${
                isDark ? 'glass-card-dark border-white/5' : 'glass-card-light border-black/5'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-accentPurple transition-all ${
                      isDark
                        ? 'border-slate-850 bg-slate-900/40 text-white focus:bg-slate-900'
                        : 'border-slate-200 bg-white/40 text-slate-900 focus:bg-white'
                    }`}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-accentPurple transition-all ${
                      isDark
                        ? 'border-slate-850 bg-slate-900/40 text-white focus:bg-slate-900'
                        : 'border-slate-200 bg-white/40 text-slate-900 focus:bg-white'
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-accentPurple transition-all ${
                    isDark
                      ? 'border-slate-850 bg-slate-900/40 text-white focus:bg-slate-900'
                      : 'border-slate-200 bg-white/40 text-slate-900 focus:bg-white'
                  }`}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-accentPurple transition-all resize-none ${
                    isDark
                      ? 'border-slate-850 bg-slate-900/40 text-white focus:bg-slate-900'
                      : 'border-slate-200 bg-white/40 text-slate-900 focus:bg-white'
                  }`}
                />
              </div>

              {/* Status notifications block */}
              {error && <p className="text-xs font-semibold text-rose-500">{error}</p>}
              {success && (
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500">
                  <FiCheckCircle size={14} /> Message sent successfully! I will reply shortly.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-accentBlue to-accentPurple hover:shadow-glow-purple text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
              >
                {loading ? (
                  <>
                    Sending... <FiLoader className="animate-spin" size={16} />
                  </>
                ) : success ? (
                  <>
                    Sent! <FiCheck size={16} />
                  </>
                ) : (
                  <>
                    Send Message <FiSend size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
