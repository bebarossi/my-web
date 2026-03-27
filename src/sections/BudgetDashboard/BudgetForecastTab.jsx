import { useState, useMemo } from 'react';
import { SlidersHorizontal, TrendingUp, BarChart2, RefreshCw, Zap, Target } from 'lucide-react';

/* ── Base values ────────────────────────────────────────────────── */
const BASE = {
  ricavi:  4_124_038,
  dir:     2_100_000,
  indir:     373_843,
  comm:      488_600,
  amm:       315_900,
};

const SLIDERS = [
  { id: 'ricavi', label: 'Ricavi',               color: '#2563eb' },
  { id: 'dir',    label: 'Costi Ind. Diretti',   color: '#7c3aed' },
  { id: 'indir',  label: 'Costi Ind. Indiretti', color: '#9333ea' },
  { id: 'comm',   label: 'Costi Commerciali',    color: '#0891b2' },
  { id: 'amm',    label: 'Costi Amministrativi', color: '#d97706' },
];

/* ── Formatters ─────────────────────────────────────────────────── */
const fmtEuro = (v) =>
  '€\u00a0' + Math.round(Math.abs(v)).toLocaleString('it-IT');

const fmtBar = (v) => {
  const abs = Math.abs(v);
  const sign = v < 0 ? '-' : '';
  if (abs >= 1_000_000) return `${sign}€${(abs / 1_000_000).toFixed(1)}M`;
  return `${sign}€${Math.round(abs / 1000)}K`;
};

/* ── Slider row ─────────────────────────────────────────────────── */
const SliderRow = ({ label, value, onChange, color }) => {
  const min = -30, max = 30;
  const center = ((0 - min) / (max - min)) * 100;     // always 50
  const pos    = ((value - min) / (max - min)) * 100;
  const lo = Math.min(center, pos);
  const hi = Math.max(center, pos);
  const bg =
    value === 0
      ? '#e5e7eb'
      : `linear-gradient(to right, #e5e7eb 0%, #e5e7eb ${lo}%, ${color} ${lo}%, ${color} ${hi}%, #e5e7eb ${hi}%, #e5e7eb 100%)`;

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium" style={{ color }}>{label}</span>
        <span className={`text-sm font-bold tabular-nums ${
          value > 0 ? 'text-emerald-600' : value < 0 ? 'text-red-500' : 'text-gray-400'
        }`}>
          {value > 0 ? '+' : ''}{value}%
        </span>
      </div>
      <input
        type="range" min={min} max={max} step={1} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
        style={{ background: bg, accentColor: color }}
      />
    </div>
  );
};

