import { LayoutDashboard, BarChart2, SlidersHorizontal, PieChart } from 'lucide-react';

export const budgetTabs = [
  { id: 'kpi',          label: 'KPI Principali',          Icon: LayoutDashboard   },
  { id: 'ripartizioni', label: 'Ripartizioni Principali', Icon: PieChart          },
  { id: 'performance',  label: 'Performance SBU',         Icon: BarChart2         },
  { id: 'whatif',       label: 'Analisi What-If',         Icon: SlidersHorizontal },
];

/* ── Waterfall chart (Conto Economico Riclassificato) ───────────── */
export const waterfallData = [
  { label: 'Ricavi',            value: 4100000, type: 'positive', formatted: '€4.1M'   },
  { label: 'Costi Ind. Diretti',value: 2100000, type: 'negative', formatted: '-€2.1M'  },
  { label: 'MCG',               value: 2000000, type: 'positive', formatted: '€2.0M'   },
  { label: 'Costi Ind. Indiretti', value: 374000, type: 'negative', formatted: '-€374K' },
  { label: 'MIL',               value: 1600000, type: 'positive', formatted: '€1.6M'   },
  { label: 'Costi Comm.li',     value: 489000,  type: 'negative', formatted: '-€489K'  },
  { label: 'Costi Amm.vi',      value: 316000,  type: 'negative', formatted: '-€316K'  },
  { label: 'EBIT',              value: 842000,  type: 'positive', formatted: '€842K'   },
];

/* ── Performance SBU ────────────────────────────────────────────── */
export const sbuData = [
  { id: 'cucine', label: 'Cucine', color: '#2563eb', ricavi: 1850000, fmtRicavi: '€ 1.850.000', margine: 38.2, ebit: 18.5 },
  { id: 'sedute', label: 'Sedute', color: '#dc2626', ricavi: 1420000, fmtRicavi: '€ 1.420.000', margine: 41.5, ebit: 22.1 },
  { id: 'bagni',  label: 'Bagni',  color: '#059669', ricavi:  854038, fmtRicavi: '€ 854.038',   margine: 39.8, ebit: 19.8 },
];

/* ── KPI cards ─────────────────────────────────────────────────── */
export const kpiData = [
  { label: 'Ricavi Caratteristici', value: '€ 4.124.038', badge: '+3.2% vs budget',  positive: true  },
  { label: 'Margine Op. Lordo',     value: '€ 1.650.195', badge: '40.0% sui ricavi', positive: true  },
  { label: 'EBIT',                  value: '€ 845.695',   badge: '20.5% sui ricavi', positive: true  },
  { label: 'Utile Netto',           value: '€ 236.020',   badge: '5.7% sui ricavi',  positive: true  },
];

/* ── Conto Economico Riclassificato ────────────────────────────── */
export const plData = [
  { label: 'Ricavi Caratteristici',  formatted: '€ 4.124.038', type: 'revenue',  pct: 100.0 },
  { label: 'Costi Ind. Diretti',     formatted: '- € 2.100.000', type: 'cost',   pct: 50.9, colorClass: 'bg-violet-500' },
  { label: 'Costi Ind. Indiretti',   formatted: '- € 373.843',   type: 'cost',   pct: 9.1,  colorClass: 'bg-purple-500' },
  { label: 'Margine Op. Lordo',      formatted: '€ 1.650.195',  type: 'subtotal', pct: 40.0 },
  { label: 'Costi Commerciali',      formatted: '- € 488.600',  type: 'cost',    pct: 11.9, colorClass: 'bg-cyan-500' },
  { label: 'Costi Amministrativi',   formatted: '- € 315.900',  type: 'cost',    pct: 7.7,  colorClass: 'bg-amber-500' },
  { label: 'EBIT',                   formatted: '€ 845.695',    type: 'subtotal', pct: 20.5 },
  { label: 'Oneri Finanziari Netti', formatted: '- € 419.590',  type: 'cost',    pct: 10.2, colorClass: 'bg-red-400' },
  { label: 'EBT',                    formatted: '€ 426.105',    type: 'subtotal', pct: 10.3 },
  { label: 'Imposte',                formatted: '- € 190.085',  type: 'cost',    pct: 4.6,  colorClass: 'bg-red-300' },
  { label: 'Utile Netto',            formatted: '€ 236.020',    type: 'total',   pct: 5.7  },
];

