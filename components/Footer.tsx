import { FC } from 'hono/jsx';
import { css, cx } from 'hono/css';
import { containerClass } from './styles.ts';

const footerClass = css`
  margin-top: 2rem;
  padding-bottom: 2rem;
`;

const footerParagraphClass = css`
  text-align: center;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const separatorClass = css`
  margin: 0 1.25rem;
  width: 5px;
  height: 1.4rem;
  opacity: .25;
  display: block;
  background-color: #fff;
`;

const Footer: FC = () => (
  <footer class={cx(containerClass, footerClass)}>
    <p class={footerParagraphClass}>
      <span>
        Check us out on{' '}
        <a class='text-color__yellow' href='https://github.com/NOMADE55/picto'>
          Github{' '}
          <svg
            class='text-color__white'
            width='1em'
            height='1em'
            xmlns='http://www.w3.org/2000/svg'
            xmlns:xlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M10,0c5.5,0,10,4.6,10,10.3c0,4.5-2.9,8.4-6.8,9.7c-0.5,0.1-0.7-0.2-0.7-0.5
	c0-0.3,0-1.4,0-2.8c0-1-0.3-1.6-0.7-1.9c2.2-0.3,4.6-1.1,4.6-5.1c0-1.1-0.4-2-1-2.8c0.1-0.3,0.4-1.3-0.1-2.7c0,0-0.8-0.3-2.7,1.1
	C11.7,5.1,10.8,5,10,5C9.2,5,8.3,5.1,7.5,5.3C5.6,4,4.7,4.3,4.7,4.3C4.2,5.7,4.5,6.7,4.6,7c-0.6,0.7-1,1.6-1,2.8
	c0,3.9,2.3,4.8,4.6,5.1c-0.3,0.3-0.5,0.7-0.6,1.4c-0.6,0.3-2,0.7-2.9-0.9c0,0-0.5-1-1.5-1.1c0,0-1,0-0.1,0.6c0,0,0.7,0.3,1.1,1.5
	c0,0,0.6,1.8,3.4,1.2c0,0.9,0,1.7,0,1.9c0,0.3-0.2,0.6-0.7,0.5c-4-1.4-6.8-5.2-6.8-9.7C0,4.6,4.5,0,10,0' />
          </svg>
        </a>
      </span>
      <span class={separatorClass}></span>
      <span>
        Made with 🤍 by{' '}
        <a class='text-color__yellow' href='https://github.com/NOMADE55/'>
          Lucas
        </a>
      </span>
    </p>
  </footer>
);

export default Footer;
