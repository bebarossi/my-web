import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CTA_DEMO_URL } from '../data/navigation';

const CTASection = () => (
  <section id="contact" className="py-16 sm:py-24 md:py-32 bg-[#1d1d1f] relative overflow-hidden">
    {/* Animated accent glows */}
    <motion.div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[120px]"
      animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-accentLime/8 rounded-full blur-[100px]"
      animate={{ x: [0, 50, 0], opacity: [0.05, 0.1, 0.05] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />

    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
      >
        Trasforma il tuo Controllo di Gestione
      </motion.h2>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        Scopri come ECAI-Budget e Report VSME ESG possono automatizzare il tuo budget e assicurare la compliance ESG.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
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
        <motion.a
          href={CTA_DEMO_URL}
          className="border-2 border-white/20 text-white hover:bg-white hover:text-dark px-8 py-2.5 rounded-xl font-semibold transition-all text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Contattaci
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
