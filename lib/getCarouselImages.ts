'use server'
import fs from "fs";
import path from "path";

export async function getCarouselImages() {
  const dir = path.join(process.cwd(), "public/carousel-images");
  return fs
    .readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|webp|svg)$/.test(file))
    .map((file) => `/carousel-images/${file}`);
}