/* ── Reactive waterfall chart ───────────────────────────────────── */
const WaterfallChart = ({ data, maxV }) => {
  const svgW = 760, svgH = 300;
  const ml = 78, mr = 16, mt = 30, mb = 52;
  const pw = svgW - ml - mr;
  const ph = svgH - mt - mb;

  const yStep  = maxV / 4;
  const yLabels = [0, 1, 2, 3, 4].map((i) => {
    const v = i * yStep;
    return {
      v,
      label: v === 0 ? '€0' : `€${(v / 1_000_000).toFixed(v % 1_000_000 === 0 ? 0 : 1)}M`,
    };
  });

  const n = data.length;
  const slotW  = pw / n;
  const barW   = Math.round(slotW * 0.62);
  const barOff = (slotW - barW) / 2;
  const toY    = (v) => mt + ph - (Math.abs(v) / maxV) * ph;

  const POS = '#62b97d';
  const NEG = '#e8807b';

  return (
    <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full" style={{ fontFamily: 'inherit' }}>
      {yLabels.map(({ v, label }) => {
        const y = toY(v);
        return (
          <g key={v}>
            <line x1={ml} y1={y} x2={svgW - mr} y2={y}
              stroke={v === 0 ? '#d1d5db' : '#e5e7eb'}
              strokeWidth={v === 0 ? 1.5 : 1} />
            <text x={ml - 7} y={y + 3.5} textAnchor="end" fontSize={9} fill="#9ca3af">
              {label}
            </text>
          </g>
        );
      })}
      {data.map((d, i) => {
        const x    = ml + i * slotW + barOff;
        const barH = Math.max((Math.abs(d.value) / maxV) * ph, 1);
        const y    = mt + ph - barH;
        const fill = d.type === 'positive' ? POS : NEG;
        const cx   = x + barW / 2;
        return (
          <g key={d.label}>
            <rect x={x} y={y} width={barW} height={barH} fill={fill} rx={2} />
            <text x={cx} y={y - 5} textAnchor="middle" fontSize={8.5} fill="#6b7280" fontWeight="500">
              {fmtBar(d.type === 'negative' ? -d.value : d.value)}
            </text>
            <text x={cx} y={svgH - mb + 17} textAnchor="middle" fontSize={8.5} fill="#9ca3af">
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

/* ── KPI card ───────────────────────────────────────────────────── */
const KpiCard = ({ label, value, subtitle, color, Icon }) => (
  <div className="bg-white rounded-xl border border-black/5 p-4 sm:p-5">
    <div className="flex items-start justify-between mb-3">
      <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{label}</span>
      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}15` }}>
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
    </div>
    <div className="text-xl sm:text-2xl font-bold tabular-nums" style={{ color }}>
      {fmtEuro(value)}
    </div>
    <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
  </div>
);

/* ── Main tab ───────────────────────────────────────────────────── */
const BudgetForecastTab = () => {
  const [vars, setVars] = useState({ ricavi: 0, dir: 0, indir: 0, comm: 0, amm: 0 });

  const set = (id) => (v) => setVars((prev) => ({ ...prev, [id]: v }));

  const { ricavi, costiDir, costiIndir, costiComm, costiAmm, mcg, mil, ebit, maxV, chartData } =
    useMemo(() => {
      const ricavi     = BASE.ricavi * (1 + vars.ricavi / 100);
      const costiDir   = BASE.dir    * (1 + vars.dir    / 100);
      const costiIndir = BASE.indir  * (1 + vars.indir  / 100);
      const costiComm  = BASE.comm   * (1 + vars.comm   / 100);
      const costiAmm   = BASE.amm    * (1 + vars.amm    / 100);
      const mcg  = ricavi - costiDir;
      const mil  = mcg - costiIndir;
      const ebit = mil - costiComm - costiAmm;

      const topVal = Math.max(ricavi, Math.abs(mcg), Math.abs(mil));
      const maxV   = Math.ceil((topVal * 1.18) / 1_000_000) * 1_000_000;

      const chartData = [
        { label: 'Ricavi',              value: ricavi,    type: 'positive' },
        { label: 'Costi Ind. Diretti',  value: costiDir,  type: 'negative' },
        { label: 'MCG',                 value: mcg,       type: mcg  >= 0 ? 'positive' : 'negative' },
        { label: 'Costi Ind. Indiretti',value: costiIndir,type: 'negative' },
        { label: 'MIL',                 value: mil,       type: mil  >= 0 ? 'positive' : 'negative' },
        { label: 'Costi Comm.li',       value: costiComm, type: 'negative' },
        { label: 'Costi Amm.vi',        value: costiAmm,  type: 'negative' },
        { label: 'EBIT',                value: ebit,      type: ebit >= 0 ? 'positive' : 'negative' },
      ];

      return { ricavi, costiDir, costiIndir, costiComm, costiAmm, mcg, mil, ebit, maxV, chartData };
    }, [vars]);

  const isBase = Object.values(vars).every((v) => v === 0);

  return (
    <div className="space-y-5">

      {/* Section header */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
          <SlidersHorizontal className="w-4 h-4 text-indigo-500" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-gray-900 leading-tight">Analisi di Sensibilità (What-If)</h4>
          <p className="text-xs text-gray-400 mt-0.5">Simula l'impatto di variazioni percentuali su ricavi e costi operativi</p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-4">

        {/* ── Left: Leve Decisionali ───────────────────────────── */}
        <div className="lg:w-[340px] flex-shrink-0 bg-white rounded-xl border border-black/5 p-5 space-y-5">
          {/* Card header */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center">
              <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-500" />
            </div>
            <span className="text-sm font-semibold text-gray-800">Leve Decisionali</span>
          </div>

          {/* Sliders */}
          <div className="space-y-5">
            {SLIDERS.map(({ id, label, color }) => (
              <SliderRow
                key={id}
                label={label}
                value={vars[id]}
                onChange={set(id)}
                color={color}
              />
            ))}
          </div>

          {/* Reset */}
          <button
            onClick={() => setVars({ ricavi: 0, dir: 0, indir: 0, comm: 0, amm: 0 })}
            disabled={isBase}
            className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium border transition-colors ${
              isBase
                ? 'text-gray-300 border-gray-100 cursor-default'
                : 'text-gray-500 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Ripristina Valori
          </button>
        </div>

        {/* ── Right: KPI cards + chart ─────────────────────────── */}
        <div className="flex-1 min-w-0 space-y-4">

          {/* 2×2 KPI grid */}
          <div className="grid grid-cols-2 gap-3">
            <KpiCard
              label="RICAVI"
              value={ricavi}
              subtitle="Ricavi caratteristici"
              color="#2563eb"
              Icon={BarChart2}
            />
            <KpiCard
              label="MCG"
              value={mcg}
              subtitle={`${((mcg / ricavi) * 100).toFixed(1)}% sui ricavi`}
              color="#059669"
              Icon={TrendingUp}
            />
            <KpiCard
              label="MIL"
              value={mil}
              subtitle={`${((mil / ricavi) * 100).toFixed(1)}% sui ricavi`}
              color="#0891b2"
              Icon={Zap}
            />
            <KpiCard
              label="EBIT"
              value={ebit}
              subtitle={`${((ebit / ricavi) * 100).toFixed(1)}% sui ricavi`}
              color="#d97706"
              Icon={Target}
            />
          </div>

          {/* Reactive waterfall chart */}
          <div className="bg-white rounded-xl border border-black/5 p-4">
            <div className="bg-gray-50/50 rounded-lg px-2 py-3">
              <WaterfallChart data={chartData} maxV={maxV} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetForecastTab;
