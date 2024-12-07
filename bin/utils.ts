import { walk, WalkOptions } from '@std/fs';

export const replaceBetween = (
  content: string,
  newContent: string,
  { start, end }: { start: string; end: string },
) =>
  content.replace(
    new RegExp(`${start}[\\s\\S]*?${end}`),
    `${start}\n${newContent}\n${end}`,
  );

export const writeFile = (
  path: string,
  content: string,
  openOptions: Deno.OpenOptions = {
    create: true,
    write: true,
    truncate: true,
  },
) =>
  Deno.open(path, openOptions).then((file) => {
    file.write((new TextEncoder()).encode(content)).then(() =>
      new Deno.Command(Deno.execPath(), {
        args: ['fmt', path],
        stdin: 'piped',
        stdout: 'piped',
      }).spawn()
    );
    file.close();
  });

export const getFiles = async (path: string, walkOptions: WalkOptions = {
  maxDepth: 1,
  includeDirs: false,
}) => await Array.fromAsync(walk(path, walkOptions));
