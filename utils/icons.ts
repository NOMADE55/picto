import { WalkEntry } from '@std/fs/walk';

export const parseIconParameters = (
  files: WalkEntry[],
  iconParam?: string,
): string[] => {
  const icons = (iconParam || '').split(',');
  if (icons.length === 0) return [];

  return files.reduce((acc, { name, path }) => {
    const nameArray = name.split('.');
    const extension = nameArray.pop() || '';
    const filename = nameArray.pop() || '';
    if (extension === 'svg' && icons.includes(filename)) {
      acc.push(path);
    }

    return acc;
  }, [] as string[]);
};
