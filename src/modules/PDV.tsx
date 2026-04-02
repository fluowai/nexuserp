import React from 'react';
import { 
  Search, 
  Barcode, 
  UserPlus, 
  Trash2, 
  Minus, 
  Plus, 
  CreditCard, 
  Banknote, 
  QrCode,
  Printer,
  X,
  ChevronRight,
  ShoppingCart,
  FileText
} from 'lucide-react';
import { cn, formatCurrency } from '../lib/utils';

const products = [
  { id: '1', name: 'Smartphone Galaxy S23 Ultra 512GB', price: 5499.00, sku: 'GAL-S23-U', stock: 12 },
  { id: '2', name: 'Notebook Dell XPS 13 i7 16GB', price: 8999.00, sku: 'DELL-XPS-13', stock: 5 },
  { id: '3', name: 'Monitor LG UltraWide 34" Curvo', price: 2899.00, sku: 'LG-34-CURV', stock: 8 },
  { id: '4', name: 'Teclado Mecânico Keychron K2', price: 750.00, sku: 'KEY-K2-BR', stock: 15 },
  { id: '5', name: 'Mouse Logitech MX Master 3S', price: 599.00, sku: 'LOG-MX-3S', stock: 20 },
];

export const PDV = () => {
  const [cart, setCart] = React.useState<any[]>([]);
  const [search, setSearch] = React.useState('');

  const addToCart = (product: any) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQty = (id: string, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const discount = 0;
  const total = subtotal - discount;

  return (
    <div className="h-[calc(100vh-80px)] flex bg-slate-50 overflow-hidden">
      {/* Left Side: Product Selection */}
      <div className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Pesquisar produto por nome, SKU ou Código de Barras (F1)" 
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-100 transition-all outline-none shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <div className="bg-slate-100 text-slate-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-slate-200">F1</div>
              <Barcode className="text-slate-300" size={20} />
            </div>
          </div>
          <button className="bg-white border border-slate-200 p-4 rounded-2xl text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
            <UserPlus size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {products.filter(p => p.name.toLowerCase().includes(search.toLowerCase())).map((product) => (
            <button 
              key={product.id}
              onClick={() => addToCart(product)}
              className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all text-left group"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">
                  {product.sku}
                </div>
                <span className="text-[10px] font-bold text-slate-400">Estoque: {product.stock}</span>
              </div>
              <h4 className="font-bold text-slate-800 text-sm line-clamp-2 mb-4 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-slate-900">{formatCurrency(product.price)}</span>
                <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Plus size={18} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right Side: Cart / Checkout */}
      <div className="w-[450px] bg-white border-l border-slate-200 flex flex-col shadow-2xl">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 flex items-center gap-2">
            Carrinho de Venda
            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">{cart.length}</span>
          </h3>
          <button onClick={() => setCart([])} className="text-slate-400 hover:text-red-500 transition-colors">
            <Trash2 size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
              <ShoppingCart size={64} className="text-slate-300" />
              <p className="text-sm font-medium text-slate-500">O carrinho está vazio.<br/>Selecione produtos para começar.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="flex-1">
                  <h5 className="text-sm font-bold text-slate-800 line-clamp-1">{item.name}</h5>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{formatCurrency(item.price)} cada</p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center bg-slate-50 rounded-xl border border-slate-100">
                      <button 
                        onClick={() => updateQty(item.id, -1)}
                        className="p-1.5 hover:text-blue-600 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-slate-700">{item.qty}</span>
                      <button 
                        onClick={() => updateQty(item.id, 1)}
                        className="p-1.5 hover:text-blue-600 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="text-sm font-bold text-slate-900">{formatCurrency(item.price * item.qty)}</span>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-slate-300 hover:text-red-500 transition-colors self-start pt-1"
                >
                  <X size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500 font-medium">Subtotal</span>
              <span className="text-slate-700 font-bold">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500 font-medium">Desconto</span>
              <span className="text-emerald-600 font-bold">-{formatCurrency(discount)}</span>
            </div>
            <div className="pt-2 border-t border-slate-200 flex justify-between items-end">
              <span className="text-slate-900 font-bold">Total a Pagar</span>
              <span className="text-3xl font-black text-blue-600">{formatCurrency(total)}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-slate-200 rounded-2xl hover:border-blue-200 hover:text-blue-600 transition-all group">
              <Banknote size={20} className="text-slate-400 group-hover:text-blue-600" />
              <span className="text-[10px] font-bold uppercase">Dinheiro</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-slate-200 rounded-2xl hover:border-blue-200 hover:text-blue-600 transition-all group">
              <CreditCard size={20} className="text-slate-400 group-hover:text-blue-600" />
              <span className="text-[10px] font-bold uppercase">Cartão</span>
            </button>
            <button className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-slate-200 rounded-2xl hover:border-blue-200 hover:text-blue-600 transition-all group">
              <QrCode size={20} className="text-slate-400 group-hover:text-blue-600" />
              <span className="text-[10px] font-bold uppercase">PIX</span>
            </button>
          </div>

          <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 group">
            FINALIZAR VENDA (F10)
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center justify-center gap-4 pt-2">
            <button className="text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1.5 text-xs font-bold">
              <Printer size={14} />
              IMPRIMIR
            </button>
            <div className="w-px h-3 bg-slate-300" />
            <button className="text-slate-400 hover:text-blue-600 transition-colors flex items-center gap-1.5 text-xs font-bold">
              <FileText size={14} />
              EMITIR NFC-e
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
