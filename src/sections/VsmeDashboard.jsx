import React, { useState } from 'react';
import { Shield, FileText, ChevronRight, Target } from 'lucide-react';
import { useInViewReveal } from '../hooks/useInViewReveal';
import { modules, moduleData } from '../data/vsmeData';

const VsmeDashboard = () => {
  const containerRef = useInViewReveal({ selector: '.vsme-el' });
  const [activeModule, setActiveModule] = useState('forza-lavoro');

  const currentData = moduleData[activeModule] || moduleData['forza-lavoro'];
  const completionTotal = Math.round(modules.reduce((sum, m) => sum + m.pct, 0) / modules.length);

  return (
    <section ref={containerRef} id="vsme" className="py-16 sm:py-24 md:py-28 relative overflow-hidden" aria-labelledby="heading-vsme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="vsme-el reveal-item mb-8 sm:mb-12 text-center lg:text-left">
          <h2 id="heading-vsme" className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-2">Report VSME ESG</h2>
          <p className="text-muted text-base sm:text-lg">Sostenibilità e compliance ESG semplificate</p>
        </div>

        <div className="vsme-el reveal-item delay-1 glass-card-strong rounded-3xl border border-black/5 shadow-glass-xl overflow-hidden">
          {/* Mac Window Chrome */}
          <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-black/5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            <span className="ml-3 text-xs text-muted font-mono">www.econova.ai — VSME Report</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-stretch p-6 sm:p-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-3">
              <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-glass">
                <h4 className="font-semibold text-dark mb-4 text-sm">Moduli ESG</h4>
                <div className="space-y-2">
                  {modules.map((module) => {
                    const ModuleIcon = module.icon;
                    return (
                      <button
                        key={module.id}
                        onClick={() => setActiveModule(module.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                          activeModule === module.id
                            ? 'bg-accent text-white shadow-lg'
                            : 'bg-gray-50 text-dark hover:bg-gray-100'
                        }`}
                      >
                        <ModuleIcon className="w-4 h-4 flex-shrink-0" />
                        <span className="flex-1 text-left">{module.name}</span>
                        <span className={`text-xs font-bold ${activeModule === module.id ? 'text-white' : 'text-accent'}`}>
                          {module.pct}%
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Overall Progress */}
              <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-glass">
                <h4 className="font-semibold text-dark mb-4 text-sm">Completamento Totale</h4>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-accent">{completionTotal}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-accent to-accentLime h-full rounded-full transition-all duration-300"
                      style={{ width: `${completionTotal}%` }}
                    />
                  </div>
                </div>
                <p className="text-xs text-muted">Implementazione compliance CSRD</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header Card */}
              <div className="bg-gradient-to-r from-accent to-accentLime rounded-2xl p-8 sm:p-10 text-white shadow-glass-lg overflow-hidden relative">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white/20 rounded-xl">
                      {React.createElement(currentData.icon, { className: 'w-8 h-8' })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">{currentData.title}</h3>
                      <p className="text-white/90">{currentData.subtitle}</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                    <Target className="w-4 h-4" />
                    Modulo attivo
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid sm:grid-cols-3 gap-4">
                {currentData.metrics.map((metric, i) => (
                  <div key={i} className="bg-white rounded-xl border border-black/5 p-6 shadow-glass hover:shadow-glass-lg transition-shadow">
                    <p className="text-xs text-muted uppercase tracking-wider font-mono mb-2">{metric.label}</p>
                    <p className="text-2xl sm:text-3xl font-bold text-dark mb-1">{metric.value}</p>
                    <p className="text-xs text-muted">{metric.unit}</p>
                  </div>
                ))}
              </div>

              {/* Compliance Status */}
              <div className="bg-white rounded-xl border border-black/5 p-6 sm:p-8 shadow-glass">
                <h4 className="font-semibold text-dark mb-6">Status Compliance</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-dark">VSME — Compliance verificata</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#0071e3]" />
                      <span className="text-sm font-medium text-dark">Report Audit — Pronto per esportazione</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#0071e3]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VsmeDashboard;