/* ── Analisi Costi ─────────────────────────────────────────────── */
export const costAreas = [
  { id: 'ind_dir', label: 'Ind. Diretta',   value: 2100000, formatted: '€ 2.100.000', pct: 64.0, hex: '#6d28d9', light: 'bg-violet-100',  text: 'text-violet-700',  border: 'border-violet-200' },
  { id: 'ind_ind', label: 'Ind. Indiretta', value: 373843,  formatted: '€ 373.843',   pct: 11.4, hex: '#9333ea', light: 'bg-purple-100',  text: 'text-purple-700',  border: 'border-purple-200' },
  { id: 'comm',    label: 'Commerciale',    value: 488600,  formatted: '€ 488.600',   pct: 14.9, hex: '#0891b2', light: 'bg-cyan-100',    text: 'text-cyan-700',    border: 'border-cyan-200'   },
  { id: 'amm',     label: 'Amministrativa', value: 315900,  formatted: '€ 315.900',   pct: 9.6,  hex: '#d97706', light: 'bg-amber-100',   text: 'text-amber-700',   border: 'border-amber-200'  },
];

export const costDetails = {
  ind_dir: [
    { label: 'Materie Prime',       value: '€ 850.000', budget: '€ 880.000', delta: '-3.4%', positive: true  },
    { label: 'Manodopera Diretta',  value: '€ 720.000', budget: '€ 700.000', delta: '+2.9%', positive: false },
    { label: 'Energia e Utilities', value: '€ 350.000', budget: '€ 375.000', delta: '-6.7%', positive: true  },
    { label: 'Lavorazioni Esterne', value: '€ 180.000', budget: '€ 165.000', delta: '+9.1%', positive: false },
  ],
  ind_ind: [
    { label: 'Ammortamenti',        value: '€ 180.000', budget: '€ 180.000', delta: '0.0%',  positive: true  },
    { label: 'Manutenzioni',        value: '€ 95.000',  budget: '€ 87.000',  delta: '+9.2%', positive: false },
    { label: 'Affitti Industriali', value: '€ 98.843',  budget: '€ 100.000', delta: '-1.2%', positive: true  },
  ],
  comm: [
    { label: 'Rete Vendita',           value: '€ 210.000', budget: '€ 215.000', delta: '-2.3%',  positive: true  },
    { label: 'Marketing e Pubblicità', value: '€ 160.000', budget: '€ 145.000', delta: '+10.3%', positive: false },
    { label: 'Logistica e Trasporti',  value: '€ 118.600', budget: '€ 125.000', delta: '-5.1%',  positive: true  },
  ],
  amm: [
    { label: 'Personale Amm.vo',    value: '€ 195.000', budget: '€ 200.000', delta: '-2.5%',  positive: true  },
    { label: 'Consulenze Prof.li',  value: '€ 78.000',  budget: '€ 68.000',  delta: '+14.7%', positive: false },
    { label: 'IT e Infrastruttura', value: '€ 42.900',  budget: '€ 45.000',  delta: '-4.7%',  positive: true  },
  ],
};

export const alerts = [
  { type: 'warning', text: 'Marketing ha superato il budget del 10.3% — valutare riallocazione Q2' },
  { type: 'alert',   text: 'Manutenzioni impianti: +9.2% oltre budget, verificare ordini aperti' },
  { type: 'info',    text: 'Energia sotto budget: -6.7%, risparmi da piano di efficientamento' },
];

/* ── Analisi What-If ────────────────────────────────────────────── */
export const whatIfBase = {
  ricavi:           4124038,
  costiVariabili:   2588600,   // Ind. Diretti + Commerciali
  costiFissi:       689743,    // Ind. Indiretti + Amministrativi
  oneriFinanziari:  419590,
  aliquotaFiscale:  0.4460,
};
