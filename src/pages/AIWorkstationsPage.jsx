import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Check, Monitor, Server, Users, Search, FileSignature, Code2, TestTube, Rocket, Star, Handshake } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CTA_DEMO_URL } from '../data/navigation';

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

/* ─── HERO ─── */
const AIHero = () => (
  <section className="hero-gradient min-h-[85dvh] flex items-center relative overflow-hidden pt-20">
    {/* Animated gradient orbs */}
    <motion.div
      className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
      style={{ background: 'radial-gradient(circle, #2e7d32, transparent 70%)' }}
      animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-20 right-[15%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
      style={{ background: 'radial-gradient(circle, #4caf50, transparent 70%)' }}
      animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />

    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
      backgroundSize: '80px 80px'
    }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
      <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
        {/* Badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6 sm:mb-8"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
            <Shield className="w-3.5 h-3.5" /> 100% Locale e Sicuro
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
            <Zap className="w-3.5 h-3.5" /> ROI Crescente
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs font-semibold text-accent">
            <Monitor className="w-3.5 h-3.5" /> Tecnologia NVIDIA RTX
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.08] font-extrabold tracking-tight text-dark mb-4 sm:mb-6"
        >
          Implementa l&rsquo;AI{' '}
          <span className="text-accent">nella Tua Azienda</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10"
        >
          Dalla strategia all&rsquo;implementazione con soluzioni hardware e software su misura per la tua azienda.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start"
        >
          <motion.a
            href="#contact-ws"
            className="btn-primary text-base text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Inizia Ora <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#processo"
            className="btn-secondary text-base text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Scopri Come
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── PROCESSO ─── */
const ProcessSection = () => {
  const steps = [
    { icon: Search, num: '01', title: 'Analisi', desc: 'Incontro col team per identificare le aree di valore: automazione, dati, controllo qualità.' },
    { icon: FileSignature, num: '02', title: 'Firma del Contratto', desc: 'Definizione obiettivi, tempistiche e ROI atteso.' },
    { icon: Code2, num: '03', title: 'Sviluppo Soluzione AI', desc: 'Hardware e software personalizzati sui tuoi dati, 100% in locale.' },
    { icon: TestTube, num: '04', title: 'Testing & Refinement', desc: 'Sessioni di test, raccolta feedback e ottimizzazione continua.' },
    { icon: Rocket, num: '05', title: 'Deployment & Supporto', desc: 'Implementazione in produzione e supporto continuativo.' }
  ];

  return (
    <section id="processo" className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white to-accentLight/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">Come Funziona il Nostro Processo</h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Dall&rsquo;analisi iniziale al deployment: un percorso chiaro e strutturato
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  custom={i}
                  className="flex flex-col items-center text-center relative"
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 relative z-10 border-2 border-white shadow-card"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <StepIcon className="w-7 h-7 text-accent" />
                  </motion.div>
                  <span className="text-xs font-mono text-accent font-bold mb-2">{step.num}</span>
                  <h3 className="text-lg font-bold text-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── WORKSTATION CARDS ─── */
const WorkstationCards = () => {
  const plans = [
    { tier: 'Entry Level', name: 'AI Starter', price: '1.000', highlight: false, specs: ['GPU NVIDIA', '512GB SSD', 'Software preinstallato', '1 anno di garanzia'] },
    { tier: 'Più Popolare', name: 'AI Combo', price: '10.000', highlight: true, specs: ['GPU NVIDIA RTX 5090', 'CPU Intel i7/i9 o AMD Ryzen 7/9', '64-128GB RAM', '1-2TB SSD', 'Modelli AI personalizzati'] },
    { tier: 'Premium', name: 'ECAI-VIPER', price: '200.000', highlight: false, specs: ['HB200/HB300', '1.4 petaFLOPS', 'Modelli AI allenati sui tuoi dati', 'Setup on-site'] }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">Le Nostre Workstation AI</h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">Soluzioni hardware scalabili per ogni esigenza aziendale</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`glass-card-strong rounded-3xl p-6 sm:p-8 border transition-colors duration-300 hover:shadow-glass-xl flex flex-col relative overflow-hidden ${
                plan.highlight ? 'border-accent/30 shadow-glass-lg ring-2 ring-accent/10' : 'border-black/5 shadow-glass'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent to-accentLime py-1.5 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-white" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Più Popolare</span>
                  </div>
                </div>
              )}

              <div className={plan.highlight ? 'mt-6' : ''}>
                <span className="text-xs font-mono text-muted uppercase tracking-wider">{plan.tier}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-dark mt-2 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-sm text-muted">a partire da</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-dark">&euro;{plan.price}</div>
                </div>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {plan.specs.map((spec, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-dark">{spec}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href="#contact-ws"
                className={`text-center font-semibold py-3 px-6 rounded-pill transition-all duration-300 ${
                  plan.highlight ? 'bg-accent text-white hover:shadow-lg' : 'border-2 border-accent text-accent hover:bg-accent hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Richiedi Preventivo
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── PERCHÉ SCEGLIERCI ─── */
const WhyChooseUs = () => {
  const advantages = [
    { icon: Shield, title: 'Dati Locali e Sicuri', desc: 'Nessun cloud, conformità GDPR, pieno controllo sui tuoi dati aziendali.' },
    { icon: Server, title: 'Performance Enterprise', desc: 'Hardware top di gamma per workload intensivi e modelli AI complessi.' },
    { icon: Users, title: 'Supporto Locale', desc: 'Team italiano, configurazioni ad hoc e non generiche per la tua realtà.' }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-28 bg-gradient-to-b from-white to-accentLight/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">Perché Sceglierci</h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">Vantaggi competitivi che fanno la differenza</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((adv, i) => {
            const AdvIcon = adv.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-colors duration-300 hover:shadow-glass-lg"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <AdvIcon className="w-7 h-7 text-accent" />
                </motion.div>
                <h3 className="text-xl font-bold text-dark mb-3">{adv.title}</h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed">{adv.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── PARTNER TECNOLOGICI ─── */
const PartnersSection = () => {
  const partners = [
    { name: 'NVIDIA', desc: 'Inception Partner', badge: true },
    { name: 'Meta Llama', desc: 'LLM Partner' },
    { name: 'Mistral AI', desc: 'LLM Partner' },
    { name: 'Partner Universitari', desc: 'Ricerca e Sviluppo' }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">Partner Tecnologici</h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">Collaborazioni strategiche per garantire eccellenza e innovazione</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-card-strong rounded-2xl p-6 border border-black/5 hover:border-accent/20 transition-colors duration-300 hover:shadow-glass-lg text-center flex flex-col items-center justify-center"
            >
              {partner.badge ? (
                <img src="/nvidia-badge.svg" alt="NVIDIA" className="h-12 mb-3 object-contain" />
              ) : (
                <motion.div
                  className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Handshake className="w-6 h-6 text-accent" />
                </motion.div>
              )}
              <h3 className="font-bold text-dark text-sm sm:text-base">{partner.name}</h3>
              <p className="text-xs text-muted mt-1">{partner.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── CTA ─── */
const ContactCTA = () => (
  <section id="contact-ws" className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-accentLight/20 to-white relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        Pronto a Implementare l&rsquo;AI?
      </motion.h2>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        Contattaci per una consulenza gratuita e scopri quale soluzione AI è perfetta per la tua azienda.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.a
          href={CTA_DEMO_URL}
          className="btn-primary text-base px-8 py-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Prenota una Consulenza <ArrowRight className="w-5 h-5" />
        </motion.a>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Link to="/" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-2.5 rounded-pill font-semibold transition-all text-base">
            Torna alla Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ─── PAGE ─── */
const AIWorkstationsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header><Navbar /></header>
      <main>
        <AIHero />
        <ProcessSection />
        <WorkstationCards />
        <WhyChooseUs />
        <PartnersSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
};

export default AIWorkstationsPage;
