import { OpenAPIHono } from '@hono/zod-openapi';
import Home from '../pages/Home.tsx';
import { Style } from 'hono/css';

const app = new OpenAPIHono();

app.get('/', (c) =>
  c.html(
    <html>
      <head>
        <title>Picto | Showcase your skills with flare 🔥</title>
        <meta charset='UTF-8' />
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
        <meta
          name='description'
          content="Picto is a tool that generates dynamic images to showcase the
        programming languages, technologies, and tools you've learned."
        />
        <meta name='theme-color' content='#1a2b35' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Picto' />
        <meta property='og:url' content='https://mypicto.xyz' />
        <meta property='og:image' content='https://mypicto.xyz/og-picto.jpg' />
        <meta name='robots' content='noindex,nofollow' />
      </head>
      <body>
        <Home />
      </body>
    </html>,
  ));

export default app;
