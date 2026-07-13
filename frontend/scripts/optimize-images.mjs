import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const INPUT_DIR = "images-source";
const PREVIEW_DIR = "src/assets/projects/preview";
const FULL_DIR = "src/assets/projects/full";

await fs.mkdir(PREVIEW_DIR, { recursive: true });
await fs.mkdir(FULL_DIR, { recursive: true });

const files = await fs.readdir(INPUT_DIR);

for (const file of files) {
  const inputPath = path.join(INPUT_DIR, file);

  const stat = await fs.stat(inputPath);

  if (!stat.isFile()) continue;

  const fileName = path.parse(file).name;

  console.log(`Обработка ${fileName}`);

  await sharp(inputPath)
    .resize({
      width: 1000,
      withoutEnlargement: true,
    })
    .webp({
      quality: 80,
    })
    .toFile(`${PREVIEW_DIR}/${fileName}.webp`);

  await sharp(inputPath)
    .resize({
      width: 1800,
      withoutEnlargement: true,
    })
    .webp({
      quality: 90,
    })
    .toFile(`${FULL_DIR}/${fileName}.webp`);
}

console.log("Готово.");
