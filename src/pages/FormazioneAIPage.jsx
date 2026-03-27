import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  GraduationCap, ArrowRight, Users, Clock, Monitor,
  Check, Target, TrendingUp, Shield, Star,
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CTA_DEMO_URL } from '../data/navigation';

/* ═══════════════════════════════════════════════════════════════
   Palette bordeaux
   Main : #7c1d2e   Dark : #5c1020   Light : #b03050
   Blob4: #dba8b0   Bg   : rgba(252,228,232,…)
═══════════════════════════════════════════════════════════════ */
const B  = '#7c1d2e';   // main
const BD = '#5c1020';   // dark / hover
const BL = '#b03050';   // gradient end
const B2 = '#9b2335';   // blob 2
const B3 = '#c44d6a';   // blob 3
const B4 = '#dba8b0';   // blob 4

/* ═══════════════════════════════════════════════════════════════
   Sfondo scroll-driven bordeaux — sfuma a bianco dopo il 55%
═══════════════════════════════════════════════════════════════ */
const PageBackground = () => {
  const { scrollYProgress } = useScroll();

  const bg = useTransform(
    scrollYProgress,
    [0, 0.25, 0.45, 0.60, 1],
    [
      'linear-gradient(180deg, rgba(252,228,232,0.55) 0%, rgba(255,255,255,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(252,228,232,0.45) 100%)',
      'linear-gradient(180deg, rgba(252,228,232,0.35) 0%, rgba(255,255,255,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)',
    ]
  );

  const b1x = useTransform(scrollYProgress, [0, 1], ['4%',  '62%']);
  const b1y = useTransform(scrollYProgress, [0, 1], ['-2%', '58%']);
  const b1s = useTransform(scrollYProgress, [0, 0.45, 1], [1, 1.65, 0.90]);
  const b1o = useTransform(scrollYProgress, [0, 0.20, 0.45, 0.60, 1], [0.22, 0.30, 0.18, 0.04, 0]);

  const b2x = useTransform(scrollYProgress, [0, 1], ['76%', '14%']);
  const b2y = useTransform(scrollYProgress, [0, 1], ['8%',  '53%']);
  const b2s = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.45, 1.75]);
  const b2o = useTransform(scrollYProgress, [0, 0.25, 0.45, 0.60, 1], [0.16, 0.24, 0.14, 0.03, 0]);

  const b3x = useTransform(scrollYProgress, [0, 1], ['38%', '77%']);
  const b3y = useTransform(scrollYProgress, [0, 1], ['67%', '11%']);
  const b3s = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.72, 1.45]);
  const b3o = useTransform(scrollYProgress, [0, 0.35, 0.50, 0.62, 1], [0.11, 0.18, 0.10, 0.02, 0]);

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
          background: `radial-gradient(circle, ${B}, transparent 70%)`,
          filter: 'blur(95px)', translateX: '-50%', translateY: '-50%' }} />

      <motion.div className="absolute w-[660px] h-[660px] rounded-full"
        style={{ left: b2x, top: b2y, scale: b2s, opacity: b2o,
          background: `radial-gradient(circle, ${B2}, transparent 70%)`,
          filter: 'blur(115px)', translateX: '-50%', translateY: '-50%' }} />

      <motion.div className="absolute w-[510px] h-[510px] rounded-full"
        style={{ left: b3x, top: b3y, scale: b3s, opacity: b3o,
          background: `radial-gradient(circle, ${B3}, transparent 70%)`,
          filter: 'blur(75px)', translateX: '-50%', translateY: '-50%' }} />

      <motion.div className="absolute w-[360px] h-[360px] rounded-full"
        style={{ left: b4x, top: b4y, scale: b4s, opacity: b4o,
          background: `radial-gradient(circle, ${B4}, transparent 70%)`,
          filter: 'blur(65px)', translateX: '-50%', translateY: '-50%' }} />

      <motion.div className="absolute inset-0"
        style={{ opacity: gridO,
          backgroundImage: `radial-gradient(circle, rgba(124,29,46,0.35) 1px, transparent 1px)`,
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

const SectionHeading = ({ title, subtitle, margin = '-80px' }) => (
  <div className="text-center mb-10 sm:mb-14">
    <div className="overflow-hidden mb-3 sm:mb-4">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark"
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
        className="text-muted text-base sm:text-lg max-w-2xl mx-auto"
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
const titleWords = [
  { text: 'Formazione', cls: '',  style: {} },
  { text: 'AI',         cls: '',  style: {} },
  { text: 'per',        cls: '',  style: {} },
  null,
  { text: 'Leader',     cls: '',  style: { color: B } },
  { text: 'del',        cls: '',  style: { color: B } },
  { text: 'Futuro',     cls: '',  style: { color: B } },
];

const FormazioneHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y       = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.80], [1, 0]);

  return (
    <section ref={ref} className="min-h-[85dvh] flex items-center relative overflow-hidden pt-20">
      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: `rgba(124,29,46,0.10)`, border: `1px solid rgba(124,29,46,0.20)` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <GraduationCap className="w-4 h-4" style={{ color: B }} />
            <span className="text-xs font-semibold" style={{ color: B }}>Formazione</span>
          </motion.div>

          {/* Titolo word-by-word */}
          <h1 className="text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.08] font-extrabold tracking-tight text-dark mb-4 sm:mb-6">
            {titleWords.map((item, i) => {
              if (item === null) return <br key="br" className="hidden lg:block" />;
              return (
                <span key={i} className="inline-block overflow-hidden" style={{ marginRight: '0.26em' }}>
                  <motion.span
                    className={`inline-block ${item.cls}`}
                    style={item.style}
                    initial={{ y: '115%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.72, delay: 0.08 + i * 0.09, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    {item.text}
                  </motion.span>
                </span>
              );
            })}
          </h1>

          {/* Sottotitolo */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.76, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Trasforma la tua azienda con strategie AI concrete. Automatizza processi, riduci costi operativi e mantieni il vantaggio competitivo in un mercato che non aspetta.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.70, delay: 0.90, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.a
              href={CTA_DEMO_URL}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-all text-base text-center"
              style={{ backgroundColor: B, boxShadow: `0 8px 24px rgba(124,29,46,0.28)` }}
              whileHover={{ scale: 1.05, backgroundColor: BD }}
              whileTap={{ scale: 0.98 }}
            >
              Richiedi Consulenza Gratuita <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#pacchetti"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white font-semibold rounded-full border border-black/6 hover:shadow-card transition-all text-base text-center text-dark"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Scopri i Pacchetti
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.70, delay: 1.05, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {[
              { Icon: Users,   val: '2+',   label: 'Aziende Formate' },
              { Icon: Clock,   val: '12-40h', label: 'Ore di Formazione' },
              { Icon: Monitor, val: '3',     label: 'Modalità Disponibili' },
            ].map(({ Icon, val, label }, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Icon className="w-4 h-4" style={{ color: B }} />
                  <span className="text-2xl sm:text-3xl font-extrabold text-dark">{val}</span>
                </div>
                <p className="text-xs text-muted">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════
   Il Nostro Metodo
═══════════════════════════════════════════════════════════════ */
const MetodoSection = () => (
  <section className="py-16 sm:py-24 md:py-28 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <SectionHeading
        title="Il Nostro Metodo"
        subtitle="Un approccio strutturato che converte la teoria in vantaggio competitivo immediato."
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          className="glass-card-strong rounded-3xl p-8 sm:p-10 shadow-glass-xl relative overflow-hidden"
          style={{ border: `1px solid rgba(124,29,46,0.20)` }}
          initial={{ opacity: 0, y: 65, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.95, delay: 0.18, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl"
            style={{ background: `rgba(124,29,46,0.10)` }} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
              style={{ backgroundColor: `rgba(124,29,46,0.10)`, border: `1px solid rgba(124,29,46,0.20)` }}
            >
              <Target className="w-4 h-4" style={{ color: B }} />
              <span className="text-xs font-semibold" style={{ color: B }}>Blueprint Strategico</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4">Framework Operativo</h3>

            <div className="space-y-4">
              {[
                { num: '01', title: 'Assessment',               desc: 'Analizziamo la tua azienda per identificare le aree ad alto impatto per l\'AI.' },
                { num: '02', title: 'Formazione su Misura',     desc: 'Moduli personalizzati in base al livello del team e agli obiettivi aziendali.' },
                { num: '03', title: 'Implementazione Pratica',  desc: 'Esercitazioni hands-on con strumenti AI reali sui tuoi casi d\'uso.' },
                { num: '04', title: 'Follow-up & Supporto',     desc: 'Monitoraggio dei risultati e sessioni di affinamento post-formazione.' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-white/60 rounded-xl border border-black/5"
                  initial={{ opacity: 0, x: -22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.55, delay: i * 0.10, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <span
                    className="text-xs font-mono font-bold px-2 py-1 rounded-lg flex-shrink-0"
                    style={{ color: B, backgroundColor: `rgba(124,29,46,0.10)` }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h4 className="font-semibold text-dark text-sm">{step.title}</h4>
                    <p className="text-sm text-muted mt-0.5">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   Pacchetti Formazione
═══════════════════════════════════════════════════════════════ */
const packages = [
  {
    badge: 'Starter', name: 'Essential', hours: '12h', highlight: false,
    desc: 'Fondamenti AI per imprenditori. Comprendi opportunità e rischi.',
    features: [
      'Introduzione all\'AI e modelli LLM',
      'Casi d\'uso pratici per il tuo settore',
      'Prompt engineering per non tecnici',
      'Identificazione quick wins',
      'Modalità: Online / Presenza / Ibrida',
    ],
  },
  {
    badge: 'Più Richiesto', name: 'Professional', hours: '24h', highlight: true,
    desc: 'Implementazione strategica AI. Automazione processi.',
    features: [
      'Tutto incluso nel pacchetto Essential',
      'Automazione workflow con AI agents',
      'Integrazione AI nei sistemi aziendali',
      'Analytics e misurazione performance',
      'Strategia personalizzata',
    ],
  },
  {
    badge: 'Advanced', name: 'Executive', hours: '40h', highlight: false,
    desc: 'Trasformazione digitale completa. AI governance e cybersecurity.',
    features: [
      'Tutto incluso nel pacchetto Professional',
      'AI Governance e framework etici',
      'Cybersecurity per sistemi AI',
      'Compliance (AI Act EU)',
      'Sessioni 1-to-1 con Advisor',
    ],
  },
];

const PacchettiSection = () => (
  <section id="pacchetti" className="py-16 sm:py-24 md:py-28 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <SectionHeading
        title="Pacchetti Formazione"
        subtitle="Scegli il percorso più adatto alla tua azienda"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={i}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass-card-strong rounded-3xl p-6 sm:p-8 transition-colors duration-300 hover:shadow-glass-xl flex flex-col relative overflow-hidden group"
            style={{
              border: pkg.highlight
                ? `1px solid rgba(124,29,46,0.30)`
                : '1px solid rgba(0,0,0,0.05)',
              boxShadow: pkg.highlight
                ? `0 0 0 2px rgba(124,29,46,0.10), 0 16px 48px rgba(0,0,0,0.08)`
                : undefined,
            }}
          >
            {/* Top glow hover */}
            <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `rgba(124,29,46,0.08)` }} />

            {/* Banner "Più Richiesto" */}
            {pkg.highlight && (
              <div className="absolute top-0 left-0 right-0 py-1.5 text-center rounded-t-3xl"
                style={{ background: `linear-gradient(90deg, ${B}, ${BL})` }}>
                <div className="flex items-center justify-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{pkg.badge}</span>
                </div>
              </div>
            )}

            <div className={pkg.highlight ? 'mt-6 relative z-10' : 'relative z-10'}>
              {!pkg.highlight && (
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{ backgroundColor: `rgba(124,29,46,0.10)`, border: `1px solid rgba(124,29,46,0.20)`, color: B }}
                >
                  {pkg.badge}
                </span>
              )}
              <h3 className="text-2xl sm:text-3xl font-bold text-dark mt-2 mb-3">{pkg.name}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{pkg.desc}</p>
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-4 h-4" style={{ color: B }} />
                <span className="text-sm font-semibold text-dark">{pkg.hours} di formazione</span>
              </div>
            </div>

            <div className="space-y-3 mb-8 flex-1 relative z-10">
              {pkg.features.map((feature, j) => (
                <div key={j} className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: B }} />
                  <span className="text-sm text-dark">{feature}</span>
                </div>
              ))}
            </div>

            <motion.a
              href={CTA_DEMO_URL}
              className="text-center font-semibold py-3 px-6 rounded-full transition-all duration-300 relative z-10"
              style={pkg.highlight
                ? { backgroundColor: B, color: '#fff', boxShadow: `0 8px 20px rgba(124,29,46,0.28)` }
                : { border: `2px solid ${B}`, color: B }
              }
              whileHover={pkg.highlight
                ? { scale: 1.04, backgroundColor: BD }
                : { scale: 1.04, backgroundColor: B, color: '#fff' }
              }
              whileTap={{ scale: 0.98 }}
            >
              Richiedi Informazioni
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   Perché Scegliere Noi
═══════════════════════════════════════════════════════════════ */
const reasons = [
  { icon: Target,    title: 'Focus sul Business', desc: 'Ogni modulo è progettato per generare valore immediato.' },
  { icon: TrendingUp, title: 'ROI Misurabile',     desc: 'Impara a quantificare i risparmi e l\'incremento di produttività.' },
  { icon: Shield,    title: 'Sicurezza First',     desc: 'Ti guidiamo nell\'implementazione di AI sicura e conforme alle norme EU.' },
];

const WhyUsSection = () => (
  <section className="py-16 sm:py-24 md:py-28 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <SectionHeading title="Perché Scegliere Noi" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {reasons.map((reason, i) => {
          const ReasonIcon = reason.icon;
          return (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 transition-colors duration-300 hover:shadow-glass-lg relative overflow-hidden group"
              style={{ border: '1px solid rgba(0,0,0,0.05)' }}
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `rgba(124,29,46,0.08)` }} />

              <motion.div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative z-10"
                style={{ backgroundColor: `rgba(124,29,46,0.10)` }}
                whileHover={{ scale: 1.12, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 280 }}
              >
                <ReasonIcon className="w-7 h-7" style={{ color: B }} />
              </motion.div>
              <h3 className="text-xl font-bold text-dark mb-3 relative z-10">{reason.title}</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed relative z-10">{reason.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   CTA Finale
═══════════════════════════════════════════════════════════════ */
const FormazioneCTA = () => (
  <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">

      <div className="overflow-hidden mb-4 sm:mb-6">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight"
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Pronto a Trasformare la Tua Azienda?
        </motion.h2>
      </div>

      <motion.p
        className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-9 sm:mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.20, ease: [0.25, 0.4, 0.25, 1] }}
      >
        Inizia con una consulenza gratuita. Analizziamo insieme le tue esigenze.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <motion.a
          href={CTA_DEMO_URL}
          className="inline-flex items-center justify-center gap-2 px-8 py-3 text-white font-semibold rounded-full transition-all text-base"
          style={{ backgroundColor: B, boxShadow: `0 8px 24px rgba(124,29,46,0.28)` }}
          whileHover={{ scale: 1.05, backgroundColor: BD }}
          whileTap={{ scale: 0.98 }}
        >
          Prenota Consulenza Gratuita <ArrowRight className="w-5 h-5" />
        </motion.a>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-2.5 rounded-full font-semibold transition-all text-base border-2"
            style={{ borderColor: B, color: B }}
          >
            Torna alla Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   Page
═══════════════════════════════════════════════════════════════ */
const FormazioneAIPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <PageBackground />
      <header className="relative z-20"><Navbar /></header>
      <main className="relative z-10">
        <FormazioneHero />
        <MetodoSection />
        <PacchettiSection />
        <WhyUsSection />
        <FormazioneCTA />
      </main>
      <div className="relative z-10 bg-white"><Footer /></div>
    </>
  );
};

export default FormazioneAIPage;
