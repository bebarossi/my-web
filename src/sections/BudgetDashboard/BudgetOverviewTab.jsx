import { BarChart3, TrendingUp, PieChart, Zap } from 'lucide-react';

const BudgetOverviewTab = () => (
  <div className="space-y-8">
    {/* KPI Cards */}
    <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 sm:pb-0 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible scrollbar-hide">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-100 min-w-[200px] sm:min-w-0 snap-start">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-muted uppercase tracking-wider">Budget Totale</span>
          <BarChart3 className="w-4 h-4 text-[#0071e3]" />
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-dark">&euro; 842K</div>
        <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+8.2%</div>
      </div>

      <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-100 min-w-[200px] sm:min-w-0 snap-start">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-muted uppercase tracking-wider">Speso</span>
          <TrendingUp className="w-4 h-4 text-[#0071e3]" />
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-dark">&euro; 756K</div>
        <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">89.8%</div>
      </div>

      <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-100 min-w-[200px] sm:min-w-0 snap-start">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-muted uppercase tracking-wider">Disponibile</span>
          <PieChart className="w-4 h-4 text-[#0071e3]" />
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-dark">&euro; 86K</div>
        <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">10.2%</div>
      </div>

      <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-5 border border-blue-100 min-w-[200px] sm:min-w-0 snap-start">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-mono text-muted uppercase tracking-wider">EBIT</span>
          <Zap className="w-4 h-4 text-[#0071e3]" />
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-dark">&euro; 186K</div>
        <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+5.8%</div>
      </div>
    </div>

    {/* Budget Distribution Chart */}
    <div className="bg-white rounded-xl border border-black/5 p-6 sm:p-8">
      <h4 className="font-semibold text-dark mb-6">Distribuzione Budget per Centro di Costo</h4>
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-dark">Costi Industriali</span>
            <span className="text-sm font-semibold text-[#0071e3]">&euro; 520K</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
            <div className="bg-[#0071e3] h-full rounded-full" style={{ width: '61.7%' }} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-dark">Costi Commerciali</span>
            <span className="text-sm font-semibold text-purple-500">&euro; 195K</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
            <div className="bg-purple-500 h-full rounded-full" style={{ width: '23.2%' }} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-dark">Costi Amministrativi</span>
            <span className="text-sm font-semibold text-pink-500">&euro; 127K</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
            <div className="bg-pink-500 h-full rounded-full" style={{ width: '15.1%' }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BudgetOverviewTab;
