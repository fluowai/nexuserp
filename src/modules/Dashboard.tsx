import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart, 
  Package, 
  Users,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { formatCurrency } from '../lib/utils';

const data = [
  { name: '01/04', sales: 4000, profit: 2400 },
  { name: '02/04', sales: 3000, profit: 1398 },
  { name: '03/04', sales: 2000, profit: 9800 },
  { name: '04/04', sales: 2780, profit: 3908 },
  { name: '05/04', sales: 1890, profit: 4800 },
  { name: '06/04', sales: 2390, profit: 3800 },
  { name: '07/04', sales: 3490, profit: 4300 },
];

const topProducts = [
  { name: 'Smartphone Galaxy S23', sales: 45, revenue: 157500, color: '#3b82f6' },
  { name: 'Notebook Dell XPS 13', sales: 32, revenue: 288000, color: '#6366f1' },
  { name: 'Monitor LG UltraWide', sales: 28, revenue: 56000, color: '#8b5cf6' },
  { name: 'Teclado Mecânico RGB', sales: 24, revenue: 12000, color: '#ec4899' },
  { name: 'Mouse Gamer Pro', sales: 19, revenue: 9500, color: '#f43f5e' },
];

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }: any) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="flex items-start justify-between mb-4">
      <div className={cn("p-3 rounded-2xl", color)}>
        <Icon size={24} className="text-white" />
      </div>
      <div className={cn(
        "flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold",
        trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
      )}>
        {trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {trendValue}%
      </div>
    </div>
    <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
    <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
  </div>
);

import { cn } from '../lib/utils';

export const Dashboard = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Dashboard Executivo</h2>
          <p className="text-slate-500 text-sm mt-1">Bem-vindo de volta! Aqui está o resumo da sua operação hoje.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-100">
            <option>Últimos 7 dias</option>
            <option>Este mês</option>
            <option>Último trimestre</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
            Exportar Relatório
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Faturamento Total" 
          value={formatCurrency(128450.00)} 
          icon={DollarSign} 
          trend="up" 
          trendValue="12.5" 
          color="bg-blue-600"
        />
        <StatCard 
          title="Vendas Realizadas" 
          value="1,240" 
          icon={ShoppingCart} 
          trend="up" 
          trendValue="8.2" 
          color="bg-indigo-600"
        />
        <StatCard 
          title="Ticket Médio" 
          value={formatCurrency(103.58)} 
          icon={TrendingUp} 
          trend="down" 
          trendValue="2.4" 
          color="bg-violet-600"
        />
        <StatCard 
          title="Margem de Lucro" 
          value="32.4%" 
          icon={BarChart3} 
          trend="up" 
          trendValue="4.1" 
          color="bg-emerald-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-900">Desempenho de Vendas</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-600" />
                <span className="text-xs text-slate-500 font-medium">Vendas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-slate-500 font-medium">Lucro</span>
              </div>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12}}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12}}
                  tickFormatter={(value) => `R$ ${value}`}
                />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Area type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                <Area type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={3} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-900 mb-8">Produtos Mais Vendidos</h3>
          <div className="space-y-6">
            {topProducts.map((product, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-700">{product.name}</span>
                  <span className="text-slate-400 font-medium">{product.sales} unid.</span>
                </div>
                <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000" 
                    style={{ width: `${(product.sales / 50) * 100}%`, backgroundColor: product.color }}
                  />
                </div>
                <div className="flex justify-end">
                  <span className="text-[10px] font-bold text-slate-400">{formatCurrency(product.revenue)}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 text-sm font-bold text-blue-600 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
            Ver Relatório Completo
          </button>
        </div>
      </div>
    </div>
  );
};
