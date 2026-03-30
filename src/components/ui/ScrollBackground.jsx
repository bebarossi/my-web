import { motion, useScroll, useTransform } from 'framer-motion';

/*
 * Posizioni scroll MISURATE (scrollHeight 5118px):
 *  0.00 – 0.133 → Hero
 *  0.133 – 0.345 → ProductsOverview
 *  0.345 – 0.507 → BudgetDashboard  ← ZONA BLU
 *  0.507 – 0.780 → VsmeDashboard    ← ZONA VERDE
 *  0.780 – 0.880 → WhySection
 *  0.880 – 1.00  → CTASection
 */

const ScrollBackground = () => {
  const { scrollYProgress } = useScroll();

  /* ── Layer colore base (flat, no gradient) ── */
  // Verde: Hero + Products + VSME + Why
  const greenOpacity = useTransform(
    scrollYProgress,
    [0,    0.20,  0.32,  0.345, 0.507, 0.54,  1],
    [0.55, 0.22,  0.05,  0.00,  0.00,  0.55,  0.50]
  );

  // Blu: solo zona ECAI-Budget
  const blueOpacity = useTransform(
    scrollYProgress,
    [0,    0.28,  0.345, 0.426, 0.507, 0.54,  1],
    [0.00, 0.00,  0.65,  0.85,  0.65,  0.00,  0.00]
  );

  /* ── Blob verdi — posizioni fisse, solo opacity ── */
  const blobG1Opacity = useTransform(
    scrollYProgress,
    [0,    0.20,  0.345, 0.507, 0.54,  1],
    [0.22, 0.26,  0.04,  0.08,  0.24,  0.14]
  );
  const blobG2Opacity = useTransform(
    scrollYProgress,
    [0,    0.22,  0.345, 0.507, 0.56,  1],
    [0.16, 0.20,  0.03,  0.07,  0.22,  0.14]
  );
  const blobG3Opacity = useTransform(
    scrollYProgress,
    [0,    0.24,  0.345, 0.507, 0.58,  1],
    [0.12, 0.16,  0.02,  0.08,  0.22,  0.15]
  );

  /* ── Blob indigo — solo zona ECAI-Budget ── */
  const blobI1Opacity = useTransform(
    scrollYProgress,
    [0.28,  0.345, 0.426, 0.507, 0.54],
    [0.00,  0.18,  0.28,  0.18,  0.00]
  );
  const blobI2Opacity = useTransform(
    scrollYProgress,
    [0.29,  0.355, 0.430, 0.507, 0.54],
    [0.00,  0.15,  0.22,  0.15,  0.00]
  );
  const blobI3Opacity = useTransform(
    scrollYProgress,
    [0.30,  0.365, 0.435, 0.507, 0.54],
    [0.00,  0.12,  0.18,  0.12,  0.00]
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">

      {/* Base bianca */}
      <div className="absolute inset-0 bg-white" />

      {/* Layer verde */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: greenOpacity,
          background: 'rgba(220,240,220,1)',
          willChange: 'opacity',
        }}
      />

      {/* Layer blu/indigo */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: blueOpacity,
          background: 'rgba(232,235,255,1)',
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

    </div>
  );
};

export default ScrollBackground;
