import { useState } from 'react';
import { useInViewReveal } from '../../hooks/useInViewReveal';
import { budgetTabs } from '../../data/budgetData';
import BudgetOverviewTab from './BudgetOverviewTab';
import BudgetAnalysisTab from './BudgetAnalysisTab';
import BudgetForecastTab from './BudgetForecastTab';

const BudgetDashboard = () => {
  const containerRef = useInViewReveal({ selector: '.dashboard-el' });
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section ref={containerRef} id="budget" className="py-16 sm:py-24 md:py-28 relative" aria-labelledby="heading-budget">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="dashboard-el reveal-item mb-8 sm:mb-12 text-center md:text-left">
          <h2 id="heading-budget" className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-2">ECAI-Budget</h2>
          <p className="text-muted text-base sm:text-lg">Controllo di gestione intelligente in tempo reale</p>
        </div>

        <div className="dashboard-el reveal-item delay-1 glass-card-strong rounded-3xl border border-black/5 shadow-glass-xl overflow-hidden">
          {/* Mac Window Chrome */}
          <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-black/5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="ml-3 text-xs text-muted font-mono">www.econova.ai — ECAI-Budget</span>
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            {/* Dashboard Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-black/5">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-dark">www.econova.ai</h3>
                <p className="text-sm text-muted mt-1">Gestione budget mensile — Marzo 2024</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full">
                <div className="w-2 h-2 bg-[#0071e3] rounded-full animate-pulse" />
                <span className="text-xs font-medium text-[#0071e3]">Connesso</span>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2 sm:gap-4 mb-8 flex-wrap sm:flex-nowrap border-b border-black/5 pb-4">
              {budgetTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#0071e3] text-white'
                      : 'text-muted hover:text-dark bg-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[500px]">
              {activeTab === 'overview' && <BudgetOverviewTab />}
              {activeTab === 'analysis' && <BudgetAnalysisTab />}
              {activeTab === 'forecast' && <BudgetForecastTab />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetDashboard;
