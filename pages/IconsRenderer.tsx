import { memo } from 'hono/jsx';

import {
  calcScale,
  calcViewBox,
  getCSSVariables,
  getTransformValue,
} from '../utils/svg.ts';

interface Props {
  icons: string[];
  config: BaseSVGConfig;
}

const IconsRenderer = memo(({ icons, config }: Props) => {
  const { cols, theme, rounded, playful } = config;
  const viewBox = calcViewBox(icons.length, config);
  const { width, height, minX, minY } = viewBox;
  const scale = calcScale(config);
  const scaledHeight = scale * height;
  const scaledWidth = scale * width;

  return (
    <svg
      width={scaledWidth}
      height={scaledHeight}
      viewBox={`${minX} ${minY} ${width} ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlns:xlink='http://www.w3.org/1999/xlink'
      version='1.1'
      style={getCSSVariables(config)}
    >
      <g
        class={`
          theme-${theme}
          ${rounded === 200 ? 'rounded' : ''}
        `}
      >
        {icons.map(async (icon, index) => (
          <g
            transform={getTransformValue({ index, cols, playful })}
            dangerouslySetInnerHTML={{ __html: await Deno.readTextFile(icon) }}
          />
        ))}
      </g>
    </svg>
  );
});

export default IconsRenderer;
