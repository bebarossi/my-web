import { useState } from 'react';
import { Users, CheckCircle, HelpCircle, Info } from 'lucide-react';

const metrics = [
  'Numero FTE al 31/12',
  'Variazione FTE ultimi 12 mesi',
  'Ore lavorate nell\'anno',
  'Dipendenti tempo indeterminato',
  'Dipendenti tempo determinato',
  'Dipendenti sesso maschile',
  'Dipendenti sesso femminile',
  'Età media dei dipendenti',
  'Numero infortuni sul lavoro',
  'Giorni di assenza totali',
  'Dipendenti in malattia (giorni)',
  'Ore formazione totali',
  'Dipendenti che hanno ricevuto formazione',
  'Retribuzione media annua lorda (EUR)',
  'Rapporto retribuzione F/M',
];

const VsmeForzeTab = () => {
  const [values, setValues] = useState({});

  const handleChange = (key, val) => setValues(prev => ({ ...prev, [key]: val }));

  return (
    <div>
      {/* Breadcrumb tag */}
      <div className="mb-2">
        <span className="px-2.5 py-1 rounded text-xs font-bold" style={{ background: 'rgba(46,125,50,0.1)', color: '#2e7d32' }}>
          B8 / B9 / B10
        </span>
      </div>

      {/* Title row */}
      <div className="flex items-center gap-3 mb-1">
        <h2 className="text-2xl font-bold text-gray-900">Forza Lavoro</h2>
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: '#2e7d32' }}>
          <CheckCircle className="w-3.5 h-3.5" />
          Completata
        </span>
      </div>
      <p className="text-sm text-gray-400 mb-4">Metriche sulla forza lavoro, sicurezza, retribuzione e formazione</p>

      {/* Tip (amber) */}
      <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3 text-sm">
        <HelpCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-gray-700 leading-relaxed">
          <strong>Consiglio:</strong> Chiedi al{' '}
          <strong style={{ color: '#2e7d32' }}>consulente del lavoro</strong> o all'ufficio HR il{' '}
          <strong style={{ color: '#2e7d32' }}>Libro Unico del Lavoro</strong> (LUL) per FTE, contratti e retribuzioni.
          Per infortuni: portale <strong style={{ color: '#2e7d32' }}>INAIL</strong>.
          Per formazione: registro ore formazione interno.
        </p>
      </div>

      {/* Info (blue) */}
      <div className="flex gap-3 bg-blue-50 border border-blue-200 rounded-lg p-3 mb-5 text-sm text-blue-800">
        <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
        <p>Compila le metriche di cui disponi. Non tutti i dati sono obbligatori: anche pochi campi chiave (FTE, infortuni) sono sufficienti.</p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
        {/* Section header */}
        <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(46,125,50,0.08)' }}>
            <Users className="w-4 h-4" style={{ color: '#2e7d32' }} />
          </div>
          <h4 className="text-sm font-semibold text-gray-900">Metriche Annuali</h4>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-12 gap-2 px-5 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
          <div className="col-span-6">Metrica</div>
          <div className="col-span-5">Valore</div>
          <div className="col-span-1" />
        </div>

        {/* Rows */}
        <div>
          {metrics.map((label, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-2 px-5 py-2.5 items-center border-b border-gray-50 last:border-0 hover:bg-gray-50/40 transition-colors"
            >
              <div className="col-span-6 text-sm text-gray-700">{label}</div>
              <div className="col-span-5">
                <input
                  type="text"
                  value={values[label] || ''}
                  onChange={e => handleChange(label, e.target.value)}
                  className="w-full border border-gray-200 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:border-green-400 transition-colors"
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{ borderColor: '#f97316' }}>
                  <CheckCircle className="w-3.5 h-3.5" style={{ color: '#f97316' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VsmeForzeTab;
