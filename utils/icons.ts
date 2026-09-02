import { iconNames } from '../icons/index.ts';

export const parseIconParameters = (icons: string[]): string[] => {
  if (icons.length === 0) return [];

  const knownIcons = new Set<string>(iconNames);
  return icons.filter((icon) => knownIcons.has(icon));
};

export const kebabToName = (kebab: string) =>
  kebab.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
