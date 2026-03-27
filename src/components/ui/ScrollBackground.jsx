import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  // Background rimane sempre su toni verdi/crema — niente grigi o neri
  const bg = useTransform(
    scrollYProgress,
    [0, 0.3, 0.65, 1],
    [
      'linear-gradient(180deg, rgba(232,245,233,0.55) 0%, rgba(255,255,255,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(241,248,241,1) 100%)',
      'linear-gradient(180deg, rgba(241,248,241,1) 0%, rgba(225,242,225,0.9) 100%)',
      'linear-gradient(180deg, rgba(220,237,200,0.75) 0%, rgba(200,230,201,0.55) 100%)',
    ]
  );

  // Blob 1 — grande, top-left → center-right
  const blob1X = useTransform(scrollYProgress, [0, 1], ['4%', '62%']);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ['-2%', '58%']);
  const blob1Scale = useTransform(scrollYProgress, [0, 0.45, 1], [1, 1.65, 0.9]);
  const blob1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0.22, 0.30, 0.20, 0.12]);

  // Blob 2 — medio, top-right → left-mid
  const blob2X = useTransform(scrollYProgress, [0, 1], ['76%', '14%']);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ['8%', '52%']);
  const blob2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.45, 1.75]);
  const blob2Opacity = useTransform(scrollYProgress, [0, 0.25, 0.7, 1], [0.16, 0.24, 0.22, 0.14]);

  // Blob 3 — lime accent, si muove in diagonale verso l'alto
  const blob3X = useTransform(scrollYProgress, [0, 1], ['38%', '78%']);
  const blob3Y = useTransform(scrollYProgress, [0, 1], ['68%', '12%']);
  const blob3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.72, 1.45]);
  const blob3Opacity = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [0.12, 0.20, 0.24, 0.16]);

  // Blob 4 — piccolo, zona centrale
  const blob4X = useTransform(scrollYProgress, [0, 1], ['52%', '28%']);
  const blob4Y = useTransform(scrollYProgress, [0, 1], ['28%', '72%']);
  const blob4Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.75, 1.25, 0.6]);
  const blob4Opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.09, 0.18, 0.14, 0.06]);

  // Dot grid — segue lo scroll
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.045, 0.028, 0.012]);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">

      {/* Gradient background dinamico */}
      <motion.div className="absolute inset-0" style={{ background: bg }} />

      {/* Blob 1 — verde scuro */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          left: blob1X,
          top: blob1Y,
          scale: blob1Scale,
          opacity: blob1Opacity,
          background: 'radial-gradient(circle, #2e7d32, transparent 70%)',
          filter: 'blur(95px)',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Blob 2 — verde medio */}
      <motion.div
        className="absolute w-[660px] h-[660px] rounded-full"
        style={{
          left: blob2X,
          top: blob2Y,
          scale: blob2Scale,
          opacity: blob2Opacity,
          background: 'radial-gradient(circle, #4caf50, transparent 70%)',
          filter: 'blur(115px)',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Blob 3 — verde lime */}
      <motion.div
        className="absolute w-[510px] h-[510px] rounded-full"
        style={{
          left: blob3X,
          top: blob3Y,
          scale: blob3Scale,
          opacity: blob3Opacity,
          background: 'radial-gradient(circle, #34c759, transparent 70%)',
          filter: 'blur(75px)',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Blob 4 — verde chiaro / accento */}
      <motion.div
        className="absolute w-[360px] h-[360px] rounded-full"
        style={{
          left: blob4X,
          top: blob4Y,
          scale: blob4Scale,
          opacity: blob4Opacity,
          background: 'radial-gradient(circle, #a5d6a7, transparent 70%)',
          filter: 'blur(65px)',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Dot grid sottile */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: gridOpacity,
          backgroundImage: 'radial-gradient(circle, rgba(46,125,50,0.38) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

export default ScrollBackground;
