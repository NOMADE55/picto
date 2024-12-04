import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';
import Renderer from '../pages/IconsRenderer.tsx';
import { parseIconParameters } from '../utils/icons.ts';

const DEFAULT_COLS = 8;
const DEFAULT_THEME = 'default';
const VALID_MIN_SIZE = 8;
const VALID_MAX_SIZE = 800;
const VALID_MIN_ROUNDED = 0;
const VALID_MAX_ROUNDED = 200;

const app = new OpenAPIHono();

const QueryParamsSchema = z.object({
  cols: z.string().regex(/^\d+$/).transform(Number).optional().default(
    `${DEFAULT_COLS}`,
  ),
  size: z.string().regex(/^\d+$/).transform(Number).pipe(
    z.number().int().min(VALID_MIN_SIZE).max(VALID_MAX_SIZE),
  ).optional(),
  i: z.string().optional(),
  bg: z.enum(['none']).transform((v?: string) => v !== 'none').optional(),
  theme: z.enum(['light', 'dark', 'default']).optional().default(
    DEFAULT_THEME,
  ),
  rounded: z.union([
    z.enum(['none', 'round']),
    z.string().regex(/^\d+$/).transform(Number).pipe(
      z.number().min(VALID_MIN_ROUNDED).max(VALID_MAX_ROUNDED),
    ),
  ]).transform((v?: string | number) => {
    if (!v) return undefined;
    if (typeof v === 'number') return v;
    if (v === 'round') return 200;
    return 0;
  }).optional(),
});

const index = createRoute({
  method: 'get',
  path: '/',
  request: {
    query: QueryParamsSchema,
  },
  middleware: [] as const,
  responses: {
    200: {
      description:
        'Retrieves the icons based on the configuration pased in the query parameters',
    },
  },
});

app.use('/', async (c, next) => {
  c.setRenderer(async (svg) =>
    c.body(await svg.toString(), {
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    })
  );

  await next();
});

app.openapi(index, async (c) => {
  const { theme, cols, i, rounded, bg = true, size } = c.req.valid('query');
  const icons = i?.split(',') || [];
  return c.render(
    <Renderer
      icons={await parseIconParameters(icons)}
      config={{ theme, cols, rounded, bg, size }}
    />,
  );
});

export default app;