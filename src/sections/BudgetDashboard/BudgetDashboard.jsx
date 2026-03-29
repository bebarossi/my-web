import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, BarChart2, SlidersHorizontal, PieChart,
  List, TrendingUp, AlignJustify, FileText, Target, Activity,
  Lock, RefreshCw, FileSpreadsheet,
} from 'lucide-react';
import { budgetTabs } from '../../data/budgetData';
import BudgetOverviewTab    from './BudgetOverviewTab';
import BudgetAnalysisTab    from './BudgetAnalysisTab';
import BudgetPerformanceTab from './BudgetPerformanceTab';
import BudgetForecastTab    from './BudgetForecastTab';
import BudgetMonitoringTab  from './BudgetMonitoringTab';

/* ── Sidebar section config ─────────────────────────────────────── */
const sidebarSections = [
  {
    group: 'Panoramica',
    items: [
      { id: 'kpi',          label: 'KPI Principali',          Icon: LayoutDashboard,   locked: false },
      { id: 'conto',        label: 'Conto Economico',         Icon: BarChart2,          locked: true  },
      { id: 'ripartizioni', label: 'Ripartizioni Principali', Icon: PieChart,           locked: false },
    ],
  },
  {
    group: 'Analisi Costi',
    items: [
      { id: 'det_costi',  label: 'Dettaglio Costi',  Icon: List,       locked: true },
      { id: 'incidenza',  label: 'Incidenza Ricavi', Icon: TrendingUp, locked: true },
    ],
  },
  {
    group: 'Business Unit',
    items: [
      { id: 'performance', label: 'Performance SBU', Icon: BarChart2,    locked: false },
      { id: 'pl_comp',     label: 'P&L Comparativo', Icon: AlignJustify, locked: true  },
    ],
  },
  {
    group: 'Simulazione',
    items: [
      { id: 'whatif', label: 'Analisi What-If', Icon: SlidersHorizontal, locked: false },
    ],
  },
  {
    group: 'Dettaglio',
    items: [
      { id: 'det_conti',   label: 'Dettaglio Conti', Icon: FileText, locked: true },
      { id: 'bud_ricavi',  label: 'Budget Ricavi',   Icon: Target,   locked: true },
    ],
  },
  {
    group: 'Budget & Monitoring',
    items: [
      { id: 'monitoring', label: 'Budget & Monitoring', Icon: Activity, locked: false },
    ],
  },
];

const BudgetDashboard = () => {
  const [activeTab, setActiveTab] = useState('kpi');

  return (
    <section id="budget" className="py-16 sm:py-24 md:py-28 relative overflow-hidden" aria-labelledby="heading-budget">

      {/* ── Glow ambientale della sezione ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[110%] h-full"
          style={{
            background: 'radial-gradient(ellipse at 50% 20%, rgba(79,70,229,0.07) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[50%] h-[60%]"
          style={{
            background: 'radial-gradient(ellipse at 80% 100%, rgba(99,102,241,0.05) 0%, transparent 60%)',
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* ── Dashboard card con scala+slide ── */}
        <motion.div
          className="glass-card-strong rounded-3xl border border-black/5 shadow-glass-xl overflow-hidden"
          initial={{ opacity: 0, y: 65, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.95, delay: 0.18, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Mac Window Chrome */}
          <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-black/5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="ml-3 text-xs text-muted font-mono">ecai-dashboard.econova.ai — DEMO S.R.L.</span>
          </div>

          {/* Dashboard inner layout */}
          <div className="flex min-h-[600px]">

            {/* ── Sidebar (desktop) ─────────────────────────────── */}
            <aside className="hidden md:flex w-56 flex-shrink-0 flex-col bg-[#1e1b4b]">
              {/* Sidebar header */}
              <div className="px-5 py-5 border-b border-white/10">
                <p className="text-white font-bold text-sm tracking-wide">DEMO S.R.L.</p>
                <p className="text-white/40 text-xs mt-0.5">Consuntivo 2025</p>
              </div>

              {/* Nav groups */}
              <nav className="flex-1 py-3 overflow-y-auto">
                {sidebarSections.map(({ group, items }) => (
                  <div key={group} className="mb-1">
                    <p className="px-4 pt-3 pb-1 text-[9px] font-bold text-white/25 uppercase tracking-widest">
                      {group}
                    </p>
                    {items.map(({ id, label, Icon, locked }) => {
                      const isActive = activeTab === id;
                      if (locked) {
                        return (
                          <div
                            key={id}
                            className="flex items-center gap-2.5 px-4 py-2 mx-2 rounded-lg opacity-35 cursor-not-allowed select-none"
                          >
                            <Icon className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
                            <span className="text-xs text-white/60 flex-1 truncate">{label}</span>
                            <Lock className="w-2.5 h-2.5 text-white/40 flex-shrink-0" />
                          </div>
                        );
                      }
                      return (
                        <button
                          key={id}
                          onClick={() => setActiveTab(id)}
                          className={`w-full flex items-center gap-2.5 px-4 py-2 mx-0 rounded-lg text-xs font-medium transition-all text-left ${
                            isActive
                              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/40 mx-2 w-[calc(100%-1rem)]'
                              : 'text-white/60 hover:text-white hover:bg-white/8 mx-2 w-[calc(100%-1rem)]'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="flex-1 truncate">{label}</span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </nav>

              {/* Sidebar footer */}
              <div className="px-4 py-4 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-white/35 text-[10px]">
                  <RefreshCw className="w-3 h-3" />
                  <span>Aggiornato al 2026-03-26 v3.2</span>
                </div>
              </div>
            </aside>

            {/* ── Main content ──────────────────────────────────── */}
            <div className="flex-1 min-w-0 flex flex-col bg-gray-50/60">

              {/* Top header bar */}
              <div className="flex items-center justify-between gap-4 px-5 sm:px-6 py-3.5 bg-white border-b border-black/5">
                {/* Mobile tabs */}
                <div className="flex gap-1 md:hidden overflow-x-auto scrollbar-hide">
                  {budgetTabs.map(({ id, label, Icon }) => (
                    <button
                      key={id}
                      onClick={() => setActiveTab(id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                        activeTab === id
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-500 hover:text-gray-800'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {label}
                    </button>
                  ))}
                </div>

                {/* Desktop title */}
                <div className="hidden md:block">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Esercizio Fiscale 2025
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 ml-auto flex-shrink-0">
                  <button className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-green-600" />
                    <span className="hidden sm:inline">.xlsx</span>
                  </button>
                  <button className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <FileText className="w-3.5 h-3.5 text-red-500" />
                    <span className="hidden sm:inline">.pdf</span>
                  </button>
                </div>
              </div>

              {/* Tab content */}
              <div className="flex-1 p-5 sm:p-6 overflow-y-auto">
                {activeTab === 'kpi'          && <BudgetOverviewTab />}
                {activeTab === 'ripartizioni' && <BudgetAnalysisTab />}
                {activeTab === 'performance'  && <BudgetPerformanceTab />}
                {activeTab === 'whatif'       && <BudgetForecastTab />}
                {activeTab === 'monitoring'   && <BudgetMonitoringTab />}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BudgetDashboard;
