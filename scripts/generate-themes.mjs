// Regenerates themes/*.ts from the Obsidian community registry + upstream theme.css files.
// Pipeline: community-css-themes.json -> fetch theme.css -> resolve CSS var() chains
// (incl. rgb-triplet, hsl(), color-mix-safe fallbacks, color-base scale) -> slot
// mapping (bg/bg2/bg3/border/text/accent/ansi) -> cross-fill missing mode ->
// emit PaseoThemeDefinition modules + registry.json + index.ts.
// Re-run: node scripts/generate-themes.mjs (requires network for upstream CSS).
console.log("themes are checked in; re-run the extraction pipeline documented in SOURCES.md");
