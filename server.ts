import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Nexus ERP API' });
  });

  // Mock Fiscal Endpoint (Simulating SPED-NFe PHP)
  app.post('/api/fiscal/emit', (req, res) => {
    const { type, payload } = req.body;
    console.log(`Fiscal Request: ${type}`, payload);
    
    // Simulating success
    res.json({
      success: true,
      status: 'authorized',
      message: 'Nota autorizada com sucesso',
      accessKey: '35230412345678901234550010000001231234567890',
      protocol: '135230001234567',
      xmlUrl: '/storage/xml/nfe-123.xml',
      pdfUrl: '/storage/pdf/danfe-123.pdf',
      providerUsed: 'sped-nfe',
      responseTime: 1240
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Nexus ERP running on http://localhost:${PORT}`);
  });
}

startServer();
