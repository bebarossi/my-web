import { motion } from 'framer-motion';
import VsmeWidget from './vsme/VsmeWidget';

const VsmeDashboard = () => (
  <section id="vsme" className="py-16 sm:py-24 md:py-28 relative" aria-labelledby="heading-vsme">

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
