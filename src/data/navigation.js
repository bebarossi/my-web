export const ECONOVA_BASE = 'https://www.econova.ai';

export const internalLinks = [
  { label: 'Home', to: '/' },
  { label: 'ECAI-Budget', to: '/ecai-budget' },
  { label: 'Report VSME', to: '/vsme-report' },
];

export const serviceLinks = [
  { label: 'AI Workstations', to: '/ai-workstations', desc: 'Hardware e software AI su misura' },
  { label: 'Edge Solutions', to: '/edge-solutions', desc: 'Soluzioni AI per l\'edge computing' },
  { label: 'Formazione AI', to: '/formazione-ai', desc: 'Corsi e workshop di intelligenza artificiale' },
];

export const externalLinks = [
  { label: 'Chi Siamo', to: '/chi-siamo' },
  { label: 'Social', to: '/social' },
];

export const CTA_DEMO_URL = `${ECONOVA_BASE}/contact`;

export const footerLinks = {
  prodotti: [
    { label: 'ECAI-Budget', to: '/ecai-budget' },
    { label: 'Report VSME ESG', to: '/vsme-report' },
  ],
  services: [
    { label: 'AI Workstations', to: '/ai-workstations' },
    { label: 'Edge Solutions', to: '/edge-solutions' },
    { label: 'Formazione AI', to: '/formazione-ai' },
  ],
  azienda: [
    { label: 'Chi Siamo', to: '/chi-siamo' },
    { label: 'Social', to: '/social' },
    { label: 'Contatti', href: CTA_DEMO_URL },
  ],
  legal: [
    { label: 'Privacy Policy', href: `${ECONOVA_BASE}/privacy` },
    { label: 'Terms of Service', href: `${ECONOVA_BASE}/privacy` },
    { label: 'Cookie Policy', href: `${ECONOVA_BASE}/privacy` },
    { label: 'GDPR', href: `${ECONOVA_BASE}/privacy` },
  ],
};
