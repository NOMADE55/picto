import { walk } from 'jsr:@std/fs';
import { dirname, fromFileUrl, join } from 'jsr:@std/path';
import { replaceBetween, writeFile } from './utils.ts';

const SUPPORTED_ICONS_FLAG_START = '<!-- SUPPORTED:ICONS:START -->';
const SUPPORTED_ICONS_FLAG_END = '<!-- SUPPORTED:ICONS:END -->';

const currentDir = dirname(fromFileUrl(import.meta.url));
const targetDir = join(currentDir, '../icons');

// Get icon Files
const files = await Array.fromAsync(walk(targetDir, {
  maxDepth: 1,
  includeDirs: false,
}));

const iconNames = files.filter(({ name }) => name.split('.').pop() === 'svg')
  .map(({ name }) => name.split('.').shift()).sort();

// Update Index File
writeFile(
  join(targetDir, './index.ts'),
  [
    '// This file is generated automatically.',
    `export const iconNames = ${JSON.stringify(iconNames)} as const;`,
  ].join('\n'),
);

console.log('%cIndex file updated!', 'color: green');

const readmeContent = await Deno.readTextFile(join(targetDir, './README.md'));
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
  join(targetDir, './README.md'),
  replaceBetween(readmeContent, readmeIconsTable, {
    start: SUPPORTED_ICONS_FLAG_START,
    end: SUPPORTED_ICONS_FLAG_END,
  }),
);

console.log('%cReadme file updated!', 'color: green');
