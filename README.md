# paseo-themes

94 Obsidian-inspired themes for Paseo. Each theme is a standalone,
paseo.cafe-ready plugin published to npm as `@alhassanaraouf/paseo-<slug>-theme`.

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
paseo plugin install npm:@alhassanaraouf/paseo-minimal-theme
```

Then open **Settings → Appearance** and pick the theme name
(dark) or theme name + " Light" (light).

## Submit to paseo.cafe

Each package meets the cafe checklist: public repo + `paseo-plugin.json` id
matching the package directory, released semver, public npm package, README
with Install section, LICENSE, `typecheck` + `test` scripts, and literal
hex-color `addTheme` objects for exact catalog previews. Submit at
[paseo.cafe/submit](https://paseo.cafe/submit) with registry id `paseo-<slug>-theme`,
this repo as source, subpath `packages/paseo-<slug>-theme`, and the npm name.

## Develop

```bash
bun install
bun run check
bun run typecheck
bun run test
```

## Themes

Skipped: Dracula (3 variants), Solarized, Catppuccin and Gruvbox are already on [paseo.cafe/themes](https://paseo.cafe/themes/) — no duplicates published.

| # | Theme | npm package | bg dark / light | accent dark | preview |
|---|-------|-------------|-----------------|-------------|---------|
| 1 | Minimal | `@alhassanaraouf/paseo-minimal-theme` | #000000 / #ffffff | `#7992a0` | [dark](packages/paseo-minimal-theme/preview-dark.png) · [light](packages/paseo-minimal-theme/preview-light.png) |
| 2 | Things | `@alhassanaraouf/paseo-things-theme` | #000000 / #ffffff | `#4c8ce6` |  |
| 3 | Blue Topaz | `@alhassanaraouf/paseo-blue-topaz-theme` | #1f1f1f / #ffffff | `#95a503` | [dark](packages/paseo-blue-topaz-theme/preview-dark.png) · [light](packages/paseo-blue-topaz-theme/preview-light.png) |
| 4 | AnuPpuccin | `@alhassanaraouf/paseo-anuppuccin-theme` | #1e1e2e / #eff1f5 | `#b4befe` | [dark](packages/paseo-anuppuccin-theme/preview-dark.png) · [light](packages/paseo-anuppuccin-theme/preview-light.png) |
| 5 | Obsidian Nord | `@alhassanaraouf/paseo-obsidian-nord-theme` | #2e3440 / #ffffff | `#d08770` |  |
| 6 | Atom | `@alhassanaraouf/paseo-atom-theme` | #272b34 / #fafafa | `#61afef` | [dark](packages/paseo-atom-theme/preview-dark.png) · [light](packages/paseo-atom-theme/preview-light.png) |
| 7 | Obsidianite | `@alhassanaraouf/paseo-obsidianite-theme` | #100e17 (dark only) | `#0ed2f7` | |
| 8 | Wasp | `@alhassanaraouf/paseo-wasp-theme` | #242424 / #faf6f0 | `#f8c537` |  |
| 9 | Typewriter | `@alhassanaraouf/paseo-typewriter-theme` | #262626 / #fcf5e4 | `#6db478` |  |
| 10 | ITS Theme | `@alhassanaraouf/paseo-its-theme-theme` | #1a1e24 / #f8fbff | `#652121` | [dark](packages/paseo-its-theme-theme/preview-dark.png) · [light](packages/paseo-its-theme-theme/preview-light.png) |
| 11 | Shimmering Focus | `@alhassanaraouf/paseo-shimmering-focus-theme` | #1a1c23 / #fbfcfd | `#108189` |  |
| 12 | Prism | `@alhassanaraouf/paseo-prism-theme` | #481b19 / #fdf7f7 | `#af4841` |  |
| 13 | Sanctum | `@alhassanaraouf/paseo-sanctum-theme` | #161616 / #f4f4f0 | `#669961` |  |
| 14 | Primary | `@alhassanaraouf/paseo-primary-theme` | #2e261f / #f8f5f1 | `#4e3e2d` |  |
| 15 | Tokyo Night | `@alhassanaraouf/paseo-tokyo-night-theme` | #1a1b26 / #d5d6db | `#80d0ff` |  |
| 16 | Border | `@alhassanaraouf/paseo-border-theme` | #27282e / #ffffff | `#707bc2` | [dark](packages/paseo-border-theme/preview-dark.png) · [light](packages/paseo-border-theme/preview-light.png) |
| 17 | Everforest | `@alhassanaraouf/paseo-everforest-theme` | #2f383e / #fdf6e3 | `#569d79` | [dark](packages/paseo-everforest-theme/preview-dark.png) · [light](packages/paseo-everforest-theme/preview-light.png) |
| 18 | Cybertron | `@alhassanaraouf/paseo-cybertron-theme` | #2f3136 (dark only) | `#fe8019` | [preview](packages/paseo-cybertron-theme/preview.png) |
| 19 | Willemstad | `@alhassanaraouf/paseo-willemstad-theme` | #070707 / #ffffff | `#483699` |  |
| 20 | GitHub Theme | `@alhassanaraouf/paseo-github-theme-theme` | #0d1117 / #ffffff | `#439bff` | [dark](packages/paseo-github-theme-theme/preview-dark.png) · [light](packages/paseo-github-theme-theme/preview-light.png) |
| 21 | Notation | `@alhassanaraouf/paseo-notation-theme` | #2f3437 / #ffffff | `#2eaadc` |  |
| 22 | Typomagical | `@alhassanaraouf/paseo-typomagical-theme` | #000000 / #eff1f5 | `#89b4fa` |  |
| 23 | Terminal | `@alhassanaraouf/paseo-terminal-theme` | #000000 (dark only) | `#000000` | |
| 24 | Obuntu | `@alhassanaraouf/paseo-obuntu-theme` | #343434 / #ffffff | `#df4a16` |  |
| 25 | Encore | `@alhassanaraouf/paseo-encore-theme` | #000000 / #ffffff | `#9e6ef2` | [dark](packages/paseo-encore-theme/preview-dark.png) · [light](packages/paseo-encore-theme/preview-light.png) |
| 26 | Pink Topaz | `@alhassanaraouf/paseo-pink-topaz-theme` | #212121 / #efe9d9 | `#f39ba0` |  |
| 27 | Shiba Inu | `@alhassanaraouf/paseo-shiba-inu-theme` | #2a2d3d / #fcfcfc | `#ebbcba` |  |
| 28 | LYT Mode | `@alhassanaraouf/paseo-lyt-mode-theme` | #2d3039 (dark only) | `#585f74` | [preview](packages/paseo-lyt-mode-theme/preview.png) |
| 29 | Obsidianotion | `@alhassanaraouf/paseo-obsidianotion-theme` | #1f1f1f / #ffffff | `#4dabf7` |  |
| 30 | Yin and Yang | `@alhassanaraouf/paseo-yin-and-yang-theme` | #0a0d10 / #fcfdfd | `#ffccf1` |  |
| 31 | Red Graphite | `@alhassanaraouf/paseo-red-graphite-theme` | #282f3e / #f7f7f8 | `#f6cd74` |  |
| 32 | Origami | `@alhassanaraouf/paseo-origami-theme` | #202020 / #f8f5f3 | `#8a5cf5` |  |
| 33 | Fancy-a-Story | `@alhassanaraouf/paseo-fancy-a-story-theme` | #1f1f1f / #e7e7e7 | `#2d8b62` | [dark](packages/paseo-fancy-a-story-theme/preview-dark.png) · [light](packages/paseo-fancy-a-story-theme/preview-light.png) |
| 34 | Flexoki | `@alhassanaraouf/paseo-flexoki-theme` | #100f0f / #fffcf0 | `#3aa99f` | [dark](packages/paseo-flexoki-theme/preview-dark.png) · [light](packages/paseo-flexoki-theme/preview-light.png) |
| 35 | Underwater | `@alhassanaraouf/paseo-underwater-theme` | #19192e / #f5efee | `#ebbcba` |  |
| 36 | Typora-Vue | `@alhassanaraouf/paseo-typora-vue-theme` | #202020 / #ffffff | `#42b883` |  |
| 37 | Vauxhall | `@alhassanaraouf/paseo-vauxhall-theme` | #03030b / #f7f7fd | `#483699` |  |
| 38 | Maple | `@alhassanaraouf/paseo-maple-theme` | #202122 / #f0f0ef | `#d9a441` | [dark](packages/paseo-maple-theme/preview-dark.png) · [light](packages/paseo-maple-theme/preview-light.png) |
| 39 | Velocity | `@alhassanaraouf/paseo-velocity-theme` | #1a1a1e / #ffffff | `#1b7eee` |  |
| 40 | Cupertino | `@alhassanaraouf/paseo-cupertino-theme` | #1a1a1e / #ffffff | `#0a84ff` | [dark](packages/paseo-cupertino-theme/preview-dark.png) · [light](packages/paseo-cupertino-theme/preview-light.png) |
| 41 | Baseline | `@alhassanaraouf/paseo-baseline-theme` | #11111b / #fdfcfc | `#314f52` | [dark](packages/paseo-baseline-theme/preview-dark.png) · [light](packages/paseo-baseline-theme/preview-light.png) |
| 42 | Retroma | `@alhassanaraouf/paseo-retroma-theme` | #1a1a1e / #ffffff | `#2d8b62` |  |
| 43 | Aubade | `@alhassanaraouf/paseo-aubade-theme` | #050505 / #bfc8cf | `#805500` | [dark](packages/paseo-aubade-theme/preview-dark.png) · [light](packages/paseo-aubade-theme/preview-light.png) |
| 44 | Royal Velvet | `@alhassanaraouf/paseo-royal-velvet-theme` | #21212c / #f3f4f6 | `#ff80c0` |  |
| 45 | Ebullientworks | `@alhassanaraouf/paseo-ebullientworks-theme` | #1e1e1e / #f8f8f8 | `#6b4c65` | [dark](packages/paseo-ebullientworks-theme/preview-dark.png) · [light](packages/paseo-ebullientworks-theme/preview-light.png) |
| 46 | Cyber Glow | `@alhassanaraouf/paseo-cyber-glow-theme` | #000000 / #ffffff | `#4cadd6` | [dark](packages/paseo-cyber-glow-theme/preview-dark.png) · [light](packages/paseo-cyber-glow-theme/preview-light.png) |
| 47 | Discordian | `@alhassanaraouf/paseo-discordian-theme` | #2e3035 (dark only) | `#b088e7` | [preview](packages/paseo-discordian-theme/preview.png) |
| 48 | Cardstock | `@alhassanaraouf/paseo-cardstock-theme` | #2f2a27 / #ffffff | `#c95454` | [dark](packages/paseo-cardstock-theme/preview-dark.png) · [light](packages/paseo-cardstock-theme/preview-light.png) |
| 49 | Retro Windows | `@alhassanaraouf/paseo-retro-windows-theme` | #1e1e1e / #ffffff | `#4f6fb0` |  |
| 50 | obsidian_ia | `@alhassanaraouf/paseo-obsidian-ia-theme` | #191a19 / #f7f7f7 | `#00c1ff` |  |
| 51 | MagicUser | `@alhassanaraouf/paseo-magicuser-theme` | #002248 / #e8efff | `#8b6cef` | [dark](packages/paseo-magicuser-theme/preview-dark.png) · [light](packages/paseo-magicuser-theme/preview-light.png) |
| 52 | Vicious | `@alhassanaraouf/paseo-vicious-theme` | #08090e / #fbfcfc | `#f1cb83` |  |
| 53 | flexcyon | `@alhassanaraouf/paseo-flexcyon-theme` | #14161c / #f1f0ec | `#a5bc84` | [dark](packages/paseo-flexcyon-theme/preview-dark.png) · [light](packages/paseo-flexcyon-theme/preview-light.png) |
| 54 | Nier | `@alhassanaraouf/paseo-nier-theme` | #ddd8c7 (dark only) | `#6e695b` | [preview](packages/paseo-nier-theme/preview.png) |
| 55 | evangelion | `@alhassanaraouf/paseo-evangelion-theme` | #201430 (dark only) | `#8edf5f` | [preview](packages/paseo-evangelion-theme/preview.png) |
| 56 | Adwaita | `@alhassanaraouf/paseo-adwaita-theme` | #1a1a1e / #ffffff | `#2d8b62` | [dark](packages/paseo-adwaita-theme/preview-dark.png) · [light](packages/paseo-adwaita-theme/preview-light.png) |
| 57 | Aura | `@alhassanaraouf/paseo-aura-theme` | #191919 / #f7f3ee | `#707afa` | [dark](packages/paseo-aura-theme/preview-dark.png) · [light](packages/paseo-aura-theme/preview-light.png) |
| 58 | Rosé Pine | `@alhassanaraouf/paseo-rose-pine-theme` | #191724 / #faf4ed | `#eb6f92` |  |
| 59 | Kanagawa | `@alhassanaraouf/paseo-kanagawa-theme` | #1f1f28 / #f2efe9 | `#658594` | [dark](packages/paseo-kanagawa-theme/preview-dark.png) · [light](packages/paseo-kanagawa-theme/preview-light.png) |
| 60 | Everblush | `@alhassanaraouf/paseo-everblush-theme` | #0f1619 (dark only) | `#bab3e5` | [preview](packages/paseo-everblush-theme/preview.png) |
| 61 | Everforest Enchanted | `@alhassanaraouf/paseo-everforest-enchanted-theme` | #333c43 / #fffbef | `#569d79` | [dark](packages/paseo-everforest-enchanted-theme/preview-dark.png) · [light](packages/paseo-everforest-enchanted-theme/preview-light.png) |
| 62 | Ayu | `@alhassanaraouf/paseo-ayu-theme` | #f9f9fb (light only) | `#000000` | [preview](packages/paseo-ayu-theme/preview.png) |
| 63 | Ayu Mirage | `@alhassanaraouf/paseo-ayu-mirage-theme` | #171a23 (dark only) | `#3f455b` | [preview](packages/paseo-ayu-mirage-theme/preview.png) |
| 64 | Charcoal | `@alhassanaraouf/paseo-charcoal-theme` | #222527 (dark only) | `#9bb7c5` | [preview](packages/paseo-charcoal-theme/preview.png) |
| 65 | Comfort color dark | `@alhassanaraouf/paseo-comfort-color-dark-theme` | #2f3136 (dark only) | `#92a1a1` | [preview](packages/paseo-comfort-color-dark-theme/preview.png) |
| 66 | Golden Topaz | `@alhassanaraouf/paseo-golden-topaz-theme` | #353231 / #dddbc7 | `#007672` | [dark](packages/paseo-golden-topaz-theme/preview-dark.png) · [light](packages/paseo-golden-topaz-theme/preview-light.png) |
| 67 | Sodalite | `@alhassanaraouf/paseo-sodalite-theme` | #1a1a1e (dark only) | `#304f80` | |
| 68 | Emerald | `@alhassanaraouf/paseo-emerald-theme` | #1a1a1e (dark only) | `#237052` | [preview](packages/paseo-emerald-theme/preview.png) |
| 69 | Firefly | `@alhassanaraouf/paseo-firefly-theme` | #1a1a1e (dark only) | `#2d8b62` | [preview](packages/paseo-firefly-theme/preview.png) |
| 70 | Vanilla AMOLED | `@alhassanaraouf/paseo-vanilla-amoled-theme` | #000000 (dark only) | `#483699` | |
| 71 | Noctis | `@alhassanaraouf/paseo-noctis-theme` | #052529 (dark only) | `#009999` | |
| 72 | Material Ocean | `@alhassanaraouf/paseo-material-ocean-theme` | #0f111a (dark only) | `#ff475a` | [preview](packages/paseo-material-ocean-theme/preview.png) |
| 73 | Tokyo Night Storm | `@alhassanaraouf/paseo-tokyo-night-storm-theme` | #24283b (dark only) | `#80d0ff` | |
| 74 | Kanagawa Paper | `@alhassanaraouf/paseo-kanagawa-paper-theme` | #181616 / #f2ecbc | `#8ba4b0` | [dark](packages/paseo-kanagawa-paper-theme/preview-dark.png) · [light](packages/paseo-kanagawa-paper-theme/preview-light.png) |
| 75 | Ultra Lobster | `@alhassanaraouf/paseo-ultra-lobster-theme` | #1a1a1e / #ffffff | `#027aff` |  |
| 76 | Dune | `@alhassanaraouf/paseo-dune-theme` | #283037 / #e9a791 | `#ff8c00` | [dark](packages/paseo-dune-theme/preview-dark.png) · [light](packages/paseo-dune-theme/preview-light.png) |
| 77 | halcyon | `@alhassanaraouf/paseo-halcyon-theme` | #1d2433 (dark only) | `#ffcc66` | [preview](packages/paseo-halcyon-theme/preview.png) |
| 78 | Amethyst | `@alhassanaraouf/paseo-amethyst-theme` | #1a1a1e / #ffffff | `#3e3471` | [dark](packages/paseo-amethyst-theme/preview-dark.png) · [light](packages/paseo-amethyst-theme/preview-light.png) |
| 79 | Ars Magna | `@alhassanaraouf/paseo-ars-magna-theme` | #363c3f / #ffffff | `#c87800` | [dark](packages/paseo-ars-magna-theme/preview-dark.png) · [light](packages/paseo-ars-magna-theme/preview-light.png) |
| 80 | Base2Tone | `@alhassanaraouf/paseo-base2tone-theme` | #292433 (dark only) | `#cf884a` | [preview](packages/paseo-base2tone-theme/preview.png) |
| 81 | Dark Graphite | `@alhassanaraouf/paseo-dark-graphite-theme` | #161719 (dark only) | `#3c95fa` | [preview](packages/paseo-dark-graphite-theme/preview.png) |
| 82 | Dark Graphite Pie | `@alhassanaraouf/paseo-dark-graphite-pie-theme` | #212121 / #ffffff | `#20abe9` | [dark](packages/paseo-dark-graphite-pie-theme/preview-dark.png) · [light](packages/paseo-dark-graphite-pie-theme/preview-light.png) |
| 83 | Gastown | `@alhassanaraouf/paseo-gastown-theme` | #ffffff (light only) | `#020f2b` | [preview](packages/paseo-gastown-theme/preview.png) |
| 84 | GDCT | `@alhassanaraouf/paseo-gdct-theme` | #fefefe (light only) | `#c15e50` | [preview](packages/paseo-gdct-theme/preview.png) |
| 85 | GDCT Dark | `@alhassanaraouf/paseo-gdct-dark-theme` | #313030 (dark only) | `#000000` | [preview](packages/paseo-gdct-dark-theme/preview.png) |
| 86 | Gitsidian | `@alhassanaraouf/paseo-gitsidian-theme` | #1a1a1e / #ffffff | `#0366d6` | [dark](packages/paseo-gitsidian-theme/preview-dark.png) · [light](packages/paseo-gitsidian-theme/preview-light.png) |
| 87 | Hulk | `@alhassanaraouf/paseo-hulk-theme` | #1a1b24 (dark only) | `#00ba00` | [preview](packages/paseo-hulk-theme/preview.png) |
| 88 | Moonlight | `@alhassanaraouf/paseo-moonlight-theme` | #202020 / #ffffff | `#5c73f2` | [dark](packages/paseo-moonlight-theme/preview-dark.png) · [light](packages/paseo-moonlight-theme/preview-light.png) |
| 89 | Obsdn-Dark-Rmx | `@alhassanaraouf/paseo-obsdn-dark-rmx-theme` | #212121 / #ffffff | `#20abe9` |  |
| 90 | Obsidian Boom | `@alhassanaraouf/paseo-obsidian-boom-theme` | #ffffff (light only) | `#106ba3` | |
| 91 | Ono Sendai | `@alhassanaraouf/paseo-ono-sendai-theme` | #17191a / #d1cabf | `#20abe9` |  |
| 92 | Panic Mode | `@alhassanaraouf/paseo-panic-mode-theme` | #151e2d (dark only) | `#000000` | |
| 93 | Pisum | `@alhassanaraouf/paseo-pisum-theme` | #364549 (dark only) | `#b57614` | |
| 94 | Reverie | `@alhassanaraouf/paseo-reverie-theme` | #1a2023 / #e7e7e7 | `#0b797d` |  |

## License

MIT — upstream Obsidian themes keep their own licenses (see SOURCES.md for repos).
