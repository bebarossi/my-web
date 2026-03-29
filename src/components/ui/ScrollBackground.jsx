import { motion, useScroll, useTransform } from 'framer-motion';

/*
 * Posizioni scroll reali (misurate):
 *  0.00 – 0.34  → Hero + ProductsOverview
 *  0.34 – 0.51  → BudgetDashboard  ← ZONA BLU/INDIGO
 *  0.51 – 0.76  → VsmeDashboard    ← RITORNO VERDE
 *  0.76 – 1.00  → WhySection + CTA
 *
 * Strategia performance:
 *  - NON animare stringhe gradient (Framer non le interpola, snappa)
 *  - Usare layer sovrapposti con solo opacity (compositing GPU)
 *  - Blob statici (no left/top animati = no layout repaints)
 *  - will-change: opacity su ogni layer animato
 */

const ScrollBackground = () => {
  const { scrollYProgress } = useScroll();

  /* ── Layer colore base ── */
  // Layer verde
  const greenOpacity = useTransform(
    scrollYProgress,
    [0,    0.26,  0.34,  0.51,  0.62,  1],
    [0.55, 0.20,  0.00,  0.10,  0.65,  0.50]
  );

  // Layer blu/indigo
  const blueOpacity = useTransform(
    scrollYProgress,
    [0,    0.26,  0.34,  0.43,  0.51,  0.60,  1],
    [0.00, 0.00,  0.55,  0.85,  0.55,  0.00,  0.00]
  );

  /* ── Blob verdi — posizioni fisse, solo opacity ── */
  const blobG1Opacity = useTransform(
    scrollYProgress,
    [0,    0.26,  0.34,  0.51,  0.62,  1],
    [0.22, 0.26,  0.04,  0.08,  0.24,  0.14]
  );
  const blobG2Opacity = useTransform(
    scrollYProgress,
    [0,    0.28,  0.36,  0.52,  0.65,  1],
    [0.16, 0.20,  0.03,  0.07,  0.22,  0.14]
  );
  const blobG3Opacity = useTransform(
    scrollYProgress,
    [0,    0.30,  0.38,  0.53,  0.68,  1],
    [0.12, 0.16,  0.02,  0.08,  0.22,  0.15]
  );

  /* ── Blob indigo — appaiono solo nella zona ECAI-Budget ── */
  const blobI1Opacity = useTransform(
    scrollYProgress,
    [0.26,  0.34,  0.43,  0.51,  0.59],
    [0.00,  0.18,  0.28,  0.18,  0.00]
  );
  const blobI2Opacity = useTransform(
    scrollYProgress,
    [0.28,  0.36,  0.44,  0.52,  0.60],
    [0.00,  0.15,  0.22,  0.15,  0.00]
  );
  const blobI3Opacity = useTransform(
    scrollYProgress,
    [0.30,  0.38,  0.45,  0.53,  0.60],
    [0.00,  0.12,  0.18,  0.12,  0.00]
  );

  /* ── Dot grid ── */
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.045, 0.028, 0.012]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">

      {/* Base bianca */}
      <div className="absolute inset-0 bg-white" />

      {/* Layer verde */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: greenOpacity,
          background: 'linear-gradient(180deg, rgba(220,240,220,1) 0%, rgba(200,232,200,0.85) 100%)',
          willChange: 'opacity',
        }}
      />

      {/* Layer blu/indigo */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: blueOpacity,
          background: 'linear-gradient(180deg, rgba(235,238,255,1) 0%, rgba(224,228,255,0.95) 100%)',
          willChange: 'opacity',
        }}
      />

      {/* ── Blob verdi — posizioni fisse ── */}
      <motion.div
        className="absolute w-[720px] h-[720px] rounded-full"
        style={{
          left: '8%', top: '18%',
          opacity: blobG1Opacity,
          background: 'radial-gradient(circle, rgba(46,125,50,0.55) 0%, transparent 70%)',
          filter: 'blur(88px)',
          transform: 'translate(-50%, -50%) translateZ(0)',
          willChange: 'opacity',
        }}
      />
      <motion.div
        className="absolute w-[580px] h-[580px] rounded-full"
        style={{
          left: '78%', top: '35%',
          opacity: blobG2Opacity,
          background: 'radial-gradient(circle, rgba(76,175,80,0.50) 0%, transparent 70%)',
          filter: 'blur(100px)',
          transform: 'translate(-50%, -50%) translateZ(0)',
          willChange: 'opacity',
        }}
      />
      <motion.div
        className="absolute w-[460px] h-[460px] rounded-full"
        style={{
          left: '42%', top: '72%',
          opacity: blobG3Opacity,
          background: 'radial-gradient(circle, rgba(52,199,89,0.45) 0%, transparent 70%)',
          filter: 'blur(72px)',
          transform: 'translate(-50%, -50%) translateZ(0)',
          willChange: 'opacity',
        }}
      />

      {/* ── Blob indigo — zona ECAI-Budget ── */}
      <motion.div
        className="absolute w-[780px] h-[780px] rounded-full"
        style={{
          left: '18%', top: '42%',
          opacity: blobI1Opacity,
          background: 'radial-gradient(circle, rgba(79,70,229,0.45) 0%, transparent 70%)',
          filter: 'blur(105px)',
          transform: 'translate(-50%, -50%) translateZ(0)',
          willChange: 'opacity',
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          left: '74%', top: '38%',
          opacity: blobI2Opacity,
          background: 'radial-gradient(circle, rgba(99,102,241,0.40) 0%, transparent 70%)',
          filter: 'blur(110px)',
          transform: 'translate(-50%, -50%) translateZ(0)',
          willChange: 'opacity',
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          left: '50%', top: '48%',
          opacity: blobI3Opacity,
          background: 'radial-gradient(circle, rgba(129,140,248,0.38) 0%, transparent 70%)',
          filter: 'blur(82px)',
          transform: 'translate(-50%, -50%) translateZ(0)',
          willChange: 'opacity',
        }}
      />

      {/* Dot grid sottile */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: gridOpacity,
          backgroundImage: 'radial-gradient(circle, rgba(46,125,50,0.38) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          willChange: 'opacity',
        }}
      />
    </div>
  );
};

export default ScrollBackground;
