import { TrendingUp, BarChart3, Target, Zap, BarChart2 } from 'lucide-react';
import { kpiData, waterfallData } from '../../data/budgetData';

const icons = [TrendingUp, BarChart3, Target, Zap];
const iconColors = ['text-indigo-500', 'text-purple-500', 'text-violet-500', 'text-cyan-500'];
const cardGradients = [
  'from-white to-indigo-50 border-indigo-100',
  'from-white to-purple-50 border-purple-100',
  'from-white to-violet-50 border-violet-100',
  'from-white to-cyan-50  border-cyan-100',
];

/* ── Waterfall / Bar chart ──────────────────────────────────────── */
const WaterfallChart = () => {
  const svgW  = 760;
  const svgH  = 300;
  const ml    = 90;   // margin left  (Y-axis labels)
  const mr    = 16;   // margin right
  const mt    = 30;   // margin top   (value labels)
  const mb    = 52;   // margin bottom (X-axis labels)
  const pw    = svgW - ml - mr;   // plot width  = 654
  const ph    = svgH - mt - mb;   // plot height = 218
  const maxV  = 4_500_000;

  const n       = waterfallData.length;
  const slotW   = pw / n;                       // ~81.75
  const barW    = Math.round(slotW * 0.62);     // ~50
  const barOff  = (slotW - barW) / 2;

  // Y coordinate for a given value (bars grow upward from bottom)
  const toY = (v) => mt + ph - (v / maxV) * ph;

  const yLabels = [
    { v: 0,         label: '€0'         },
    { v: 1_000_000, label: '€1,000,000' },
    { v: 2_000_000, label: '€2,000,000' },
    { v: 3_000_000, label: '€3,000,000' },
    { v: 4_000_000, label: '€4,000,000' },
  ];

  const POS_COLOR = '#62b97d';
  const NEG_COLOR = '#e8807b';

  return (
    <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full" style={{ fontFamily: 'inherit' }}>
      {/* Horizontal grid lines + Y-axis labels */}
      {yLabels.map(({ v, label }) => {
        const y = toY(v);
        return (
          <g key={v}>
            <line
              x1={ml} y1={y} x2={svgW - mr} y2={y}
              stroke={v === 0 ? '#d1d5db' : '#e5e7eb'}
              strokeWidth={v === 0 ? 1.5 : 1}
            />
            <text x={ml - 7} y={y + 3.5} textAnchor="end" fontSize={9} fill="#9ca3af">
              {label}
            </text>
          </g>
        );
      })}

      {/* Bars + labels */}
      {waterfallData.map((d, i) => {
        const x      = ml + i * slotW + barOff;
        const barH   = (d.value / maxV) * ph;
        const y      = toY(d.value);
        const fill   = d.type === 'positive' ? POS_COLOR : NEG_COLOR;
        const cx     = x + barW / 2;

        return (
          <g key={d.label}>
            {/* Bar */}
            <rect x={x} y={y} width={barW} height={barH} fill={fill} rx={2} />
            {/* Value label above bar */}
            <text x={cx} y={y - 5} textAnchor="middle" fontSize={8.5} fill="#6b7280" fontWeight="500">
              {d.formatted}
            </text>
            {/* X-axis label */}
            <text x={cx} y={svgH - mb + 17} textAnchor="middle" fontSize={8.5} fill="#9ca3af">
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

/* ── Tab component ──────────────────────────────────────────────── */
const BudgetOverviewTab = () => (
  <div className="space-y-6">

    {/* Section title */}
    <div className="flex items-center gap-2">
      <BarChart3 className="w-4 h-4 text-indigo-500" />
      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">KPI Principali</h4>
    </div>

    {/* KPI Cards */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {kpiData.map((kpi, i) => {
        const Icon = icons[i];
        return (
          <div key={kpi.label} className={`bg-gradient-to-br ${cardGradients[i]} rounded-xl p-4 border`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider leading-tight">{kpi.label}</span>
              <Icon className={`w-4 h-4 flex-shrink-0 ${iconColors[i]}`} />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900">{kpi.value}</div>
            <div className={`mt-2 inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full ${
              kpi.positive ? 'text-emerald-700 bg-emerald-50' : 'text-red-700 bg-red-50'
            }`}>
              {kpi.badge}
            </div>
          </div>
        );
      })}
    </div>

    {/* Conto Economico Riclassificato — Waterfall chart */}
    <div className="bg-white rounded-xl border border-black/5 p-5 sm:p-6">
      {/* Card header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
          <BarChart2 className="w-4 h-4 text-indigo-500" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-gray-900 leading-tight">Conto Economico Riclassificato</h4>
          <p className="text-xs text-gray-400 mt-0.5">Dai ricavi al risultato netto, passo dopo passo</p>
        </div>
      </div>

      {/* Chart area */}
      <div className="bg-gray-50/50 rounded-lg px-2 py-3">
        <WaterfallChart />
      </div>
    </div>
  </div>
);

export default BudgetOverviewTab;
