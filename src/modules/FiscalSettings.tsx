import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  History, 
  AlertCircle, 
  CheckCircle2, 
  FileText,
  Settings2,
  Key,
  CloudLightning,
  RefreshCcw
} from 'lucide-react';
import { cn } from '../lib/utils';

export const FiscalSettings = () => {
  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Configurações Fiscais</h2>
        <p className="text-slate-500 text-sm mt-1">Configure seus motores de emissão, certificados e ambiente SEFAZ.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* Engine Selection */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Cpu className="text-blue-600" size={24} />
              <h3 className="font-bold text-slate-900">Motores Fiscais</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="p-6 rounded-2xl border-2 border-blue-600 bg-blue-50/50 text-left relative group">
                <div className="absolute top-4 right-4 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-white" />
                </div>
                <h4 className="font-bold text-blue-900 mb-1">SPED-NFe (PHP)</h4>
                <p className="text-xs text-blue-700 font-medium leading-relaxed">Motor principal de alta performance. Recomendado para volume intenso.</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-600 uppercase">Online</span>
                </div>
              </button>

              <button className="p-6 rounded-2xl border-2 border-slate-100 hover:border-blue-200 transition-all text-left group">
                <h4 className="font-bold text-slate-800 mb-1">ACBr Monitor</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">Motor secundário para fallback automático em caso de falha.</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Standby</span>
                </div>
              </button>
            </div>

            <div className="pt-4 flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
              <div className="flex items-center gap-3">
                <CloudLightning className="text-amber-500" size={20} />
                <div>
                  <p className="text-sm font-bold text-slate-800">Fallback Automático</p>
                  <p className="text-xs text-slate-500">Alternar motor se houver falha na SEFAZ</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
              </div>
            </div>
          </div>

          {/* Certificate */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Key className="text-blue-600" size={24} />
                <h3 className="font-bold text-slate-900">Certificado Digital A1</h3>
              </div>
              <button className="text-sm font-bold text-blue-600 hover:underline">Alterar Certificado</button>
            </div>

            <div className="p-6 border border-emerald-100 bg-emerald-50/30 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <ShieldCheck className="text-emerald-600" size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-emerald-900">NEXUS TECNOLOGIA LTDA</p>
                <p className="text-xs text-emerald-700 font-medium">CNPJ: 12.345.678/0001-90 • Válido até 15/12/2026</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black uppercase bg-emerald-100 text-emerald-700 px-2 py-1 rounded-lg">Ativo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Status Panel */}
          <div className="bg-slate-900 p-8 rounded-3xl text-white space-y-6">
            <h3 className="font-bold text-lg">Status SEFAZ</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400 font-medium">Ambiente</span>
                <span className="text-xs font-bold bg-blue-500/20 text-blue-400 px-2 py-1 rounded-lg uppercase">Produção</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400 font-medium">Status</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-emerald-400">Operacional</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400 font-medium">Latência</span>
                <span className="text-xs font-bold text-slate-200">124ms</span>
              </div>
            </div>
            <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2">
              <RefreshCcw size={16} />
              Testar Conexão
            </button>
          </div>

          {/* Quick Stats */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Notas este mês</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-600">Autorizadas</span>
                <span className="text-sm font-bold text-slate-900">1,240</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-600">Rejeitadas</span>
                <span className="text-sm font-bold text-rose-500">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-600">Canceladas</span>
                <span className="text-sm font-bold text-amber-500">45</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
