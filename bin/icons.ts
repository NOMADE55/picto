import { walk } from 'jsr:@std/fs';
import { dirname, fromFileUrl, join } from 'jsr:@std/path';

const currentDir = dirname(fromFileUrl(import.meta.url));
const targetDir = join(currentDir, '../icons');
const files = await Array.fromAsync(walk(targetDir, {
  maxDepth: 1,
  includeDirs: false,
}));

files.filter(({ name }) => name.split('.').pop() === 'svg').forEach((file) => {
});
