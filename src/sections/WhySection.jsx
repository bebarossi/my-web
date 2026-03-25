import { motion } from 'framer-motion';
import { reasons } from '../data/whyReasons';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const WhySection = () => (
  <section id="perche-noi" className="py-16 sm:py-24 md:py-28" aria-labelledby="heading-perche-noi">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <motion.div
        className="text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
      >
        <h2 id="heading-perche-noi" className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">
          Perchè ECONOVA-AI?
        </h2>
        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
          6 motivi per scegliere la nostra piattaforma
        </p>
      </motion.div>

      <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible scrollbar-hide">
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
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-colors duration-300 hover:shadow-glass-lg min-w-[260px] sm:min-w-[280px] md:min-w-0 snap-start"
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ReasonIcon className="w-6 h-6 text-accent" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-dark mb-2">{reason.title}</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">{reason.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhySection;
