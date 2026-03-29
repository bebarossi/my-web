import { useState } from 'react';
import { Calendar, TrendingUp, Gauge, BarChart2, ChevronLeft, ChevronRight, Activity, LayoutGrid } from 'lucide-react';

const MONTHS = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];

const SBU_LIST = ['BAGNI','CUCINE','SEDUTE'];
const SBU_BUDGET = { BAGNI: 75000, CUCINE: 233000, SEDUTE: 75000 };
const SBU_ACTUAL  = { BAGNI: 66000, CUCINE: 187000, SEDUTE: 40600 }; // solo Marzo reale

/* ── Grouped Bar Chart (Ricavi per SBU) ──────────────────────────── */
const SbuBarChart = ({ month }) => {
  const svgW = 560, svgH = 250;
  const ml = 52, mr = 12, mt = 28, mb = 50;
  const pw = svgW - ml - mr;
  const ph = svgH - mt - mb;
  const maxV = 280000;
  const n = SBU_LIST.length;
  const groupW = pw / n;
  const barW = Math.round(groupW * 0.27);
  const gap = 7;

  const toY = v => mt + ph - (v / maxV) * ph;
  const fmtK = v => `€ ${Math.round(v / 1000)}K`;
  const yTicks = [0, 50000, 100000, 150000, 200000, 250000];

  const getActual = sbu => month === 3 ? SBU_ACTUAL[sbu] : 0;

  return (
    <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full" style={{ fontFamily: 'inherit' }}>
      {/* Grid + Y labels */}
      {yTicks.map(v => {
        const y = toY(v);
        return (
          <g key={v}>
            <line x1={ml} y1={y} x2={svgW - mr} y2={y}
              stroke={v === 0 ? '#d1d5db' : '#e5e7eb'} strokeWidth={v === 0 ? 1.5 : 1} />
            <text x={ml - 5} y={y + 3.5} textAnchor="end" fontSize={8.5} fill="#9ca3af">
              {v === 0 ? '0' : `${v / 1000}k`}
            </text>
          </g>
        );
      })}

      {/* Bars per SBU */}
      {SBU_LIST.map((sbu, i) => {
        const budget = SBU_BUDGET[sbu];
        const actual = getActual(sbu);
        const cx = ml + i * groupW + groupW / 2;
        const pairW = 2 * barW + gap;
        const bx = cx - pairW / 2;
        const ax = bx + barW + gap;

        const bH = (budget / maxV) * ph;
        const aH = (actual / maxV) * ph;
        const bY = toY(budget);
        const aY = toY(actual);

        return (
          <g key={sbu}>
            {/* Budget bar (gray) */}
            <rect x={bx} y={bY} width={barW} height={bH} fill="#e2e8f0" rx={2} />
            <text x={bx + barW / 2} y={bY - 5} textAnchor="middle" fontSize={8} fill="#9ca3af">
              {fmtK(budget)}
            </text>

            {/* Actual bar (indigo) */}
            {actual > 0 && (
              <>
                <rect x={ax} y={aY} width={barW} height={aH} fill="#6366f1" rx={2} />
                <text x={ax + barW / 2} y={aY - 5} textAnchor="middle" fontSize={8} fill="#6b7280">
                  {fmtK(actual)}
                </text>
              </>
            )}

            {/* SBU label */}
            <text x={cx} y={svgH - mb + 18} textAnchor="middle" fontSize={8.5} fill="#9ca3af">
              {sbu}
            </text>
          </g>
        );
      })}

      {/* Legend */}
      <rect x={ml + 8}  y={svgH - 14} width={10} height={8} fill="#e2e8f0" rx={1} />
      <text x={ml + 22} y={svgH - 7}  fontSize={8.5} fill="#6b7280">Budget</text>
      <rect x={ml + 68} y={svgH - 14} width={10} height={8} fill="#6366f1" rx={1} />
      <text x={ml + 82} y={svgH - 7}  fontSize={8.5} fill="#6b7280">Actual</text>
    </svg>
  );
};

