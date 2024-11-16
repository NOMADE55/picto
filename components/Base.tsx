import { CSSProperties, memo } from 'hono/jsx';
import cn from 'classnames';

import {
  getTransformValue,
  ICON_CELL_OFFSET,
  ICON_CELL_WIDTH,
  SCALE,
} from '../utils/svg.ts';

interface Props {
  icons: string[];
  config: BaseSVGConfig;
}

const Base = memo(({ icons, config }: Props) => {
  const { cols, theme, round } = config;
  const amount = icons.length;
  const width = Math.min(cols * ICON_CELL_WIDTH, amount * ICON_CELL_WIDTH) -
    ICON_CELL_OFFSET;
  const height = Math.ceil(amount / cols) * ICON_CELL_WIDTH - ICON_CELL_OFFSET;

  const scaledHeight = SCALE * height;
  const scaledWidth = SCALE * width;

  return (
    <svg
      width={scaledWidth}
      height={scaledHeight}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlns:xlink='http://www.w3.org/1999/xlink'
      version='1.1'
      style={{ '--rx': round } as CSSProperties}
    >
      <g
        className={cn([`theme-${theme}`], {
          'rounded': round === '200',
        })}
      >
        {icons.map(async (icon, index) => (
          <g
            transform={getTransformValue({ index, cols })}
            dangerouslySetInnerHTML={{ __html: await Deno.readTextFile(icon) }}
          />
        ))}
      </g>
    </svg>
  );
});

export default Base;
