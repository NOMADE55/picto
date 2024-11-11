import { walk } from '@std/fs';
import { dirname, fromFileUrl, join } from '@std/path';

export const getIconsRegexPattern = (icons: string[]): string =>
  `(${icons.join('|')})\.svg$`;

export const parseIconParameters = async (
  icons: string[],
): Promise<string[]> => {
  if (icons.length === 0) return [];

  const currentDir = dirname(fromFileUrl(import.meta.url));
  const targetDir = join(currentDir, '../icons');

  const files = await Array.fromAsync(walk(targetDir, {
    maxDepth: 1,
    includeDirs: false,
    match: [new RegExp(getIconsRegexPattern(icons))],
  }));

  return files.reduce((acc, { name, path }) => {
    const nameArray = name.split('.').reverse() || [];
    const filename = nameArray?.[1] || '';
    if (icons.includes(filename)) {
      acc.push(path);
    }

    return acc;
  }, [] as string[]);
};
