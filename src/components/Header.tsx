import React from 'react';
import { Search, Bell, User, ChevronDown, HelpCircle } from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Buscar produtos, vendas, clientes ou notas..." 
            className="w-full bg-slate-50 border-none rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-100 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-slate-400 hover:text-blue-600 transition-colors relative">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full text-[8px] text-white flex items-center justify-center font-bold">
            3
          </span>
        </button>
        
        <button className="text-slate-400 hover:text-blue-600 transition-colors">
          <HelpCircle size={22} />
        </button>

        <div className="h-8 w-px bg-slate-200 mx-2" />

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900 leading-none">Paulo Argolo</p>
            <p className="text-[11px] text-slate-400 font-medium mt-1">Administrador Master</p>
          </div>
          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200 group-hover:border-blue-200 transition-all">
            <User className="text-slate-600" size={20} />
          </div>
          <ChevronDown size={16} className="text-slate-400" />
        </div>
      </div>
    </header>
  );
};
