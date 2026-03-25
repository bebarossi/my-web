import { Link } from 'react-router-dom';

const EconovaLogo = ({ className = '', white = false }) => (
  <Link to="/" className={`flex items-center gap-0.5 font-extrabold text-xl sm:text-2xl tracking-tight ${className}`}>
    <span className={white ? 'text-white' : 'text-accent'}>ECONOVA</span>
    <span className={white ? 'text-white/70' : 'text-accentLime'}>-AI</span>
  </Link>
);

export default EconovaLogo;
