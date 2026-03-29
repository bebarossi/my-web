import { useState } from 'react';
import { Trash2, CheckCircle, HelpCircle, FileText, AlertTriangle } from 'lucide-react';

const rifiutiNP = [
  'Rifiuti da smaltire / incenerire',
  'Rifiuti riciclabili per energia',
  'Carta e cartone totale',
  'di cui: da riciclare',
  'Vetro da riciclare',
  'Plastica da riciclare',
  'Metalli ferrosi da riciclare',
  'Metalli non ferrosi da riciclare',
  'Organico / Umido',
  'Legno da riciclare',
  'RAEE (elettronici)',
];

const rifiutiP = [
  'Rifiuti pericolosi totali',
  'Oli esausti',
  'Batterie e accumulatori',
  'Solventi esausti',
  'Filtri, stracci contaminati',
  'Farmaci scaduti',
];

const RifiutiTable = ({ icon: Icon, title, rows, values, onChange, costiDisp }) => (
  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm mb-4">
    <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(46,125,50,0.08)' }}>
        <Icon className="w-4 h-4" style={{ color: '#2e7d32' }} />
      </div>
      <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
    </div>

    {/* Col headers */}
    <div className="grid grid-cols-12 gap-2 px-5 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
      <div className="col-span-4">Tipo Rifiuto</div>
      <div className="col-span-2">Cod. EWC</div>
      <div className="col-span-2">Quantità</div>
      <div className="col-span-1 text-center">Unità</div>
      <div className="col-span-2">{!costiDisp ? 'Costo (EUR)' : ''}</div>
      <div className="col-span-1" />
    </div>

    <div>
      {rows.map((label, i) => {
        const keyEWC = `${title}-${i}-ewc`;
        const keyQTA = `${title}-${i}-qta`;
        const keyCOSTO = `${title}-${i}-costo`;
        return (
          <div key={i} className="grid grid-cols-12 gap-2 px-5 py-2.5 items-center border-b border-gray-50 last:border-0 hover:bg-gray-50/40 transition-colors">
            <div className="col-span-4 text-sm text-gray-700">{label}</div>
            <div className="col-span-2">
              <input
                type="text"
                value={values[keyEWC] || ''}
                onChange={e => onChange(keyEWC, e.target.value)}
                className="w-full border border-gray-200 rounded px-2 py-1.5 text-xs bg-white focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>
            <div className="col-span-2">
              <input
                type="text"
                value={values[keyQTA] || ''}
                onChange={e => onChange(keyQTA, e.target.value)}
                className="w-full border border-gray-200 rounded px-2 py-1.5 text-sm bg-white focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>
            <div className="col-span-1 text-center text-xs text-gray-400">t</div>
            <div className="col-span-2">
              {!costiDisp ? (
                <input
                  type="text"
                  value={values[keyCOSTO] || ''}
                  onChange={e => onChange(keyCOSTO, e.target.value)}
                  className="w-full border border-gray-200 rounded px-2 py-1.5 text-sm bg-white focus:outline-none focus:border-green-400 transition-colors"
                />
              ) : (
                <span className="text-xs text-gray-300 italic">n/d</span>
              )}
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

const VsmeRifiutiTab = () => {
  const [values, setValues] = useState({});
  const [costiDisp, setCostiDisp] = useState(false);

  const handleChange = (key, val) => setValues(prev => ({ ...prev, [key]: val }));

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mb-2">
        <span className="px-2.5 py-1 rounded text-xs font-bold" style={{ background: 'rgba(46,125,50,0.1)', color: '#2e7d32' }}>
          B7
        </span>
      </div>

      {/* Title */}
      <div className="flex items-center gap-3 mb-1">
        <h2 className="text-2xl font-bold text-gray-900">Rifiuti</h2>
        <button className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border-2 hover:opacity-80 transition-opacity"
          style={{ borderColor: '#2e7d32', color: '#2e7d32' }}>
          <CheckCircle className="w-3.5 h-3.5" />
          Segna completata
        </button>
      </div>
      <p className="text-sm text-gray-400 mb-4">Rifiuti pericolosi e non pericolosi</p>

      {/* Tip */}
      <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4 mb-5 text-sm">
        <HelpCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-gray-700 leading-relaxed">
          <strong>Consiglio:</strong> Consulta il{' '}
          <strong style={{ color: '#2e7d32' }}>MUD</strong> (Modello Unico Dichiarazione ambientale) e i{' '}
          <strong style={{ color: '#2e7d32' }}>formulari rifiuti</strong> (FIR) per codici EWC e quantità.
          Il <strong style={{ color: '#2e7d32' }}>registro carico/scarico rifiuti</strong> e le fatture dello smaltitore indicano costi e tipologie.
        </p>
      </div>

      {/* Toolbar: MUD button + toggle */}
      <div className="flex items-center justify-between mb-4 bg-white rounded-xl border border-gray-100 px-5 py-3.5 shadow-sm">
        <button className="flex items-center gap-2 px-4 py-2 border-2 rounded-full text-sm font-semibold hover:opacity-80 transition-opacity"
          style={{ borderColor: '#2e7d32', color: '#2e7d32' }}>
          <FileText className="w-4 h-4" />
          Analizza MUD (PDF)
        </button>
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <div
            onClick={() => setCostiDisp(v => !v)}
            className={`w-10 h-5 rounded-full transition-colors relative ${costiDisp ? 'bg-green-600' : 'bg-gray-300'}`}
          >
            <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${costiDisp ? 'translate-x-5' : ''}`} />
          </div>
          <span className="text-sm text-gray-600">Costi non disponibili</span>
        </label>
      </div>

      <RifiutiTable
        icon={Trash2}
        title="Rifiuti Non Pericolosi - Produzione"
        rows={rifiutiNP}
        values={values}
        onChange={handleChange}
        costiDisp={costiDisp}
      />

      <RifiutiTable
        icon={AlertTriangle}
        title="Rifiuti Pericolosi - Produzione"
        rows={rifiutiP}
        values={values}
        onChange={handleChange}
        costiDisp={costiDisp}
      />
    </div>
  );
};

export default VsmeRifiutiTab;
