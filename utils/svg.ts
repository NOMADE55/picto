import { CSSProperties } from 'hono/jsx';

export const DEFAULT_SIZE = 100;
export const ICON_CELL_WIDTH = 225;
export const ICON_CELL_OFFSET = 25;

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
  const { rounded, bg } = config;
  const result: CSSProperties = {};

  if (rounded) result['--rx'] = rounded;
  if (!bg) result['--bg'] = 'transparent';
  return result;
};

export const calcScale = ({ size }: BaseSVGConfig) =>
  (size || DEFAULT_SIZE) / (ICON_CELL_WIDTH - ICON_CELL_OFFSET);
