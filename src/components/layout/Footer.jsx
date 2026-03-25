import { Link } from 'react-router-dom';
import EconovaLogo from '../ui/EconovaLogo';
import { footerLinks } from '../../data/navigation';

const Footer = () => (
  <footer className="bg-[#1d1d1f] py-12 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="mb-6">
            <EconovaLogo white />
          </div>
          <p className="text-white/50 text-sm mb-6">
            Piattaforme AI per il controllo di gestione e la sostenibilità delle PMI.
          </p>

          {/* NVIDIA Badge */}
          <div className="flex items-center gap-3">
            <img src="/nvidia-badge.svg" alt="NVIDIA Inception Program" className="h-12 object-contain" />
            <span className="text-xs text-white/40">
              Member of NVIDIA
              <br />
              Inception Program
            </span>
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Prodotti</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.prodotti.map((link) => (
              <li key={link.label}>
                {link.to ? (
                  <Link to={link.to} className="text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.services.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-white/50 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Azienda</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.azienda.map((link) => (
              <li key={link.label}>
                {link.to ? (
                  <Link to={link.to} className="text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legal</h4>
          <ul className="space-y-2 text-sm">
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-white/50 hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 pt-8 sm:pt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} ECONOVA. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6 text-white/40">
            <a href="https://www.linkedin.com/company/econova-ai" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.77.62-1.4 1.4-1.4a1.4 1.4 0 0 1 1.4 1.4v4.34h2.5M6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-1 13h2.5V8h-2.5v14z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.87.39-1.8.65-2.77.77 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.63-2.14-10.03-5.08-.42.72-.66 1.56-.66 2.46 0 1.67.85 3.14 2.14 4.01-.79-.03-1.54-.24-2.19-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.91 2.4 3.3 4.5 3.34-1.65 1.29-3.73 2.06-5.99 2.06-.39 0-.77-.02-1.15-.07 2.14 1.37 4.68 2.17 7.39 2.17 8.87 0 13.7-7.35 13.7-13.7 0-.21 0-.42-.01-.62.94-.68 1.76-1.53 2.41-2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
