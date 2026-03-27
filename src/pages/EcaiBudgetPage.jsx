import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BudgetDashboard from '../sections/BudgetDashboard/BudgetDashboard';
import { ArrowRight, AlertTriangle, Clock, EyeOff, Settings, Upload, BarChart3, Users, DollarSign } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   Sfondo scroll-driven con blob indigo — analogo al ScrollBackground
   della home ma con palette blu/indigo
═══════════════════════════════════════════════════════════════ */
const PageBackground = () => {
  const { scrollYProgress } = useScroll();

  // Il gradiente sfuma verso bianco puro oltre il 55% dello scroll
  const bg = useTransform(
    scrollYProgress,
    [0, 0.25, 0.45, 0.60, 1],
    [
      'linear-gradient(180deg, rgba(238,242,255,0.60) 0%, rgba(255,255,255,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(238,242,255,0.50) 100%)',
      'linear-gradient(180deg, rgba(238,242,255,0.45) 0%, rgba(255,255,255,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)',
    ]
  );

  /* Blob 1 — indigo scuro: scompare oltre il 55% */
  const b1x = useTransform(scrollYProgress, [0, 1], ['3%',  '63%']);
  const b1y = useTransform(scrollYProgress, [0, 1], ['-3%', '57%']);
  const b1s = useTransform(scrollYProgress, [0, 0.45, 1], [1,    1.65, 0.88]);
  const b1o = useTransform(scrollYProgress, [0, 0.20, 0.45, 0.60, 1], [0.22, 0.30, 0.18, 0.04, 0]);

  /* Blob 2 — indigo medio */
  const b2x = useTransform(scrollYProgress, [0, 1], ['76%', '13%']);
  const b2y = useTransform(scrollYProgress, [0, 1], ['8%',  '53%']);
  const b2s = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.45, 1.75]);
  const b2o = useTransform(scrollYProgress, [0, 0.25, 0.45, 0.60, 1], [0.16, 0.24, 0.14, 0.03, 0]);

  /* Blob 3 — violet accent */
  const b3x = useTransform(scrollYProgress, [0, 1], ['39%', '77%']);
  const b3y = useTransform(scrollYProgress, [0, 1], ['67%', '11%']);
  const b3s = useTransform(scrollYProgress, [0, 0.5, 1], [1,    0.72, 1.45]);
  const b3o = useTransform(scrollYProgress, [0, 0.35, 0.50, 0.62, 1], [0.11, 0.18, 0.10, 0.02, 0]);

  /* Blob 4 — lavanda chiaro */
  const b4x = useTransform(scrollYProgress, [0, 1], ['52%', '27%']);
  const b4y = useTransform(scrollYProgress, [0, 1], ['29%', '73%']);
  const b4s = useTransform(scrollYProgress, [0, 0.5, 1], [0.76, 1.24, 0.60]);
  const b4o = useTransform(scrollYProgress, [0, 0.30, 0.48, 0.60, 1], [0.08, 0.15, 0.08, 0.02, 0]);

  const gridO = useTransform(scrollYProgress, [0, 0.40, 0.58, 1], [0.04, 0.022, 0.005, 0]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <motion.div className="absolute inset-0" style={{ background: bg }} />

      {/* Blob 1 */}
      <motion.div className="absolute w-[800px] h-[800px] rounded-full"
        style={{ left: b1x, top: b1y, scale: b1s, opacity: b1o,
          background: 'radial-gradient(circle, #4f46e5, transparent 70%)',
          filter: 'blur(95px)', translateX: '-50%', translateY: '-50%' }}
      />
      {/* Blob 2 */}
      <motion.div className="absolute w-[660px] h-[660px] rounded-full"
        style={{ left: b2x, top: b2y, scale: b2s, opacity: b2o,
          background: 'radial-gradient(circle, #6366f1, transparent 70%)',
          filter: 'blur(115px)', translateX: '-50%', translateY: '-50%' }}
      />
      {/* Blob 3 */}
      <motion.div className="absolute w-[510px] h-[510px] rounded-full"
        style={{ left: b3x, top: b3y, scale: b3s, opacity: b3o,
          background: 'radial-gradient(circle, #818cf8, transparent 70%)',
          filter: 'blur(75px)', translateX: '-50%', translateY: '-50%' }}
      />
      {/* Blob 4 */}
      <motion.div className="absolute w-[360px] h-[360px] rounded-full"
        style={{ left: b4x, top: b4y, scale: b4s, opacity: b4o,
          background: 'radial-gradient(circle, #a5b4fc, transparent 70%)',
          filter: 'blur(65px)', translateX: '-50%', translateY: '-50%' }}
      />

      {/* Dot grid */}
      <motion.div className="absolute inset-0"
        style={{ opacity: gridO,
          backgroundImage: 'radial-gradient(circle, rgba(79,70,229,0.35) 1px, transparent 1px)',
          backgroundSize: '40px 40px' }}
      />
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
const SectionHeading = ({ title, subtitle, center = true, margin = '-80px' }) => (
  <div className={`mb-10 sm:mb-14 ${center ? 'text-center' : ''}`}>
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
        className={`text-muted text-base sm:text-lg ${center ? 'max-w-xl mx-auto' : 'max-w-xl'}`}
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
const heroWords = [
  { text: 'ECAI-Budget', cls: '' },
];

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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100/80 border border-indigo-500/30 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <BarChart3 className="w-4 h-4 text-indigo-600" />
          <span className="text-sm font-semibold text-indigo-600">Controllo di Gestione AI</span>
        </motion.div>

        {/* Titolo — line-reveal */}
        <div className="overflow-hidden mb-5">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-dark leading-[1.05]"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.80, delay: 0.18, ease: [0.25, 0.4, 0.25, 1] }}
          >
            ECAI-Budget
          </motion.h1>
        </div>

        {/* Tagline principale */}
        <motion.p
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.42, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Trasforma i tuoi dati contabili in decisioni strategiche.
        </motion.p>

        {/* Tagline secondaria */}
        <motion.p
          className="text-base text-muted max-w-xl mx-auto mb-9"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.70, delay: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Risparmia fino al 91% rispetto a un controller interno. Stop alla gestione "a vista".
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
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Prenota Demo (25 min) <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#budget"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-dark/10 text-dark font-semibold rounded-full hover:border-indigo-500/40 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Esplora la Dashboard
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════
   Problemi
═══════════════════════════════════════════════════════════════ */
const problems = [
  { icon: EyeOff,    title: 'Gestione "A Vista"', description: 'Decisioni basate su intuito e sensazioni, non su dati certi. Rischio di errore elevatissimo.' },
  { icon: DollarSign, title: 'Margini Ignoti',    description: 'Fatturato in crescita ma utili fermi? Impossibile capire quale linea di business sta bruciando cassa.' },
  { icon: Clock,     title: 'Dati in Ritardo',   description: 'Report mensili pronti dopo 20 giorni dalla chiusura. Troppo tardi per agire e correggere la rotta.' },
];

const ProblemsSection = () => (
  <section className="py-16 sm:py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        title="La situazione attuale"
        subtitle="I problemi che affrontano ogni giorno le PMI italiane"
      />
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={i}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass-card-strong rounded-2xl p-8 border border-black/5 text-center hover:border-red-200 transition-colors duration-300 relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-indigo-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-50 mb-5 relative z-10"
              whileHover={{ scale: 1.12, rotate: 6 }}
              transition={{ type: 'spring', stiffness: 280 }}
            >
              <p.icon className="w-7 h-7 text-red-500" />
            </motion.div>
            <h3 className="text-xl font-bold text-dark mb-3 relative z-10">{p.title}</h3>
            <p className="text-muted leading-relaxed relative z-10">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   Metodo 3 Step
═══════════════════════════════════════════════════════════════ */
const steps = [
  { icon: Settings, number: '01', title: 'Consulenza & Setup',        description: 'Creiamo il tuo modello di controllo industriale con riclassificazione su misura.' },
  { icon: Upload,   number: '02', title: 'Ingestion AI',              description: "L'AI ingerisce i tuoi Excel e li mappa automaticamente sui centri di costo." },
  { icon: BarChart3, number: '03', title: 'Controllo in Tempo Reale', description: 'Dashboard e analisi live. Monitora i margini e simula scenari futuri.' },
];

const MethodSection = () => (
  <section className="py-16 sm:py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        title="Il Metodo ECONOVA-AI"
        subtitle="Un processo collaudato in 3 step"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={i}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass-card-strong rounded-2xl p-8 border border-black/5 relative overflow-hidden hover:border-indigo-500/30 transition-colors duration-300 group"
          >
            {/* Step number watermark */}
            <motion.div
              className="absolute top-4 right-4 text-5xl font-black text-indigo-600/10 group-hover:text-indigo-600/20 transition-colors duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            >
              {s.number}
            </motion.div>
            {/* Glow hover */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-indigo-600/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-100 mb-5"
                whileHover={{ scale: 1.12, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 280 }}
              >
                <s.icon className="w-7 h-7 text-indigo-600" />
              </motion.div>
              <h3 className="text-xl font-bold text-dark mb-3">{s.title}</h3>
              <p className="text-muted leading-relaxed">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   Prezzi
═══════════════════════════════════════════════════════════════ */
const PricingSection = () => (
  <section className="py-16 sm:py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        title="Quanto costa NON avere il controllo?"
        subtitle="Confronto su 3 anni tra le alternative"
      />
      <div className="grid md:grid-cols-3 gap-6">

        {/* Controller Interno */}
        <motion.div
          variants={cardVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-50px' }} custom={0}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="glass-card-strong rounded-2xl p-8 border border-black/5 relative overflow-hidden group"
        >
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-indigo-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-muted" />
              <h3 className="text-lg font-bold text-dark">Controller Interno</h3>
            </div>
            <p className="text-3xl font-bold text-dark mb-1">€186K</p>
            <p className="text-sm text-muted mb-6">Costo su 3 anni</p>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />RAL + contributi + TFR (~60k/anno)</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />Costi occulti (ferie, PC, welfare)</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />Reportistica lenta (15-20 giorni)</li>
            </ul>
          </div>
        </motion.div>

        {/* Consulente Esterno */}
        <motion.div
          variants={cardVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-50px' }} custom={1}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="glass-card-strong rounded-2xl p-8 border border-black/5 relative overflow-hidden group"
        >
          <div className="absolute -top-10 -right-10 w-28 h-28 bg-indigo-600/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-muted" />
              <h3 className="text-lg font-bold text-dark">Consulente Esterno</h3>
            </div>
            <p className="text-3xl font-bold text-dark mb-1">€117K</p>
            <p className="text-sm text-muted mb-6">Costo su 3 anni</p>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />Tariffa oraria alta e ricorrente</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />Dipendenza manuale</li>
              <li className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />Tempi di analisi lunghi</li>
            </ul>
          </div>
        </motion.div>

        {/* ECAI-Budget — evidenziato */}
        <motion.div
          variants={cardVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-50px' }} custom={2}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="rounded-2xl p-8 border-2 border-indigo-600 bg-indigo-600/5 relative overflow-hidden group"
        >
          <div className="absolute top-3 right-3 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">-91%</div>
          {/* Glow speciale */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-indigo-600/15 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-indigo-600" />
              <h3 className="text-lg font-bold text-dark">ECAI-Budget</h3>
            </div>
            <div className="mb-6">
              <p className="text-sm font-semibold text-indigo-600 mb-2">Fase 1: Setup</p>
              <p className="text-sm text-muted mb-3">Una tantum — consulenza 10-40 ore</p>
              <p className="text-sm font-semibold text-indigo-600 mb-2">Fase 2: Licenza</p>
              <p className="text-sm text-muted">€3.5K - 8K / anno — Cloud, AI, Support</p>
            </div>
            <motion.a
              href="https://www.econova.ai/contact"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all text-sm shadow-lg shadow-indigo-600/25"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Richiedi Preventivo <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
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
          Pronto a prendere il controllo?
        </motion.h2>
      </div>
      <motion.p
        className="text-muted text-lg mb-9 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
      >
        Non aspettare il prossimo bilancio per scoprire come va la tua azienda.
        Richiedi un'analisi gratuita dei tuoi attuali processi di controllo.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <motion.a
          href="https://www.econova.ai/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/25"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Prenota Demo (25 min) <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════
   Page
═══════════════════════════════════════════════════════════════ */
const EcaiBudgetPage = () => (
  <>
    <PageBackground />
    <header className="relative z-20"><Navbar /></header>
    <main className="relative z-10">
      <HeroSection />
      <BudgetDashboard />
      <ProblemsSection />
      <MethodSection />
      <PricingSection />
      <CtaSection />
    </main>
    <div className="relative z-10 bg-white"><Footer /></div>
  </>
);

export default EcaiBudgetPage;
