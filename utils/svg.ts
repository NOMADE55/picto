export const DEFAULT_SIZE = 100;
export const ICON_CELL_WIDTH = 225;
export const ICON_CELL_OFFSET = 25;
export const SCALE = DEFAULT_SIZE / (ICON_CELL_WIDTH - ICON_CELL_OFFSET);
const VALID_ROUNDS: Round[] = [
  '0',
  '6',
  '12',
  '18',
  '24',
  '36',
  '48',
  '60',
  '200',
];

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

export const getRXValue = (round: string): Round => {
  if (VALID_ROUNDS.includes(round as Round)) return round as Round;
  if (round === 'rounded') return '200';
  return '0';
};
