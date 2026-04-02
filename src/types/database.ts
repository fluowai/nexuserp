/**
 * NEXUS ERP + PDV - DATABASE BLUEPRINT
 * Multi-tenant relational structure
 */

export interface Tenant {
  id: string;
  name: string;
  slug: string;
  cnpj: string;
  plan: 'starter' | 'pro' | 'enterprise';
  status: 'active' | 'suspended' | 'trial';
  created_at: string;
}

export interface User {
  id: string;
  tenant_id: string;
  name: string;
  email: string;
  role_id: string;
  status: 'active' | 'inactive';
}

export interface Product {
  id: string;
  tenant_id: string;
  name: string;
  sku: string;
  barcode?: string;
  category_id: string;
  brand_id?: string;
  unit: string; // UN, KG, LT, etc
  cost_price: number;
  sale_price: number;
  min_stock: number;
  current_stock: number;
  ncm: string;
  cfop: string;
  tax_situation: string; // CST/CSOSN
}

export interface Sale {
  id: string;
  tenant_id: string;
  customer_id?: string;
  user_id: string;
  total_amount: number;
  discount_amount: number;
  net_amount: number;
  payment_status: 'paid' | 'pending' | 'cancelled';
  fiscal_status: 'none' | 'pending' | 'authorized' | 'rejected' | 'cancelled';
  invoice_id?: string;
  created_at: string;
}

export interface Invoice {
  id: string;
  tenant_id: string;
  sale_id: string;
  number: number;
  series: number;
  access_key: string;
  protocol?: string;
  xml_url?: string;
  pdf_url?: string;
  engine_used: 'sped-nfe' | 'acbr';
  status: 'authorized' | 'rejected' | 'cancelled';
  error_message?: string;
}

export interface FiscalSettings {
  tenant_id: string;
  environment: 'homologation' | 'production';
  primary_engine: 'sped-nfe' | 'acbr';
  fallback_enabled: boolean;
  certificate_id?: string;
  nfe_series: number;
  nfce_series: number;
  next_nfe_number: number;
  next_nfce_number: number;
}

/**
 * OPTICS MODULE TYPES
 */
export interface Prescription {
  id: string;
  tenant_id: string;
  customer_id: string;
  doctor_name?: string;
  date: string;
  // Right Eye (OD)
  od_spherical: number;
  od_cylindrical: number;
  od_axis: number;
  od_dnp: number;
  // Left Eye (OE)
  oe_spherical: number;
  oe_cylindrical: number;
  oe_axis: number;
  oe_dnp: number;
  addition: number;
  lens_type: string;
  frame_info?: string;
  observations?: string;
}

/**
 * RESTAURANT MODULE TYPES
 */
export interface RestaurantTable {
  id: string;
  tenant_id: string;
  number: number;
  capacity: number;
  status: 'available' | 'occupied' | 'reserved' | 'cleaning';
  current_sale_id?: string;
}

export interface Reservation {
  id: string;
  tenant_id: string;
  customer_id: string;
  table_id?: string;
  date: string;
  time: string;
  party_size: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'finished';
}

export interface ModuleConfig {
  tenant_id: string;
  optics_enabled: boolean;
  restaurant_enabled: boolean;
  service_orders_enabled: boolean;
}
