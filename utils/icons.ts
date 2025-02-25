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

  const iconMap = files.reduce((acc, { name, path }) => {
    const nameArray = name.split('.').reverse() || [];
    const filename = nameArray?.[1] || '';
    if (icons.includes(filename)) {
      acc[filename] = path;
    }

    return acc;
  }, {} as Record<string, string>);

  return icons.map(i => iconMap?.[i]).filter(Boolean);
};

export const kebabToName = (kebab: string) =>
  kebab.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
