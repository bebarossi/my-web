import { RefreshCw, Building2, TrendingUp, Users, LayoutTemplate, Euro, Zap, Sun, Snowflake, Gauge, Droplets, Trash2, AlertTriangle, TreePine, UserCheck, Handshake, ShieldCheck } from 'lucide-react';

const MetricItem = ({ icon: Icon, label, unit }) => (
  <div className="flex flex-col items-center text-center px-3 py-3">
    <Icon className="w-6 h-6 mb-2" style={{ color: 'rgba(46,125,50,0.45)' }} />
    <div className="text-gray-400 text-sm font-medium mb-1">—</div>
    <div className="w-8 border-t border-gray-200 mb-2" />
    <div className="text-[9.5px] font-bold text-gray-500 uppercase tracking-wider leading-tight text-center">
      {label}
    </div>
    {unit && <div className="text-[9px] text-gray-400 mt-0.5">{unit}</div>}
  </div>
);

const SectionCard = ({ icon: Icon, title, cols = 5, children }) => (
  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden mb-4 shadow-sm">
    <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-50">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(46,125,50,0.08)' }}>
        <Icon className="w-4 h-4" style={{ color: '#2e7d32' }} />
      </div>
      <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
    </div>
    <div className={`grid divide-x divide-gray-100`} style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
      {children}
    </div>
  </div>
);

const VsmeDashboardTab = () => (
  <div>
    {/* Header */}
    <div className="flex items-start justify-between mb-5">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Analitica</h2>
        <p className="text-sm text-gray-400 mt-1">
          Riepilogo dei principali indicatori ESG raccolti nelle sezioni del report
        </p>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 border-2 text-sm font-semibold rounded-full hover:opacity-80 transition-opacity flex-shrink-0"
        style={{ borderColor: '#2e7d32', color: '#2e7d32' }}>
        <RefreshCw className="w-3.5 h-3.5" />
        Aggiorna Dashboard
      </button>
    </div>

    {/* Profilo Aziendale */}
    <SectionCard icon={Building2} title="Profilo Aziendale" cols={5}>
      <MetricItem icon={Euro}          label="Fatturato"            unit="EUR" />
      <MetricItem icon={Users}         label="Dipendenti (FTE)" />
      <MetricItem icon={TrendingUp}    label="Fatturato / FTE"      unit="EUR" />
      <MetricItem icon={UserCheck}     label="Donne in Forza Lavoro" />
      <MetricItem icon={LayoutTemplate} label="Superficie Totale"   unit="m²" />
    </SectionCard>

    {/* Energia & Emissioni */}
    <SectionCard icon={Zap} title="Energia & Emissioni" cols={5}>
      <MetricItem icon={Zap}       label="Consumo Energetico" />
      <MetricItem icon={Euro}      label="Costo Energetico"    unit="EUR" />
      <MetricItem icon={Sun}       label="Energia Rinnovabile" />
      <MetricItem icon={Snowflake} label="Refrigeranti in uso" />
      <MetricItem icon={Gauge}     label="Intensità Energetica" unit="EUR en. / EUR fatt." />
    </SectionCard>

    {/* Risorse & Rifiuti */}
    <SectionCard icon={Trash2} title="Risorse & Rifiuti" cols={5}>
      <MetricItem icon={Droplets}      label="Consumo Acqua"         unit="m³" />
      <MetricItem icon={Euro}          label="Costo Acqua"           unit="EUR" />
      <MetricItem icon={Trash2}        label="Rifiuti Totali"        unit="t" />
      <MetricItem icon={RefreshCw}     label="Rifiuti Riciclabili" />
      <MetricItem icon={AlertTriangle} label="Rifiuti Pericolosi"    unit="t" />
    </SectionCard>

    {/* Sociale & Governance */}
    <SectionCard icon={ShieldCheck} title="Sociale & Governance" cols={4}>
      <MetricItem icon={Users}     label="Ore Formazione / Dip." />
      <MetricItem icon={Handshake} label="Fornitori con Codice Etico" />
      <MetricItem icon={TreePine}  label="Sup. Biodiversità"   unit="m²" />
      <MetricItem icon={ShieldCheck} label="Non Conformità Governance" />
    </SectionCard>
  </div>
);

export default VsmeDashboardTab;
