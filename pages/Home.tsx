import type { FC } from 'hono/jsx';
import { css } from 'hono/css';

const pageClass = css`
  :-hono-global {
    :root { --yellow: #f3c922; --dark-blue: #1a2b35; font-size: 14px; line-height: 1.2; font-family: 'Fira Mono'; }
    body { background-color: var(--dark-blue); color: #fff; margin: 0; }
    * { box-sizing: border-box; }
    h1, h2, h3, h4, h5, h6 { margin: 0; font-family: Rubik; margin-bottom: 1rem;}
  }
`;

const Home: FC = () => {
  return (
    <main class={pageClass}>
    </main>
  );
};

export default Home;
