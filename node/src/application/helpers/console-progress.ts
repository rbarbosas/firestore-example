
export function printProgress(progress: string) {
  process.stdout.clearLine;
  process.stdout.cursorTo(0);
  process.stdout.write(progress + '% ');
}