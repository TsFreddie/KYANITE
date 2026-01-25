import { $ } from "bun";

const skipPreviews = process.argv.includes("--skip-previews");

await $`mkdir -p build/`;

await $`bun run ./PebbleFontTool/bin/pbf build ./fonts/KYANITE_14 -o build/KYANITE_14.pbf`;
await $`bun run ./PebbleFontTool/bin/pbf buildbold ./fonts/KYANITE_14 -o build/KYANITE_14_BOLD.pbf`;

if (!skipPreviews) {
  await $`bun run ./PebbleFontTool/bin/preview build/GOTHIC_14.pbf build/KYANITE_14.pbf -o images/KYANITE_14.png -w 200 -h 228 -l 14`;
  await $`bun run ./PebbleFontTool/bin/preview build/GOTHIC_14_BOLD.pbf build/KYANITE_14_BOLD.pbf -o images/KYANITE_14_BOLD.png -w 200 -h 228 -l 14`;
}

await $`bun run ./PebbleFontTool/bin/pbf build ./fonts/KYANITE_18 -o build/KYANITE_18.pbf`;
await $`bun run ./PebbleFontTool/bin/pbf buildbold ./fonts/KYANITE_18 -o build/KYANITE_18_BOLD.pbf`;

if (!skipPreviews) {
  await $`bun run ./PebbleFontTool/bin/preview build/GOTHIC_18.pbf build/KYANITE_18.pbf -o images/KYANITE_18.png -w 200 -h 228 -l 18`;
  await $`bun run ./PebbleFontTool/bin/preview build/GOTHIC_18_BOLD.pbf build/KYANITE_18_BOLD.pbf -o images/KYANITE_18_BOLD.png -w 200 -h 228 -l 18`;
}

await $`bun run ./PebbleFontTool/bin/pbf build ./fonts/KYANITE_24 -o build/KYANITE_24.pbf`;
await $`bun run ./PebbleFontTool/bin/pbf buildbold ./fonts/KYANITE_24 -o build/KYANITE_24_BOLD.pbf`;

if (!skipPreviews) {
  await $`bun run ./PebbleFontTool/bin/preview build/GOTHIC_24.pbf build/KYANITE_24.pbf -o images/KYANITE_24.png -w 200 -h 228 -l 24`;
  await $`bun run ./PebbleFontTool/bin/preview build/GOTHIC_24_BOLD.pbf build/KYANITE_24_BOLD.pbf -o images/KYANITE_24_BOLD.png -w 200 -h 228 -l 24`;
}

await $`bun run ./PebbleFontTool/bin/pbf build ./fonts/KYANITE_28 -o build/KYANITE_28.pbf`;
await $`bun run ./PebbleFontTool/bin/pbf buildbold ./fonts/KYANITE_28 -o build/KYANITE_28_BOLD.pbf`;

if (!skipPreviews) {
  await $`bun run ./PebbleFontTool/bin/preview build/GOTHIC_28.pbf build/KYANITE_28.pbf -o images/KYANITE_28.png -w 200 -h 228 -l 28`;
  await $`bun run ./PebbleFontTool/bin/preview build/GOTHIC_28_BOLD.pbf build/KYANITE_28_BOLD.pbf -o images/KYANITE_28_BOLD.png -w 200 -h 228 -l 28`;
}
