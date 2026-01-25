# Kyanite Bitmap Font 晶石点阵黑

This is a generated bitmap font based on [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic). The font is generated with a narrower width to emulate a similar style to the PebbleOS's Gothic font. Due to the nature of less pixels being available, this font might not be as readable as other more blocky fonts in smaller size. But it should be mostly readable in context.

If you want a more blocky (also handcrafted and maybe more readable) font, check out [Tumbled Bitmap Font](https://github.com/TsFreddie/TUMBLED).

本字体是完全从 [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic) 生成而来。生成时使用了稍窄的字符宽度模仿 PebbleOS 的 Gothic 压缩字体风格。由于整体横向像素就比较少，本字体的易读性可能不及其他方块像素字。但是在上下文中应该还算可读。

如果你更想要方块一些（并且是手工制作且可能更易读）的字体，推荐了解 [圆石点阵黑](https://github.com/TsFreddie/TUMBLED)。

## Preview

| Font Variant | Regular                                        | Bold                                                     |
| ------------ | ---------------------------------------------- | -------------------------------------------------------- |
| KYANITE_14   | ![KYANITE_14 Preview](./images/KYANITE_14.png) | ![KYANITE_14_BOLD Preview](./images/KYANITE_14_BOLD.png) |
| KYANITE_18   | ![KYANITE_18 Preview](./images/KYANITE_18.png) | ![KYANITE_18_BOLD Preview](./images/KYANITE_18_BOLD.png) |
| KYANITE_24   | ![KYANITE_24 Preview](./images/KYANITE_24.png) | ![KYANITE_24_BOLD Preview](./images/KYANITE_24_BOLD.png) |
| KYANITE_28   | ![KYANITE_28 Preview](./images/KYANITE_28.png) | ![KYANITE_28_BOLD Preview](./images/KYANITE_28_BOLD.png) |

## Build

To build the fonts, [PebbleFontTool](https://github.com/TsFreddie/PebbleFontTool) is available as a separate repository.

```bash
# Clone the scripts
git clone https://github.com/TsFreddie/PebbleFontTool.git

# Setup the build environment
cd PebbleFontTool
bun install
cd..

# Run the build script
bun run ./build.js
```

## Licenses

This repository and packaged fonts are licensed under OFL 1.1.

## Acknowledgements

[Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic) ([OFL 1.1](https://github.com/be5invis/Sarasa-Gothic/blob/main/LICENSE) licensed) is used directly for generating this entire font.
