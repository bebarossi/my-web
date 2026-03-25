import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Zap, TrendingUp, Brain, Leaf, Trees, FileText, Shield } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.2, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const ProductsOverview = () => (
  <section id="prodotti" className="py-16 sm:py-24 md:py-28 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <motion.div
        className="text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
      >
        <h2 id="heading-prodotti" className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">
          Due piattaforme, infinite possibilità
        </h2>
        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
          Gestisci budget e sostenibilità con l'intelligenza artificiale
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* ECAI-Budget Product Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={0}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-colors duration-300 hover:shadow-glass-xl overflow-hidden relative group"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <BarChart3 className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-accent">Controllo di Gestione</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-3">ECAI-Budget</h3>
            <p className="text-muted mb-6 leading-relaxed">
              Automatizza il controllo di gestione con AI che analizza budget, costi e flussi di cassa in tempo reale.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { icon: Zap, text: 'Budget vs Actual in tempo reale' },
                { icon: TrendingUp, text: 'Forecast intelligenti per previsioni accurate' },
                { icon: Brain, text: 'Anomalie e inefficienze identificate automaticamente' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-dark">{item.text}</span>
                </motion.div>
              ))}
            </div>
            <motion.a
              href="/ecai-budget"
              className="inline-flex items-center gap-2 text-accent font-semibold transition-all"
              whileHover={{ gap: '12px' }}
            >
              Scopri di più <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Report VSME ESG Product Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          custom={1}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          className="glass-card-strong rounded-2xl p-6 sm:p-8 border border-black/5 hover:border-accent/20 transition-colors duration-300 hover:shadow-glass-xl overflow-hidden relative group"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-accent">Sostenibilità</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-3">Report VSME ESG</h3>
            <p className="text-muted mb-6 leading-relaxed">
              Genera report ESG standardizzati secondo le direttive CSRD per comunicare la sostenibilità dell'azienda.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { icon: Trees, text: 'Calcolo automatico impronta ecologica e carbon footprint' },
                { icon: FileText, text: 'Report compliant con standard CSRD' },
                { icon: Shield, text: 'Audit trail completo per compliance' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-dark">{item.text}</span>
                </motion.div>
              ))}
            </div>
            <motion.a
              href="/vsme-report"
              className="inline-flex items-center gap-2 text-accent font-semibold transition-all"
              whileHover={{ gap: '12px' }}
            >
              Scopri di più <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProductsOverview;
