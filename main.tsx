import { OpenAPIHono } from '@hono/zod-openapi';

import Base from './components/Base.tsx';
import { parseIconParameters } from './utils/icons.ts';
import { getRXValue } from './utils/svg.ts';
import { index as iconsIndex } from './routes/icons.ts';

const app = new OpenAPIHono();

app.use('/icons', async (c, next) => {
  c.setRenderer(async (svg) =>
    c.body(await svg.toString(), {
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    })
  );
  await next();
});

app.openapi(iconsIndex, async (c) => {
  const { theme, cols, i, round } = c.req.valid('query');
  const icons = i?.split(',') || [];
  return c.render(
    <Base
      icons={await parseIconParameters(icons)}
      config={{ theme, cols, round: getRXValue(round) }}
    />,
  );
});

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '0.1.0',
    title: "Picto's API",
  },
});

export default app;
