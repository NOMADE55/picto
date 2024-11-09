import { OpenAPIHono } from '@hono/zod-openapi';
import { walk } from '@std/fs';
import { dirname, fromFileUrl, join } from '@std/path';

import Base from './components/Base.tsx';
import { parseIconParameters } from './utils/icons.ts';
import { index as iconsIndex } from './routes/icons.ts';

const currentDir = dirname(fromFileUrl(import.meta.url));
const targetDir = join(currentDir, './icons');

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
  const { theme, cols, i } = c.req.valid('query');
  const files = await Array.fromAsync(walk(targetDir, {
    maxDepth: 1,
    includeDirs: false,
  }));

  return c.render(
    <Base icons={parseIconParameters(files, i)} config={{ theme, cols }} />,
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
