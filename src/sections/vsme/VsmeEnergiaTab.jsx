import { useState } from 'react';
import { Zap, CheckCircle, HelpCircle, Info, Car, Sparkles } from 'lucide-react';

const scope1 = [
  { fonte: 'Carbone',                  unita: 'kg'  },
  { fonte: 'Lignite',                  unita: 'kg'  },
  { fonte: 'Gasolio per riscaldamento', unita: 'l'  },
  { fonte: 'Gas naturale',             unita: 'kWh' },
  { fonte: 'Legno',                    unita: 'kg'  },
  { fonte: 'Legno - Pellets',          unita: 'kg'  },
  { fonte: 'GPL (riscaldamento)',       unita: 'l'   },
  { fonte: 'Olio combustibile',        unita: 'l'   },
];

const scope1veicoli = [
  { fonte: 'Gasolio veicoli aziendali', unita: 'l' },
  { fonte: 'Benzina veicoli aziendali', unita: 'l' },
  { fonte: 'GPL veicoli',               unita: 'l' },
  { fonte: 'Gas naturale veicoli',     unita: 'kWh' },
];

const scope2 = [
  { fonte: 'Energia elettrica (rete)', unita: 'kWh' },
  { fonte: 'Energia elettrica (rinnovabile certificata)', unita: 'kWh' },
  { fonte: 'Teleriscaldamento',        unita: 'kWh' },
];

const ScopeTable = ({ icon: Icon, title, rows, values, onChange }) => (
  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm mb-4">
    <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(46,125,50,0.08)' }}>
        <Icon className="w-4 h-4" style={{ color: '#2e7d32' }} />
      </div>
      <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
    </div>

    {/* Col headers */}
    <div className="grid grid-cols-12 gap-2 px-5 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
      <div className="col-span-4">Fonte</div>
      <div className="col-span-1">Unità</div>
      <div className="col-span-3">Consumo</div>
      <div className="col-span-3">Costo (EUR)</div>
      <div className="col-span-1" />
    </div>

    <div>
      {rows.map((row, i) => {
        const keyC = `${title}-${row.fonte}-consumo`;
        const keyP = `${title}-${row.fonte}-costo`;
        return (
          <div key={i} className="grid grid-cols-12 gap-2 px-5 py-2.5 items-center border-b border-gray-50 last:border-0 hover:bg-gray-50/40 transition-colors">
            <div className="col-span-4 text-sm text-gray-700">{row.fonte}</div>
            <div className="col-span-1 text-xs text-gray-400">{row.unita}</div>
            <div className="col-span-3">
              <input
                type="text"
                value={values[keyC] || ''}
                onChange={e => onChange(keyC, e.target.value)}
                className="w-full border border-gray-200 rounded px-2.5 py-1.5 text-sm bg-white focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>
            <div className="col-span-3">
              <input
                type="text"
                value={values[keyP] || ''}
                onChange={e => onChange(keyP, e.target.value)}
                className="w-full border border-gray-200 rounded px-2.5 py-1.5 text-sm bg-white focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                style={{ borderColor: '#f97316' }}>
                <CheckCircle className="w-3.5 h-3.5" style={{ color: '#f97316' }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const VsmeEnergiaTab = () => {
  const [values, setValues] = useState({});
  const handleChange = (key, val) => setValues(prev => ({ ...prev, [key]: val }));

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-2">
        <span className="px-2.5 py-1 rounded text-xs font-bold" style={{ background: 'rgba(46,125,50,0.1)', color: '#2e7d32' }}>
          B3
        </span>
      </div>

      {/* Title row */}
      <div className="flex items-center gap-3 mb-1 flex-wrap">
        <h2 className="text-2xl font-bold text-gray-900">Efficienza Energetica</h2>
        <button className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border-2 hover:opacity-80 transition-opacity"
          style={{ borderColor: '#2e7d32', color: '#2e7d32' }}>
          <CheckCircle className="w-3.5 h-3.5" />
          Segna completata
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white hover:opacity-90 transition-opacity"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #2e7d32)' }}>
          <Sparkles className="w-3.5 h-3.5" />
          Analizza bolletta con AI
        </button>
      </div>
      <p className="text-sm text-gray-400 mb-4">Emissioni Scope 1, Scope 2, fonti rinnovabili</p>

      {/* Tip */}
      <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3 text-sm">
        <HelpCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-gray-700 leading-relaxed">
          <strong>Consiglio:</strong> Raccogli le{' '}
          <strong style={{ color: '#2e7d32' }}>bollette di energia elettrica e gas</strong> (12 mesi) per Scope 2.
          Per Scope 1: <strong style={{ color: '#2e7d32' }}>fatture carburante</strong>, carte carburante e{' '}
          <strong style={{ color: '#2e7d32' }}>registro veicoli aziendali</strong>.
          Le % rinnovabili sono indicate dal fornitore o nel contratto di fornitura.
        </p>
      </div>

      {/* Info */}
      <div className="flex gap-3 bg-blue-50 border border-blue-200 rounded-lg p-3 mb-5 text-sm text-blue-800">
        <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
        <p>Compila solo le fonti energetiche effettivamente utilizzate dalla tua azienda. La maggior parte delle PMI compila solo 2-3 voci.</p>
      </div>

      <ScopeTable
        icon={Zap}
        title="Scope 1 - Combustibili per Riscaldamento"
        rows={scope1}
        values={values}
        onChange={handleChange}
      />

      <ScopeTable
        icon={Car}
        title="Scope 1 - Combustibili per Veicoli"
        rows={scope1veicoli}
        values={values}
        onChange={handleChange}
      />

      <ScopeTable
        icon={Zap}
        title="Scope 2 - Energia Elettrica e Termica"
        rows={scope2}
        values={values}
        onChange={handleChange}
      />
    </div>
  );
};

export default VsmeEnergiaTab;
