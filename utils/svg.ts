import { CSSProperties } from 'hono/jsx';

export const DEFAULT_SIZE = 100;
export const ICON_CELL_WIDTH = 225;
export const ICON_CELL_OFFSET = 25;
export const PLAYFUL_ROTATION = 6;

export const getTransformValue = (
  { index, cols, playful, cellWidth = ICON_CELL_WIDTH }: {
    index: number;
    cols: number;
    playful?: boolean;
    cellWidth?: number;
  },
): string => {
  let transform = `translate(${(index % cols) * cellWidth}, ${
    Math.floor(index / cols) * cellWidth
  })`;
  if (playful) {
    transform += `rotate(${
      index % 2 ? '-' : ''
    }${PLAYFUL_ROTATION}, ${DEFAULT_SIZE}, ${DEFAULT_SIZE})`;
  }

  return transform;
};

export const getCSSVariables = (
  { rounded, bg }: BaseSVGConfig,
): CSSProperties => {
  const result: CSSProperties = {};

  if (rounded) result['--rx'] = rounded;
  if (!bg) result['--bg'] = 'transparent';
  return result;
};

export const calcScale = ({ size }: BaseSVGConfig) =>
  (size || DEFAULT_SIZE) / (ICON_CELL_WIDTH - ICON_CELL_OFFSET);

interface ViewBox {
  minY: number;
  minX: number;
  width: number;
  height: number;
}

export const calcViewBox = (
  amount: number = 0,
  { cols, playful }: BaseSVGConfig,
): ViewBox => {
  let minY = 0;
  let minX = 0;
  let height = Math.ceil(amount / cols) * ICON_CELL_WIDTH - ICON_CELL_OFFSET;
  let width = Math.min(cols * ICON_CELL_WIDTH, amount * ICON_CELL_WIDTH) -
    ICON_CELL_OFFSET;

  if (playful) {
    const offset = PLAYFUL_ROTATION * 1.5;
    minY -= offset;
    minX -= offset;
    height += offset * 2;
    width += offset * 2;
  }

  return { minY, minX, height, width };
};