/* ── Trend Line Chart ────────────────────────────────────────────── */
const TrendChart = ({ year }) => {
  const svgW = 560, svgH = 250;
  const ml = 68, mr = 12, mt = 20, mb = 50;
  const pw = svgW - ml - mr;
  const ph = svgH - mt - mb;
  const maxV = 450000;
  const n = 12;

  const monthX = i => ml + (i / (n - 1)) * pw;
  const toY    = v => mt + ph - (v / maxV) * ph;

  const BUDGET_MONTHLY = 383000;
  const actualData = [0, 0, 293600]; // Gen, Feb, Mar

  const budgetPts = MONTHS.map((_, i) => `${monthX(i)},${toY(BUDGET_MONTHLY)}`).join(' ');
  const actualPts = actualData.map((v, i) => `${monthX(i)},${toY(v)}`).join(' ');

  // fill polygon under actual line
  const fillPts = [
    `${monthX(0)},${toY(0)}`,
    ...actualData.map((v, i) => `${monthX(i)},${toY(v)}`),
    `${monthX(actualData.length - 1)},${toY(0)}`,
  ].join(' ');

  const yTicks = [0, 100000, 200000, 300000, 400000];

  return (
    <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full" style={{ fontFamily: 'inherit' }}>
      <defs>
        <linearGradient id="monGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#6366f1" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid */}
      {yTicks.map(v => {
        const y = toY(v);
        return (
          <g key={v}>
            <line x1={ml} y1={y} x2={svgW - mr} y2={y}
              stroke={v === 0 ? '#d1d5db' : '#e5e7eb'} strokeWidth={v === 0 ? 1.5 : 1} />
            <text x={ml - 5} y={y + 3.5} textAnchor="end" fontSize={8.5} fill="#9ca3af">
              {v === 0 ? '0' : `${v / 1000}k`}
            </text>
          </g>
        );
      })}

      {/* Fill under actual */}
      <polygon points={fillPts} fill="url(#monGrad)" />

      {/* Budget dashed line */}
      <polyline points={budgetPts} fill="none" stroke="#c7d2fe" strokeWidth={1.5} strokeDasharray="5 4" />

      {/* Actual solid line */}
      <polyline points={actualPts} fill="none" stroke="#4f46e5" strokeWidth={2} strokeLinejoin="round" />

      {/* Dots on actual */}
      {actualData.map((v, i) => (
        <circle key={i} cx={monthX(i)} cy={toY(v)} r={3.5} fill="#4f46e5" />
      ))}

      {/* Month labels */}
      {MONTHS.map((m, i) => (
        <text key={m} x={monthX(i)} y={svgH - mb + 18} textAnchor="middle" fontSize={8} fill="#9ca3af">
          {m}
        </text>
      ))}

      {/* Legend */}
      <line x1={ml + 8} y1={svgH - 11} x2={ml + 24} y2={svgH - 11} stroke="#4f46e5" strokeWidth={2} />
      <circle cx={ml + 16} cy={svgH - 11} r={3} fill="#4f46e5" />
      <text x={ml + 28} y={svgH - 7} fontSize={8.5} fill="#6b7280">Actual</text>
      <line x1={ml + 70} y1={svgH - 11} x2={ml + 86} y2={svgH - 11} stroke="#c7d2fe" strokeWidth={1.5} strokeDasharray="5 4" />
      <text x={ml + 90} y={svgH - 7} fontSize={8.5} fill="#6b7280">Budget</text>
    </svg>
  );
};

