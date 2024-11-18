import { memo } from 'hono/jsx';
import cn from 'classnames';

import {
  calcScale,
  getCSSVariables,
  getTransformValue,
  ICON_CELL_OFFSET,
  ICON_CELL_WIDTH,
} from '../utils/svg.ts';

interface Props {
  icons: string[];
  config: BaseSVGConfig;
}

const Base = memo(({ icons, config }: Props) => {
  const { cols, theme, rounded } = config;
  const amount = icons.length;
  const width = Math.min(cols * ICON_CELL_WIDTH, amount * ICON_CELL_WIDTH) -
    ICON_CELL_OFFSET;
  const height = Math.ceil(amount / cols) * ICON_CELL_WIDTH - ICON_CELL_OFFSET;
  const scale = calcScale(config);
  const scaledHeight = scale * height;
  const scaledWidth = scale * width;

  return (
    <svg
      width={scaledWidth}
      height={scaledHeight}
      viewBox={`0 0 ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlns:xlink='http://www.w3.org/1999/xlink'
      version='1.1'
      style={getCSSVariables(config)}
    >
      <g
        className={cn([`theme-${theme}`], {
          'rounded': rounded === 200,
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
