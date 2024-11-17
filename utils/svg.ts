import { CSSProperties } from 'hono/jsx';

export const DEFAULT_SIZE = 100;
export const ICON_CELL_WIDTH = 225;
export const ICON_CELL_OFFSET = 25;
export const SCALE = DEFAULT_SIZE / (ICON_CELL_WIDTH - ICON_CELL_OFFSET);

export const getTransformValue = (
  { index, cols, cellWidth = ICON_CELL_WIDTH }: {
    index: number;
    cols: number;
    cellWidth?: number;
  },
) =>
  `translate(${(index % cols) * cellWidth}, ${
    Math.floor(index / cols) * cellWidth
  })`;

export const getCSSVariables = (config: BaseSVGConfig): CSSProperties => {
  const { round, bg } = config;
  const result: CSSProperties = {};

  if (round) result['--rx'] = round;
  if (!bg) result['--bg'] = 'transparent';
  return result;
};
