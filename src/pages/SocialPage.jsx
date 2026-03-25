import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, ThumbsUp, ExternalLink, Calendar } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { socialPosts } from '../data/socialPosts';

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
const SocialHero = () => (
  <section className="hero-gradient min-h-[60dvh] flex items-center relative overflow-hidden pt-20">
    {/* Animated gradient orbs */}
    <motion.div
      className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
      style={{ background: 'radial-gradient(circle, #0A66C2, transparent 70%)' }}
      animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-20 right-[15%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
      style={{ background: 'radial-gradient(circle, #004182, transparent 70%)' }}
      animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />

    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
      backgroundSize: '80px 80px'
    }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/20 mb-6"
        >
          <Linkedin className="w-4 h-4 text-[#0A66C2]" />
          <span className="text-xs font-semibold text-[#0A66C2]">Social</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.08] font-extrabold tracking-tight text-dark mb-4 sm:mb-6"
        >
          Seguici su{' '}
          <span className="text-[#0A66C2]">LinkedIn</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10"
        >
          Novità, eventi, insights e il dietro le quinte di ECONOVA-AI. Resta aggiornato sulle nostre ultime attività.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <motion.a
            href="https://www.linkedin.com/company/econova-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A66C2] text-white font-semibold px-6 py-3 rounded-pill hover:bg-[#004182] transition-all hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin className="w-5 h-5" />
            Segui ECONOVA-AI
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>
);

/* ─── POST GRID ─── */
const PostGrid = () => (
  <section className="py-16 sm:py-24 md:py-28 bg-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <motion.div
        className="text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6">Ultimi Post</h2>
        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
          I post più recenti dalla nostra pagina LinkedIn.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {socialPosts.map((post, i) => (
          <motion.a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={i}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="glass-card-strong rounded-2xl border border-black/5 hover:border-[#0A66C2]/30 transition-colors duration-300 hover:shadow-glass-xl group flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-5 pb-0">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-accent">E</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-dark">ECONOVA-AI</p>
                <div className="flex items-center gap-1.5 text-muted">
                  <Calendar className="w-3 h-3" />
                  <span className="text-xs">{post.date}</span>
                </div>
              </div>
              <Linkedin className="w-5 h-5 text-[#0A66C2] flex-shrink-0" />
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-base sm:text-lg font-bold text-dark mb-3 leading-snug group-hover:text-[#0A66C2] transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed flex-1">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-black/5 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-muted">
                <ThumbsUp className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">{post.likes}</span>
              </div>
              <span className="text-xs font-semibold text-[#0A66C2] flex items-center gap-1 group-hover:underline">
                Leggi su LinkedIn
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CTA ─── */
const SocialCTA = () => (
  <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-accentLight/20 to-white relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4 sm:mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
      >
        Resta Connesso
      </motion.h2>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        Seguici su LinkedIn per non perderti novità, eventi e aggiornamenti dal mondo ECONOVA-AI.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <motion.a
          href="https://www.linkedin.com/company/econova-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#0A66C2] text-white font-semibold px-8 py-3 rounded-pill hover:bg-[#004182] transition-all hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Linkedin className="w-5 h-5" />
          Segui su LinkedIn
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
const SocialPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header><Navbar /></header>
      <main>
        <SocialHero />
        <PostGrid />
        <SocialCTA />
      </main>
      <Footer />
    </>
  );
};

export default SocialPage;
