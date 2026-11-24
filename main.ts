// news-image-20261124 — "The World Today", Tuesday 24 November 2026.
// Node 22, standard library only, no network. The entry image is the
// entry.png beside this file (a 1024x1024 newspaper front page rendered
// from poster.html in this repo); the program copies it byte for byte to
// /output/entry.png, so two runs always write identical bytes.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const source = new URL('./entry.png', import.meta.url);
copyFileSync(source, join(outDir, 'entry.png'));
