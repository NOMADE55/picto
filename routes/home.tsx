import { OpenAPIHono } from '@hono/zod-openapi';
import Home from '../pages/Home.tsx';
import { Style } from 'hono/css';

const app = new OpenAPIHono();

app.get('/', (c) =>
  c.html(
    <html>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossorigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400&family=Rubik:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <Style />
      </head>
      <body>
        <Home />
      </body>
    </html>,
  ));

export default app;