/* ── Main Tab Component ──────────────────────────────────────────── */
const BudgetMonitoringTab = () => {
  const [month, setMonth] = useState(3);
  const [year,  setYear]  = useState(2026);

  const pct = (actual, budget) => {
    if (!budget || actual === 0) return -100;
    return Math.round(((actual - budget) / budget) * 100);
  };

  const rows = [
    { sbu: 'BAGNI',  mar: 66000,  ytd: 66000,  marB: 75000,  ytdB: 225000  },
    { sbu: 'CUCINE', mar: 187000, ytd: 187000, marB: 233000, ytdB: 700000  },
    { sbu: 'SEDUTE', mar: 40600,  ytd: 40600,  marB: 75000,  ytdB: 225000  },
  ];

  return (
    <div className="space-y-5">

      {/* ── Section title + year nav ── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-indigo-500" />
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Actual vs Budget — DEMO S.R.L.
          </h4>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setYear(y => y - 1)}
            className="p-1 rounded hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-gray-400" />
          </button>
          <span className="text-sm font-bold text-gray-700 w-10 text-center">{year}</span>
          <button
            onClick={() => setYear(y => y + 1)}
            className="p-1 rounded hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* ── KPI Cards ── */}
      <div className="grid grid-cols-3 gap-3">
        {/* Card 1 */}
        <div className="bg-white rounded-xl border border-black/5 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Ricavi Mese Mar</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mt-1">€ 293.600</div>
          <div className="mt-2 flex items-baseline gap-1.5 flex-wrap text-xs">
            <span className="text-red-500 font-semibold">€ -89.733</span>
            <span className="text-gray-400">vs budget € 383K</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl border border-black/5 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Ricavi YTD</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mt-1">€ 293.600</div>
          <div className="mt-2 flex items-baseline gap-1.5 flex-wrap text-xs">
            <span className="text-red-500 font-semibold">€ -856.400</span>
            <span className="text-gray-400">vs budget € 1.1M</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl border border-black/5 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Avanzamento Budget</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mt-1">€ 293.600</div>
          <div className="mt-2 text-xs text-gray-400 leading-snug">
            6.4% del budget annuale (€ 4.6M)
          </div>
        </div>
      </div>

      {/* ── Charts row ── */}
      <div className="grid grid-cols-2 gap-4">
        {/* Bar chart */}
        <div className="bg-white rounded-xl border border-black/5 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-semibold text-gray-800">
                Ricavi per SBU — {MONTHS[month - 1]}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setMonth(m => Math.max(1, m - 1))}
                className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-3 h-3 text-gray-500" />
              </button>
              <span className="text-xs font-semibold text-indigo-600 px-1.5 min-w-[2rem] text-center">
                {MONTHS[month - 1]}
              </span>
              <button
                onClick={() => setMonth(m => Math.min(12, m + 1))}
                className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-3 h-3 text-gray-500" />
              </button>
            </div>
          </div>
          <div className="bg-gray-50/50 rounded-lg px-1 py-2">
            <SbuBarChart month={month} />
          </div>
        </div>

        {/* Trend chart */}
        <div className="bg-white rounded-xl border border-black/5 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-semibold text-gray-800">Trend Ricavi {year}</span>
          </div>
          <div className="bg-gray-50/50 rounded-lg px-1 py-2">
            <TrendChart year={year} />
          </div>
        </div>
      </div>

      {/* ── Variance Table ── */}
      <div className="bg-white rounded-xl border border-black/5 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <LayoutGrid className="w-4 h-4 text-indigo-500" />
          <span className="text-sm font-semibold text-gray-800">Tabella Varianza</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-[10px] font-bold text-gray-400 uppercase tracking-wider pb-2 pr-4">
                  Linea di Business
                </th>
                {['Gen','Feb','Mar','YTD'].map(col => (
                  <th key={col} className="text-right text-[10px] font-bold text-gray-400 uppercase tracking-wider pb-2 px-3">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(row => {
                const marPct = pct(row.mar, row.marB);
                const ytdPct = pct(row.ytd, row.ytdB);
                return (
                  <tr key={row.sbu} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 pr-4 font-semibold text-gray-700">{row.sbu}</td>
                    {/* Gen */}
                    <td className="py-3 px-3 text-right">
                      <div className="text-gray-400 font-medium">—</div>
                      <div className="text-red-400 text-[10px] mt-0.5">-100%</div>
                    </td>
                    {/* Feb */}
                    <td className="py-3 px-3 text-right">
                      <div className="text-gray-400 font-medium">—</div>
                      <div className="text-red-400 text-[10px] mt-0.5">-100%</div>
                    </td>
                    {/* Mar */}
                    <td className="py-3 px-3 text-right">
                      <div className="font-semibold text-gray-800">
                        € {Math.round(row.mar / 1000)}K
                      </div>
                      <div className={`text-[10px] mt-0.5 ${marPct < 0 ? 'text-red-400' : 'text-emerald-500'}`}>
                        {marPct}%
                      </div>
                    </td>
                    {/* YTD */}
                    <td className="py-3 px-3 text-right">
                      <div className="font-semibold text-gray-800">
                        € {row.ytd.toLocaleString('it-IT')}
                      </div>
                      <div className={`text-[10px] mt-0.5 ${ytdPct < 0 ? 'text-red-400' : 'text-emerald-500'}`}>
                        {ytdPct}% vs € {Math.round(row.ytdB / 1000)}K
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-gray-200">
                <td className="py-3 pr-4 font-bold text-gray-800">Totale</td>
                {/* Gen */}
                <td className="py-3 px-3 text-right">
                  <div className="font-semibold text-gray-700">€ 0</div>
                  <div className="text-red-400 text-[10px] mt-0.5">-100%</div>
                </td>
                {/* Feb */}
                <td className="py-3 px-3 text-right">
                  <div className="font-semibold text-gray-700">€ 0</div>
                  <div className="text-red-400 text-[10px] mt-0.5">-100%</div>
                </td>
                {/* Mar */}
                <td className="py-3 px-3 text-right">
                  <div className="font-semibold text-gray-700">€ 294K</div>
                  <div className="text-red-400 text-[10px] mt-0.5">-23%</div>
                </td>
                {/* YTD */}
                <td className="py-3 px-3 text-right">
                  <div className="font-bold text-indigo-600">€ 293.600</div>
                  <div className="text-red-400 text-[10px] mt-0.5">-74.5% vs € 1.1M</div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BudgetMonitoringTab;
