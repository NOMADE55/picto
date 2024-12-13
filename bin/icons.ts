import { dirname, fromFileUrl, join } from '@std/path';
import { getFiles, replaceBetween, writeFile } from './utils.ts';
import { iconNames as icons } from '../icons/index.ts';

const SUPPORTED_ICONS_FLAG_START = '<!-- SUPPORTED:ICONS:START -->';
const SUPPORTED_ICONS_FLAG_END = '<!-- SUPPORTED:ICONS:END -->';

const currentDir = dirname(fromFileUrl(import.meta.url));
const iconsDir = join(currentDir, '../icons');

// Get icon Files
const files = await getFiles(iconsDir);

const iconNames = files.filter(({ name }) => name.split('.').pop() === 'svg')
  .map(({ name }) => name.split('.').shift()).sort();
const diff = iconNames.length - icons.length;

if (diff === 0) {
  console.log('Nothing to update!');
  Deno.exit(2);
}

// Update Index File
writeFile(
  join(iconsDir, './index.ts'),
  [
    '// This file is generated automatically.',
    `export const iconNames = ${JSON.stringify(iconNames)} as const;`,
  ].join('\n'),
);

console.log('%cIndex file updated!', 'color: green');

const readmeContent = await Deno.readTextFile(join(iconsDir, './README.md'));
const readmeIconsTable = [
  '| Icon name | Icon |',
  '| :------: | :------: |',
  ...iconNames.map((i) =>
    `| \`${i}\` | <img src="./${i}.svg" alt="${i}" width="42" /> |`
  ),
  '---',
  '<br>',
  `Current icon count: <strong>${iconNames.length}</strong>`,
].join('\n');

// Update Readme file
writeFile(
  join(iconsDir, './README.md'),
  replaceBetween(readmeContent, readmeIconsTable, {
    start: SUPPORTED_ICONS_FLAG_START,
    end: SUPPORTED_ICONS_FLAG_END,
  }),
);

console.log('%cReadme file updated!', 'color: green');
console.log(`%cAdded new ${diff} icons!`, 'color: green');
