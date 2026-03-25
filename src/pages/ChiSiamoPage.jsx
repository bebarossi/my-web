import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Leaf, Award, Calendar, Linkedin } from 'lucide-react';
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
const ChiSiamoHero = () => (
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
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
        >
          <Leaf className="w-4 h-4 text-accent" />
          <span className="text-xs font-semibold text-accent">Chi Siamo</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.08] font-extrabold tracking-tight text-dark mb-4 sm:mb-6"
        >
          Sfruttiamo l'AI e la sostenibilità per costruire un{' '}
          <span className="text-accent">futuro migliore</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10"
        >
          La nostra missione è dare potere alle aziende con soluzioni AI all'avanguardia che guidano efficienza e responsabilità. Crediamo in un'intelligenza artificiale che trasforma i processi, riduce gli sprechi e crea valore reale per le persone e il pianeta.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start"
        >
          <motion.a
            href={CTA_DEMO_URL}
            className="btn-primary text-base text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contattaci <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#timeline"
            className="btn-secondary text-base text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Il Nostro Viaggio
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── FOUNDERS ─── */
const founders = [
  {
    name: 'Marco Sponticcia',
    role: 'CEO & Co-Founder',
    bio: 'Percorso accademico tra Ancona e Rotterdam. Guida la visione strategica di ECONOVA-AI, trasformando la sostenibilità da onere di conformità a leva gestionale basata su dati.',
    linkedin: 'https://it.linkedin.com/in/marco-sponticcia-0655921aa',
  },
  {
    name: 'Federico Santi',
    role: 'CFO & Co-Founder',
    bio: 'Percorso accademico tra Bologna e Londra. Supervisiona la strategia finanziaria e lo sviluppo del prodotto ECAI-Budget per il controllo di gestione intelligente.',
    linkedin: 'https://it.linkedin.com/in/federico-santi7878',
  },
  {
    name: 'Co-Founder & CTO',
    role: 'CTO & Co-Founder',
    bio: 'PhD ad Ancona e Master a Oxford in AI e Machine Learning. Professore universitario, guida lo sviluppo tecnologico e i modelli AI proprietari di ECONOVA-AI.',
    linkedin: null,
  },
];

const FoundersSection = () => (
  <section className="py-16 sm:py-24 md:py-28 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <motion.div
        className="text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">I Nostri Founder</h2>
        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
          Tre percorsi accademici diversi, una passione condivisa per la sostenibilità e l'innovazione AI.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {founders.map((founder, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={i}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-colors duration-300 hover:shadow-glass-lg text-center"
          >
            <motion.div
              className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-2xl font-bold text-accent">{founder.name.split(' ').map(n => n[0]).join('')}</span>
            </motion.div>
            <h3 className="text-xl font-bold text-dark mb-1">{founder.name}</h3>
            <p className="text-sm font-semibold text-accent mb-4">{founder.role}</p>
            <p className="text-muted text-sm leading-relaxed mb-5">{founder.bio}</p>
            {founder.linkedin && (
              <motion.a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                whileHover={{ gap: '12px' }}
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── VALORI ─── */
const ValoriSection = () => {
  const valori = [
    {
      icon: Lightbulb,
      title: 'Innovazione',
      desc: 'Soluzioni AI pionieristiche per un futuro più verde e sostenibile. Spingiamo costantemente i confini della tecnologia per creare strumenti che fanno la differenza.',
    },
    {
      icon: Leaf,
      title: 'Sostenibilità',
      desc: 'Impegno verso pratiche aziendali responsabili e rispettose dell\'ambiente. Ogni progetto è pensato per minimizzare l\'impatto ambientale e massimizzare i benefici sociali.',
    },
    {
      icon: Award,
      title: 'Eccellenza',
      desc: 'Forniamo soluzioni AI di alto livello con precisione e dedizione. La qualità non è un obiettivo, ma lo standard con cui misuriamo ogni nostro risultato.',
    },
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">I Nostri Valori</h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Tre pilastri che guidano ogni nostra decisione e progetto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {valori.map((valore, i) => {
            const ValoreIcon = valore.icon;
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
                  <ValoreIcon className="w-7 h-7 text-accent" />
                </motion.div>
                <h3 className="text-xl font-bold text-dark mb-3">{valore.title}</h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed">{valore.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── TIMELINE ─── */
const TimelineSection = () => {
  const milestones = [
    { date: '28/11/2023', title: 'Costituzione ECONOVA-AI', desc: 'Nasce ufficialmente ECONOVA-AI con la missione di unire intelligenza artificiale e sostenibilità.' },
    { date: '01/12/2023', title: 'Partnership con POLITO & UNIVPM', desc: 'Collaborazione strategica con il Politecnico di Torino e l\'Università Politecnica delle Marche.' },
    { date: '01/04/2024', title: 'GRI Community Member 2024', desc: 'Ingresso nella community della Global Reporting Initiative per gli standard di sostenibilità.' },
    { date: '01/05/2024', title: 'Partnership con Mesa per CSRD', desc: 'Alleanza per supportare le aziende nella conformità alla Corporate Sustainability Reporting Directive.' },
    { date: '01/07/2025', title: 'Primi 2 bilanci di sostenibilità', desc: 'Completamento dei primi bilanci di sostenibilità realizzati con la piattaforma ECONOVA-AI.' },
    { date: '20/08/2025', title: 'NVIDIA Inception Program Member', desc: 'Accesso al programma NVIDIA Inception per startup AI all\'avanguardia.' },
    { date: '01/10/2025', title: 'LeVillage Acceleration Program', desc: 'Ingresso nel programma di accelerazione LeVillage by CA per la crescita e l\'innovazione.' },
  ];

  return (
    <section id="timeline" className="py-16 sm:py-24 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">Il Nostro Viaggio</h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Dalle origini ad oggi, ogni passo verso l'innovazione sostenibile.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-accent/20" />

          <div className="space-y-6 sm:space-y-8">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                className="flex gap-4 sm:gap-6 relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <div className="flex-shrink-0 w-12 sm:w-16 flex items-start justify-center pt-1">
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center z-10 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </motion.div>
                </div>

                <motion.div
                  className="glass-card-strong rounded-2xl p-5 sm:p-6 border border-black/5 hover:border-accent/20 transition-colors duration-300 hover:shadow-glass-lg flex-1"
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                >
                  <span className="text-xs font-mono font-bold text-accent bg-accent/10 px-2 py-1 rounded-lg">{milestone.date}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-dark mt-3 mb-2">{milestone.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{milestone.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── CTA ─── */
const ChiSiamoCTA = () => (
  <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-accentLight/20 to-white relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        Costruiamo Insieme il Futuro
      </motion.h2>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        Scopri come ECONOVA-AI può trasformare la tua azienda con soluzioni AI sostenibili.
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
          Prenota una Demo <ArrowRight className="w-5 h-5" />
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
const ChiSiamoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header><Navbar /></header>
      <main>
        <ChiSiamoHero />
        <FoundersSection />
        <ValoriSection />
        <TimelineSection />
        <ChiSiamoCTA />
      </main>
      <Footer />
    </>
  );
};

export default ChiSiamoPage;
