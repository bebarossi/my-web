import { motion } from 'framer-motion';
import VsmeWidget from './vsme/VsmeWidget';

const VsmeDashboard = () => (
  <section id="vsme" className="py-16 sm:py-24 md:py-28 relative overflow-hidden" aria-labelledby="heading-vsme">

    {/* Glow ambientale verde */}
    <motion.div
      className="absolute inset-0 pointer-events-none -z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.6, ease: 'easeOut' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[110%] h-full"
        style={{ background: 'radial-gradient(ellipse at 50% 20%, rgba(46,125,50,0.07) 0%, transparent 65%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[50%] h-[60%]"
        style={{ background: 'radial-gradient(ellipse at 80% 100%, rgba(76,175,80,0.04) 0%, transparent 60%)' }}
      />
    </motion.div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

      {/* Heading */}
      <motion.div
        className="mb-8 sm:mb-12 text-center lg:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <h2 id="heading-vsme" className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-2">
          Report VSME ESG
        </h2>
        <p className="text-muted text-base sm:text-lg">Sostenibilità e compliance ESG semplificate</p>
      </motion.div>

      {/* Widget fedele alla dashboard reale */}
      <VsmeWidget />

    </div>
  </section>
);

export default VsmeDashboard;
