import { CSSProperties } from 'hono/jsx';

export const DEFAULT_SIZE = 100;
export const ICON_CELL_WIDTH = 225;
export const ICON_CELL_OFFSET = 25;
export const PLAYFUL_SCALE = .85;

export const getTransformValue = (
  { index, cols, playful, cellWidth = ICON_CELL_WIDTH }: {
    index: number;
    cols: number;
    playful?: boolean;
    cellWidth?: number;
  },
) => {
  const transforms = [];
  const col = index % cols;
  let translateX = (index % cols) * cellWidth;
  let translateY = Math.floor(index / cols) * cellWidth;

  if (playful) {
    const scaled = DEFAULT_SIZE * PLAYFUL_SCALE;
    translateY += DEFAULT_SIZE - scaled;
    translateX -= (DEFAULT_SIZE - scaled) * col * 2;

    transforms.push(
      `rotate(${index % 2 ? '-' : ''}5, ${scaled}, ${scaled})`,
    );

    transforms.push(`scale(${PLAYFUL_SCALE})`);
  }
  return [
    `translate(${translateX}, ${translateY})`,
    ...transforms,
  ].join(', ');
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
): ViewBox => ({
  minY: 0,
  minX: playful ? ICON_CELL_OFFSET * -1 : 0,
  height: Math.ceil(amount / cols) * ICON_CELL_WIDTH - ICON_CELL_OFFSET,
  width: Math.min(cols * ICON_CELL_WIDTH, amount * ICON_CELL_WIDTH) -
    ICON_CELL_OFFSET,
});
