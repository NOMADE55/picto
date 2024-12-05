import { iconNames } from '../icons/index.ts';
import { css } from 'hono/css';

const ICON_COUNT = iconNames.length;
const WORD_SOUP = iconNames.join(' ');

const counterWordSoupClass = css`
  word-break:break-all;
  font-size:0.88rem;
  line-height:1.35;
  position:relative;
  color:#ffffff3e;
  &:before {
    clip-path: url(#iconCount);
    content: attr(data-soup);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    color: var(--yellow);
    display: block;
  }
`;

const counterClass = css`
  position: relative;
  display: grid;
  place-items: center;
  max-height: 200px;
  overflow: hidden;
`;

const counterCountClass = css`
  font-family: Rubik;
  text-align: center;
  position: absolute;
  inset: 0 0 0 0;
  width: 100%;
  height: 100%;
  text {
    font-size: 19rem;
    font-family: "Fira Mono";
    font-weight: 700;
  }
`;

const Counter = () => {
  return (
    <div class={counterClass}>
      <p data-soup={WORD_SOUP} class={counterWordSoupClass}>{WORD_SOUP}</p>
      <svg
        class={counterCountClass}
        version='1.1'
        viewBox='0 0 100px 100%'
        xml:space='preserve'
        xmlns:xlink='http://www.w3.org/1999/xlink'
        xmlns='http://www.w3.org/2000/svg'
      >
        <clipPath id='iconCount'>
          <text
            text-anchor='middle middle'
            x='-12px'
            y='192px'
          >
            {ICON_COUNT}
          </text>
        </clipPath>
      </svg>
    </div>
  );
};

export default Counter;
