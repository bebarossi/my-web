import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { modules, moduleData } from '../data/vsmeData';
import { ArrowRight, Shield, FileText, ChevronRight, Target, Leaf, ClipboardList, Upload, Bot, Phone, BookOpen, Users, Handshake } from 'lucide-react';

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
        <Leaf className="w-4 h-4 text-accent" />
        <span className="text-sm font-semibold text-accent">Sostenibilità AI</span>
      </motion.div>
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark mb-6 leading-tight"
      >
        Report VSME ESG
      </motion.h1>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
        className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-4"
      >
        Crea il tuo bilancio di sostenibilità VSME in modo semplice, veloce e conforme alle direttive europee.
      </motion.p>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
        className="text-base text-muted max-w-xl mx-auto mb-8"
      >
        Tecnologia AI proprietaria per PMI innovative.
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
    </div>
  </section>
);

/* ─── Dashboard Live (riusa componenti homepage) ─── */
const DashboardSection = () => {
  const [activeModule, setActiveModule] = useState('forza-lavoro');

  const currentData = moduleData[activeModule] || moduleData['forza-lavoro'];
  const completionTotal = Math.round(modules.reduce((sum, m) => sum + m.pct, 0) / modules.length);

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-2">La Piattaforma</h2>
          <p className="text-muted text-base sm:text-lg">Sostenibilità e compliance ESG semplificate</p>
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
            <span className="ml-3 text-xs text-muted font-mono">www.econova.ai — VSME Report</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-stretch p-6 sm:p-8">
            <div className="lg:col-span-1 space-y-3">
              <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-glass">
                <h4 className="font-semibold text-dark mb-4 text-sm">Moduli ESG</h4>
                <div className="space-y-2">
                  {modules.map((module) => {
                    const ModuleIcon = module.icon;
                    return (
                      <button
                        key={module.id}
                        onClick={() => setActiveModule(module.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                          activeModule === module.id
                            ? 'bg-accent text-white shadow-lg'
                            : 'bg-gray-50 text-dark hover:bg-gray-100'
                        }`}
                      >
                        <ModuleIcon className="w-4 h-4 flex-shrink-0" />
                        <span className="flex-1 text-left">{module.name}</span>
                        <span className={`text-xs font-bold ${activeModule === module.id ? 'text-white' : 'text-accent'}`}>
                          {module.pct}%
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-glass">
                <h4 className="font-semibold text-dark mb-4 text-sm">Completamento Totale</h4>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-accent">{completionTotal}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-accent to-accentLime h-full rounded-full transition-all duration-300"
                      style={{ width: `${completionTotal}%` }}
                    />
                  </div>
                </div>
                <p className="text-xs text-muted">Implementazione compliance CSRD</p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-r from-accent to-accentLime rounded-2xl p-8 sm:p-10 text-white shadow-glass-lg overflow-hidden relative">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white/20 rounded-xl">
                      {React.createElement(currentData.icon, { className: 'w-8 h-8' })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">{currentData.title}</h3>
                      <p className="text-white/90">{currentData.subtitle}</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                    <Target className="w-4 h-4" />
                    Modulo attivo
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {currentData.metrics.map((metric, i) => (
                  <div key={i} className="bg-white rounded-xl border border-black/5 p-6 shadow-glass hover:shadow-glass-lg transition-shadow">
                    <p className="text-xs text-muted uppercase tracking-wider font-mono mb-2">{metric.label}</p>
                    <p className="text-2xl sm:text-3xl font-bold text-dark mb-1">{metric.value}</p>
                    <p className="text-xs text-muted">{metric.unit}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl border border-black/5 p-6 sm:p-8 shadow-glass">
                <h4 className="font-semibold text-dark mb-6">Status Compliance</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-dark">VSME — Compliance verificata</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#0071e3]" />
                      <span className="text-sm font-medium text-dark">Report Audit — Pronto per esportazione</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#0071e3]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── 6 Step Process ─── */
const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Firma Contratto',
    description: 'Scegli il piano più adatto alle tue esigenze e sottoscrivi il contratto. Il nostro team ti contatterà per avviare il processo.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Excel Strutturato',
    description: 'Riceverai il nostro foglio Excel proprietario, ottimizzato per raccogliere i dati essenziali ESG in modo chiaro e guidato.',
  },
  {
    icon: Upload,
    number: '03',
    title: 'Invio Dati',
    description: 'Invia il foglio Excel compilato al nostro team tramite PEC o email. Tutti i dati vengono trattati nel pieno rispetto del GDPR.',
  },
  {
    icon: Bot,
    number: '04',
    title: 'Elaborazione AI',
    description: 'I nostri modelli AI, allenati su centinaia di report VSME reali, generano automaticamente un report completo e conforme.',
  },
  {
    icon: Phone,
    number: '05',
    title: 'Revisione & Personalizzazione',
    description: 'Call dedicata per rivedere il report, aggiungere contenuti specifici e assicurare che rispecchi la tua realtà aziendale.',
  },
  {
    icon: BookOpen,
    number: '06',
    title: 'Pubblicazione',
    description: 'Ricevi il bilancio di sostenibilità finale, pronto per essere pubblicato e condiviso con stakeholder e finanziatori.',
  },
];

const ProcessSection = () => (
  <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-accentLight/20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Il Tuo Percorso in 6 Step</h2>
        <p className="text-muted text-lg">Dalla firma del contratto alla pubblicazione: un processo semplice e guidato</p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <p className="text-muted leading-relaxed text-sm">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Pricing ─── */
const PricingSection = () => (
  <section className="py-16 sm:py-24 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Scegli il Tuo Piano</h2>
        <p className="text-muted text-lg">Prezzi trasparenti e competitivi per ogni esigenza aziendale</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {/* VSME Basic */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="glass-card-strong rounded-2xl p-8 border border-black/5"
        >
          <h3 className="text-xl font-bold text-dark mb-2">VSME Basic Report</h3>
          <p className="text-muted text-sm mb-6">Report base annuale per iniziare il tuo percorso di sostenibilità</p>
          <ul className="space-y-3 text-sm text-muted mb-8">
            <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Assessment iniziale</li>
            <li className="flex items-start gap-2"><FileText className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Report Basic 2 anni</li>
          </ul>
          <motion.a
            href="https://www.econova.ai/contact"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-dark/10 text-dark font-semibold rounded-full hover:border-accent/30 transition-all text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Richiedi Info <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Comprehensive */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={1}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="glass-card-strong rounded-2xl p-8 border border-black/5"
        >
          <h3 className="text-xl font-bold text-dark mb-2">Modulo Comprehensive</h3>
          <p className="text-muted text-sm mb-6">Modulo aggiuntivo narrativo per chi ha già il report Basic</p>
          <ul className="space-y-3 text-sm text-muted mb-8">
            <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Modulo Comprehensive 1 anno</li>
            <li className="flex items-start gap-2"><FileText className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Richiede Basic Report</li>
          </ul>
          <motion.a
            href="https://www.econova.ai/contact"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-dark/10 text-dark font-semibold rounded-full hover:border-accent/30 transition-all text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Richiedi Info <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Pacchetto 2 Anni */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={2}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="rounded-2xl p-8 border-2 border-accent bg-accent/5 relative overflow-hidden"
        >
          <div className="absolute top-3 right-3 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">PIÙ SCELTO</div>
          <h3 className="text-xl font-bold text-dark mb-2">Pacchetto 2 Anni</h3>
          <p className="text-muted text-sm mb-6">Pacchetto completo con moduli Basic e Comprehensive</p>
          <ul className="space-y-3 text-sm text-muted mb-8">
            <li className="flex items-start gap-2"><Shield className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Assessment iniziale</li>
            <li className="flex items-start gap-2"><FileText className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />Basic + Comprehensive 2 anni</li>
          </ul>
          <motion.a
            href="https://www.econova.ai/contact"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accentDark transition-all text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Richiedi Info <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── Partnership ─── */
const PartnershipSection = () => (
  <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-accentLight/20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Handshake className="w-8 h-8 text-accent" />
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">Partnership Strategica per il Report CSRD</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto mb-6">
          ECONOVA-AI collabora con MESA GROUP, classificato 8° al mondo per expertise in sustainability reporting.
        </p>
        <p className="text-muted max-w-2xl mx-auto mb-8">
          Questa partnership ci permette di offrire soluzioni VSME per PMI e soluzioni avanzate di rendicontazione CSRD per aziende che necessitano di compliance con la Corporate Sustainability Reporting Directive.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full">VSME Reports</span>
          <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full">CSRD Reports</span>
          <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full">ESG Strategy</span>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── CTA ─── */
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
        Inizia il Tuo Percorso di Sostenibilità
      </motion.h2>
      <motion.p
        className="text-muted text-lg mb-8 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        Trasforma i tuoi dati in un report VSME completo e conforme. Tecnologia AI, prezzi competitivi, supporto dedicato.
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
          Contattaci Ora <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

/* ─── Page ─── */
const VsmeReportPage = () => (
  <>
    <header><Navbar /></header>
    <main>
      <HeroSection />
      <DashboardSection />
      <ProcessSection />
      <PricingSection />
      <PartnershipSection />
      <CtaSection />
    </main>
    <Footer />
  </>
);

export default VsmeReportPage;
