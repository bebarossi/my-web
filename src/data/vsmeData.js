import { Users, Flame, Droplets, Recycle, Trees, Thermometer } from 'lucide-react';

export const modules = [
  { id: 'forza-lavoro', name: 'Forza Lavoro', icon: Users, pct: 42 },
  { id: 'efficienza-energetica', name: 'Efficienza Energetica', icon: Flame, pct: 35 },
  { id: 'acqua', name: 'Acqua', icon: Droplets, pct: 28 },
  { id: 'rifiuti', name: 'Rifiuti', icon: Recycle, pct: 18 },
  { id: 'biodiversita', name: 'Biodiversità', icon: Trees, pct: 12 },
  { id: 'refrigeranti', name: 'Refrigeranti', icon: Thermometer, pct: 8 },
];

export const moduleData = {
  'forza-lavoro': {
    title: 'Forza Lavoro',
    subtitle: 'Gestione dipendenti, formazione e welfare aziendale',
    icon: Users,
    metrics: [
      { label: 'Dipendenti', value: '245', unit: 'in organico', status: 'normal' },
      { label: 'Ore Formazione', value: '32h', unit: 'per dipendente/anno', status: 'good' },
      { label: 'Gender Diversity', value: '42%', unit: 'donne in azienda', status: 'good' },
    ],
  },
  'efficienza-energetica': {
    title: 'Efficienza Energetica',
    subtitle: 'Ottimizzazione consumi ed energie rinnovabili',
    icon: Flame,
    metrics: [
      { label: 'Consumo Totale', value: '450 MWh', unit: 'al mese', status: 'normal' },
      { label: 'Rinnovabili', value: '28%', unit: 'della produzione', status: 'good' },
      { label: 'Riduzione', value: '-12%', unit: 'vs anno precedente', status: 'good' },
    ],
  },
  acqua: {
    title: 'Acqua',
    subtitle: 'Monitoraggio consumi idrici e compliance',
    icon: Droplets,
    metrics: [
      { label: 'Consumo Totale', value: '2,450 m³', unit: 'al mese', status: 'normal' },
      { label: 'Riciclo', value: '34%', unit: "dell'acqua utilizzata", status: 'good' },
      { label: 'Conformità', value: 'ISO 14001', unit: 'certificazione attiva', status: 'good' },
    ],
  },
  rifiuti: {
    title: 'Rifiuti',
    subtitle: 'Tracciamento e smaltimento responsabile',
    icon: Recycle,
    metrics: [
      { label: 'Rifiuti Totali', value: '156 ton', unit: 'al trimestre', status: 'normal' },
      { label: 'Recupero', value: '68%', unit: 'dei rifiuti', status: 'good' },
      { label: 'Conformità', value: 'EMAS', unit: 'registrazione valida', status: 'good' },
    ],
  },
  biodiversita: {
    title: 'Biodiversità',
    subtitle: 'Impatto ambientale e tutela ecosistemi',
    icon: Trees,
    metrics: [
      { label: 'Area Protetta', value: '12 ha', unit: 'terreni aziendali', status: 'normal' },
      { label: 'Specie Monitorate', value: '24', unit: 'nella zona', status: 'good' },
      { label: 'Piano Tutela', value: 'Attivo', unit: 'in corso', status: 'good' },
    ],
  },
  refrigeranti: {
    title: 'Refrigeranti',
    subtitle: 'Monitoraggio gas refrigeranti e F-gas',
    icon: Thermometer,
    metrics: [
      { label: 'Gas Totali', value: '8.2 kg', unit: 'in uso', status: 'normal' },
      { label: 'GWP Medio', value: '1,430', unit: 'CO₂ equivalente', status: 'good' },
      { label: 'Perdite', value: '0.3%', unit: 'tasso annuo', status: 'good' },
    ],
  },
};
