import { FC } from 'hono/jsx';
import { containerClass } from './styles.ts';
import { css, cx } from 'hono/css';

const logoClass = css`
  padding-top: 12rem;
  margin-bottom: 3rem;
`;

const headlineClass = css`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`;

const headerClass = css`
  margin-bottom: 4rem;
`;

const Hero: FC = () => (
  <>
    <header class={cx(containerClass, headerClass)}>
      <h1 class={logoClass}>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xmlns:xlink='http://www.w3.org/1999/xlink'
          x='0px'
          y='0px'
          viewBox='0 0 724 188'
          xml:space='preserve'
          overflow='visible'
        >
          <g>
            <path
              fill='transparent'
              stroke-width='3'
              stroke-dashoffset='-3'
              stroke='#fff'
              d='M210.4,94.4c0-53.2,43-94.1,99-94.1c23.2,0.3,48.1,10.5,66.5,27.2l-27.4,35.2c-11-10-25.6-16.6-38.9-16.6
              c-27.7,0-50.7,21.1-50.7,48.6c0,27.9,24.1,48.4,49.7,48.4c15.1,0,28.5-7.1,40.1-17.5l27.2,36.2c-17.2,15.6-40,26.4-67.3,26.4
              C257.8,188.3,210.4,150.8,210.4,94.4z'
            />
            <polygon
              fill='transparent'
              stroke-width='3'
              stroke-dashoffset='-3'
              stroke='#fff'
              points='525.1,45.7 481.2,45.7 481.2,188.3 432.5,188.3 432.5,45.7 388.6,45.7 388.6,0.3 525.1,0.3 	'
            />
            <path
              fill='transparent'
              stroke-width='3'
              stroke-dashoffset='-3'
              stroke='#fff'
              d='M528.2,94.6c0-53.7,42.6-94.3,98.1-94.3c55.5,0,98.1,40.7,98.1,94.3c0,53.2-42.6,93.7-98.2,93.7
              C570.7,188.3,528.2,147.8,528.2,94.6z M676.4,94.3c0-27.6-21.7-48.9-50.1-48.9c-28.4,0-50.1,21.3-50.1,48.9
              c0,27.5,21.7,48.7,50.1,48.7C654.7,142.9,676.4,121.8,676.4,94.3z'
            />
            <path
              fill='transparent'
              stroke-width='3'
              stroke-dashoffset='-3'
              stroke='#fff'
              d='M186.5,188.3h-48.6V0.3h48.6V188.3z'
            />
            <path
              fill='var(--yellow)'
              stroke-width='3'
              stroke-dashoffset='-3'
              stroke='var(--yellow)'
              d='M26.9,139.6h48.7v48.7H26.9V139.6z M27.1,109c0-18.8,11.6-30.9,34.1-44.4c4.4-2.7,9-7.1,9-12.4
		c0-8.7-6.7-14-19.1-14c-14.8,0-27.4,8-32.7,18L0.4,23.5C3.5,19.2,13.8,0.3,54.2,0.3c38.4,0,62.8,24.8,62.8,43.9
		c0,16.4-3.4,25.4-17.1,36.1c-11.2,8.9-24.9,13.4-24.9,27.4c0,5.8,0.1,7.3,0.6,8.9l-48.3,0.1C27.1,115.5,27.1,114.2,27.1,109z'
            />
          </g>
        </svg>
        <div class='sr-only'>Picto</div>
      </h1>
      <p class={headlineClass}>
        Showcase your skills with flare 🔥
      </p>
    </header>
  </>
);

export default Hero;
