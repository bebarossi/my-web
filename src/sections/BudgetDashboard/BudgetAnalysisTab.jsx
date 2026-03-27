import { useState } from 'react';
import { ChevronRight, Brain, BarChart2 } from 'lucide-react';
import { costAreas, costDetails, alerts } from '../../data/budgetData';

/* SVG Donut chart */
const DonutChart = ({ areas }) => {
  const r = 70;
  const cx = 90;
  const cy = 90;
  const circumference = 2 * Math.PI * r;

  let cumPct = 0;
  const slices = areas.map((a) => {
    const offset = circumference * (1 - cumPct / 100);
    const dash   = circumference * (a.pct / 100);
    cumPct += a.pct;
    return { ...a, offset, dash };
  });

  return (
    <svg viewBox="0 0 180 180" className="w-full max-w-[180px]">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f3f4f6" strokeWidth="22" />
      {slices.map((s) => (
        <circle
          key={s.id}
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke={s.hex}
          strokeWidth="22"
          strokeDasharray={`${s.dash} ${circumference - s.dash}`}
          strokeDashoffset={s.offset}
          strokeLinecap="butt"
          transform={`rotate(-90 ${cx} ${cy})`}
        />
      ))}
      <text x={cx} y={cy - 6}  textAnchor="middle" className="fill-gray-800 text-[13px] font-bold" style={{ fontSize: 13, fontWeight: 700 }}>€ 3.28M</text>
      <text x={cx} y={cy + 10} textAnchor="middle" className="fill-gray-400"                        style={{ fontSize: 9 }}>Costi Totali</text>
    </svg>
  );
};

const BudgetAnalysisTab = () => {
  const [expanded, setExpanded] = useState('ind_dir');

  return (
    <div className="space-y-6">

      {/* Section title */}
      <div className="flex items-center gap-2">
        <BarChart2 className="w-4 h-4 text-indigo-500" />
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Ripartizioni Principali</h4>
      </div>

      {/* Donut + legend */}
      <div className="bg-white rounded-xl border border-black/5 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <DonutChart areas={costAreas} />
          </div>
          <div className="flex-1 w-full space-y-3">
            {costAreas.map((a) => (
              <div key={a.id}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: a.hex }} />
                    <span className="text-xs font-medium text-gray-700">{a.label}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-gray-800">{a.formatted}</span>
                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${a.light} ${a.text}`}>{a.pct}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${a.pct}%`, background: a.hex }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion cost detail */}
      <div className="space-y-2">
        {costAreas.map((area) => (
          <div key={area.id} className={`rounded-xl overflow-hidden border ${area.border}`}>
            <button
              onClick={() => setExpanded(expanded === area.id ? null : area.id)}
              className="w-full px-5 py-3.5 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: area.hex }} />
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-800">Area {area.label}</p>
                  <p className="text-xs text-gray-400">Totale: {area.formatted}</p>
                </div>
              </div>
              <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${expanded === area.id ? 'rotate-90' : ''}`} />
            </button>

            {expanded === area.id && (
              <div className="px-5 pb-4 pt-2 bg-gray-50/60 border-t border-black/5 space-y-2">
                {/* Header row */}
                <div className="grid grid-cols-3 px-3 mb-1">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase">Voce</span>
                  <span className="text-[10px] font-semibold text-gray-400 uppercase text-right">Consuntivo</span>
                  <span className="text-[10px] font-semibold text-gray-400 uppercase text-right">Δ Budget</span>
                </div>
                {costDetails[area.id].map((item, i) => (
                  <div key={i} className="grid grid-cols-3 items-center bg-white rounded-lg px-3 py-2.5 border border-black/5">
                    <div>
                      <p className="text-xs font-medium text-gray-800">{item.label}</p>
                      <p className="text-[10px] text-gray-400">Budget: {item.budget}</p>
                    </div>
                    <p className="text-xs font-semibold text-gray-800 text-right">{item.value}</p>
                    <p className={`text-xs font-semibold text-right ${item.positive ? 'text-emerald-600' : 'text-red-500'}`}>
                      {item.delta}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* AI Alerts */}
      <div className="bg-white rounded-xl border border-black/5 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="w-4 h-4 text-indigo-500" />
          <h4 className="text-sm font-semibold text-gray-800">Alert AI</h4>
        </div>
        <div className="space-y-2">
          {alerts.map((alert, i) => {
            const styles = {
              warning: { bg: 'bg-amber-50',  dot: 'bg-amber-400',  text: 'text-amber-800'  },
              alert:   { bg: 'bg-red-50',    dot: 'bg-red-500',    text: 'text-red-800'    },
              info:    { bg: 'bg-indigo-50', dot: 'bg-indigo-400', text: 'text-indigo-800' },
            }[alert.type];
            return (
              <div key={i} className={`${styles.bg} rounded-lg px-4 py-3 flex items-start gap-2.5`}>
                <div className={`w-2 h-2 ${styles.dot} rounded-full flex-shrink-0 mt-1`} />
                <p className={`${styles.text} text-xs font-medium`}>{alert.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BudgetAnalysisTab;
