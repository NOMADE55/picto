import { OpenAPIHono } from '@hono/zod-openapi';
import { serveStatic } from 'hono/deno';

import home from './routes/home.tsx';
import icons from './routes/icons.tsx';

const app = new OpenAPIHono();

app.use('/favicon.ico', serveStatic({ path: './public/picto-iso.svg' }));
app.use('/og-picto.jpg', serveStatic({ path: './public/og-picto.jpg' }));

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
