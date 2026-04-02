import React from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye,
  ArrowUpDown,
  Download,
  Upload,
  Package
} from 'lucide-react';
import { cn, formatCurrency } from '../lib/utils';

const products = [
  { id: '1', name: 'Smartphone Galaxy S23 Ultra', sku: 'GAL-S23-U', category: 'Eletrônicos', stock: 12, price: 5499.00, status: 'active' },
  { id: '2', name: 'Notebook Dell XPS 13', sku: 'DELL-XPS-13', category: 'Informática', stock: 5, price: 8999.00, status: 'active' },
  { id: '3', name: 'Monitor LG UltraWide 34"', sku: 'LG-34-CURV', category: 'Monitores', stock: 8, price: 2899.00, status: 'active' },
  { id: '4', name: 'Teclado Mecânico Keychron K2', sku: 'KEY-K2-BR', category: 'Acessórios', stock: 0, price: 750.00, status: 'out_of_stock' },
  { id: '5', name: 'Mouse Logitech MX Master 3S', sku: 'LOG-MX-3S', category: 'Acessórios', stock: 20, price: 599.00, status: 'active' },
  { id: '6', name: 'Cadeira Gamer Noblechairs', sku: 'NOB-CHAIR-G', category: 'Móveis', stock: 3, price: 2499.00, status: 'active' },
];

export const ProductList = () => {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Produtos</h2>
          <p className="text-slate-500 text-sm mt-1">Gerencie seu catálogo de produtos, estoque e preços.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all">
            <Upload size={18} />
            Importar
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
            <Plus size={18} />
            Novo Produto
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-4 flex-1 min-w-[300px]">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Buscar por nome, SKU ou EAN..." 
                className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-100 transition-all outline-none"
              />
            </div>
            <button className="flex items-center gap-2 bg-slate-50 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100 transition-all">
              <Filter size={18} />
              Filtros
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-bold uppercase">Ordenar por:</span>
            <select className="bg-transparent border-none text-sm font-bold text-slate-600 outline-none cursor-pointer">
              <option>Mais recentes</option>
              <option>Preço: Menor p/ Maior</option>
              <option>Estoque: Menor p/ Maior</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Produto</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">SKU</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Categoria</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Estoque</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Preço</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200">
                        <Package size={20} className="text-slate-400" />
                      </div>
                      <span className="font-bold text-slate-700 text-sm">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">
                      {product.sku}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-500 font-medium">{product.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "text-sm font-bold",
                        product.stock === 0 ? "text-red-500" : product.stock < 5 ? "text-amber-500" : "text-slate-700"
                      )}>
                        {product.stock}
                      </span>
                      <span className="text-[10px] font-bold text-slate-300 uppercase">unid.</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-slate-900">{formatCurrency(product.price)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "text-[10px] font-black uppercase px-2 py-1 rounded-lg",
                      product.status === 'active' ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
                    )}>
                      {product.status === 'active' ? 'Ativo' : 'Sem Estoque'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-400 font-medium">Mostrando 1-6 de 124 produtos</p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-blue-600 disabled:opacity-50" disabled>Anterior</button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-bold">1</button>
              <button className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-600 text-xs font-bold">2</button>
              <button className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-600 text-xs font-bold">3</button>
            </div>
            <button className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-blue-600">Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
};
