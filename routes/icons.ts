import { createRoute, z } from '@hono/zod-openapi';

const DEFAULT_COLS = 8;
const DEFAULT_THEME = 'default';

const QueryParamsSchema = z.object({
  cols: z.number().optional().default(DEFAULT_COLS),
  i: z.string().optional(),
  bg: z.enum(['true', 'false']).optional().default('true'),
  theme: z.enum(['light', 'dark', 'default']).optional().default(
    DEFAULT_THEME,
  ),
});

export const index = createRoute({
  method: 'get',
  path: '/icons',
  request: {
    query: QueryParamsSchema,
  },
  responses: {
    200: {
      description:
        'Retrieves the icons based on the configuration pased in the query parameters',
    },
  },
});
