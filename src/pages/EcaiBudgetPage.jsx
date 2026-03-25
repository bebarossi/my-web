import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { budgetTabs } from '../data/budgetData';
import BudgetOverviewTab from '../sections/BudgetDashboard/BudgetOverviewTab';
import BudgetAnalysisTab from '../sections/BudgetDashboard/BudgetAnalysisTab';
import BudgetForecastTab from '../sections/BudgetDashboard/BudgetForecastTab';
import { ArrowRight, AlertTriangle, Clock, EyeOff, Settings, Upload, BarChart3, TrendingUp, Users, DollarSign, Sliders } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

/* ─── Hero ─── */
const HeroSection = () => (
  <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-b from-accentLight/30 to-white relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute top-20 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
      >
        <BarChart3 className="w-4 h-4 text-accent" />
        <span className="text-sm font-semibold text-accent">Controllo di Gestione AI</span>
      </motion.div>
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight"
      >
        ECAI-Budget
      </motion.h1>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-4"
      >
        Trasforma i tuoi dati contabili in decisioni strategiche.
      </motion.p>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
        className="text-base text-muted max-w-xl mx-auto mb-8"
      >
        Risparmia fino al 91% rispetto a un controller interno. Stop alla gestione "a vista".
      </motion.p>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={4}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <motion.a
          href="https://www.econova.ai/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accentDark transition-all shadow-lg shadow-accent/25"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Prenota Demo (25 min) <ArrowRight className="w-4 h-4" />
        </motion.a>
        <motion.a
          href="#dashboard"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-dark/10 text-dark font-semibold rounded-full hover:border-accent/30 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Esplora la Dashboard
        </motion.a>
      </motion.div>
    </div>
  </section>
);

/* ─── Problemi ─── */
const problems = [
  {
    icon: EyeOff,
    title: 'Gestione "A Vista"',
    description: 'Decisioni basate su intuito e sensazioni, non su dati certi. Rischio di errore elevatissimo.',
  },
  {
    icon: DollarSign,
    title: 'Margini Ignoti',
    description: 'Fatturato in crescita ma utili fermi? Impossibile capire quale linea di business sta bruciando cassa.',
  },
  {
    icon: Clock,
    title: 'Dati in Ritardo',
    description: 'Report mensili pronti dopo 20 giorni dalla chiusura. Troppo tardi per agire e correggere la rotta.',
  },
];

const ProblemsSection = () => (
  <section className="py-16 sm:py-24 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">La situazione attuale</h2>
        <p className="text-muted text-lg max-w-xl mx-auto">I problemi che affrontano ogni giorno le PMI italiane</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={i}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="glass-card-strong rounded-2xl p-8 border border-black/5 text-center hover:border-red-200 transition-colors duration-300"
          >
            <motion.div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-50 mb-5"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <p.icon className="w-7 h-7 text-red-500" />
            </motion.div>
            <h3 className="text-xl font-bold text-dark mb-3">{p.title}</h3>
            <p className="text-muted leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Metodo 3 Step ─── */
const steps = [
  {
    icon: Settings,
    number: '01',
    title: 'Consulenza & Setup',
    description: 'Creiamo il tuo modello di controllo industriale con riclassificazione su misura.',
  },
  {
    icon: Upload,
    number: '02',
    title: 'Ingestion AI',
    description: "L'AI ingerisce i tuoi Excel e li mappa automaticamente sui centri di costo.",
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Controllo in Tempo Reale',
    description: 'Dashboard e analisi live. Monitora i margini e simula scenari futuri.',
  },
];

const MethodSection = () => (
  <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-accentLight/20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Il Metodo ECONOVA-AI</h2>
        <p className="text-muted text-lg">Un processo collaudato in 3 step</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={i}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="glass-card-strong rounded-2xl p-8 border border-black/5 relative overflow-hidden hover:border-accent/20 transition-colors duration-300 group"
          >
            <div className="absolute top-4 right-4 text-5xl font-black text-accent/10 group-hover:text-accent/20 transition-colors">{s.number}</div>
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-5"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <s.icon className="w-7 h-7 text-accent" />
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

/* ─── Dashboard Live (riusa componenti homepage) ─── */
const DashboardSection = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="dashboard" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          className="mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-2">La Dashboard</h2>
          <p className="text-muted text-base sm:text-lg">Controllo di gestione intelligente in tempo reale</p>
        </motion.div>

        <motion.div
          className="glass-card-strong rounded-3xl border border-black/5 shadow-glass-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-black/5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="ml-3 text-xs text-muted font-mono">www.econova.ai — ECAI-Budget</span>
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-dark">ECAI-Budget</h3>
                <p className="text-sm text-muted mt-1">Gestione budget mensile — Marzo 2024</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full">
                <div className="w-2 h-2 bg-[#0071e3] rounded-full animate-pulse" />
                <span className="text-xs font-medium text-[#0071e3]">Connesso</span>
              </div>
            </div>

            <div className="flex gap-2 sm:gap-4 mb-8 flex-wrap sm:flex-nowrap border-b border-black/5 pb-4">
              {budgetTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#0071e3] text-white'
                      : 'text-muted hover:text-dark bg-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="min-h-[500px]">
              {activeTab === 'overview' && <BudgetOverviewTab />}
              {activeTab === 'analysis' && <BudgetAnalysisTab />}
              {activeTab === 'forecast' && <BudgetForecastTab />}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Confronto Prezzi ─── */
const PricingSection = () => (
  <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-accentLight/20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Quanto costa NON avere il controllo?</h2>
        <p className="text-muted text-lg max-w-xl mx-auto">Confronto su 3 anni tra le alternative</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Controller Interno */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="glass-card-strong rounded-2xl p-8 border border-black/5"
        >
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
        </motion.div>

        {/* Consulente Esterno */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={1}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="glass-card-strong rounded-2xl p-8 border border-black/5"
        >
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
        </motion.div>

        {/* ECAI-Budget */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={2}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="rounded-2xl p-8 border-2 border-accent bg-accent/5 relative overflow-hidden"
        >
          <div className="absolute top-3 right-3 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">-91%</div>
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-bold text-dark">ECAI-Budget</h3>
          </div>
          <div className="mb-6">
            <p className="text-sm font-semibold text-accent mb-2">Fase 1: Setup</p>
            <p className="text-sm text-muted mb-3">Una tantum — consulenza 10-40 ore</p>
            <p className="text-sm font-semibold text-accent mb-2">Fase 2: Licenza</p>
            <p className="text-sm text-muted">€3.5K - 8K / anno — Cloud, AI, Support</p>
          </div>
          <motion.a
            href="https://www.econova.ai/contact"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accentDark transition-all text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Richiedi Preventivo <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── CTA Finale ─── */
const CtaSection = () => (
  <section className="py-16 sm:py-24 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-dark mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        Pronto a prendere il controllo?
      </motion.h2>
      <motion.p
        className="text-muted text-lg mb-8 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        Non aspettare il prossimo bilancio per scoprire come va la tua azienda. Richiedi un'analisi gratuita dei tuoi attuali processi di controllo.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.a
          href="https://www.econova.ai/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accentDark transition-all shadow-lg shadow-accent/25"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Prenota Demo (25 min) <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

/* ─── Page ─── */
const EcaiBudgetPage = () => (
  <>
    <header><Navbar /></header>
    <main>
      <HeroSection />
      <DashboardSection />
      <ProblemsSection />
      <MethodSection />
      <PricingSection />
      <CtaSection />
    </main>
    <Footer />
  </>
);

export default EcaiBudgetPage;
