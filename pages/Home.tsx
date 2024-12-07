import type { FC } from 'hono/jsx';
import Catalogue from '../components/Catalogue.tsx';
import Hero from '../components/Hero.tsx';
import Demo from '../components/Demo.tsx';
import Footer from '../components/Footer.tsx';
import { pageClass } from '../components/styles.ts';

const Home: FC = () => {
  return (
    <main class={pageClass}>
      <Hero />
      <Demo />
      <Catalogue />
      <Footer />
    </main>
  );
};

export default Home;
