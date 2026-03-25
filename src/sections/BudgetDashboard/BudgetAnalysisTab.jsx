import { useState } from 'react';
import { ChevronRight, Brain } from 'lucide-react';
import { categories, alerts } from '../../data/budgetData';

const BudgetAnalysisTab = () => {
  const [expandedCategory, setExpandedCategory] = useState('industrial');

  return (
    <div className="space-y-8">
      {/* Cost Categories */}
      <div className="space-y-4">
        {Object.entries(categories).map(([key, category]) => (
          <div key={key} className="border border-black/5 rounded-xl overflow-hidden">
            <button
              onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
              className="w-full px-6 py-4 bg-gradient-to-r from-white to-blue-50 hover:to-blue-100 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <ChevronRight className={`w-5 h-5 text-[#0071e3] transition-transform ${expandedCategory === key ? 'rotate-90' : ''}`} />
                <div className="text-left">
                  <h4 className="font-semibold text-dark">{category.name}</h4>
                  <p className="text-sm text-muted">Totale: {category.total}</p>
                </div>
              </div>
            </button>

            {expandedCategory === key && (
              <div className="px-6 py-4 bg-white space-y-3 border-t border-black/5">
                {category.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-dark text-sm">{item.label}</p>
                      <p className="text-xs text-muted">Budget: {item.budget}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-dark text-sm">{item.value}</p>
                      <p className={`text-xs font-medium ${item.positive ? 'text-green-600' : 'text-orange-600'}`}>
                        {item.delta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Alert AI Section */}
      <div className="bg-white rounded-xl border border-black/5 p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <Brain className="w-5 h-5 text-[#0071e3]" />
          <h4 className="font-semibold text-dark">Alert AI</h4>
        </div>
        <div className="space-y-3">
          {alerts.map((alert, i) => {
            let bgColor = 'bg-blue-50';
            let textColor = 'text-[#0071e3]';
            let dotColor = 'bg-[#0071e3]';

            if (alert.type === 'warning') {
              bgColor = 'bg-orange-50';
              textColor = 'text-orange-700';
              dotColor = 'bg-orange-500';
            } else if (alert.type === 'alert') {
              bgColor = 'bg-red-50';
              textColor = 'text-red-700';
              dotColor = 'bg-red-500';
            }

            return (
              <div key={i} className={`${bgColor} rounded-lg p-4 flex items-start gap-3`}>
                <div className={`w-2.5 h-2.5 ${dotColor} rounded-full flex-shrink-0 mt-1.5`} />
                <p className={`${textColor} text-sm font-medium`}>{alert.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Efficienza Budget */}
      <div className="bg-white rounded-xl border border-black/5 p-6 sm:p-8">
        <h4 className="font-semibold text-dark mb-6">Efficienza Budget</h4>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-dark">Utilizzo Totale</span>
              <span className="text-lg font-bold text-[#0071e3]">89.8%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-[#0071e3] to-[#0071e3]/60" style={{ width: '89.8%' }} />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-3 bg-blue-50 rounded-lg text-center">
              <p className="text-xs text-muted mb-1">Margine Disponibile</p>
              <p className="font-bold text-[#0071e3]">10.2%</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg text-center">
              <p className="text-xs text-muted mb-1">Risparmi Realizzati</p>
              <p className="font-bold text-green-600">&euro; 45K</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg text-center">
              <p className="text-xs text-muted mb-1">Sforamento</p>
              <p className="font-bold text-orange-600">&euro; 12K</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetAnalysisTab;
