import { motion } from 'framer-motion';
import { reasons } from '../data/whyReasons';

const cardVariants = {
  hidden:  { opacity: 0, y: 60, scale: 0.94 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.82, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const WhySection = () => (
  <section id="perche-noi" className="py-16 sm:py-24 md:py-28" aria-labelledby="heading-perche-noi">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

      {/* ── Heading con line-reveal ── */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="overflow-hidden mb-4 sm:mb-5">
          <motion.h2
            id="heading-perche-noi"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark"
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Perchè ECONOVA-AI?
          </motion.h2>
        </div>
        <motion.p
          className="text-base sm:text-lg text-muted max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.25, 0.4, 0.25, 1] }}
        >
          6 motivi per scegliere la nostra piattaforma
        </motion.p>
      </div>

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
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-colors duration-300 hover:shadow-glass-lg min-w-[260px] sm:min-w-[280px] md:min-w-0 snap-start relative overflow-hidden group"
            >
              {/* Glow hover */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-accent/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 relative z-10"
                whileHover={{ scale: 1.12, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 280 }}
              >
                <ReasonIcon className="w-6 h-6 text-accent" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-dark mb-2 relative z-10">{reason.title}</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed relative z-10">{reason.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhySection;
