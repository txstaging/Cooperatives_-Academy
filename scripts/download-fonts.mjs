import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

// Vendor the eight Arabic/Latin font files used by the supplied reference.
const referenceDirectory = (await readdir(process.cwd())).find((name) =>
  name.endsWith("_files"),
);
if (!referenceDirectory)
  throw new Error("The saved reference folder is missing.");
const css = await readFile(path.join(referenceDirectory, "css2"), "utf8");
const directory = path.join(process.cwd(), "public", "fonts");
await mkdir(directory, { recursive: true });
const blocks = [
  ...css.matchAll(/\/\* (arabic|latin) \*\/\s*(@font-face\s*\{[^}]+\})/g),
];
if (blocks.length !== 8)
  throw new Error(`Expected eight font subsets; found ${blocks.length}.`);
const localBlocks = await Promise.all(
  blocks.map(async ([, subset, block]) => {
    const weight = block.match(/font-weight:\s*(\d+)/)[1];
    const url = block.match(/url\((https:[^)]+)\)/)[1];
    if (new URL(url).hostname !== "fonts.gstatic.com")
      throw new Error("Unexpected font host.");
    const filename = `ibm-plex-sans-arabic-${weight}-${subset}.woff2`;
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Font download failed: ${response.status}`);
    await writeFile(
      path.join(directory, filename),
      Buffer.from(await response.arrayBuffer()),
    );
    return `/* ${subset} */\n${block.replace(url, `./${filename}`)}`;
  }),
);
const license = await fetch(
  "https://raw.githubusercontent.com/google/fonts/main/ofl/ibmplexsansarabic/OFL.txt",
);
if (!license.ok)
  throw new Error(`Font license download failed: ${license.status}`);
await writeFile(path.join(directory, "OFL.txt"), await license.text());
await writeFile(
  path.join(directory, "font.css"),
  localBlocks.join("\n\n") + "\n",
);
process.stdout.write(
  `Bundled ${blocks.length} font subsets and their open font license.\n`,
);
