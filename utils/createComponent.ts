import type { BunFile } from "bun";
import chalk from "chalk";
import { parseArgs } from "util";
const __dirname = import.meta.dir;

const SRC = "./src";

const { values, positionals } = parseArgs({
  args: Bun.argv,
  options: {
    element: {
      type: "string",
      default: "div",
      short: "e",
    },
  },
  strict: true,
  allowPositionals: true,
});

const [,,name] = positionals;
const _component = Bun.file(`${__dirname}/_template/component.txt`);
const _styles = Bun.file(`${__dirname}/_template/styles.txt`);
const _test = Bun.file(`${__dirname}/_template/test.txt`);
const _types = Bun.file(`${__dirname}/_template/types.txt`);

console.log(`${chalk.blue("   [info]")} -- Creating component: ${name}`);

async function updateWithName(file: BunFile, el?: string): Promise<string> {
  const text = await file.text();
  const value = text.replaceAll("%%#", name);

  if (el) return value.replaceAll("#%%", el);

  return value;
}


const types = await updateWithName(_types);
const component = await updateWithName(_component, values.element);
const test = await updateWithName(_test);


await Bun.write(`${SRC}/components/${name}.tsx`, component);
await Bun.write(`${SRC}/styles/${name}.styles.ts`, _styles);
await Bun.write(`${SRC}/tests/${name}.test.tsx`, test);
await Bun.write(`${SRC}/types/${name}.d.ts`, types);

console.log(`${chalk.green("[success]")} -- Component created`);
