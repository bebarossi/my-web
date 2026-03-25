import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  // Background gradient shifts from light green → white → warm grey → dark
  const bg = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'linear-gradient(180deg, rgba(46,125,50,0.04) 0%, rgba(255,255,255,1) 100%)',
      'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(246,248,245,1) 100%)',
      'linear-gradient(180deg, rgba(246,248,245,1) 0%, rgba(240,243,238,1) 100%)',
      'linear-gradient(180deg, rgba(240,243,238,1) 0%, rgba(235,238,233,1) 100%)',
      'linear-gradient(180deg, rgba(235,238,233,1) 0%, rgba(29,29,31,1) 100%)',
    ]
  );

  // Blob 1 — large, top-left, moves down-right
  const blob1X = useTransform(scrollYProgress, [0, 1], ['10%', '60%']);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ['5%', '70%']);
  const blob1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.4, 0.8]);
  const blob1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.07, 0.1, 0.06, 0]);

  // Blob 2 — medium, top-right, moves left
  const blob2X = useTransform(scrollYProgress, [0, 1], ['70%', '20%']);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ['15%', '50%']);
  const blob2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1.5]);
  const blob2Opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.05, 0.08, 0.1, 0]);

  // Blob 3 — small accent, moves diagonally
  const blob3X = useTransform(scrollYProgress, [0, 1], ['40%', '80%']);
  const blob3Y = useTransform(scrollYProgress, [0, 1], ['60%', '20%']);
  const blob3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 1.3]);
  const blob3Opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.04, 0.07, 0.09, 0]);

  // Dot grid opacity fades out
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.015, 0]);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {/* Dynamic gradient background */}
      <motion.div className="absolute inset-0" style={{ background: bg }} />

      {/* Parallax blob 1 */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          left: blob1X,
          top: blob1Y,
          scale: blob1Scale,
          opacity: blob1Opacity,
          background: 'radial-gradient(circle, #2e7d32, transparent 70%)',
          filter: 'blur(80px)',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Parallax blob 2 */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          left: blob2X,
          top: blob2Y,
          scale: blob2Scale,
          opacity: blob2Opacity,
          background: 'radial-gradient(circle, #4caf50, transparent 70%)',
          filter: 'blur(100px)',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Parallax blob 3 */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          left: blob3X,
          top: blob3Y,
          scale: blob3Scale,
          opacity: blob3Opacity,
          background: 'radial-gradient(circle, #34c759, transparent 70%)',
          filter: 'blur(60px)',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Subtle dot grid that fades with scroll */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: gridOpacity,
          backgroundImage:
            'radial-gradient(circle, rgba(46,125,50,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

export default ScrollBackground;
