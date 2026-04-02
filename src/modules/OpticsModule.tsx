import React from 'react';
import { 
  Eye, 
  Plus, 
  Search, 
  FileText, 
  ClipboardList, 
  Clock, 
  CheckCircle2, 
  User,
  Stethoscope,
  ArrowRight
} from 'lucide-react';
import { cn, formatDate } from '../lib/utils';

const prescriptions = [
  { id: '1', customer: 'Maria Oliveira', date: '2026-03-28', doctor: 'Dr. Roberto Silva', status: 'ready' },
  { id: '2', customer: 'João Santos', date: '2026-04-01', doctor: 'Dra. Ana Costa', status: 'lab' },
  { id: '3', customer: 'Carla Souza', date: '2026-04-02', doctor: 'Dr. Roberto Silva', status: 'pending' },
];

export const OpticsModule = () => {
  const [view, setView] = React.useState<'list' | 'new'>('list');

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Módulo Ótica</h2>
          <p className="text-slate-500 text-sm mt-1">Gestão de receitas, ordens de serviço e laboratório.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setView(view === 'list' ? 'new' : 'list')}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
          >
            {view === 'list' ? (
              <>
                <Plus size={18} />
                Nova Receita
              </>
            ) : (
              'Voltar para Listagem'
            )}
          </button>
        </div>
      </div>

      {view === 'list' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-bold text-slate-900">Receitas Recentes</h3>
                <div className="relative group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={16} />
                  <input 
                    type="text" 
                    placeholder="Buscar cliente..." 
                    className="bg-slate-50 border-none rounded-lg py-2 pl-10 pr-4 text-xs focus:ring-2 focus:ring-blue-100 transition-all outline-none w-64"
                  />
                </div>
              </div>
              <div className="divide-y divide-slate-50">
                {prescriptions.map((p) => (
                  <div key={p.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100">
                        <Eye className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{p.customer}</p>
                        <p className="text-xs text-slate-400 font-medium">{p.doctor} • {formatDate(p.date)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className={cn(
                        "text-[10px] font-black uppercase px-2 py-1 rounded-lg",
                        p.status === 'ready' ? "bg-emerald-50 text-emerald-600" : 
                        p.status === 'lab' ? "bg-amber-50 text-amber-600" : "bg-slate-100 text-slate-500"
                      )}>
                        {p.status === 'ready' ? 'Pronto' : p.status === 'lab' ? 'No Laboratório' : 'Pendente'}
                      </span>
                      <button className="p-2 text-slate-300 hover:text-blue-600 transition-colors">
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 p-8 rounded-3xl text-white">
              <h3 className="font-bold text-lg mb-6">Status do Laboratório</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Clock className="text-amber-400" size={20} />
                    <span className="text-sm font-medium">Em Produção</span>
                  </div>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-400" size={20} />
                    <span className="text-sm font-medium">Prontos p/ Entrega</span>
                  </div>
                  <span className="font-bold">08</span>
                </div>
              </div>
              <button className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-sm font-bold transition-all">
                Ver Todas as O.S.
              </button>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Lembretes</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5" />
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Ligar para <span className="font-bold">Maria Oliveira</span> para avisar que os óculos estão prontos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="text-blue-600" size={24} />
            <h3 className="font-bold text-lg text-slate-900">Cadastro de Receita</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-700">Cliente</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                <input type="text" placeholder="Buscar cliente..." className="w-full bg-slate-50 border-none rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-100 outline-none" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-700">Médico Oftalmologista</label>
              <div className="relative group">
                <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                <input type="text" placeholder="Nome do médico..." className="w-full bg-slate-50 border-none rounded-xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-100 outline-none" />
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <div className="grid grid-cols-2 gap-12">
              {/* Olho Direito */}
              <div className="space-y-6">
                <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  Olho Direito (OD)
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Esférico</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-blue-100 outline-none font-bold" placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Cilíndrico</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-blue-100 outline-none font-bold" placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Eixo</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-blue-100 outline-none font-bold" placeholder="0°" />
                  </div>
                </div>
              </div>

              {/* Olho Esquerdo */}
              <div className="space-y-6">
                <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  Olho Esquerdo (OE)
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Esférico</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-blue-100 outline-none font-bold" placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Cilíndrico</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-blue-100 outline-none font-bold" placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Eixo</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-blue-100 outline-none font-bold" placeholder="0°" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Adição</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-blue-100 outline-none font-bold" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase">DNP OD</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-blue-100 outline-none font-bold" placeholder="0.0" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase">DNP OE</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-blue-100 outline-none font-bold" placeholder="0.0" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Altura</label>
                <input type="text" className="w-full bg-slate-50 border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-blue-100 outline-none font-bold" placeholder="0.0" />
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-end gap-4">
            <button onClick={() => setView('list')} className="px-8 py-3 text-sm font-bold text-slate-400 hover:text-slate-600 transition-all">Cancelar</button>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
              Salvar Receita e Gerar O.S.
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
