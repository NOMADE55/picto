import { FC, PropsWithChildren } from 'hono/jsx';
import { iconNames } from '../icons/index.ts';
import { kebabToName } from '../utils/icons.ts';
import { dirname, fromFileUrl, join } from '@std/path';
import { encodeBase64 } from '@std/encoding';
import { containerClass } from './styles.ts';
import { css } from 'hono/css';

const CURRENT_DIR = dirname(fromFileUrl(import.meta.url));
const ICON_CATALOGUE = iconNames.reduce((acc, icon) => {
  const f = icon[0];
  if (!acc?.[f]) {
    acc[f] = [];
  }
  acc[f].push(icon);
  return acc;
}, {} as Record<string, string[]>);

const catalogueSort = (a: string, b: string) => {
  const aNumber = Number.parseInt(a);
  const bNumber = Number.parseInt(b);
  if (Number.isNaN(aNumber) && Number.isNaN(bNumber)) return 0;
  if (Number.isNaN(bNumber)) return +1;
  if (Number.isNaN(aNumber)) return -1;
  return aNumber < bNumber ? -1 : 1;
};

interface IconProps {
  icon: string;
}

interface HeaderProps {
  letter: string;
}

interface EntryProps {
  letter: string;
  icons: string[];
}

const catalogueEntryIcon = css`
  display: flex;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
  & + & {
    margin-top: 2rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  &:hover {
    img {
      transform: scale(1.15);
      filter: brightness(1.1);
    }
    h4 {
      text-decoration: underline;
      text-underline-offset: 4px;
      text-decoration-thickness: 2px;
    }
  }
`;

const catalogueEntryIconImage = css`
  width: 90px;
  height: 90px;
  border-radius: var(--rounded);
  overflow: hidden;
  img {
    transition: all 150ms ease-in;
    width: 100%; height: 100%; object-fit: cover;
  }
`;

const Icon = async ({ icon }: PropsWithChildren<IconProps>) => {
  return (
    <div class={catalogueEntryIcon}>
      <div class={catalogueEntryIconImage}>
        <img
          src={'data:image/svg+xml;base64,' + encodeBase64(
            await Deno.readFile(join(CURRENT_DIR, `../icons/${icon}.svg`)),
          )}
        />
      </div>
      <h4>{kebabToName(icon)}</h4>
    </div>
  );
};

const headerClass = css`
  padding-left: .75rem;
  padding-bottom: .25rem;
  margin-bottom: 1.5rem;
  position: sticky;
  top: 0;
  background-color: var(--dark-blue);
  border-bottom: 2px solid rgba(255, 255, 255, 0.35);

  cursor: pointer;
  &:hover {
    span {
      display: block;
    }
  }
  a {
    display: flex;
    align-items: center;
    width: 100%;
    text-decoration: none;
    position: relative;
  }
  span {
    font-size: 2rem;
    left: -2rem;
    position: absolute;
    display: none;
  }
  h3 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }
`;

const Header = ({ letter }: PropsWithChildren<HeaderProps>) => (
  <header class={headerClass} id={`${letter}-icons`}>
    <a href={`/#${letter}-icons`}>
      <span class='text-color__yellow'>#</span>
      <h3>{letter.toUpperCase()}</h3>
    </a>
  </header>
);

const cataloguEntryClass = (iconCount: number = 1) =>
  css`
    position: relative;
    grid-row: span ${iconCount + 1};
`;

const Entry = ({ letter, icons }: PropsWithChildren<EntryProps>) => (
  <section class={cataloguEntryClass(icons.length)}>
    <Header letter={letter} />
    {icons.map((i) => <Icon icon={i} />)}
  </section>
);

const catalogueIntroductionClass = css`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
`;

const catalogueMessageClass = css`
  p {font-size: 1.3rem; line-height: 1.5;}
`;

const catalogueEntriesGridClass = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  grid-auto-rows: 80px;
`;

const Catalogue: FC = () => {
  return (
    <>
      <div class={containerClass}>
        <div class={catalogueIntroductionClass}>
          <div class={catalogueMessageClass}>
            <h2>Current Catalogue</h2>
            <p>
              We're always adding new icons to our collection. However we might
              be missing that one icon you need. Feel free to submit a PR to
              {' '}
              <a
                class='text-color__yellow'
                href='https://github.com/NOMADE55/picto'
              >
                the repository
              </a>{' '}
              or open an issue to request it!
            </p>
          </div>
          <div class='catalogue-introduction--counter'>
          </div>
        </div>
        <div className={catalogueEntriesGridClass}>
          {Object.keys(ICON_CATALOGUE).sort(catalogueSort)
            .map((letter) => (
              <Entry letter={letter} icons={ICON_CATALOGUE[letter]} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Catalogue;
