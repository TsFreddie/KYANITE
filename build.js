import { $ } from "bun";
import fs from 'fs';

const VERSION = "1.0";
const LANGUAGE = "en_CN";
const NAME = "English + KYANITE";

const skipPreviews = process.argv.includes("--skip-previews");

await $`mkdir -p build/`;

fs.writeFileSync("build/000.po", `msgid ""
msgstr ""
"Project-Id-Version: ${VERSION}\\n"
"Language: ${LANGUAGE}\\n"
"Name: ${NAME}\\n"
"Content-Type: text/plain; charset=utf-8\\n"
"Content-Transfer-Encoding: 8bit\\n"
`);

for (const size of [14, 18, 24, 28, 36]) {
  await $`bun run ./PebbleFontTool/bin/pbf build ./fonts/KYANITE_${size} -o build/KYANITE_${size}.pbf`;
  await $`bun run ./PebbleFontTool/bin/pbf buildbold ./fonts/KYANITE_${size} -o build/KYANITE_${size}_BOLD.pbf`;

  if (!skipPreviews) {
    await $`bun run ./PebbleFontTool/bin/preview build/GOTHIC_${size}.pbf build/KYANITE_${size}.pbf -o images/KYANITE_${size}.png -w 200 -h 228 -l ${size}`;
    await $`bun run ./PebbleFontTool/bin/preview build/GOTHIC_${size}_BOLD.pbf build/KYANITE_${size}_BOLD.pbf -o images/KYANITE_${size}_BOLD.png -w 200 -h 228 -l ${size}`;
  }
}

// Pebble 2 Duo: 19 slot layout.
await $`mkdir -p build/KYANITE_PBL`;

await $`msgfmt build/000.po -o build/KYANITE_PBL/000`
await $`cp build/KYANITE_14.pbf build/KYANITE_PBL/001`;
await $`cp build/KYANITE_14_BOLD.pbf build/KYANITE_PBL/002`;
await $`cp build/KYANITE_18.pbf build/KYANITE_PBL/003`;
await $`cp build/KYANITE_18_BOLD.pbf build/KYANITE_PBL/004`;
await $`cp build/KYANITE_24.pbf build/KYANITE_PBL/005`;
await $`cp build/KYANITE_24_BOLD.pbf build/KYANITE_PBL/006`;
await $`cp build/KYANITE_28.pbf build/KYANITE_PBL/007`;
await $`cp build/KYANITE_28_BOLD.pbf build/KYANITE_PBL/008`;
await $`touch build/KYANITE_PBL/009`;
await $`touch build/KYANITE_PBL/010`;
await $`touch build/KYANITE_PBL/011`;
await $`touch build/KYANITE_PBL/012`;
await $`touch build/KYANITE_PBL/013`;
await $`touch build/KYANITE_PBL/014`;
await $`touch build/KYANITE_PBL/015`;
await $`cp data/016 build/KYANITE_PBL/016`;
await $`touch build/KYANITE_PBL/017`;
await $`touch build/KYANITE_PBL/018`;

await $`bun run ./PebbleFontTool/bin/pbl pack build/KYANITE_PBL -o build/KYANITE_P2D.pbl`;

await $`cp -f build/KYANITE_PBL/001 build/KYANITE_PBL/002`;
await $`cp -f build/KYANITE_PBL/006 build/KYANITE_PBL/005`;
await $`cp -f build/KYANITE_PBL/007 build/KYANITE_PBL/008`;

await $`bun run ./PebbleFontTool/bin/pbl pack build/KYANITE_PBL -o build/KYANITE_LITE_P2D.pbl`;

// Pebble Time 2: 21 slot layout, with the GOTHIC_36 extended slots.
await $`mkdir -p build/KYANITE_PT2_PBL`;

await $`msgfmt build/000.po -o build/KYANITE_PT2_PBL/000`
await $`cp build/KYANITE_14.pbf build/KYANITE_PT2_PBL/001`;
await $`cp build/KYANITE_14_BOLD.pbf build/KYANITE_PT2_PBL/002`;
await $`cp build/KYANITE_18.pbf build/KYANITE_PT2_PBL/003`;
await $`cp build/KYANITE_18_BOLD.pbf build/KYANITE_PT2_PBL/004`;
await $`cp build/KYANITE_24.pbf build/KYANITE_PT2_PBL/005`;
await $`cp build/KYANITE_24_BOLD.pbf build/KYANITE_PT2_PBL/006`;
await $`cp build/KYANITE_28.pbf build/KYANITE_PT2_PBL/007`;
await $`cp build/KYANITE_28_BOLD.pbf build/KYANITE_PT2_PBL/008`;
await $`cp build/KYANITE_36.pbf build/KYANITE_PT2_PBL/009`;
await $`cp build/KYANITE_36_BOLD.pbf build/KYANITE_PT2_PBL/010`;
await $`touch build/KYANITE_PT2_PBL/011`;
await $`touch build/KYANITE_PT2_PBL/012`;
await $`touch build/KYANITE_PT2_PBL/013`;
await $`touch build/KYANITE_PT2_PBL/014`;
await $`touch build/KYANITE_PT2_PBL/015`;
await $`touch build/KYANITE_PT2_PBL/016`;
await $`touch build/KYANITE_PT2_PBL/017`;
await $`cp data/016 build/KYANITE_PT2_PBL/018`;
await $`touch build/KYANITE_PT2_PBL/019`;
await $`touch build/KYANITE_PT2_PBL/020`;

await $`bun run ./PebbleFontTool/bin/pbl pack build/KYANITE_PT2_PBL -o build/KYANITE_PT2.pbl`;

// Pebble Time 2's notifications at the default (Large) content size use
// GOTHIC_18, 24, 24_BOLD, 28 and 28_BOLD. LITE keeps every notification face
// distinct and only aliases the ones notifications never reach (14_BOLD) plus
// the ExtraLarge-only 36_BOLD. MINI additionally aliases 18_BOLD, which only
// the Medium content size uses; the remaining slots alias to the closest
// same-size design so every size still has CJK coverage.
await $`cp -f build/KYANITE_PT2_PBL/001 build/KYANITE_PT2_PBL/002`;
await $`cp -f build/KYANITE_PT2_PBL/009 build/KYANITE_PT2_PBL/010`;

await $`bun run ./PebbleFontTool/bin/pbl pack build/KYANITE_PT2_PBL -o build/KYANITE_LITE_PT2.pbl`;

await $`cp -f build/KYANITE_PT2_PBL/003 build/KYANITE_PT2_PBL/004`;

await $`bun run ./PebbleFontTool/bin/pbl pack build/KYANITE_PT2_PBL -o build/KYANITE_MINI_PT2.pbl`;
