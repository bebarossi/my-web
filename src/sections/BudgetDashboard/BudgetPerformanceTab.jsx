import { BarChart2, TrendingUp } from 'lucide-react';
import { sbuData } from '../../data/budgetData';

const totalRicavi = sbuData.reduce((s, d) => s + d.ricavi, 0);

const BudgetPerformanceTab = () => (
  <div className="space-y-6">

    {/* Section title */}
    <div className="flex items-center gap-2">
      <BarChart2 className="w-4 h-4 text-indigo-500" />
      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Performance SBU</h4>
    </div>

    {/* SBU cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {sbuData.map((sbu) => (
        <div key={sbu.id} className="bg-white rounded-xl border border-black/5 p-5 space-y-4">
          {/* Header */}
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: sbu.color }} />
            <span className="text-sm font-bold text-gray-900">{sbu.label}</span>
          </div>

          {/* Ricavi */}
          <div>
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Ricavi</p>
            <p className="text-lg font-bold text-gray-900">{sbu.fmtRicavi}</p>
            {/* Revenue share bar */}
            <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${(sbu.ricavi / totalRicavi) * 100}%`, background: sbu.color }}
              />
            </div>
            <p className="text-[10px] text-gray-400 mt-1">
              {((sbu.ricavi / totalRicavi) * 100).toFixed(1)}% del totale
            </p>
          </div>

          {/* Margine & EBIT */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
              <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">Margine</p>
              <p className="text-sm font-bold text-gray-800 mt-0.5">{sbu.margine}%</p>
            </div>
            <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
              <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">EBIT %</p>
              <p className="text-sm font-bold text-gray-800 mt-0.5">{sbu.ebit}%</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Revenue comparison chart */}
    <div className="bg-white rounded-xl border border-black/5 p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-5">
        <TrendingUp className="w-4 h-4 text-indigo-500" />
        <h4 className="text-sm font-semibold text-gray-800">Ricavi per SBU</h4>
      </div>
      <div className="space-y-4">
        {sbuData.map((sbu) => {
          const pct = (sbu.ricavi / totalRicavi) * 100;
          return (
            <div key={sbu.id}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: sbu.color }} />
                  <span className="text-xs font-medium text-gray-700">{sbu.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-gray-800">{sbu.fmtRicavi}</span>
                  <span
                    className="text-[10px] font-semibold px-1.5 py-0.5 rounded text-white"
                    style={{ background: sbu.color }}
                  >
                    {pct.toFixed(1)}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, background: sbu.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default BudgetPerformanceTab;
