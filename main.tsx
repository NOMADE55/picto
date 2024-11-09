import { OpenAPIHono } from '@hono/zod-openapi';
import { walk } from '@std/fs';
import { dirname, fromFileUrl, join } from '@std/path';

import { index as iconsIndex } from './routes/icons.ts';
import Base from './components/Base.tsx';
import { parseIconParameters } from './utils/icons.ts';

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
  const { req } = c;
  const { theme, cols, i } = req.valid('query');
  const icons = parseIconParameters(i);
  const files = await Array.fromAsync(walk(targetDir, {
    maxDepth: 1,
    includeDirs: false,
  }));

  const fileIcons = files.filter(({ name }) => {
    const nameArray = name.split('.');
    const extension = nameArray.pop() || '';
    const filename = nameArray.pop() || '';
    return extension === 'svg' && icons.includes(filename);
  }).map(({ path }) => {
    return path;
  });

  return c.render('JSX');
});

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '0.1.0',
    title: "Picto's API",
  },
});

export default app;
