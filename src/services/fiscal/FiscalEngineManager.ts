/**
 * FISCAL ABSTRACTION LAYER
 * Decouples the ERP from specific fiscal engines (SPED-NFe or ACBr)
 */

export type FiscalOperationResult = {
  success: boolean;
  status: 'authorized' | 'rejected' | 'error' | 'contingency';
  message: string;
  accessKey?: string;
  protocol?: string;
  xmlUrl?: string;
  pdfUrl?: string;
  errors?: string[];
  providerUsed: 'sped-nfe' | 'acbr';
  responseTime: number;
};

export interface FiscalProvider {
  emitNFe(payload: any): Promise<FiscalOperationResult>;
  emitNFCe(payload: any): Promise<FiscalOperationResult>;
  consultStatus(): Promise<boolean>;
  cancelNote(key: string, reason: string): Promise<FiscalOperationResult>;
}

/**
 * Manager responsible for engine selection and fallback logic
 */
export class FiscalEngineManager {
  private primary: FiscalProvider;
  private secondary: FiscalProvider;
  private useFallback: boolean;

  constructor(primary: FiscalProvider, secondary: FiscalProvider, useFallback: boolean = true) {
    this.primary = primary;
    this.secondary = secondary;
    this.useFallback = useFallback;
  }

  async emit(type: 'NFe' | 'NFCe', payload: any): Promise<FiscalOperationResult> {
    const startTime = Date.now();
    try {
      // Try Primary Engine (SPED-NFe PHP)
      const result = type === 'NFe' 
        ? await this.primary.emitNFe(payload) 
        : await this.primary.emitNFCe(payload);
      
      if (result.success) return result;

      // If failed and fallback is enabled, try Secondary Engine (ACBr)
      if (this.useFallback) {
        console.warn(`Primary fiscal engine failed. Attempting fallback to ACBr...`);
        return type === 'NFe'
          ? await this.secondary.emitNFe(payload)
          : await this.secondary.emitNFCe(payload);
      }

      return result;
    } catch (error) {
      if (this.useFallback) {
        return type === 'NFe'
          ? await this.secondary.emitNFe(payload)
          : await this.secondary.emitNFCe(payload);
      }
      throw error;
    }
  }
}
