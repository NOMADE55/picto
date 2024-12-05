import type { FC } from 'hono/jsx';
import Catalogue from '../components/Catalogue.tsx';
import Hero from '../components/Hero.tsx';
import { pageClass } from '../components/styles.ts';

const Home: FC = () => {
  return (
    <main class={pageClass}>
      <Hero />
      <Catalogue />
    </main>
  );
};

export default Home;
