# paseo-themes

94 Obsidian-inspired themes for Paseo. Each theme is a standalone,
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

Skipped: Dracula (3 variants), Solarized, Catppuccin and Gruvbox are already on [paseo.cafe/themes](https://paseo.cafe/themes/) — no duplicates published.

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
| 12 | Prism | `@alhassanaraouf/paseo-prism` | #481b19 / #fdf7f7 | `#696969` |
| 13 | Sanctum | `@alhassanaraouf/paseo-sanctum` | #000000 / #fdfefe | `#669961` |
| 14 | Primary | `@alhassanaraouf/paseo-primary` | #2e261f / #f8f5f1 | `#4e3e2d` |
| 15 | Tokyo Night | `@alhassanaraouf/paseo-tokyo-night` | #1a1b26 / #d5d6db | `#80d0ff` |
| 16 | Border | `@alhassanaraouf/paseo-border` | #000000 / #ffffff | `#707bc2` |
| 17 | Everforest | `@alhassanaraouf/paseo-everforest` | #2f383e / #fdf6e3 | `#569d79` |
| 18 | Cybertron | `@alhassanaraouf/paseo-cybertron` | #2f3136 / #2f3136 | `#fe8019` |
| 19 | Willemstad | `@alhassanaraouf/paseo-willemstad` | #1a1a1e / #ffffff | `#2d8b62` |
| 20 | GitHub Theme | `@alhassanaraouf/paseo-github-theme` | #0d1117 / #ffffff | `#57a5ff` |
| 21 | Notation | `@alhassanaraouf/paseo-notation` | #2f3437 / #ffffff | `#2eaadc` |
| 22 | Typomagical | `@alhassanaraouf/paseo-typomagical` | #000000 / #ffffff | `#89b4fa` |
| 23 | Terminal | `@alhassanaraouf/paseo-terminal` | #000000 / #000000 | `#000000` |
| 24 | Obuntu | `@alhassanaraouf/paseo-obuntu` | #343434 / #ffffff | `#df4a16` |
| 25 | Encore | `@alhassanaraouf/paseo-encore` | #000000 / #ffffff | `#2d8b62` |
| 26 | Pink Topaz | `@alhassanaraouf/paseo-pink-topaz` | #212121 / #efe9d9 | `#f39ba0` |
| 27 | Shiba Inu | `@alhassanaraouf/paseo-shiba-inu` | #141414 / #f8ebe0 | `#ebbcba` |
| 28 | LYT Mode | `@alhassanaraouf/paseo-lyt-mode` | #2d3039 / #2d3039 | `#585f74` |
| 29 | Obsidianotion | `@alhassanaraouf/paseo-obsidianotion` | #1f1f1f / #ffffff | `#4dabf7` |
| 30 | Yin and Yang | `@alhassanaraouf/paseo-yin-and-yang` | #0a0d10 / #fcfdfd | `#ffccf1` |
| 31 | Red Graphite | `@alhassanaraouf/paseo-red-graphite` | #1e232f / #292c2e | `#2d8b62` |
| 32 | Origami | `@alhassanaraouf/paseo-origami` | #000000 / #fbf1c7 | `#e17c60` |
| 33 | Fancy-a-Story | `@alhassanaraouf/paseo-fancy-a-story` | #272b34 / #e9f5dd | `#2d8b62` |
| 34 | Flexoki | `@alhassanaraouf/paseo-flexoki` | #100f0f / #fffcf0 | `#3aa99f` |
| 35 | Underwater | `@alhassanaraouf/paseo-underwater` | #19192e / #f5efee | `#bba379` |
| 36 | Typora-Vue | `@alhassanaraouf/paseo-typora-vue` | #ffffff / #ffffff | `#2d8b62` |
| 37 | Vauxhall | `@alhassanaraouf/paseo-vauxhall` | #1a1a1e / #ffffff | `#2d8b62` |
| 38 | Maple | `@alhassanaraouf/paseo-maple` | #202122 / #f0f0ef | `#d9a441` |
| 39 | Velocity | `@alhassanaraouf/paseo-velocity` | #1a1a1e / #ffffff | `#2d8b62` |
| 40 | Cupertino | `@alhassanaraouf/paseo-cupertino` | #1a1a1e / #ffffff | `#2d8b62` |
| 41 | Baseline | `@alhassanaraouf/paseo-baseline` | #11111b / #fdfcfc | `#314f52` |
| 42 | Retroma | `@alhassanaraouf/paseo-retroma` | #1a1a1e / #ffffff | `#2d8b62` |
| 43 | Aubade | `@alhassanaraouf/paseo-aubade` | #050505 / #bfc8cf | `#805500` |
| 44 | Royal Velvet | `@alhassanaraouf/paseo-royal-velvet` | #21212c / #f3f4f6 | `#ff80c0` |
| 45 | Ebullientworks | `@alhassanaraouf/paseo-ebullientworks` | #1e1e1e / #f8f8f8 | `#2d8b62` |
| 46 | Cyber Glow | `@alhassanaraouf/paseo-cyber-glow` | #000000 / #e6e5e5 | `#4cadd6` |
| 47 | Discordian | `@alhassanaraouf/paseo-discordian` | #2e3035 / #2e3035 | `#b088e7` |
| 48 | Cardstock | `@alhassanaraouf/paseo-cardstock` | #2f2a27 / #ffffff | `#c95454` |
| 49 | Retro Windows | `@alhassanaraouf/paseo-retro-windows` | #1e1e1e / #ffffff | `#4f6fb0` |
| 50 | obsidian_ia | `@alhassanaraouf/paseo-obsidian-ia` | #191a19 / #f7f7f7 | `#00c1ff` |
| 51 | MagicUser | `@alhassanaraouf/paseo-magicuser` | #383800 / #ffffbf | `#2d8b62` |
| 52 | Vicious | `@alhassanaraouf/paseo-vicious` | #08090e / #fbfcfc | `#2d8b62` |
| 53 | flexcyon | `@alhassanaraouf/paseo-flexcyon` | #1a1a1e / #ffffff | `#2d8b62` |
| 54 | Nier | `@alhassanaraouf/paseo-nier` | #ddd8c7 / #fafafa | `#6e695b` |
| 55 | evangelion | `@alhassanaraouf/paseo-evangelion` | #1a1a1e / #ffffff | `#2d8b62` |
| 56 | Adwaita | `@alhassanaraouf/paseo-adwaita` | #1a1a1e / #ffffff | `#2d8b62` |
| 57 | Aura | `@alhassanaraouf/paseo-aura` | #000000 / #d5d6db | `#bb9af7` |
| 58 | Rosé Pine | `@alhassanaraouf/paseo-ros-pine` | #191724 / #faf4ed | `#eb6f92` |
| 59 | Kanagawa | `@alhassanaraouf/paseo-kanagawa` | #1f1f28 / #f2efe9 | `#658594` |
| 60 | Everblush | `@alhassanaraouf/paseo-everblush` | #0f1619 / #dadada | `#bab3e5` |
| 61 | Everforest Enchanted | `@alhassanaraouf/paseo-everforest-enchanted` | #333c43 / #fffbef | `#569d79` |
| 62 | Ayu | `@alhassanaraouf/paseo-ayu` | #f9f9fb / #f9f9fb | `#000000` |
| 63 | Ayu Mirage | `@alhassanaraouf/paseo-ayu-mirage` | #171a23 / #171a23 | `#3f455b` |
| 64 | Charcoal | `@alhassanaraouf/paseo-charcoal` | #222527 / #222527 | `#000000` |
| 65 | Comfort color dark | `@alhassanaraouf/paseo-comfort-color-dark` | #2f3136 / #2f3136 | `#92a1a1` |
| 66 | Golden Topaz | `@alhassanaraouf/paseo-golden-topaz` | #353231 / #dddbc7 | `#007672` |
| 67 | Sodalite | `@alhassanaraouf/paseo-sodalite` | #1a1a1e / #ffffff | `#304f80` |
| 68 | Emerald | `@alhassanaraouf/paseo-emerald` | #1a1a1e / #ffffff | `#237052` |
| 69 | Firefly | `@alhassanaraouf/paseo-firefly` | #1a1a1e / #ffffff | `#2d8b62` |
| 70 | Vanilla AMOLED | `@alhassanaraouf/paseo-vanilla-amoled` | #000000 / #000000 | `#2d8b62` |
| 71 | Noctis | `@alhassanaraouf/paseo-noctis` | #052529 / #052529 | `#009999` |
| 72 | Material Ocean | `@alhassanaraouf/paseo-material-ocean` | #0f111a / #0f111a | `#2d8b62` |
| 73 | Tokyo Night Storm | `@alhassanaraouf/paseo-tokyo-night-storm` | #24283b / #24283b | `#2d8b62` |
| 74 | Kanagawa Paper | `@alhassanaraouf/paseo-kanagawa-paper` | #181616 / #f2ecbc | `#8ba4b0` |
| 75 | Ultra Lobster | `@alhassanaraouf/paseo-ultra-lobster` | #1a1a1e / #ffffff | `#ffd91a` |
| 76 | Dune | `@alhassanaraouf/paseo-dune` | #283037 / #e9a791 | `#2d8b62` |
| 77 | halcyon | `@alhassanaraouf/paseo-halcyon` | #1d2433 / #1d2433 | `#ffcc66` |
| 78 | Amethyst | `@alhassanaraouf/paseo-amethyst` | #1a1a1e / #ffffff | `#2d8b62` |
| 79 | Ars Magna | `@alhassanaraouf/paseo-ars-magna` | #363c3f / #ffffff | `#c87800` |
| 80 | Base2Tone | `@alhassanaraouf/paseo-base2tone` | #292433 / #292433 | `#cf884a` |
| 81 | Dark Graphite | `@alhassanaraouf/paseo-dark-graphite` | #161719 / #161719 | `#000000` |
| 82 | Dark Graphite Pie | `@alhassanaraouf/paseo-dark-graphite-pie` | #212121 / #ffffff | `#20abe9` |
| 83 | Gastown | `@alhassanaraouf/paseo-gastown` | #ffffff / #ffffff | `#020f2b` |
| 84 | GDCT | `@alhassanaraouf/paseo-gdct` | #fefefe / #fefefe | `#000000` |
| 85 | GDCT Dark | `@alhassanaraouf/paseo-gdct-dark` | #313030 / #313030 | `#000000` |
| 86 | Gitsidian | `@alhassanaraouf/paseo-gitsidian` | #1a1a1e / #ffffff | `#2d8b62` |
| 87 | Hulk | `@alhassanaraouf/paseo-hulk` | #1a1b24 / #1a1b24 | `#00ba00` |
| 88 | Moonlight | `@alhassanaraouf/paseo-moonlight` | #202020 / #ffffff | `#5c73f2` |
| 89 | Obsdn-Dark-Rmx | `@alhassanaraouf/paseo-obsdn-dark-rmx` | #212121 / #ffffff | `#20abe9` |
| 90 | Obsidian Boom | `@alhassanaraouf/paseo-obsidian-boom` | #1a1a1e / #ffffff | `#2d8b62` |
| 91 | Ono Sendai | `@alhassanaraouf/paseo-ono-sendai` | #17191a / #d1cabf | `#20abe9` |
| 92 | Panic Mode | `@alhassanaraouf/paseo-panic-mode` | #151e2d / #151e2d | `#000000` |
| 93 | Pisum | `@alhassanaraouf/paseo-pisum` | #364549 / #364549 | `#b57614` |
| 94 | Reverie | `@alhassanaraouf/paseo-reverie` | #1a2023 / #e7e7e7 | `#0b797d` |

## License

MIT — upstream Obsidian themes keep their own licenses (see SOURCES.md for repos).
