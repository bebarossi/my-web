import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { modules, moduleData } from '../data/vsmeData';
import {
  ArrowRight, Shield, FileText, ChevronRight, Target, Leaf,
  ClipboardList, Upload, Bot, Phone, BookOpen, Handshake,
} from 'lucide-react';
import { useState } from 'react';
import VsmeWidget from '../sections/vsme/VsmeWidget';

/* ═══════════════════════════════════════════════════════════════
   Sfondo scroll-driven con blob verdi — identico alla home,
   sfuma a bianco oltre il 55% dello scroll
═══════════════════════════════════════════════════════════════ */
const PageBackground = () => {
  const { scrollYProgress } = useScroll();

  const bg = useTransform(
    scrollYProgress,
    [0, 0.25, 0.45, 0.60, 1],
    [
      'linear-gradient(180deg, rgba(232,245,233,0.55) 0%, rgba(255,255,255,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(241,248,241,0.90) 100%)',
      'linear-gradient(180deg, rgba(241,248,241,0.80) 0%, rgba(255,255,255,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)',
    ]
  );

  /* Blob 1 — verde scuro */
  const b1x = useTransform(scrollYProgress, [0, 1], ['4%',  '62%']);
  const b1y = useTransform(scrollYProgress, [0, 1], ['-2%', '58%']);
  const b1s = useTransform(scrollYProgress, [0, 0.45, 1], [1, 1.65, 0.90]);
  const b1o = useTransform(scrollYProgress, [0, 0.20, 0.45, 0.60, 1], [0.22, 0.30, 0.18, 0.04, 0]);

  /* Blob 2 — verde medio */
  const b2x = useTransform(scrollYProgress, [0, 1], ['76%', '14%']);
  const b2y = useTransform(scrollYProgress, [0, 1], ['8%',  '53%']);
  const b2s = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.45, 1.75]);
  const b2o = useTransform(scrollYProgress, [0, 0.25, 0.45, 0.60, 1], [0.16, 0.24, 0.14, 0.03, 0]);

  /* Blob 3 — verde lime */
  const b3x = useTransform(scrollYProgress, [0, 1], ['38%', '77%']);
  const b3y = useTransform(scrollYProgress, [0, 1], ['67%', '11%']);
  const b3s = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.72, 1.45]);
  const b3o = useTransform(scrollYProgress, [0, 0.35, 0.50, 0.62, 1], [0.11, 0.18, 0.10, 0.02, 0]);

  /* Blob 4 — verde chiaro */
  const b4x = useTransform(scrollYProgress, [0, 1], ['52%', '28%']);
  const b4y = useTransform(scrollYProgress, [0, 1], ['29%', '73%']);
  const b4s = useTransform(scrollYProgress, [0, 0.5, 1], [0.76, 1.24, 0.60]);
  const b4o = useTransform(scrollYProgress, [0, 0.30, 0.48, 0.60, 1], [0.08, 0.15, 0.08, 0.02, 0]);

  const gridO = useTransform(scrollYProgress, [0, 0.40, 0.58, 1], [0.04, 0.022, 0.005, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <motion.div className="absolute inset-0" style={{ background: bg }} />

      <motion.div className="absolute w-[800px] h-[800px] rounded-full"
        style={{ left: b1x, top: b1y, scale: b1s, opacity: b1o,
          background: 'radial-gradient(circle, #2e7d32, transparent 70%)',
          filter: 'blur(95px)', translateX: '-50%', translateY: '-50%' }} />

      <motion.div className="absolute w-[660px] h-[660px] rounded-full"
        style={{ left: b2x, top: b2y, scale: b2s, opacity: b2o,
          background: 'radial-gradient(circle, #4caf50, transparent 70%)',
          filter: 'blur(115px)', translateX: '-50%', translateY: '-50%' }} />

      <motion.div className="absolute w-[510px] h-[510px] rounded-full"
        style={{ left: b3x, top: b3y, scale: b3s, opacity: b3o,
          background: 'radial-gradient(circle, #34c759, transparent 70%)',
          filter: 'blur(75px)', translateX: '-50%', translateY: '-50%' }} />

      <motion.div className="absolute w-[360px] h-[360px] rounded-full"
        style={{ left: b4x, top: b4y, scale: b4s, opacity: b4o,
          background: 'radial-gradient(circle, #a5d6a7, transparent 70%)',
          filter: 'blur(65px)', translateX: '-50%', translateY: '-50%' }} />

      <motion.div className="absolute inset-0"
        style={{ opacity: gridO,
          backgroundImage: 'radial-gradient(circle, rgba(46,125,50,0.38) 1px, transparent 1px)',
          backgroundSize: '40px 40px' }} />
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   Varianti condivise
═══════════════════════════════════════════════════════════════ */
const cardVariants = {
  hidden:  { opacity: 0, y: 70, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.88, delay: i * 0.20, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

/* Titolo con line-reveal riutilizzabile */
const SectionHeading = ({ title, subtitle, margin = '-80px' }) => (
  <div className="text-center mb-10 sm:mb-14">
    <div className="overflow-hidden mb-3 sm:mb-4">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-dark"
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin }}
        transition={{ duration: 0.85, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {title}
      </motion.h2>
    </div>
    {subtitle && (
      <motion.p
        className="text-muted text-base sm:text-lg max-w-xl mx-auto"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   Hero
═══════════════════════════════════════════════════════════════ */
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y       = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.80], [1, 0]);

  return (
    <section ref={ref} className="pt-32 pb-16 sm:pt-40 sm:pb-20 relative overflow-hidden min-h-[60vh] flex items-center">
      <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 w-full">

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <Leaf className="w-4 h-4 text-accent" />
          <span className="text-sm font-semibold text-accent">Sostenibilità AI</span>
        </motion.div>

        {/* Titolo — line-reveal */}
        <div className="overflow-hidden mb-5">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-dark leading-[1.05]"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.80, delay: 0.18, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Report VSME ESG
          </motion.h1>
        </div>

        {/* Tagline principale */}
        <motion.p
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.42, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Crea il tuo bilancio di sostenibilità VSME in modo semplice, veloce e conforme alle direttive europee.
        </motion.p>

        {/* Tagline secondaria */}
        <motion.p
          className="text-base text-muted max-w-xl mx-auto mb-9"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.70, delay: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Tecnologia AI proprietaria per PMI innovative.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.70, delay: 0.68, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.a
            href="https://www.econova.ai/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accentDark transition-all shadow-lg shadow-accent/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Inizia il Tuo Percorso <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#dashboard"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-dark/10 text-dark font-semibold rounded-full hover:border-accent/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Scopri Come Funziona
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════
   Dashboard Live
═══════════════════════════════════════════════════════════════ */
const DashboardSection = () => (
  <section id="dashboard" className="py-16 sm:py-24 relative overflow-hidden">

    {/* Glow ambientale */}
    <motion.div
      className="absolute inset-0 pointer-events-none -z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.6, ease: 'easeOut' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110%] h-full"
        style={{ background: 'radial-gradient(ellipse at 50% 20%, rgba(46,125,50,0.07) 0%, transparent 65%)' }} />
    </motion.div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

      {/* Heading */}
      <motion.div className="mb-8 sm:mb-12 text-center"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.01 }}
      >
        <div className="overflow-hidden mb-2">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark"
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.25, 0.4, 0.25, 1] }}
          >
            La Piattaforma
          </motion.h2>
        </div>
        <motion.p
          className="text-muted text-base sm:text-lg"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Sostenibilità e compliance ESG semplificate
        </motion.p>
      </motion.div>

      {/* New faithful VSME widget */}
      <VsmeWidget />
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   Percorso in 6 Step
═══════════════════════════════════════════════════════════════ */
const steps = [
  { icon: ClipboardList, number: '01', title: 'Firma Contratto',            description: 'Scegli il piano più adatto alle tue esigenze e sottoscrivi il contratto. Il nostro team ti contatterà per avviare il processo.' },
  { icon: FileText,      number: '02', title: 'Excel Strutturato',          description: 'Riceverai il nostro foglio Excel proprietario, ottimizzato per raccogliere i dati essenziali ESG in modo chiaro e guidato.' },
  { icon: Upload,        number: '03', title: 'Invio Dati',                 description: 'Invia il foglio Excel compilato al nostro team tramite PEC o email. Tutti i dati vengono trattati nel pieno rispetto del GDPR.' },
  { icon: Bot,           number: '04', title: 'Elaborazione AI',            description: 'I nostri modelli AI, allenati su centinaia di report VSME reali, generano automaticamente un report completo e conforme.' },
  { icon: Phone,         number: '05', title: 'Revisione & Personalizzazione', description: 'Call dedicata per rivedere il report, aggiungere contenuti specifici e assicurare che rispecchi la tua realtà aziendale.' },
  { icon: BookOpen,      number: '06', title: 'Pubblicazione',              description: 'Ricevi il bilancio di sostenibilità finale, pronto per essere pubblicato e condiviso con stakeholder e finanziatori.' },
];

const ProcessSection = () => (
  <section className="py-16 sm:py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        title="Il Tuo Percorso in 6 Step"
        subtitle="Dalla firma del contratto alla pubblicazione: un processo semplice e guidato"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={i}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass-card-strong rounded-2xl p-8 border border-black/5 relative overflow-hidden hover:border-accent/20 transition-colors duration-300 group"
          >
            <motion.div
              className="absolute top-4 right-4 text-5xl font-black text-accent/10 group-hover:text-accent/20 transition-colors duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
            >
              {s.number}
            </motion.div>
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-accent/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-5"
                whileHover={{ scale: 1.12, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 280 }}
              >
                <s.icon className="w-7 h-7 text-accent" />
              </motion.div>
              <h3 className="text-xl font-bold text-dark mb-3">{s.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   Pricing
═══════════════════════════════════════════════════════════════ */
const PricingSection = () => (
  <section className="py-16 sm:py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        title="Scegli il Tuo Piano"
        subtitle="Prezzi trasparenti e competitivi per ogni esigenza aziendale"
      />
      <div className="grid md:grid-cols-3 gap-6">

        {/* VSME Basic */}
        <motion.div
          variants={cardVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-50px' }} custom={0}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="glass-card-strong rounded-2xl p-8 border border-black/5 relative overflow-hidden group"
        >
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-accent/6 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-dark mb-2">VSME Basic Report</h3>
            <p className="text-muted text-sm mb-6">Report base annuale per iniziare il tuo percorso di sostenibilità</p>
            <ul className="space-y-3 text-sm text-muted mb-8">
              <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Assessment iniziale</li>
              <li className="flex items-start gap-2"><FileText className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Report Basic 2 anni</li>
            </ul>
            <motion.a
              href="https://www.econova.ai/contact"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-dark/10 text-dark font-semibold rounded-full hover:border-accent/30 transition-all text-sm"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Richiedi Info <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Comprehensive */}
        <motion.div
          variants={cardVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-50px' }} custom={1}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="glass-card-strong rounded-2xl p-8 border border-black/5 relative overflow-hidden group"
        >
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-accent/6 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-dark mb-2">Modulo Comprehensive</h3>
            <p className="text-muted text-sm mb-6">Modulo aggiuntivo narrativo per chi ha già il report Basic</p>
            <ul className="space-y-3 text-sm text-muted mb-8">
              <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Modulo Comprehensive 1 anno</li>
              <li className="flex items-start gap-2"><FileText className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Richiede Basic Report</li>
            </ul>
            <motion.a
              href="https://www.econova.ai/contact"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-dark/10 text-dark font-semibold rounded-full hover:border-accent/30 transition-all text-sm"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Richiedi Info <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Pacchetto 2 Anni — evidenziato */}
        <motion.div
          variants={cardVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-50px' }} custom={2}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="rounded-2xl p-8 border-2 border-accent bg-accent/5 relative overflow-hidden group"
        >
          <div className="absolute top-3 right-3 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">PIÙ SCELTO</div>
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-accent/15 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-dark mb-2">Pacchetto 2 Anni</h3>
            <p className="text-muted text-sm mb-6">Pacchetto completo con moduli Basic e Comprehensive</p>
            <ul className="space-y-3 text-sm text-muted mb-8">
              <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Assessment iniziale</li>
              <li className="flex items-start gap-2"><FileText className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Basic + Comprehensive 2 anni</li>
            </ul>
            <motion.a
              href="https://www.econova.ai/contact"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accentDark transition-all text-sm shadow-lg shadow-accent/25"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Richiedi Info <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   Partnership
═══════════════════════════════════════════════════════════════ */
const PartnershipSection = () => (
  <section className="py-16 sm:py-24 relative">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

      <motion.div
        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.25, 0.4, 0.25, 1] }}
        whileHover={{ scale: 1.12, rotate: 6 }}
      >
        <Handshake className="w-8 h-8 text-accent" />
      </motion.div>

      <div className="overflow-hidden mb-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-dark"
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.10, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Partnership Strategica per il Report CSRD
        </motion.h2>
      </div>

      <motion.p
        className="text-muted text-lg max-w-2xl mx-auto mb-6"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.28, ease: [0.25, 0.4, 0.25, 1] }}
      >
        ECONOVA-AI collabora con MESA GROUP, classificato 8° al mondo per expertise in sustainability reporting.
      </motion.p>

      <motion.p
        className="text-muted max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.38, ease: [0.25, 0.4, 0.25, 1] }}
      >
        Questa partnership ci permette di offrire soluzioni VSME per PMI e soluzioni avanzate di rendicontazione CSRD per aziende che necessitano di compliance con la Corporate Sustainability Reporting Directive.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-3 justify-center"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: 0.48, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {['VSME Reports', 'CSRD Reports', 'ESG Strategy'].map((tag) => (
          <span key={tag} className="px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full">
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   CTA Finale
═══════════════════════════════════════════════════════════════ */
const CtaSection = () => (
  <section className="py-16 sm:py-24 relative">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
      <div className="overflow-hidden mb-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-dark"
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Inizia il Tuo Percorso di Sostenibilità
        </motion.h2>
      </div>
      <motion.p
        className="text-muted text-lg mb-9 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
      >
        Trasforma i tuoi dati in un report VSME completo e conforme. Tecnologia AI, prezzi competitivi, supporto dedicato.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <motion.a
          href="https://www.econova.ai/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accentDark transition-all shadow-lg shadow-accent/25"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Contattaci Ora <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   Page
═══════════════════════════════════════════════════════════════ */
const VsmeReportPage = () => (
  <>
    <PageBackground />
    <header className="relative z-20"><Navbar /></header>
    <main className="relative z-10">
      <HeroSection />
      <DashboardSection />
      <ProcessSection />
      <PricingSection />
      <PartnershipSection />
      <CtaSection />
    </main>
    <div className="relative z-10 bg-white"><Footer /></div>
  </>
);

export default VsmeReportPage;
