# paseo-themes

100 Obsidian-inspired themes for Paseo. Each theme is a standalone,
paseo.cafe-ready plugin published to npm as `@alhassanaraouf/paseo-<slug>`.

## Sources

- Ranking combines most-downloaded counts
  ([Top 35 Best Obsidian Themes, 2026 update](https://www.knowledgeecology.me/top-35-best-obsidian-themes-as-decided-by-its-users/))
  and GitHub stars
  ([Most Popular Obsidian Themes — Top 60](https://www.obsidianthemes.com/popular)).
- Upstream repos come from the official registry
  ([community-css-themes.json](https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-css-themes.json)).
- Palettes were extracted per mode from each upstream `theme.css` and mapped to
  the 8 `addTheme` seed colors (`background`, `foreground`, `raised`, `control`,
  `border`, `accent`, `mutedForeground`, `ring`). See [SOURCES.md](./SOURCES.md).

## Install a theme

```bash
paseo plugin install npm:@alhassanaraouf/paseo-minimal
```

Then open **Settings → Appearance** and pick the theme name
(dark) or theme name + " Light" (light).

## Submit to paseo.cafe

Each package meets the cafe checklist: public repo + `paseo-plugin.json` id
matching the package directory, released semver, public npm package, README
with Install section, LICENSE, `typecheck` + `test` scripts, and literal
hex-color `addTheme` objects for exact catalog previews. Submit at
[paseo.cafe/submit](https://paseo.cafe/submit) with registry id `paseo-<slug>`,
this repo as source, subpath `packages/paseo-<slug>`, and the npm name.

## Develop

```bash
bun install
bun run check
bun run typecheck
bun run test
```

## Themes

| # | Theme | npm package | bg dark / light | accent dark |
|---|-------|-------------|-----------------|-------------|
| 1 | Minimal | `@alhassanaraouf/paseo-minimal` | #000000 / #ffffff | `#163241` |
| 2 | Things | `@alhassanaraouf/paseo-things` | #000000 / #ffffff | `#4c8ce6` |
| 3 | Blue Topaz | `@alhassanaraouf/paseo-blue-topaz` | #1f1f1f / #ffffff | `#95a503` |
| 4 | AnuPpuccin | `@alhassanaraouf/paseo-anuppuccin` | #1e1e2e / #eff1f5 | `#b4befe` |
| 5 | Obsidian Nord | `@alhassanaraouf/paseo-obsidian-nord` | #2e3440 / #ffffff | `#d08770` |
| 6 | Atom | `@alhassanaraouf/paseo-atom` | #272b34 / #fafafa | `#61afef` |
| 7 | Obsidianite | `@alhassanaraouf/paseo-obsidianite` | #100e17 / #100e17 | `#0ed2f7` |
| 8 | Wasp | `@alhassanaraouf/paseo-wasp` | #242424 / #faf6f0 | `#f8c537` |
| 9 | Typewriter | `@alhassanaraouf/paseo-typewriter` | #262626 / #fcf5e4 | `#6db478` |
| 10 | ITS Theme | `@alhassanaraouf/paseo-its-theme` | #1a1e24 / #f8fbff | `#863737` |
| 11 | Shimmering Focus | `@alhassanaraouf/paseo-shimmering-focus` | #292929 / #f2e5bb | `#fe811b` |
| 12 | Obsidian gruvbox | `@alhassanaraouf/paseo-obsidian-gruvbox` | #282828 / #f9f5d7 | `#d65d0e` |
| 13 | Prism | `@alhassanaraouf/paseo-prism` | #481b19 / #fdf7f7 | `#696969` |
| 14 | Sanctum | `@alhassanaraouf/paseo-sanctum` | #000000 / #fdfefe | `#669961` |
| 15 | Primary | `@alhassanaraouf/paseo-primary` | #2e261f / #f8f5f1 | `#4e3e2d` |
| 16 | Catppuccin | `@alhassanaraouf/paseo-catppuccin` | #1e1e2e / #eff1f5 | `#cba6f7` |
| 17 | Dracula for Obsidian | `@alhassanaraouf/paseo-dracula-for-obsidian` | #282a36 / #282a36 | `#ffb86c` |
| 18 | Tokyo Night | `@alhassanaraouf/paseo-tokyo-night` | #1a1b26 / #d5d6db | `#80d0ff` |
| 19 | Border | `@alhassanaraouf/paseo-border` | #000000 / #ffffff | `#707bc2` |
| 20 | Everforest | `@alhassanaraouf/paseo-everforest` | #2f383e / #fdf6e3 | `#569d79` |
| 21 | Cybertron | `@alhassanaraouf/paseo-cybertron` | #2f3136 / #2f3136 | `#fe8019` |
| 22 | Willemstad | `@alhassanaraouf/paseo-willemstad` | #1a1a1e / #ffffff | `#2d8b62` |
| 23 | GitHub Theme | `@alhassanaraouf/paseo-github-theme` | #0d1117 / #ffffff | `#57a5ff` |
| 24 | Solarized | `@alhassanaraouf/paseo-solarized` | #002b36 / #fdf6e3 | `#2d8b62` |
| 25 | Notation | `@alhassanaraouf/paseo-notation` | #2f3437 / #ffffff | `#2eaadc` |
| 26 | Typomagical | `@alhassanaraouf/paseo-typomagical` | #000000 / #ffffff | `#89b4fa` |
| 27 | Terminal | `@alhassanaraouf/paseo-terminal` | #000000 / #000000 | `#000000` |
| 28 | Obuntu | `@alhassanaraouf/paseo-obuntu` | #343434 / #ffffff | `#df4a16` |
| 29 | Dracula Official | `@alhassanaraouf/paseo-dracula-official` | #282a36 / #282a36 | `#50fa7b` |
| 30 | Encore | `@alhassanaraouf/paseo-encore` | #000000 / #ffffff | `#2d8b62` |
| 31 | Pink Topaz | `@alhassanaraouf/paseo-pink-topaz` | #212121 / #efe9d9 | `#f39ba0` |
| 32 | Shiba Inu | `@alhassanaraouf/paseo-shiba-inu` | #141414 / #f8ebe0 | `#ebbcba` |
| 33 | LYT Mode | `@alhassanaraouf/paseo-lyt-mode` | #2d3039 / #2d3039 | `#585f74` |
| 34 | Obsidianotion | `@alhassanaraouf/paseo-obsidianotion` | #1f1f1f / #ffffff | `#4dabf7` |
| 35 | Yin and Yang | `@alhassanaraouf/paseo-yin-and-yang` | #0a0d10 / #fcfdfd | `#ffccf1` |
| 36 | Red Graphite | `@alhassanaraouf/paseo-red-graphite` | #1e232f / #292c2e | `#2d8b62` |
| 37 | Origami | `@alhassanaraouf/paseo-origami` | #000000 / #fbf1c7 | `#e17c60` |
| 38 | Fancy-a-Story | `@alhassanaraouf/paseo-fancy-a-story` | #272b34 / #e9f5dd | `#2d8b62` |
| 39 | Flexoki | `@alhassanaraouf/paseo-flexoki` | #100f0f / #fffcf0 | `#3aa99f` |
| 40 | Underwater | `@alhassanaraouf/paseo-underwater` | #19192e / #f5efee | `#bba379` |
| 41 | Typora-Vue | `@alhassanaraouf/paseo-typora-vue` | #ffffff / #ffffff | `#2d8b62` |
| 42 | Vauxhall | `@alhassanaraouf/paseo-vauxhall` | #1a1a1e / #ffffff | `#2d8b62` |
| 43 | Maple | `@alhassanaraouf/paseo-maple` | #202122 / #f0f0ef | `#d9a441` |
| 44 | Velocity | `@alhassanaraouf/paseo-velocity` | #1a1a1e / #ffffff | `#2d8b62` |
| 45 | Cupertino | `@alhassanaraouf/paseo-cupertino` | #1a1a1e / #ffffff | `#2d8b62` |
| 46 | Baseline | `@alhassanaraouf/paseo-baseline` | #11111b / #fdfcfc | `#314f52` |
| 47 | Retroma | `@alhassanaraouf/paseo-retroma` | #1a1a1e / #ffffff | `#2d8b62` |
| 48 | Aubade | `@alhassanaraouf/paseo-aubade` | #050505 / #bfc8cf | `#805500` |
| 49 | Royal Velvet | `@alhassanaraouf/paseo-royal-velvet` | #21212c / #f3f4f6 | `#ff80c0` |
| 50 | Ebullientworks | `@alhassanaraouf/paseo-ebullientworks` | #1e1e1e / #f8f8f8 | `#2d8b62` |
| 51 | Cyber Glow | `@alhassanaraouf/paseo-cyber-glow` | #000000 / #e6e5e5 | `#4cadd6` |
| 52 | Discordian | `@alhassanaraouf/paseo-discordian` | #2e3035 / #2e3035 | `#b088e7` |
| 53 | Cardstock | `@alhassanaraouf/paseo-cardstock` | #2f2a27 / #ffffff | `#c95454` |
| 54 | Retro Windows | `@alhassanaraouf/paseo-retro-windows` | #1e1e1e / #ffffff | `#4f6fb0` |
| 55 | obsidian_ia | `@alhassanaraouf/paseo-obsidian-ia` | #191a19 / #f7f7f7 | `#00c1ff` |
| 56 | MagicUser | `@alhassanaraouf/paseo-magicuser` | #383800 / #ffffbf | `#2d8b62` |
| 57 | Vicious | `@alhassanaraouf/paseo-vicious` | #08090e / #fbfcfc | `#2d8b62` |
| 58 | flexcyon | `@alhassanaraouf/paseo-flexcyon` | #1a1a1e / #ffffff | `#2d8b62` |
| 59 | Nier | `@alhassanaraouf/paseo-nier` | #ddd8c7 / #fafafa | `#6e695b` |
| 60 | evangelion | `@alhassanaraouf/paseo-evangelion` | #1a1a1e / #ffffff | `#2d8b62` |
| 61 | Adwaita | `@alhassanaraouf/paseo-adwaita` | #1a1a1e / #ffffff | `#2d8b62` |
| 62 | Aura | `@alhassanaraouf/paseo-aura` | #000000 / #d5d6db | `#bb9af7` |
| 63 | Rosé Pine | `@alhassanaraouf/paseo-rose-pine` | #191724 / #faf4ed | `#eb6f92` |
| 64 | Kanagawa | `@alhassanaraouf/paseo-kanagawa` | #1f1f28 / #f2efe9 | `#658594` |
| 65 | Everblush | `@alhassanaraouf/paseo-everblush` | #0f1619 / #dadada | `#bab3e5` |
| 66 | Everforest Enchanted | `@alhassanaraouf/paseo-everforest-enchanted` | #333c43 / #fffbef | `#569d79` |
| 67 | Ayu | `@alhassanaraouf/paseo-ayu` | #f9f9fb / #f9f9fb | `#000000` |
| 68 | Ayu Mirage | `@alhassanaraouf/paseo-ayu-mirage` | #171a23 / #171a23 | `#3f455b` |
| 69 | Charcoal | `@alhassanaraouf/paseo-charcoal` | #222527 / #222527 | `#000000` |
| 70 | Comfort color dark | `@alhassanaraouf/paseo-comfort-color-dark` | #2f3136 / #2f3136 | `#92a1a1` |
| 71 | Golden Topaz | `@alhassanaraouf/paseo-golden-topaz` | #353231 / #dddbc7 | `#007672` |
| 72 | Sodalite | `@alhassanaraouf/paseo-sodalite` | #1a1a1e / #ffffff | `#304f80` |
| 73 | Emerald | `@alhassanaraouf/paseo-emerald` | #1a1a1e / #ffffff | `#237052` |
| 74 | Firefly | `@alhassanaraouf/paseo-firefly` | #1a1a1e / #ffffff | `#2d8b62` |
| 75 | Vanilla AMOLED | `@alhassanaraouf/paseo-vanilla-amoled` | #000000 / #000000 | `#2d8b62` |
| 76 | Noctis | `@alhassanaraouf/paseo-noctis` | #052529 / #052529 | `#009999` |
| 77 | Dracula Slim | `@alhassanaraouf/paseo-dracula-slim` | #282a36 / #282a36 | `#b294bb` |
| 78 | Material Ocean | `@alhassanaraouf/paseo-material-ocean` | #0f111a / #0f111a | `#2d8b62` |
| 79 | Tokyo Night Storm | `@alhassanaraouf/paseo-tokyo-night-storm` | #24283b / #24283b | `#2d8b62` |
| 80 | Kanagawa Paper | `@alhassanaraouf/paseo-kanagawa-paper` | #181616 / #f2ecbc | `#8ba4b0` |
| 81 | Ultra Lobster | `@alhassanaraouf/paseo-ultra-lobster` | #1a1a1e / #ffffff | `#ffd91a` |
| 82 | Dune | `@alhassanaraouf/paseo-dune` | #283037 / #e9a791 | `#2d8b62` |
| 83 | halcyon | `@alhassanaraouf/paseo-halcyon` | #1d2433 / #1d2433 | `#ffcc66` |
| 84 | Amethyst | `@alhassanaraouf/paseo-amethyst` | #1a1a1e / #ffffff | `#2d8b62` |
| 85 | Ars Magna | `@alhassanaraouf/paseo-ars-magna` | #363c3f / #ffffff | `#c87800` |
| 86 | Base2Tone | `@alhassanaraouf/paseo-base2tone` | #292433 / #292433 | `#cf884a` |
| 87 | Dark Graphite | `@alhassanaraouf/paseo-dark-graphite` | #161719 / #161719 | `#000000` |
| 88 | Dark Graphite Pie | `@alhassanaraouf/paseo-dark-graphite-pie` | #212121 / #ffffff | `#20abe9` |
| 89 | Gastown | `@alhassanaraouf/paseo-gastown` | #ffffff / #ffffff | `#020f2b` |
| 90 | GDCT | `@alhassanaraouf/paseo-gdct` | #fefefe / #fefefe | `#000000` |
| 91 | GDCT Dark | `@alhassanaraouf/paseo-gdct-dark` | #313030 / #313030 | `#000000` |
| 92 | Gitsidian | `@alhassanaraouf/paseo-gitsidian` | #1a1a1e / #ffffff | `#2d8b62` |
| 93 | Hulk | `@alhassanaraouf/paseo-hulk` | #1a1b24 / #1a1b24 | `#00ba00` |
| 94 | Moonlight | `@alhassanaraouf/paseo-moonlight` | #202020 / #ffffff | `#5c73f2` |
| 95 | Obsdn-Dark-Rmx | `@alhassanaraouf/paseo-obsdn-dark-rmx` | #212121 / #ffffff | `#20abe9` |
| 96 | Obsidian Boom | `@alhassanaraouf/paseo-obsidian-boom` | #1a1a1e / #ffffff | `#2d8b62` |
| 97 | Ono Sendai | `@alhassanaraouf/paseo-ono-sendai` | #17191a / #d1cabf | `#20abe9` |
| 98 | Panic Mode | `@alhassanaraouf/paseo-panic-mode` | #151e2d / #151e2d | `#000000` |
| 99 | Pisum | `@alhassanaraouf/paseo-pisum` | #364549 / #364549 | `#b57614` |
| 100 | Reverie | `@alhassanaraouf/paseo-reverie` | #1a2023 / #e7e7e7 | `#0b797d` |

## License

MIT — upstream Obsidian themes keep their own licenses (see SOURCES.md for repos).
