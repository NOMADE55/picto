import { OpenAPIHono } from '@hono/zod-openapi';

import { index as iconsIndex } from './routes/icons.ts';

const app = new OpenAPIHono();

app.openapi(iconsIndex, (c) => {
  const { req } = c;
  const { theme, cols, icons } = req.valid('query');

  return c.json({
    theme,
    cols,
    icons,
  });
});

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '0.1.0',
    title: "Picto's API",
  },
});

export default app;
