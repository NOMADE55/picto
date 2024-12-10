import { CSSProperties } from 'hono/jsx';

interface ShadowValue {
  x: number;
  y: number;
  shades: string[];
}
export const DEFAULT_SIZE = 100;
export const ICON_CELL_WIDTH = 225;
export const ICON_CELL_OFFSET = 25;
export const PLAYFUL_ROTATION = 6;
export const SHADOW_VALUES: Record<Size, ShadowValue> = {
  xs: { x: 1, y: 1, shades: ['rgba(0, 0, 0, .1)'] },
  sm: { x: 1, y: 2, shades: ['rgba(0, 0, 0, .15)', 'rgba(0, 0, 0, .11)'] },
  md: { x: 4, y: 3, shades: ['rgba(0, 0, 0, .12)', 'rgba(0, 0, 0, .11)'] },
  lg: { x: 10, y: 8, shades: ['rgba(0, 0, 0, .09)', 'rgba(0, 0, 0, .15)'] },
  xl: { x: 20, y: 13, shades: ['rgba(0, 0, 0, .08)', 'rgba(0, 0, 0, .13)'] },
};

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
    transform += ` rotate(${
      index % 2 ? '-' : ''
    }${PLAYFUL_ROTATION}, ${DEFAULT_SIZE}, ${DEFAULT_SIZE})`;
  }

  return transform;
};

export const getCSSVariables = (config: BaseSVGConfig): CSSProperties => {
  const { bg, rounded, shadow } = config;
  const result: CSSProperties = {};

  if (rounded) result['--rx'] = rounded;
  if (!bg) result['--bg'] = 'transparent';
  if (shadow) result['--filter'] = getShadowValue(config);
  return result;
};

export const getShadowValue = ({ shadow }: BaseSVGConfig): string => {
  if (!shadow) return '';
  const value = SHADOW_VALUES[shadow];
  return value.shades.map((shade, i) => {
    console.log(value);
    const x = Math.floor(value.x / (i + 1));
    const y = Math.floor(value.y / (i + 1));
    return `drop-shadow(0 ${x}px ${y}px ${shade})`;
  }).join(' ');
};

export const calcScale = ({ size }: BaseSVGConfig): number =>
  (size || DEFAULT_SIZE) / (ICON_CELL_WIDTH - ICON_CELL_OFFSET);

interface ViewBox {
  minY: number;
  minX: number;
  width: number;
  height: number;
}

export const calcViewBox = (
  amount: number = 0,
  { cols, playful, shadow }: BaseSVGConfig,
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

  if (shadow) {
    height += SHADOW_VALUES[shadow].y * 2.5;
    width += SHADOW_VALUES[shadow].x * 1.5;
  }

  return { minY, minX, height, width };
};
