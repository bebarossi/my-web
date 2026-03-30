import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutGrid, Building2, Globe, Target, Users, BarChart2,
  Zap, Recycle, Droplets, Trash2, TreePine, Wind,
  Lock, Download, Save, AlertTriangle,
} from 'lucide-react';
import VsmeDashboardTab    from './VsmeDashboardTab';
import VsmeForzeTab        from './VsmeForzeTab';
import VsmeEnergiaTab      from './VsmeEnergiaTab';
import VsmeRifiutiTab      from './VsmeRifiutiTab';

/* ── Sidebar config ─────────────────────────────────────────────── */
const sidebarSections = [
  {
    group: 'Panoramica',
    items: [
      { id: 'dashboard',            label: 'Dashboard',              Icon: LayoutGrid, locked: false, pct: null },
    ],
  },
  {
    group: 'Modulo Basic',
    items: [
      { id: 'info-aziendali',       label: 'Informazioni Aziendali', Icon: Building2,  locked: true,  pct: 100 },
      { id: 'info-operazioni',      label: 'Informazioni su Oper..',  Icon: Globe,      locked: true,  pct: 100 },
      { id: 'pratiche',             label: 'Pratiche e Obiettivi',   Icon: Target,     locked: true,  pct: 100 },
      { id: 'forza-lavoro',         label: 'Forza Lavoro',           Icon: Users,      locked: false, pct: 100 },
      { id: 'dati-rif',             label: 'Dati di Riferimento',    Icon: BarChart2,  locked: true,  pct: 0   },
      { id: 'efficienza-energetica',label: 'Efficienza Energetica',  Icon: Zap,        locked: false, pct: 0   },
      { id: 'efficienza-risorse',   label: 'Efficienza Risorse',     Icon: Recycle,    locked: true,  pct: 0   },
      { id: 'acqua',                label: 'Acqua',                  Icon: Droplets,   locked: true,  pct: 0   },
      { id: 'rifiuti',              label: 'Rifiuti',                Icon: Trash2,     locked: false, pct: 0   },
      { id: 'biodiversita',         label: 'Biodiversità',           Icon: TreePine,   locked: true,  pct: 0   },
      { id: 'refrigeranti',         label: 'Refrigeranti',           Icon: Wind,       locked: true,  pct: 0   },
    ],
  },
];

/* ── Top-bar metadata per tab ───────────────────────────────────── */
const tabMeta = {
  'dashboard':             { title: 'Dashboard Analitica',  sub: 'Panoramica' },
  'forza-lavoro':          { title: 'Forza Lavoro',         sub: 'Modulo Basic · B8/B9/B10' },
  'efficienza-energetica': { title: 'Efficienza Energetica', sub: 'Modulo Basic · B3' },
  'rifiuti':               { title: 'Rifiuti',              sub: 'Modulo Basic · B7' },
};

/* ── Percentage badge ───────────────────────────────────────────── */
const PctBadge = ({ pct }) => {
  if (pct === null) return null;
  const color = pct === 100 ? '#4ade80' : '#fb923c';
  return <span className="text-[10px] font-bold flex-shrink-0" style={{ color }}>{pct}%</span>;
};

