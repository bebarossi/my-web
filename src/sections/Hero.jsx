import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TrendingUp, Leaf, Factory, Lightbulb } from 'lucide-react';
import { CTA_DEMO_URL } from '../data/navigation';

/* Parole del titolo con stili individuali */
const titleWords = [
  { text: 'Controllo', cls: '' },
  { text: 'di',        cls: '' },
  { text: 'gestione',  cls: '' },
  { text: 'intelligente,', cls: 'text-accent' },
  null, // <br className="hidden lg:block" />
  { text: 'sostenibilità', cls: '' },
  { text: 'automatica.', cls: 'italic font-medium text-muted' },
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y       = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="min-h-[100dvh] flex items-center relative overflow-hidden pt-20">

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
        <div className="max-w-4xl">

          {/* ── Titolo con word-reveal ── */}
          <h1 className="text-center lg:text-left text-[clamp(2.2rem,6vw,5.5rem)] leading-[1.1] font-extrabold tracking-tight text-dark mb-4 sm:mb-6">
            {titleWords.map((item, i) => {
              if (item === null) return <br key="br" className="hidden lg:block" />;
              return (
                <span
                  key={i}
                  className="inline-block overflow-hidden"
                  style={{ marginRight: '0.26em' }}
                >
                  <motion.span
                    className={`inline-block ${item.cls}`}
                    initial={{ y: '115%' }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.72,
                      delay: 0.06 + i * 0.09,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                  >
                    {item.text}
                  </motion.span>
                </span>
              );
            })}
          </h1>

          {/* ── Sottotitolo ── */}
          <motion.p
            className="text-center lg:text-left text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.72, ease: [0.25, 0.4, 0.25, 1] }}
          >
            ECAI-Budget e Report VSME ESG: due piattaforme AI progettate per le PMI che vogliono gestire budget e
            compliance ESG senza complessità.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.86, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.a
              href={CTA_DEMO_URL}
              className="btn-primary text-base text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Prenota una Demo <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#budget"
              className="btn-secondary text-base text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Esplora le Dashboard
            </motion.a>
          </motion.div>

          {/* ── NVIDIA badge ── */}
          <motion.div
            className="flex items-center gap-3 mt-8 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <img src="/nvidia-badge.svg" alt="NVIDIA Inception Program" className="h-10 object-contain" />
            <span className="text-xs text-muted">Member of NVIDIA Inception Program</span>
          </motion.div>
        </div>

        {/* ── Floating stats cards — desktop only ── */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[340px]">

          {/* Budget card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
            className="glass-card-strong p-6 shadow-glass-lg mb-4"
            whileHover={{ y: -4, boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-muted uppercase tracking-wider">Budget Mensile</span>
                <TrendingUp className="w-4 h-4 text-accent" />
              </div>
              <div className="text-3xl font-bold text-dark mb-1">&euro; 142.850</div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12.4%</span>
                <span className="text-xs text-muted">vs mese precedente</span>
              </div>
              <div className="mt-4 flex items-end gap-1 h-12">
                {[35, 45, 30, 55, 40, 65, 50, 70, 60, 80, 75, 90].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm bg-accent/20"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: 0.85 + i * 0.05, ease: 'easeOut' }}
                  >
                    <div
                      className="w-full rounded-sm bg-accent"
                      style={{ height: `${Math.min(100, h + 10)}%`, opacity: i > 9 ? 1 : 0.4 + i * 0.05 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Carbon Footprint card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.75, ease: [0.25, 0.4, 0.25, 1] }}
            className="glass-card-strong p-5 shadow-glass-lg"
            whileHover={{ y: -4, boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted uppercase tracking-wider">Carbon Footprint</span>
                <Leaf className="w-4 h-4 text-accent" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-accent/5 rounded-xl p-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Factory className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted">Scope 1 — Emissioni dirette</div>
                    <div className="text-lg font-bold text-dark">
                      32.1 <span className="text-xs font-normal text-muted">tCO₂e</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">-12%</span>
                </div>
                <div className="flex items-center gap-3 bg-accentLime/5 rounded-xl p-3">
                  <div className="w-10 h-10 rounded-lg bg-accentLime/15 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-accentLime" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted">Scope 2 — Energia acquistata</div>
                    <div className="text-lg font-bold text-dark">
                      58.4 <span className="text-xs font-normal text-muted">tCO₂e</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">-22%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Mobile floating cards ── */}
        <div className="lg:hidden mt-10 grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="glass-card-strong p-4 shadow-glass"
          >
            <div className="flex items-center gap-2 mb-2">
              <Factory className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-mono text-muted uppercase">Scope 1</span>
            </div>
            <div className="text-xl font-bold text-dark">32.1</div>
            <div className="text-[10px] text-muted">tCO₂e &bull; Emissioni dirette</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="glass-card-strong p-4 shadow-glass"
          >
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4 text-accentLime" />
              <span className="text-[10px] font-mono text-muted uppercase">Scope 2</span>
            </div>
            <div className="text-xl font-bold text-dark">58.4</div>
            <div className="text-[10px] text-muted">tCO₂e &bull; Energia acquistata</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
