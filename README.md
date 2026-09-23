# paseo-themes

100 community themes for Paseo, ported from the most popular Obsidian themes.

## Sources

- Theme ranking combines two public sources: most-downloaded counts
  ([Top 35 Best Obsidian Themes, 2026 update](https://www.knowledgeecology.me/top-35-best-obsidian-themes-as-decided-by-its-users/))
  and GitHub-star ranking
  ([Most Popular Obsidian Themes — Top 60 by GitHub Stars](https://www.obsidianthemes.com/popular)).
- Every theme's upstream repo comes from the official registry
  ([obsidian-releases/community-css-themes.json](https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-css-themes.json)).
- The Obsidian community search page only renders client-side, so the registry
  JSON above is the source of truth for the theme list (793 themes at build time).

## How ports were built

1. Downloaded each theme's theme.css / obsidian.css from GitHub (default branch).
2. Resolved the CSS var() chains per mode (dark/light), including rgb() triplets,
   hsl() params, color-base scales and nested fallbacks. calc()/color-mix()
   expressions that cannot resolve statically fall back to the scale or cross-mode value.
3. Mapped Obsidian slots to Paseo tokens: bg/surfaces, text, accent, borders, ANSI terminal.
4. Dark-only upstreams (e.g. Dracula, Obsidianite) are cross-filled so every theme
   ships both modes; the Paseo light/dark axis always has a palette.
5. See SOURCES.md for per-theme provenance and extraction notes.

## Install

```bash
npm install @paseo/themes
```

```ts
import { THEME_MAP } from "@paseo/themes";
const theme = THEME_MAP["minimal"]; // slug lookup
```

## Themes

| # | Theme | Slug | bg dark / light | accent dark | Source repo |
|---|-------|------|-----------------|-------------|-------------|
| 1 | Minimal | `minimal` | #000000 / #ffffff | `#163241` | kepano/obsidian-minimal |
| 2 | Things | `things` | #000000 / #ffffff | `#4c8ce6` | colineckert/obsidian-things |
| 3 | Blue Topaz | `blue-topaz` | #1f1f1f / #ffffff | `#95a503` | pkm-er/Blue-Topaz_Obsidian-css |
| 4 | AnuPpuccin | `anuppuccin` | #1e1e2e / #eff1f5 | `#b4befe` | anubisnekhet/AnuPpuccin |
| 5 | Obsidian Nord | `obsidian-nord` | #2e3440 / #ffffff | `#d08770` | insanum/obsidian_nord |
| 6 | Atom | `atom` | #272b34 / #fafafa | `#61afef` | kognise/obsidian-atom |
| 7 | Obsidianite | `obsidianite` | #100e17 / #100e17 | `#0ed2f7` | bennyxguo/Obsidian-Obsidianite |
| 8 | Wasp | `wasp` | #242424 / #faf6f0 | `#f8c537` | santiyounger/Wasp-Obsidian-Theme |
| 9 | Typewriter | `typewriter` | #262626 / #fcf5e4 | `#6db478` | crashmoney/obsidian-typewriter |
| 10 | ITS Theme | `its-theme` | #1a1e24 / #f8fbff | `#863737` | slrvb/Obsidian--ITS-Theme |
| 11 | Shimmering Focus | `shimmering-focus` | #292929 / #f2e5bb | `#fe811b` | chrisgrieser/shimmering-focus |
| 12 | Obsidian gruvbox | `obsidian-gruvbox` | #282828 / #f9f5d7 | `#d65d0e` | insanum/obsidian_gruvbox |
| 13 | Prism | `prism` | #481b19 / #fdf7f7 | `#696969` | damiankorcz/Prism-Theme |
| 14 | Sanctum | `sanctum` | #000000 / #fdfefe | `#669961` | jdanielmourao/obsidian-sanctum |
| 15 | Primary | `primary` | #2e261f / #f8f5f1 | `#4e3e2d` | primary-theme/obsidian |
| 16 | Catppuccin | `catppuccin` | #1e1e2e / #eff1f5 | `#cba6f7` | catppuccin/obsidian |
| 17 | Dracula for Obsidian | `dracula-for-obsidian` | #282a36 / #282a36 | `#ffb86c` | jarodise/Dracula-for-Obsidian.md |
| 18 | Tokyo Night | `tokyo-night` | #1a1b26 / #d5d6db | `#80d0ff` | tcmmichaelb139/obsidian-tokyonight |
| 19 | Border | `border` | #000000 / #ffffff | `#707bc2` | akifyss/obsidian-border |
| 20 | Everforest | `everforest` | #2f383e / #fdf6e3 | `#569d79` | 0xglitchbyte/obsidian_everforest |
| 21 | Cybertron | `cybertron` | #2f3136 / #2f3136 | `#fe8019` | nickmilo/Cybertron |
| 22 | Willemstad | `willemstad` | #1a1a1e / #ffffff | `#2d8b62` | tingmelvin/willemstad-x |
| 23 | GitHub Theme | `github-theme` | #0d1117 / #ffffff | `#57a5ff` | krios2146/obsidian-theme-github |
| 24 | Solarized | `solarized` | #002b36 / #fdf6e3 | `#2d8b62` | harmtemolder/obsidian-solarized |
| 25 | Notation | `notation` | #2f3437 / #ffffff | `#2eaadc` | deathau/Notation-for-Obsidian |
| 26 | Typomagical | `typomagical` | #000000 / #ffffff | `#89b4fa` | hungsu/typomagical-obsidian |
| 27 | Terminal | `terminal` | #000000 / #000000 | `#15d00d` | zcysxy/Obsidian-Terminal-Theme |
| 28 | Obuntu | `obuntu` | #343434 / #ffffff | `#df4a16` | dmytrodubinin/Obuntu-theme-for-Obsidian |
| 29 | Dracula Official | `dracula-official` | #282a36 / #282a36 | `#50fa7b` | dracula/obsidian |
| 30 | Encore | `encore` | #000000 / #ffffff | `#2d8b62` | carbonateb/obsidian-encore-theme |
| 31 | Pink Topaz | `pink-topaz` | #212121 / #efe9d9 | `#f39ba0` | shaggyfeng/obsidian-Pink-topaz-theme |
| 32 | Shiba Inu | `shiba-inu` | #141414 / #f8ebe0 | `#ebbcba` | faroukx/Obsidian-shiba-inu-theme |
| 33 | LYT Mode | `lyt-mode` | #2d3039 / #2d3039 | `#585f74` | nickmilo/LYT-Mode |
| 34 | Obsidianotion | `obsidianotion` | #1f1f1f / #ffffff | `#4dabf7` | diegoeis/obsidianotion |
| 35 | Yin and Yang | `yin-and-yang` | #0a0d10 / #fcfdfd | `#ffccf1` | chetachiezikeuzor/Yin-and-Yang-Theme |
| 36 | Red Graphite | `red-graphite` | #1e232f / #292c2e | `#2d8b62` | seanwcom/Red-Graphite-for-Obsidian |
| 37 | Origami | `origami` | #000000 / #fbf1c7 | `#e17c60` | 7368697661/Origami |
| 38 | Fancy-a-Story | `fancy-a-story` | #272b34 / #e9f5dd | `#2d8b62` | elsatam/obsidian-fancy-a-story |
| 39 | Flexoki | `flexoki` | #100f0f / #fffcf0 | `#3aa99f` | kepano/flexoki-obsidian |
| 40 | Underwater | `underwater` | #19192e / #f5efee | `#bba379` | seniblue/Underwater |
| 41 | Typora-Vue | `typora-vue` | #ffffff / #ffffff | `#2d8b62` | zekunc/Obsidian-Typora-Vue-Theme |
| 42 | Vauxhall | `vauxhall` | #1a1a1e / #ffffff | `#2d8b62` | cyanvoxel/vauxhall-obsidian |
| 43 | Maple | `maple` | #202122 / #f0f0ef | `#d9a441` | subframe7536/obsidian-theme-maple |
| 44 | Velocity | `velocity` | #1a1a1e / #ffffff | `#2d8b62` | gonzalo-d-sales/obsidian-velocity |
| 45 | Cupertino | `cupertino` | #1a1a1e / #ffffff | `#2d8b62` | svnaxis/obsidian-cupertino |
| 46 | Baseline | `baseline` | #11111b / #fdfcfc | `#314f52` | svnaxis/obsidian-baseline |
| 47 | Retroma | `retroma` | #1a1a1e / #ffffff | `#2d8b62` | emarpiee/Retroma |
| 48 | Aubade | `aubade` | #050505 / #bfc8cf | `#805500` | ducktapekiller/obsidian-aubade |
| 49 | Royal Velvet | `royal-velvet` | #21212c / #f3f4f6 | `#ff80c0` | caro401/royal-velvet |
| 50 | Ebullientworks | `ebullientworks` | #1e1e1e / #f8f8f8 | `#2d8b62` | ebullient/obsidian-theme-ebullientworks |
| 51 | Cyber Glow | `cyber-glow` | #000000 / #e6e5e5 | `#4cadd6` | thepharaohart/Obsidian-CyberGlow |
| 52 | Discordian | `discordian` | #2e3035 / #2e3035 | `#b088e7` | radekkozak/discordian |
| 53 | Cardstock | `cardstock` | #2f2a27 / #ffffff | `#c95454` | cassidoo/cardstock |
| 54 | Retro Windows | `retro-windows` | #1e1e1e / #ffffff | `#4f6fb0` | codeisconfusing/retro-windows-obsidian |
| 55 | obsidian_ia | `obsidian-ia` | #191a19 / #f7f7f7 | `#00c1ff` | rcvd/obsidian_ia |
| 56 | MagicUser | `magicuser` | #383800 / #ffffbf | `#2d8b62` | drbap/magicuser-theme-for-obsidian |
| 57 | Vicious | `vicious` | #08090e / #fbfcfc | `#2d8b62` | zaheralmajed/vicious-theme-obsidian |
| 58 | flexcyon | `flexcyon` | #1a1a1e / #ffffff | `#2d8b62` | bladeacer/flexcyon |
| 59 | Nier | `nier` | #ddd8c7 / #fafafa | `#6e695b` | exloseur3d/nier-theme |
| 60 | evangelion | `evangelion` | #1a1a1e / #ffffff | `#2d8b62` | xero/evangelion.obsidian |
| 61 | Adwaita | `adwaita` | #1a1a1e / #ffffff | `#2d8b62` | birneee/obsidian-adwaita-theme |
| 62 | Aura | `aura` | #000000 / #d5d6db | `#bb9af7` | shadowash8/obsidian-aura |
| 63 | Rosé Pine | `ros-pine` | #191724 / #faf4ed | `#eb6f92` | sspaeti/obsidian_rose_pine |
| 64 | Kanagawa | `kanagawa` | #1f1f28 / #f2efe9 | `#658594` | sspaeti/obsidian_kanagawa |
| 65 | Everblush | `everblush` | #0f1619 / #dadada | `#bab3e5` | everblush/Obsidian |
| 66 | Everforest Enchanted | `everforest-enchanted` | #333c43 / #fffbef | `#569d79` | fireisgood/obsidian-everforest-enchanted |
| 67 | Ayu | `ayu` | #f9f9fb / #f9f9fb | `#000000` | bcdavasconcelos/Obsidian-Ayu |
| 68 | Ayu Mirage | `ayu-mirage` | #171a23 / #171a23 | `#3f455b` | bcdavasconcelos/Obsidian-Ayu_Mirage |
| 69 | Charcoal | `charcoal` | #222527 / #222527 | `#000000` | bcdavasconcelos/Obsidian-Charcoal |
| 70 | Comfort color dark | `comfort-color-dark` | #2f3136 / #2f3136 | `#92a1a1` | obsidian-ezs/obsidian-comfort-color-dark |
| 71 | Golden Topaz | `golden-topaz` | #353231 / #dddbc7 | `#007672` | shaggyfeng/obsidian-Golden-Topaz-theme |
| 72 | Sodalite | `sodalite` | #1a1a1e / #ffffff | `#304f80` | tomzorz/Sodalite |
| 73 | Emerald | `emerald` | #1a1a1e / #ffffff | `#237052` | gracejoseph1236/obsidian-emerald |
| 74 | Firefly | `firefly` | #1a1a1e / #ffffff | `#2d8b62` | lazercaveman/obsidian-firefly-theme |
| 75 | Vanilla AMOLED | `vanilla-amoled` | #000000 / #000000 | `#2d8b62` | sakuraisayeki/vanilla-amoled-theme |
| 76 | Noctis | `noctis` | #052529 / #052529 | `#009999` | konnta0/obsidian-noctis-theme |
| 77 | Dracula Slim | `dracula-slim` | #282a36 / #282a36 | `#b294bb` | blackwew/Dracula-Slim |
| 78 | Material Ocean | `material-ocean` | #0f111a / #0f111a | `#2d8b62` | dragonwocky/obsidian-material-ocean |
| 79 | Tokyo Night Storm | `tokyo-night-storm` | #24283b / #24283b | `#2d8b62` | arozx/obsidian_tokyo-night-storm |
| 80 | Kanagawa Paper | `kanagawa-paper` | #181616 / #f2ecbc | `#8ba4b0` | sspaeti/obsidian_kanagawa_paper |
| 81 | Ultra Lobster | `ultra-lobster` | #1a1a1e / #ffffff | `#ffd91a` | 7368697661/Ultra-Lobster |
| 82 | Dune | `dune` | #283037 / #e9a791 | `#2d8b62` | jopp-gh/Obsidian-Dune84 |
| 83 | halcyon | `halcyon` | #1d2433 / #1d2433 | `#ffcc66` | dbarenholz/halcyon-obsidian |
| 84 | Amethyst | `amethyst` | #1a1a1e / #ffffff | `#2d8b62` | cotemaxime/obsidian-amethyst |
| 85 | Ars Magna | `ars-magna` | #363c3f / #ffffff | `#c87800` | mediapathic/obsidian-arsmagna-theme |
| 86 | Base2Tone | `base2tone` | #292433 / #292433 | `#cf884a` | deathau/Base2Tone-For-Obsidian.md |
| 87 | Dark Graphite | `dark-graphite` | #161719 / #161719 | `#000000` | bcdavasconcelos/Obsidian-Graphite |
| 88 | Dark Graphite Pie | `dark-graphite-pie` | #212121 / #ffffff | `#20abe9` | ryjjin/Obsidian-Dark-Graphite-Pie-theme |
| 89 | Gastown | `gastown` | #ffffff / #ffffff | `#020f2b` | dogwaddle/obsidian-gastown-theme.md |
| 90 | GDCT | `gdct` | #fefefe / #fefefe | `#000000` | bcdavasconcelos/Obsidian-GDCT |
| 91 | GDCT Dark | `gdct-dark` | #313030 / #313030 | `#000000` | bcdavasconcelos/Obsidian-GDCT_Dark |
| 92 | Gitsidian | `gitsidian` | #1a1a1e / #ffffff | `#2d8b62` | ismailgunacar/gitsidian |
| 93 | Hulk | `hulk` | #1a1b24 / #1a1b24 | `#00ba00` | pgalliford/Obsidian-theme-Incredible-Hulk |
| 94 | Moonlight | `moonlight` | #202020 / #ffffff | `#5c73f2` | kartik-karz/moonlight-obsidian |
| 95 | Obsdn-Dark-Rmx | `obsdn-dark-rmx` | #212121 / #ffffff | `#20abe9` | cannibalox/Obsdn-dark-rmx |
| 96 | Obsidian Boom | `obsidian-boom` | #1a1a1e / #ffffff | `#2d8b62` | sainadhx/obsidian-boom |
| 97 | Ono Sendai | `ono-sendai` | #17191a / #d1cabf | `#20abe9` | cannibalox/ono-sendai_obsdn |
| 98 | Panic Mode | `panic-mode` | #151e2d / #151e2d | `#000000` | bcdavasconcelos/Obsidian-Panic_Mode |
| 99 | Pisum | `pisum` | #364549 / #364549 | `#b57614` | guangluwu/obsidian-pisum |
| 100 | Reverie | `reverie` | #1a2023 / #e7e7e7 | `#0b797d` | santiyounger/Reverie-Obsidian-Theme |
## Regenerating

themes are checked in; re-run the extraction pipeline documented in SOURCES.md

The script documents the pipeline; checked-in files are the build output.
See SOURCES.md for extraction details per theme.

## License

MIT — upstream themes keep their own licenses (see SOURCES.md for repos).
