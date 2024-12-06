import { PropsWithChildren } from 'hono/jsx';
import { encodeBase64 } from '@std/encoding';
import { dirname, fromFileUrl, join } from '@std/path';

const CURRENT_DIR = dirname(fromFileUrl(import.meta.url));

interface Props {
  icon: string;
}

const Icon = async ({ icon }: PropsWithChildren<Props>) => (
  <img
    src={'data:image/svg+xml;base64,' + encodeBase64(
      await Deno.readFile(join(CURRENT_DIR, `../icons/${icon}.svg`)),
    )}
  />
);

export default Icon;
