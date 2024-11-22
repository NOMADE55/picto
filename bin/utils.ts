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
) => {
  const encoder = new TextEncoder();
  return Deno.open(path, openOptions).then((file) => {
    file.write(encoder.encode(content)).then(() =>
      new Deno.Command(Deno.execPath(), {
        args: ['fmt', path],
        stdin: 'piped',
        stdout: 'piped',
      }).spawn()
    );
    file.close();
  });
};
