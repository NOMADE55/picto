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
