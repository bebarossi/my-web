import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Monitor, Cpu, GraduationCap } from 'lucide-react';
import EconovaLogo from '../ui/EconovaLogo';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { internalLinks, externalLinks, serviceLinks, CTA_DEMO_URL } from '../../data/navigation';

const serviceIcons = {
  '/ai-workstations': Monitor,
  '/edge-solutions': Cpu,
  '/formazione-ai': GraduationCap,
};

/* Hash link that works from any page: navigates to home first if needed */
const NavHashLink = ({ href, onClick, className, children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick();

    if (location.pathname === '/') {
      // On home: let native anchor scroll handle it
      return;
    }

    // On a sub-page: prevent default, navigate to home with hash
    e.preventDefault();
    navigate('/' + href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

const Navbar = () => {
  const scrolled = useScrollPosition(50);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    closeMobile();
    setServicesOpen(false);
  }, [location, closeMobile]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-black/[0.04] shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <EconovaLogo />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-muted">
          {internalLinks.map((link) =>
            link.to ? (
              <Link key={link.to} to={link.to} className="hover:text-dark transition-colors">
                {link.label}
              </Link>
            ) : (
              <NavHashLink key={link.href} href={link.href} className="hover:text-dark transition-colors">
                {link.label}
              </NavHashLink>
            )
          )}

          <span className="w-px h-5 bg-black/10" />

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 hover:text-dark transition-colors"
            >
              Servizi
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute top-full right-0 mt-3 w-[300px] transition-all duration-300 origin-top-right ${
                servicesOpen
                  ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="glass-card-strong rounded-2xl border border-black/5 shadow-glass-xl overflow-hidden p-2">
                {serviceLinks.map((item) => {
                  const Icon = serviceIcons[item.to] || Monitor;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-accent/5 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark text-sm">{item.label}</p>
                        <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {externalLinks.map((link) =>
            link.to ? (
              <Link key={link.to} to={link.to} className="hover:text-dark transition-colors">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="hover:text-dark transition-colors">
                {link.label}
              </a>
            )
          )}

          <a href={CTA_DEMO_URL} className="btn-primary !px-6 !py-2.5 !text-sm">
            Prenota Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2" aria-label="Menu">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-xl border-t border-black/[0.04] px-6 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[600px] py-6' : 'max-h-0 py-0'
        }`}
      >
        <div className="flex flex-col gap-1">
          <p className="text-[10px] font-mono text-muted uppercase tracking-wider mb-2">Piattaforma</p>
          {internalLinks.map((link) =>
            link.to ? (
              <Link key={link.to} to={link.to} onClick={closeMobile} className="text-dark font-medium py-2">
                {link.label}
              </Link>
            ) : (
              <NavHashLink key={link.href} href={link.href} onClick={closeMobile} className="text-dark font-medium py-2">
                {link.label}
              </NavHashLink>
            )
          )}

          {/* Services accordion */}
          <div className="border-t border-black/[0.04] mt-3 pt-3" />
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="w-full flex items-center justify-between text-dark font-medium py-2"
          >
            Servizi
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              mobileServicesOpen ? 'max-h-[200px]' : 'max-h-0'
            }`}
          >
            <div className="ml-4 space-y-1 border-l-2 border-accent/20 pl-4 pb-2">
              {serviceLinks.map((item) => {
                const Icon = serviceIcons[item.to] || Monitor;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMobile}
                    className="flex items-center gap-3 py-2 text-muted hover:text-dark transition-colors"
                  >
                    <Icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <p className="text-[10px] font-mono text-muted uppercase tracking-wider mt-4 mb-2">Azienda</p>
          {externalLinks.map((link) =>
            link.to ? (
              <Link key={link.to} to={link.to} onClick={closeMobile} className="text-dark font-medium py-2">
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} onClick={closeMobile} className="text-dark font-medium py-2">
                {link.label}
              </a>
            )
          )}

          <a href={CTA_DEMO_URL} onClick={closeMobile} className="btn-primary text-center mt-4">
            Prenota Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