/* ── Main widget ────────────────────────────────────────────────── */
const VsmeWidget = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const meta = tabMeta[activeTab] || tabMeta['dashboard'];

  return (
    <motion.div
      className="glass-card-strong rounded-3xl border border-black/5 shadow-glass-xl overflow-hidden"
      initial={{ opacity: 0, y: 65, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.95, delay: 0.18, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {/* Mac chrome */}
      <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-black/5">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-xs text-muted font-mono">vsme-dashboard.econova.ai — DEMO S.R.L.</span>
      </div>

      <div className="flex h-[680px]">

        {/* ── Sidebar ─────────────────────────────────────────── */}
        <aside
          className="hidden md:flex w-60 flex-shrink-0 flex-col"
          style={{ background: 'linear-gradient(180deg, #2e7d32 0%, #1a5c06 100%)' }}
        >
          {/* Logo */}
          <div className="px-5 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-300 inline-block" />
              </div>
              <span className="text-white font-black text-sm tracking-wide ml-1">VSME</span>
              <span className="font-medium text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>REPORT</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 py-2 overflow-y-auto">
            {sidebarSections.map(({ group, items }) => (
              <div key={group} className="mb-1">
                <p className="px-4 pt-3 pb-1 text-[9px] font-bold uppercase tracking-widest"
                  style={{ color: 'rgba(255,255,255,0.28)' }}>
                  {group}
                </p>
                {items.map(({ id, label, Icon, locked, pct }) => {
                  const isActive = activeTab === id;
                  if (locked) {
                    return (
                      <div
                        key={id}
                        className="flex items-center gap-2 px-3 py-1.5 mx-2 rounded-lg select-none cursor-not-allowed"
                        style={{ opacity: 0.38 }}
                      >
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.7)' }} />
                        <span className="text-xs flex-1 truncate" style={{ color: 'rgba(255,255,255,0.7)' }}>{label}</span>
                        <PctBadge pct={pct} />
                        <Lock className="w-2.5 h-2.5 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.4)' }} />
                      </div>
                    );
                  }
                  return (
                    <button
                      key={id}
                      onClick={() => setActiveTab(id)}
                      className={`w-full flex items-center gap-2 px-3 py-1.5 mx-2 rounded-lg text-xs font-medium transition-all text-left`}
                      style={{
                        width: 'calc(100% - 1rem)',
                        background: isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
                        color: isActive ? '#fff' : 'rgba(255,255,255,0.65)',
                      }}
                      onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                      onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
                    >
                      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="flex-1 truncate">{label}</span>
                      <PctBadge pct={pct} />
                    </button>
                  );
                })}
              </div>
            ))}
          </nav>

          {/* Bottom — Modulo Comprehensive + footer */}
          <div className="px-4 py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.28)' }}>
              Modulo Comprehensive
            </p>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.55)' }}>Completamento</span>
              <span className="text-[10px] font-bold text-white">35%</span>
            </div>
            <div className="w-full rounded-full h-1.5 overflow-hidden" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <div
                className="h-full rounded-full"
                style={{ width: '35%', background: 'linear-gradient(90deg, #4ade80, #f87171)' }}
              />
            </div>
            <div className="mt-3 flex items-center gap-1 text-[9px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
              <span>powered by</span>
              <span className="font-bold" style={{ color: 'rgba(255,255,255,0.45)' }}>ECONOVA-AI</span>
            </div>
          </div>
        </aside>

        {/* ── Main content ─────────────────────────────────────── */}
        <div className="flex-1 min-w-0 flex flex-col" style={{ background: '#f7fdf7' }}>

          {/* Top bar */}
          <div className="flex items-center justify-between gap-4 px-5 py-3 bg-white border-b border-black/5 flex-wrap gap-y-2">
            <div>
              <p className="text-sm font-bold text-gray-900">{meta.title}</p>
              <p className="text-xs text-gray-400">{meta.sub}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Salvato */}
              <div className="flex items-center gap-1.5 text-xs font-medium mr-1" style={{ color: '#16a34a' }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#16a34a' }} />
                Salvato
              </div>
              {/* IT / EN */}
              <div className="flex rounded overflow-hidden border border-gray-200 text-xs">
                <button className="px-2.5 py-1 font-bold text-white" style={{ background: '#2e7d32' }}>IT</button>
                <button className="px-2.5 py-1 text-gray-500 hover:bg-gray-50 transition-colors">EN</button>
              </div>
              {/* Salva */}
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600 font-medium">
                <Save className="w-3.5 h-3.5" />
                Salva
              </button>
              {/* Esporta Excel */}
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-white font-semibold rounded-lg transition-opacity hover:opacity-90"
                style={{ background: '#2e7d32' }}>
                <Download className="w-3.5 h-3.5" />
                Esporta Excel
              </button>
            </div>
          </div>

          {/* Tab content */}
          <div className="flex-1 p-5 sm:p-6 overflow-y-auto">
            {activeTab === 'dashboard'             && <VsmeDashboardTab />}
            {activeTab === 'forza-lavoro'          && <VsmeForzeTab />}
            {activeTab === 'efficienza-energetica' && <VsmeEnergiaTab />}
            {activeTab === 'rifiuti'               && <VsmeRifiutiTab />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VsmeWidget;
