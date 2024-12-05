import { css } from 'hono/css';

export const pageClass = css`
  :-hono-global {
    :root {
      --yellow: #f3c922;
      --dark-blue: #1a2b35;
      --rounded: 12px;
      font-size: 14px;
      line-height: 1.2;
      font-family: 'Fira Mono';
    }
    body {
      background-color: var(--dark-blue);
      color: #fff;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      &::selection {
        background-color: var(--yellow);
      }
    }
    p, input, button, blockquote {
      margin: 0;
    }
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-family: Rubik;
      margin-bottom: 1rem;
    }
    a {
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
      color: inherit;
    }
    .sr-only {
      display: none;
    }
    .text-color__yellow {
      color: var(--yellow);
    }
    .text-color__blue {
      color: var(--dark-blue);
    }

  }
`;

export const containerClass = css`
  max-width: 1000px;
  margin: auto;
  padding: 1rem;
`;
