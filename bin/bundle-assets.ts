import { dirname, fromFileUrl, join } from '@std/path';
import { encodeBase64 } from '@std/encoding';
import { iconNames } from '../icons/index.ts';
import { writeFile } from './utils.ts';

const currentDir = dirname(fromFileUrl(import.meta.url));
const iconsDir = join(currentDir, '../icons');
const publicDir = join(currentDir, '../public');

const iconSvgContents: Record<string, string> = {};
const iconSvgBase64: Record<string, string> = {};

for (const name of iconNames) {
  const bytes = await Deno.readFile(join(iconsDir, `${name}.svg`));
  iconSvgContents[name] = new TextDecoder().decode(bytes);
  iconSvgBase64[name] = encodeBase64(bytes);
}

writeFile(
  join(iconsDir, './content.generated.ts'),
  [
    '// This file is generated automatically by bin/bundle-assets.ts. Do not edit by hand.',
    `export const iconSvgContents: Record<string, string> = ${
      JSON.stringify(iconSvgContents)
    };`,
    `export const iconSvgBase64: Record<string, string> = ${
      JSON.stringify(iconSvgBase64)
    };`,
  ].join('\n'),
);

console.log('%cIcon content bundle generated!', 'color: green');

const publicFiles = {
  pictoIsoSvg: 'picto-iso.svg',
  pictoSvg: 'picto.svg',
} as const;

const publicSvgContents: Record<string, string> = {};
for (const [key, file] of Object.entries(publicFiles)) {
  publicSvgContents[key] = await Deno.readTextFile(join(publicDir, file));
}

const ogImageBase64 = encodeBase64(
  await Deno.readFile(join(publicDir, 'og-picto.jpg')),
);

writeFile(
  join(publicDir, './content.generated.ts'),
  [
    '// This file is generated automatically by bin/bundle-assets.ts. Do not edit by hand.',
    `export const publicSvgContents: Record<string, string> = ${
      JSON.stringify(publicSvgContents)
    };`,
    `export const ogImageBase64 = ${JSON.stringify(ogImageBase64)};`,
  ].join('\n'),
);

console.log('%cPublic asset bundle generated!', 'color: green');
