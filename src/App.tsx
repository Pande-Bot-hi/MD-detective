import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Cpu, Eye, Search, UserCheck, Lock, ArrowRight, ChevronDown, Globe } from 'lucide-react';
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
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "circOut" }}
        className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference"
      >
        <div className="text-2xl font-serif tracking-tighter font-bold italic">MD</div>
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
        <button className="text-[11px] uppercase tracking-[0.2em] border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500">
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
              className="w-64 md:w-96 mb-8 select-none"
              style={{ filter: "invert(1) brightness(1.5)" }}
            />
            <h2 className="text-2xl md:text-3xl font-serif tracking-[1em] font-light opacity-80 pl-[1em]">
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
      <section id="services" className="py-32 px-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-serif italic mb-8">{t('services.title1')} <br />{t('services.title2')}</h2>
              <p className="text-xl opacity-50 font-light">
                {t('services.desc')}
              </p>
            </div>
            <div className="text-right">
              <span className="text-[120px] font-serif opacity-5 leading-none">01</span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10"
          >
            {[
              {
                title: t('services.items.corporate.title'),
                desc: t('services.items.corporate.desc'),
                icon: Shield
              },
              {
                title: t('services.items.digital.title'),
                desc: t('services.items.digital.desc'),
                icon: Cpu
              },
              {
                title: t('services.items.surveillance.title'),
                desc: t('services.items.surveillance.desc'),
                icon: Eye
              },
              {
                title: t('services.items.asset.title'),
                desc: t('services.items.asset.desc'),
                icon: Search
              },
              {
                title: t('services.items.background.title'),
                desc: t('services.items.background.desc'),
                icon: UserCheck
              },
              {
                title: t('services.items.risk.title'),
                desc: t('services.items.risk.desc'),
                icon: Lock
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-black p-12 group hover:bg-white/5 transition-colors duration-700"
              >
                <service.icon className="mb-8 opacity-40 group-hover:opacity-100 group-hover:text-white transition-all duration-500" size={32} strokeWidth={1} />
                <h3 className="text-2xl font-serif italic mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="opacity-40 font-light leading-relaxed mb-8">
                  {service.desc}
                </p>
                <div className="h-px w-8 bg-white/20 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-32 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <img
              src="https://picsum.photos/seed/investigation/800/1000"
              alt="Investigation"
              className="object-cover w-full h-full opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </motion.div>

          <motion.div {...fadeInUp}>
            <span className="text-[10px] uppercase tracking-[0.5em] mb-8 block opacity-40 font-mono">{t('philosophy.label')}</span>
            <h2 className="text-5xl md:text-6xl font-serif italic mb-12 leading-tight">
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
      <section id="agents" className="py-32 px-8 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-24"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] mb-8 block opacity-40 font-mono text-gold">{t('agents.label')}</span>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-8">{t('agents.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                id: 'ceo',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
                role: t('agents.list.ceo.role'),
                name: t('agents.list.ceo.name'),
                desc1: t('agents.list.ceo.desc1'),
                desc2: t('agents.list.ceo.desc2')
              },
              {
                id: 'team1',
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
                role: t('agents.list.team1.role'),
                name: t('agents.list.team1.name'),
                desc1: t('agents.list.team1.desc1'),
                desc2: t('agents.list.team1.desc2')
              },
              {
                id: 'team2',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
                role: t('agents.list.team2.role'),
                name: t('agents.list.team2.name'),
                desc1: t('agents.list.team2.desc1'),
                desc2: t('agents.list.team2.desc2')
              },
              {
                id: 'director',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
                role: t('agents.list.director.role'),
                name: t('agents.list.director.name'),
                desc1: t('agents.list.director.desc1'),
                desc2: t('agents.list.director.desc2')
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

                <p className="text-sm font-light opacity-60 leading-relaxed max-w-[200px]">
                  {agent.desc1}
                  <br />
                  {agent.desc2}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="contact" className="py-32 px-8 bg-white text-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-24"
          >
            <h2 className="text-6xl md:text-8xl font-serif italic mb-8">{t('inquiry.title1')} <br />{t('inquiry.title2')}</h2>
            <p className="text-xl font-light opacity-60">
              {t('inquiry.desc')}
            </p>
          </motion.div>

          <motion.form
            {...fadeInUp}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">{t('inquiry.form_name')}</label>
                <input
                  type="text"
                  className="w-full border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors bg-transparent"
                  placeholder={t('inquiry.form_name_placeholder')}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">{t('inquiry.form_email')}</label>
                <input
                  type="email"
                  className="w-full border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors bg-transparent"
                  placeholder={t('inquiry.form_email_placeholder')}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">{t('inquiry.form_service')}</label>
              <div className="relative">
                <select className="w-full border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors bg-transparent appearance-none">
                  <option>{t('inquiry.form_service_options.corp')}</option>
                  <option>{t('inquiry.form_service_options.digital')}</option>
                  <option>{t('inquiry.form_service_options.surv')}</option>
                  <option>{t('inquiry.form_service_options.asset')}</option>
                  <option>{t('inquiry.form_service_options.other')}</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" size={16} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">{t('inquiry.form_overview')}</label>
              <textarea
                rows={4}
                className="w-full border-b border-black/20 py-4 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
                placeholder={t('inquiry.form_overview_placeholder')}
              />
            </div>

            <div className="pt-12">
              <button
                type="submit"
                className="w-full py-6 bg-black text-white rounded-full text-lg font-medium hover:scale-[1.02] transition-transform duration-500"
              >
                {t('inquiry.btn_submit')}
              </button>
              <p className="text-center mt-8 text-[10px] uppercase tracking-[0.2em] opacity-40">
                {t('inquiry.footer_note')}
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-xs">
            <div className="text-3xl font-serif italic mb-8">MD</div>
            <p className="text-sm opacity-40 leading-relaxed font-light">
              {t('footer.desc')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
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
                <li>intelligence@md.com</li>
                <li>+82 2 000 0000</li>
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
