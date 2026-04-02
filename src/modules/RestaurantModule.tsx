import React from 'react';
import { 
  Utensils, 
  Users, 
  Clock, 
  Calendar, 
  Truck, 
  CheckCircle2, 
  AlertCircle, 
  Plus,
  ChevronRight,
  Coffee,
  Smartphone
} from 'lucide-react';
import { cn, formatCurrency } from '../lib/utils';

const tables = [
  { id: '1', number: 1, status: 'occupied', capacity: 4, total: 156.90 },
  { id: '2', number: 2, status: 'available', capacity: 2, total: 0 },
  { id: '3', number: 3, status: 'reserved', capacity: 6, total: 0 },
  { id: '4', number: 4, status: 'occupied', capacity: 4, total: 89.00 },
  { id: '5', number: 5, status: 'cleaning', capacity: 4, total: 0 },
  { id: '6', number: 6, status: 'available', capacity: 2, total: 0 },
  { id: '7', number: 7, status: 'occupied', capacity: 8, total: 432.50 },
  { id: '8', number: 8, status: 'available', capacity: 4, total: 0 },
];

const deliveries = [
  { id: '1', customer: 'Ricardo Lima', address: 'Rua das Flores, 123', status: 'preparing', time: '12:45' },
  { id: '2', customer: 'Juliana Castro', address: 'Av. Paulista, 1000', status: 'delivering', time: '12:30' },
  { id: '3', customer: 'Marcos Viana', address: 'Rua Augusta, 500', status: 'delivered', time: '12:15' },
];

export const RestaurantModule = () => {
  const [activeTab, setActiveTab] = React.useState<'tables' | 'delivery' | 'reservations'>('tables');

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Módulo Restaurante</h2>
          <p className="text-slate-500 text-sm mt-1">Gestão de mesas, delivery e reservas em tempo real.</p>
        </div>
        <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
          <button 
            onClick={() => setActiveTab('tables')}
            className={cn("px-6 py-2.5 rounded-xl text-sm font-bold transition-all", activeTab === 'tables' ? "bg-blue-600 text-white shadow-lg shadow-blue-100" : "text-slate-500 hover:bg-slate-50")}
          >
            Mesas
          </button>
          <button 
            onClick={() => setActiveTab('delivery')}
            className={cn("px-6 py-2.5 rounded-xl text-sm font-bold transition-all", activeTab === 'delivery' ? "bg-blue-600 text-white shadow-lg shadow-blue-100" : "text-slate-500 hover:bg-slate-50")}
          >
            Delivery
          </button>
          <button 
            onClick={() => setActiveTab('reservations')}
            className={cn("px-6 py-2.5 rounded-xl text-sm font-bold transition-all", activeTab === 'reservations' ? "bg-blue-600 text-white shadow-lg shadow-blue-100" : "text-slate-500 hover:bg-slate-50")}
          >
            Reservas
          </button>
        </div>
      </div>

      {activeTab === 'tables' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tables.map((table) => (
            <div key={table.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex items-center justify-between mb-6">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center border-2",
                  table.status === 'available' ? "bg-emerald-50 border-emerald-100 text-emerald-600" :
                  table.status === 'occupied' ? "bg-blue-50 border-blue-100 text-blue-600" :
                  table.status === 'reserved' ? "bg-amber-50 border-amber-100 text-amber-600" :
                  "bg-slate-50 border-slate-100 text-slate-400"
                )}>
                  <span className="text-lg font-black">{table.number}</span>
                </div>
                <div className="text-right">
                  <span className={cn(
                    "text-[10px] font-black uppercase px-2 py-1 rounded-lg",
                    table.status === 'available' ? "bg-emerald-50 text-emerald-600" :
                    table.status === 'occupied' ? "bg-blue-50 text-blue-600" :
                    table.status === 'reserved' ? "bg-amber-50 text-amber-600" :
                    "bg-slate-100 text-slate-400"
                  )}>
                    {table.status === 'available' ? 'Livre' : 
                     table.status === 'occupied' ? 'Ocupada' : 
                     table.status === 'reserved' ? 'Reservada' : 'Limpando'}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-400">
                  <Users size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Capacidade: {table.capacity} pessoas</span>
                </div>
                
                {table.status === 'occupied' ? (
                  <div className="pt-4 border-t border-slate-50">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Consumo Atual</p>
                    <p className="text-xl font-black text-slate-900">{formatCurrency(table.total)}</p>
                    <button className="w-full mt-4 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-all">
                      Abrir Comanda
                    </button>
                  </div>
                ) : table.status === 'available' ? (
                  <button className="w-full py-3 bg-slate-50 text-slate-600 border border-slate-100 rounded-xl text-xs font-bold hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
                    Ocupar Mesa
                  </button>
                ) : (
                  <div className="h-[84px] flex items-center justify-center">
                    <p className="text-xs text-slate-400 font-medium italic">Aguardando ação...</p>
                  </div>
                )}
              </div>
            </div>
          ))}
          <button className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center gap-3 text-slate-400 hover:bg-slate-100 hover:border-slate-300 transition-all group">
            <Plus size={32} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold">Adicionar Mesa</span>
          </button>
        </div>
      )}

      {activeTab === 'delivery' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {deliveries.map((delivery) => (
              <div key={delivery.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center",
                    delivery.status === 'preparing' ? "bg-amber-50 text-amber-600" :
                    delivery.status === 'delivering' ? "bg-blue-50 text-blue-600" :
                    "bg-emerald-50 text-emerald-600"
                  )}>
                    {delivery.status === 'preparing' ? <Coffee size={24} /> : 
                     delivery.status === 'delivering' ? <Truck size={24} /> : 
                     <CheckCircle2 size={24} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{delivery.customer}</h4>
                    <p className="text-xs text-slate-400 font-medium">{delivery.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Status</p>
                    <span className={cn(
                      "text-[10px] font-black uppercase px-2 py-1 rounded-lg",
                      delivery.status === 'preparing' ? "bg-amber-50 text-amber-600" :
                      delivery.status === 'delivering' ? "bg-blue-50 text-blue-600" :
                      "bg-emerald-50 text-emerald-600"
                    )}>
                      {delivery.status === 'preparing' ? 'Preparando' : 
                       delivery.status === 'delivering' ? 'Em Rota' : 'Entregue'}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Horário</p>
                    <span className="text-xs font-bold text-slate-700">{delivery.time}</span>
                  </div>
                  <button className="p-2 text-slate-300 hover:text-blue-600 transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 p-8 rounded-3xl text-white">
              <h3 className="font-bold text-lg mb-6">Canais de Venda</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Smartphone className="text-emerald-400" size={20} />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </div>
                  <span className="font-bold">24</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Utensils className="text-blue-400" size={20} />
                    <span className="text-sm font-medium">iFood / App</span>
                  </div>
                  <span className="font-bold">18</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'reservations' && (
        <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-sm text-center space-y-6">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
            <Calendar className="text-blue-600" size={32} />
          </div>
          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-xl font-bold text-slate-900">Agenda de Reservas</h3>
            <p className="text-sm text-slate-500">Visualize e gerencie as reservas de mesas para os próximos dias.</p>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
            Abrir Calendário de Reservas
          </button>
        </div>
      )}
    </div>
  );
};
