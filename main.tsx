import { OpenAPIHono } from '@hono/zod-openapi';

import home from './routes/home.tsx';
import icons from './routes/icons.tsx';
import { ogImageBase64, publicSvgContents } from './public/content.generated.ts';

const app = new OpenAPIHono();

const base64ToArrayBuffer = (base64: string): ArrayBuffer =>
  Uint8Array.from(atob(base64), (c) => c.charCodeAt(0)).buffer;

app.get('/favicon.ico', (c) =>
  c.body(publicSvgContents.pictoIsoSvg, 200, {
    'Content-Type': 'image/svg+xml',
  }));
app.get('/og-picto.jpg', (c) =>
  c.body(base64ToArrayBuffer(ogImageBase64), 200, {
    'Content-Type': 'image/jpeg',
  }));

app.route('/', home);
app.route('/icons', icons);

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '0.1.0',
    title: "Picto's API",
  },
});

export default app;
