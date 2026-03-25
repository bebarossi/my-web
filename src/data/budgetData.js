export const budgetTabs = [
  { id: 'overview', label: 'Panoramica Budget' },
  { id: 'analysis', label: 'Analisi Costi' },
  { id: 'forecast', label: 'Forecast' },
];

export const categories = {
  industrial: {
    name: 'Costi Industriali',
    total: '€520K',
    items: [
      { label: 'Materie prime', value: '€185K', budget: '€190K', delta: '-2.6%', positive: true },
      { label: 'Manodopera diretta', value: '€142K', budget: '€138K', delta: '+2.9%', positive: false },
      { label: 'Energia e utilities', value: '€98K', budget: '€105K', delta: '-6.7%', positive: true },
      { label: 'Manutenzione impianti', value: '€95K', budget: '€87K', delta: '+9.2%', positive: false },
    ],
  },
  commercial: {
    name: 'Costi Commerciali',
    total: '€195K',
    items: [
      { label: 'Marketing e pubblicità', value: '€72K', budget: '€65K', delta: '+10.8%', positive: false },
      { label: 'Rete vendita', value: '€68K', budget: '€70K', delta: '-2.9%', positive: true },
      { label: 'Logistica e trasporti', value: '€55K', budget: '€60K', delta: '-8.3%', positive: true },
    ],
  },
  admin: {
    name: 'Costi Amministrativi',
    total: '€127K',
    items: [
      { label: 'Personale amministrativo', value: '€78K', budget: '€80K', delta: '-2.5%', positive: true },
      { label: 'Consulenze professionali', value: '€32K', budget: '€28K', delta: '+14.3%', positive: false },
      { label: 'IT e infrastruttura', value: '€17K', budget: '€19K', delta: '-10.5%', positive: true },
    ],
  },
};

export const alerts = [
  { type: 'warning', text: 'Marketing ha superato il budget del 10.8% — valutare riallocazione' },
  { type: 'alert', text: 'Manutenzione impianti: +9.2% oltre budget, verificare ordini Q2' },
  { type: 'info', text: 'Energia sotto budget: -6.7%, risparmi da efficientamento' },
];
