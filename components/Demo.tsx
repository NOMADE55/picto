import { FC } from 'hono/jsx';
import { css, cx } from 'hono/css';
import { containerClass } from './styles.ts';

const HOST = 'https://mypicto.xyz';

const showcaseClass = css`
  margin-bottom: 6rem;
`;

const showcaseInputGroupClass = css`
  background-color: #0d151a;
  border-radius: var(--rounded);
  padding-top: .8rem;
  padding-right: .8rem;
  padding-bottom: .8rem;
  padding-left: 1.2rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #fff;
  .host {
    opacity: .6
  }
  input {
    margin: 0;
    background-color: transparent;
    border: none;
    width: 100%;
    font: inherit;
    color: inherit;
    &:focus {
      outline: 0;
    }
  }
`;

const showcaseDemoInputClass = css`
  white-space: nowrap;
  overflow: auto;
`;

// const buttonClass = css`
//   border-radius: var(--rounded);
//   background: none;
//   border: none;
//   color: #fff;
//   padding: .75rem;
//   text-align: center;
//   line-height: 1;
//   font-size: 1.1rem;
//   cursor: pointer;
//   width: 37.8px;
//   height: 37.8px;
//   &:focus {
//     outline: 1px solid rgba(255,255,255,.2)
//   }
//   &:hover {
//     color: var(--yellow);
//   }
//   svg {
//     width: 100%;
//     height: 100%;
//   }
// `;

const leadClass = css`
  font-size: 1.25rem;
`;

const demoSectionClass = css`
  margin-bottom: 2rem;
`;

const showcaseImageClass = css`
  img {
    max-width: 100%;
    height: auto;
  }
`;

const commentClass = css`
  opacity: .4;
  margin-bottom: .5rem;
`;

const DEMO_ICONS = [
  'postgresql',
  'php',
  'python',
  'sass',
  'typescript',
  'react',
];

const Demo: FC = () => {
  return (
    <section class={cx(containerClass, demoSectionClass)}>
      <div class={showcaseClass}>
        <div class={showcaseInputGroupClass}>
          <div>
            <p class={commentClass}>// Full stack skills</p>
            <div class={showcaseDemoInputClass}>
              <span>
                {HOST}/icons
              </span>
              <span class='text-color__yellow'>?i</span>
              =
              <span>
                {DEMO_ICONS.map((icon, idx) =>
                  icon + (idx !== DEMO_ICONS.length - 1 ? ',' : '')
                )}
              </span>
              <span class='text-color__yellow'>&rounded</span>
              =24
              <span class='text-color__yellow'>&height</span>
              =50
            </div>
          </div>
          {
            /* <button class={buttonClass}>
            <svg
              fill='currentColor'
              width='1em'
              height='1em'
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M14 12V2H4V0h12v12h-2zM0 4h12v12H0V4zm2 2v8h8V6H2z' />
            </svg>
          </button> */
          }
        </div>
        <div className={showcaseImageClass}>
          <img
            src='/icons?i=postgresql,php,python,sass,typescript,react&rounded=24&size=50'
            alt={DEMO_ICONS.join(' ')}
          />
        </div>
      </div>
      <p class={leadClass}>
        Picto is a tool that generates dynamic images to showcase the
        programming languages, technologies, and tools you've learned.
      </p>
    </section>
  );
};

export default Demo;
