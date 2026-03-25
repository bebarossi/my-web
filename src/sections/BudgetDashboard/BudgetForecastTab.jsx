import { TrendingUp, BarChart3, Zap } from 'lucide-react';

const BudgetForecastTab = () => (
  <div className="space-y-8">
    {/* Forecast Chart */}
    <div className="bg-white rounded-xl border border-black/5 p-6 sm:p-8">
      <h4 className="font-semibold text-dark mb-6">Budget Forecast — Q2 2024</h4>

      <svg viewBox="0 0 800 300" className="w-full h-auto mb-6">
        {/* Grid */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={`hline-${i}`} x1="60" y1={30 + i * 60} x2="750" y2={30 + i * 60} stroke="#e5e7eb" strokeWidth="1" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`vline-${i}`} x1={60 + i * 140} y1="20" x2={60 + i * 140} y2="280" stroke="#e5e7eb" strokeWidth="1" />
        ))}

        {/* X-axis labels */}
        <text x="60" y="300" textAnchor="middle" className="text-xs fill-muted">Apr</text>
        <text x="200" y="300" textAnchor="middle" className="text-xs fill-muted">Mag</text>
        <text x="340" y="300" textAnchor="middle" className="text-xs fill-muted">Giu</text>
        <text x="480" y="300" textAnchor="middle" className="text-xs fill-muted">Lug</text>
        <text x="620" y="300" textAnchor="middle" className="text-xs fill-muted">Ago</text>
        <text x="750" y="300" textAnchor="middle" className="text-xs fill-muted">Set</text>

        {/* Y-axis label */}
        <text x="20" y="160" textAnchor="middle" className="text-xs fill-muted">&euro;800K</text>

        {/* Expected (solid line) */}
        <polyline
          points="60,200 200,160 340,180 480,140 620,120 750,100"
          fill="none"
          stroke="#0071e3"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[{ x: 60, y: 200 }, { x: 200, y: 160 }, { x: 340, y: 180 }, { x: 480, y: 140 }, { x: 620, y: 120 }, { x: 750, y: 100 }].map((p, i) => (
          <circle key={`dot-expected-${i}`} cx={p.x} cy={p.y} r="4" fill="white" stroke="#0071e3" strokeWidth="2" />
        ))}

        {/* Actual (dashed line) */}
        <polyline
          points="60,220 200,190 340,210 480,175 620,155 750,130"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="3"
          strokeDasharray="5,5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[{ x: 60, y: 220 }, { x: 200, y: 190 }, { x: 340, y: 210 }, { x: 480, y: 175 }, { x: 620, y: 155 }, { x: 750, y: 130 }].map((p, i) => (
          <circle key={`dot-actual-${i}`} cx={p.x} cy={p.y} r="3.5" fill="#60a5fa" />
        ))}
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-[#0071e3]" />
          <span className="text-sm text-muted">Previsto</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-[#60a5fa]" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #60a5fa 0, #60a5fa 2px, transparent 2px, transparent 5px)' }} />
          <span className="text-sm text-muted">Actual</span>
        </div>
      </div>
    </div>

    {/* Forecast Metrics Cards */}
    <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 sm:pb-0 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible scrollbar-hide">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-100 min-w-[220px] sm:min-w-0 snap-start">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-muted uppercase tracking-wider">Ricavi Previsti Q2</span>
          <TrendingUp className="w-4 h-4 text-[#0071e3]" />
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-dark">&euro; 1.38M</div>
        <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+11.3%</div>
      </div>

      <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-100 min-w-[220px] sm:min-w-0 snap-start">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-muted uppercase tracking-wider">Margini Previsti</span>
          <BarChart3 className="w-4 h-4 text-[#0071e3]" />
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-dark">34.2%</div>
        <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+2.8pp</div>
      </div>

      <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-100 min-w-[220px] sm:min-w-0 snap-start">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-muted uppercase tracking-wider">ROI Previsto</span>
          <Zap className="w-4 h-4 text-[#0071e3]" />
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-dark">18.4%</div>
        <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+2.1pp</div>
      </div>
    </div>
  </div>
);

export default BudgetForecastTab;
