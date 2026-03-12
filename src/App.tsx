import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, Eye, Search, UserCheck, Lock, ArrowRight, ChevronDown, Globe, FileText, ShieldAlert, Scale, Target, MessageCircle, Send, Instagram, Phone } from 'lucide-react';
import Lenis from 'lenis';
import { useTranslation } from 'react-i18next';
import './i18n';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const { t, i18n } = useTranslation();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('idle');
        alert('Error submitting form.');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('idle');
    }
  };

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  useEffect(() => {
    // Initialize smooth scrolling
    const lenis = new Lenis({
      autoRaf: true,
    });
  }, []);
  return (
    <div className="min-h-screen font-sans selection:bg-white/20">
      {/* Success Overlay */}
      {submitStatus === 'success' && (
        <div className="fixed inset-0 z-[100] bg-white text-black flex flex-col items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center flex flex-col items-center max-w-lg"
          >
            <img
              src="/Logo/logo.png"
              alt="MD Logo"
              className="w-48 mb-12 select-none"
            />
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight whitespace-pre-line" dangerouslySetInnerHTML={{ __html: t('inquiry.success_title') }} />
            <p className="text-xl md:text-2xl font-light opacity-60 mb-12 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: t('inquiry.success_desc') }} />
            <button
              onClick={() => setSubmitStatus('idle')}
              className="px-8 py-4 bg-black text-white rounded-full font-medium tracking-tight hover:scale-105 transition-transform duration-500"
            >
              {t('inquiry.success_btn')}
            </button>
          </motion.div>
        </div>
      )}

      {/* Social Floating Links */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <a
          href="tel:010-3985-8279"
          className="w-14 h-14 bg-black text-white border border-white/20 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 relative group"
        >
          <Phone size={24} fill="currentColor" />
          <span className="absolute right-full mr-4 bg-black/90 backdrop-blur-sm text-white text-xs py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/10 pointer-events-none">
            010-3985-8279
          </span>
        </a>
        <a
          href="https://open.kakao.com/"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-[#FEE500] text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 relative group"
        >
          <MessageCircle size={24} fill="currentColor" />
          <span className="absolute right-full mr-4 bg-black/90 backdrop-blur-sm text-white text-xs py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/10 pointer-events-none">
            KakaoTalk
          </span>
        </a>
        <a
          href="https://t.me/teleles"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-[#24A1DE] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 relative group"
        >
          <Send size={24} fill="currentColor" className="ml-1" />
          <span className="absolute right-full mr-4 bg-black/90 backdrop-blur-sm text-white text-xs py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/10 pointer-events-none">
            Telegram
          </span>
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 relative group"
        >
          <Instagram size={28} />
          <span className="absolute right-full mr-4 bg-black/90 backdrop-blur-sm text-white text-xs py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/10 pointer-events-none">
            Instagram
          </span>
        </a>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "circOut" }}
        className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 flex justify-between items-center mix-blend-difference pointer-events-none"
      >
        <div className="text-2xl font-serif tracking-tighter font-bold italic pointer-events-auto">MD</div>
        <div className="hidden md:flex gap-12 text-[11px] uppercase tracking-[0.2em] font-medium items-center">
          <a href="#services" className="hover:opacity-50 transition-opacity">{t('nav.services')}</a>
          <a href="#about" className="hover:opacity-50 transition-opacity">{t('nav.philosophy')}</a>
          <a href="#contact" className="hover:opacity-50 transition-opacity">{t('nav.inquiry')}</a>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 hover:opacity-50 transition-opacity pointer-events-auto"
            >
              <Globe size={14} />
              {i18n.language.toUpperCase()}
            </button>
            {isLangMenuOpen && (
              <div className="absolute top-full mt-4 right-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden py-2 min-w-[100px] pointer-events-auto">
                <button
                  onClick={() => toggleLanguage('en')}
                  className={`w-full text-left px-4 py-2 hover:bg-white/10 transition-colors ${i18n.language === 'en' ? 'text-gold' : 'text-white'}`}
                >
                  English
                </button>
                <button
                  onClick={() => toggleLanguage('ko')}
                  className={`w-full text-left px-4 py-2 hover:bg-white/10 transition-colors ${i18n.language === 'ko' ? 'text-gold' : 'text-white'}`}
                >
                  한국어
                </button>
              </div>
            )}
          </div>
        </div>
        <button className="text-[11px] uppercase tracking-[0.2em] border border-white/20 px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500 pointer-events-auto">
          {t('nav.portal')}
        </button>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen pointer-events-none"
        >
          <source src="https://videos.pexels.com/video-files/3121459/3121459-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 0.6, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5 }}
            className="inline-block text-[10px] uppercase mb-8 font-mono"
          >
            {t('hero.est')}
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex flex-col items-center mb-12"
          >
            <img
              src="/logo.png"
              alt="MD Logo"
              className="w-48 md:w-96 mb-8 select-none"
              style={{ filter: "invert(1) brightness(1.5)" }}
            />
            <h2 className="text-xl md:text-3xl font-serif tracking-[0.5em] md:tracking-[1em] font-light opacity-80 pl-[0.5em] md:pl-[1em]">
              탐정사무소
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed tracking-tight"
            dangerouslySetInnerHTML={{ __html: t('hero.desc') }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <a
              href="#contact"
              className="px-12 py-5 bg-white text-black rounded-full font-medium tracking-tight hover:scale-105 transition-transform duration-500 flex items-center gap-3"
            >
              {t('hero.btn_start')} <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="px-12 py-5 border border-white/20 rounded-full font-medium tracking-tight hover:bg-white/5 transition-colors duration-500"
            >
              {t('hero.btn_expertise')}
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
          <span className="text-[10px] uppercase tracking-widest">{t('hero.scroll')}</span>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-4 md:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-4 md:gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-serif italic mb-6 md:mb-8">{t('services.title1')} <br />{t('services.title2')}</h2>
              <p className="text-lg md:text-xl opacity-60 font-light">
                {t('services.desc')}
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-[80px] md:text-[120px] font-serif opacity-5 leading-none block mt-8 md:mt-0">01</span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10"
          >
            {[
              {
                title: t('services.items.debt.title'),
                desc: t('services.items.debt.desc', { returnObjects: true }),
                icon: FileText
              },
              {
                title: t('services.items.background.title'),
                desc: t('services.items.background.desc', { returnObjects: true }),
                icon: Search
              },
              {
                title: t('services.items.school.title'),
                desc: t('services.items.school.desc', { returnObjects: true }),
                icon: Eye
              },
              {
                title: t('services.items.evidence.title'),
                desc: t('services.items.evidence.desc', { returnObjects: true }),
                icon: Scale
              },
              {
                title: t('services.items.corporate.title'),
                desc: t('services.items.corporate.desc', { returnObjects: true }),
                icon: ShieldAlert
              },
              {
                title: t('services.items.detection.title'),
                desc: t('services.items.detection.desc', { returnObjects: true }),
                icon: Target
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-8 md:p-12 group hover:bg-black/5 transition-colors duration-700"
              >
                <service.icon className="mb-8 opacity-40 group-hover:opacity-100 group-hover:text-black transition-all duration-500" size={32} strokeWidth={1} />
                <h3 className="text-2xl font-serif italic mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                <div className="opacity-60 font-light leading-relaxed mb-8 space-y-2">
                  {Array.isArray(service.desc) ? service.desc.map((line: string, idx: number) => (
                    <p key={idx} className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span> {line}
                    </p>
                  )) : <p>{service.desc}</p>}
                </div>
                <div className="h-px w-8 bg-black/20 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl w-full max-w-md mx-auto md:max-w-none"
          >
            <img
              src="/디자인.png"
              alt="Investigation"
              className="object-cover w-full h-full opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </motion.div>

          <motion.div {...fadeInUp} className="text-center md:text-left mt-8 md:mt-0">
            <span className="text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8 block opacity-40 font-mono">{t('philosophy.label')}</span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-8 md:mb-12 leading-tight">
              {t('philosophy.title1')} <br />{t('philosophy.title2')}
            </h2>
            <div className="space-y-8 text-lg font-light opacity-60 leading-relaxed">
              <p>
                {t('philosophy.desc1')}
              </p>
              <p>
                {t('philosophy.desc2')}
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-12">
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl font-serif italic mb-2"
                >
                  99%
                </motion.div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">{t('philosophy.stat1_label')}</div>
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-4xl font-serif italic mb-2"
                >
                  100%
                </motion.div>
                <div className="text-[10px] uppercase tracking-widest opacity-40">{t('philosophy.stat2_label')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-20 md:py-32 px-4 md:px-8 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16 md:mb-24"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8 block opacity-40 font-mono text-gold">{t('agents.label')}</span>
            <h2 className="text-3xl md:text-6xl font-serif italic mb-8">{t('agents.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {[
              {
                id: 'ceo',
                image: '/agent/노천석.png',
                role: t('agents.list.ceo.role'),
                name: t('agents.list.ceo.name'),
                desc: t('agents.list.ceo.desc', { returnObjects: true })
              },
              {
                id: 'director',
                image: '/agent/윤.png',
                role: t('agents.list.director.role'),
                name: t('agents.list.director.name'),
                desc: t('agents.list.director.desc', { returnObjects: true })
              },
              {
                id: 'team1',
                image: '/agent/장.png',
                role: t('agents.list.team1.role'),
                name: t('agents.list.team1.name'),
                desc: t('agents.list.team1.desc', { returnObjects: true })
              },
              {
                id: 'team2',
                image: '/agent/여탐정.png',
                role: t('agents.list.team2.role'),
                name: t('agents.list.team2.name'),
                desc: t('agents.list.team2.desc', { returnObjects: true })
              }
            ].map((agent, i) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative w-48 h-48 mb-8 rounded-full overflow-hidden border border-white/10 group-hover:border-gold/50 transition-colors duration-500">
                  <img
                    src={agent.image}
                    alt="Agent Area"
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Mosaic/Blur Effect Overlay to hide identity */}
                  <div className="absolute inset-0 backdrop-blur-[8px] bg-black/20" />
                </div>

                <h3 className="text-2xl font-serif mb-2">{agent.role} <span className="italic">{agent.name}</span></h3>

                <div className="w-8 h-px bg-gold/30 my-4" />

                <div className="text-[13px] font-light opacity-60 leading-[1.6] max-w-[240px] space-y-1">
                  {Array.isArray(agent.desc) && agent.desc.map((line: string, idx: number) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Certifications Section */}
      <section id="certifications" className="py-20 md:py-32 px-4 md:px-8 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] mb-6 md:mb-8 block opacity-40 font-mono text-gold">{t('certifications.label')}</span>
            <h2 className="text-3xl md:text-5xl font-serif italic mb-6 md:mb-8 leading-tight">{t('certifications.title')}</h2>
            <p className="text-base md:text-lg font-light opacity-60 leading-relaxed px-4 md:px-0">
              {t('certifications.desc')}
            </p>
          </motion.div>

          {/* Grid of 4 Certificates */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 px-2 md:px-0">
            {[1, 2, 3, 4].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative w-full aspect-[1/1.4] lg:w-48 lg:h-64 border border-white/10 group bg-white/5 rounded-sm overflow-hidden flex-shrink-0 shadow-2xl mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
                <img
                  src={`/cert${item}.jpg`}
                  alt={`Certification ${item}`}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="contact" className="py-20 md:py-32 px-4 md:px-8 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-5xl md:text-8xl font-serif italic mb-6 md:mb-8">{t('inquiry.title1')} <br />{t('inquiry.title2')}</h2>
            <p className="text-lg md:text-xl font-light opacity-60 px-4 md:px-0">
              {t('inquiry.desc')}
            </p>
          </motion.div>

          <motion.form
            action="https://formspree.io/f/xnjgdyew"
            method="POST"
            onSubmit={handleFormSubmit}
            {...fadeInUp}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">{t('inquiry.form_name')}</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors bg-transparent"
                  placeholder={t('inquiry.form_name_placeholder')}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">{t('inquiry.form_phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors bg-transparent"
                  placeholder={t('inquiry.form_phone_placeholder')}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">{t('inquiry.form_email')}</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors bg-transparent"
                  placeholder={t('inquiry.form_email_placeholder')}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">{t('inquiry.form_service')}</label>
              <div className="relative">
                <select name="service_category" required className="w-full border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors bg-transparent appearance-none">
                  <option value="debt">{t('inquiry.form_service_options.debt')}</option>
                  <option value="background">{t('inquiry.form_service_options.background')}</option>
                  <option value="school">{t('inquiry.form_service_options.school')}</option>
                  <option value="evidence">{t('inquiry.form_service_options.evidence')}</option>
                  <option value="corporate">{t('inquiry.form_service_options.corporate')}</option>
                  <option value="detection">{t('inquiry.form_service_options.detection')}</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" size={16} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">{t('inquiry.form_overview')}</label>
              <textarea
                rows={4}
                name="message"
                required
                className="w-full border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
                placeholder={t('inquiry.form_overview_placeholder')}
              />
            </div>

            <div className="pt-12">
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className={`w-full py-6 bg-black text-white rounded-full text-lg font-medium hover:scale-[1.02] transition-transform duration-500 ${submitStatus === 'submitting' ? 'opacity-50 pointer-events-none' : ''}`}
              >
                {submitStatus === 'submitting' ? '...' : t('inquiry.btn_submit')}
              </button>
              <p className="text-center mt-8 text-[10px] uppercase tracking-[0.2em] opacity-40">
                {t('inquiry.footer_note')}
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 md:gap-16">
          <div className="max-w-xs text-center md:text-left mx-auto lg:mx-0">
            <div className="text-3xl font-serif italic mb-6 md:mb-8">MD</div>
            <p className="text-sm opacity-40 leading-relaxed font-light">
              {t('footer.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 w-full lg:w-auto text-center md:text-left">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8 opacity-40">{t('footer.locations')}</h4>
              <ul className="space-y-4 text-sm font-light opacity-60">
                <li>Seoul, KR</li>
                <li>London, UK</li>
                <li>New York, US</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8 opacity-40">{t('footer.legal')}</h4>
              <ul className="space-y-4 text-sm font-light opacity-60">
                <li>{t('footer.legal_links.privacy')}</li>
                <li>{t('footer.legal_links.terms')}</li>
                <li>{t('footer.legal_links.compliance')}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold mb-8 opacity-40">{t('footer.contact')}</h4>
              <ul className="space-y-4 text-sm font-light opacity-60">
                <li>mdetection@naver.com</li>
                <li>010-3985-8279</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest opacity-30">
          <span>{t('footer.copyright')}</span>
          <span>{t('footer.encrypted')}</span>
        </div>
      </footer>
    </div>
  );
}
