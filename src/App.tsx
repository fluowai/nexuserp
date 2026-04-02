/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LayoutDashboard, ShoppingCart, Package, Users, ShieldCheck, Store, Eye, Utensils, Settings } from 'lucide-react';
import { cn } from './lib/utils';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './modules/Dashboard';
import { PDV } from './modules/PDV';
import { ProductList } from './modules/ProductList';
import { FiscalSettings } from './modules/FiscalSettings';
import { OpticsModule } from './modules/OpticsModule';
import { RestaurantModule } from './modules/RestaurantModule';

type Module = 'dashboard' | 'pdv' | 'products' | 'fiscal' | 'optics' | 'restaurant' | 'settings';

export default function App() {
  const [currentModule, setCurrentModule] = React.useState<Module>('dashboard');
  const [activeModules, setActiveModules] = React.useState({
    optics: true,
    restaurant: false
  });

  const renderModule = () => {
    switch (currentModule) {
      case 'dashboard': return <Dashboard />;
      case 'pdv': return <PDV />;
      case 'products': return <ProductList />;
      case 'fiscal': return <FiscalSettings />;
      case 'optics': return <OpticsModule />;
      case 'restaurant': return <RestaurantModule />;
      case 'settings': return (
        <div className="p-12 max-w-2xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Configuração de Módulos</h2>
            <p className="text-slate-500 text-sm mt-1">Ative ou desative funcionalidades específicas para o seu negócio.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Eye className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Módulo Ótica</p>
                  <p className="text-xs text-slate-500">Gestão de receitas e laboratório.</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveModules(prev => ({ ...prev, optics: !prev.optics }))}
                className={cn("w-12 h-6 rounded-full relative transition-all", activeModules.optics ? "bg-blue-600" : "bg-slate-200")}
              >
                <div className={cn("absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all", activeModules.optics ? "right-1" : "left-1")} />
              </button>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  <Utensils className="text-emerald-600" size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Módulo Restaurante</p>
                  <p className="text-xs text-slate-500">Gestão de mesas, delivery e reservas.</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveModules(prev => ({ ...prev, restaurant: !prev.restaurant }))}
                className={cn("w-12 h-6 rounded-full relative transition-all", activeModules.restaurant ? "bg-emerald-600" : "bg-slate-200")}
              >
                <div className={cn("absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all", activeModules.restaurant ? "right-1" : "left-1")} />
              </button>
            </div>
          </div>
        </div>
      );
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {currentModule !== 'pdv' && (
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
              <button onClick={() => setCurrentModule('dashboard')} className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-1", currentModule === 'dashboard' ? "bg-blue-600 text-white shadow-lg shadow-blue-100" : "text-slate-600 hover:bg-slate-50")}>
                <LayoutDashboard size={20} />
                <span className="font-medium text-sm">Dashboard</span>
              </button>
              <button onClick={() => setCurrentModule('pdv')} className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-1", currentModule === 'pdv' ? "bg-blue-600 text-white shadow-lg shadow-blue-100" : "text-slate-600 hover:bg-slate-50")}>
                <ShoppingCart size={20} />
                <span className="font-medium text-sm">PDV / Frente de Caixa</span>
              </button>
            </div>

            <div className="mb-4">
              <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Gestão Comercial</p>
              <button onClick={() => setCurrentModule('products')} className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-1", currentModule === 'products' ? "bg-blue-600 text-white shadow-lg shadow-blue-100" : "text-slate-600 hover:bg-slate-50")}>
                <Package size={20} />
                <span className="font-medium text-sm">Produtos</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-1 text-slate-600 hover:bg-slate-50">
                <Users size={20} />
                <span className="font-medium text-sm">Clientes</span>
              </button>
            </div>

            {(activeModules.optics || activeModules.restaurant) && (
              <div className="mb-4">
                <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Módulos Ativos</p>
                {activeModules.optics && (
                  <button onClick={() => setCurrentModule('optics')} className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-1", currentModule === 'optics' ? "bg-blue-600 text-white shadow-lg shadow-blue-100" : "text-slate-600 hover:bg-slate-50")}>
                    <Eye size={20} />
                    <span className="font-medium text-sm">Ótica</span>
                  </button>
                )}
                {activeModules.restaurant && (
                  <button onClick={() => setCurrentModule('restaurant')} className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-1", currentModule === 'restaurant' ? "bg-blue-600 text-white shadow-lg shadow-blue-100" : "text-slate-600 hover:bg-slate-50")}>
                    <Utensils size={20} />
                    <span className="font-medium text-sm">Restaurante</span>
                  </button>
                )}
              </div>
            )}

            <div className="mb-4">
              <p className="px-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Configurações</p>
              <button onClick={() => setCurrentModule('fiscal')} className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-1", currentModule === 'fiscal' ? "bg-blue-600 text-white shadow-lg shadow-blue-100" : "text-slate-600 hover:bg-slate-50")}>
                <ShieldCheck size={20} />
                <span className="font-medium text-sm">Fiscal</span>
              </button>
              <button onClick={() => setCurrentModule('settings')} className={cn("w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all mb-1", currentModule === 'settings' ? "bg-blue-600 text-white shadow-lg shadow-blue-100" : "text-slate-600 hover:bg-slate-50")}>
                <Settings size={20} />
                <span className="font-medium text-sm">Módulos</span>
              </button>
            </div>
          </nav>
        </aside>
      )}
      
      <main className="flex-1 flex flex-col min-w-0">
        {currentModule !== 'pdv' && <Header />}
        
        <div className="flex-1 overflow-y-auto">
          {renderModule()}
        </div>

        {/* Floating Toggle for PDV Exit */}
        {currentModule === 'pdv' && (
          <button 
            onClick={() => setCurrentModule('dashboard')}
            className="fixed bottom-6 right-6 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-bold shadow-2xl transition-all hover:scale-105 z-50 flex items-center gap-2"
          >
            <LayoutDashboard size={18} />
            Sair do PDV
          </button>
        )}
      </main>
    </div>
  );
}


