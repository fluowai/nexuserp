import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  Truck, 
  BarChart3, 
  Settings, 
  FileText, 
  CreditCard,
  ChevronRight,
  LogOut,
  Store,
  Wallet,
  ShieldCheck,
  History
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
  badge?: string;
  subItems?: { label: string; onClick: () => void }[];
}

const SidebarItem = ({ icon: Icon, label, active, onClick, badge, subItems }: SidebarItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-1">
      <button
        onClick={() => {
          if (subItems) setIsOpen(!isOpen);
          if (onClick) onClick();
        }}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group",
          active 
            ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
            : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
        )}
      >
        <div className="flex items-center gap-3">
          <Icon size={20} className={cn(active ? "text-white" : "text-slate-400 group-hover:text-blue-600")} />
          <span className="font-medium text-sm">{label}</span>
        </div>
        <div className="flex items-center gap-2">
          {badge && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {badge}
            </span>
          )}
          {subItems && (
            <ChevronRight 
              size={14} 
              className={cn("transition-transform duration-200", isOpen && "rotate-90")} 
            />
          )}
        </div>
      </button>
      
      {subItems && isOpen && (
        <div className="ml-9 mt-1 space-y-1 border-l-2 border-slate-100 pl-4">
          {subItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.onClick}
              className="w-full text-left py-2 text-sm text-slate-500 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidebar = () => {
  return (
    <aside className="w-72 h-screen bg-white border-r border-slate-200 flex flex-col sticky top-0 overflow-y-auto scrollbar-hide">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
          <Store className="text-white" size={24} />
        </div>
        <div>
          <h1 className="font-bold text-slate-900 leading-tight">Nexus ERP</h1>
          <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Enterprise SaaS</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-2">
        <div className="mb-4">
          <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Principal</p>
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
          <SidebarItem icon={ShoppingCart} label="PDV / Frente de Caixa" />
        </div>

        <div className="mb-4">
          <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Gestão Comercial</p>
          <SidebarItem icon={Package} label="Produtos" subItems={[
            { label: 'Listagem', onClick: () => {} },
            { label: 'Categorias', onClick: () => {} },
            { label: 'Marcas', onClick: () => {} },
            { label: 'Grade de Produtos', onClick: () => {} }
          ]} />
          <SidebarItem icon={History} label="Estoque" subItems={[
            { label: 'Movimentações', onClick: () => {} },
            { label: 'Inventário', onClick: () => {} },
            { label: 'Ajustes', onClick: () => {} }
          ]} />
          <SidebarItem icon={Truck} label="Compras" />
          <SidebarItem icon={Users} label="Clientes" />
        </div>

        <div className="mb-4">
          <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Financeiro</p>
          <SidebarItem icon={Wallet} label="Contas a Receber" />
          <SidebarItem icon={CreditCard} label="Contas a Pagar" />
          <SidebarItem icon={BarChart3} label="Fluxo de Caixa" />
          <SidebarItem icon={FileText} label="Comissões" />
        </div>

        <div className="mb-4">
          <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Fiscal</p>
          <SidebarItem icon={ShieldCheck} label="Módulo Fiscal" subItems={[
            { label: 'Notas Emitidas', onClick: () => {} },
            { label: 'Contingência', onClick: () => {} },
            { label: 'Certificado Digital', onClick: () => {} },
            { label: 'Configurações', onClick: () => {} }
          ]} />
        </div>
      </nav>

      <div className="p-4 border-t border-slate-100">
        <SidebarItem icon={Settings} label="Configurações" />
        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all mt-2">
          <LogOut size={20} />
          <span className="font-medium text-sm">Sair do Sistema</span>
        </button>
      </div>
    </aside>
  );
};
