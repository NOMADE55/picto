import { createRoute, z } from '@hono/zod-openapi';
import { cache } from 'hono/cache';

const DEFAULT_COLS = 8;
const DEFAULT_THEME = 'default';

const QueryParamsSchema = z.object({
  cols: z.string().regex(/^\d+$/).transform(Number).optional().default(
    `${DEFAULT_COLS}`,
  ),
  i: z.string().optional(),
  bg: z.enum(['true', 'false']).optional().default('true'),
  theme: z.enum(['light', 'dark', 'default']).optional().default(
    DEFAULT_THEME,
  ),
  round: z.enum([
    'none',
    '0',
    '6',
    '12',
    '18',
    '24',
    '36',
    '48',
    '60',
    'rounded',
  ]).optional(),
});

export const index = createRoute({
  method: 'get',
  path: '/icons',
  request: {
    query: QueryParamsSchema,
  },
  middleware: [
    cache({
      cacheName: 'icon-cachev0.0.1',
      cacheControl: 'max-age=0',
      wait: true,
    }),
  ] as const,
  responses: {
    200: {
      description:
        'Retrieves the icons based on the configuration pased in the query parameters',
    },
  },
});
