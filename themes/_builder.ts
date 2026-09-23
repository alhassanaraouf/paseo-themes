import type { DarkTint } from "./_types.js";

export function buildDarkSemanticColors(tint: DarkTint) {
  return {
    ...tint,
    surfaceWorkspace: tint.surface1,
    foreground: "#fafafa",
    accentForeground: tint.accentForeground ?? "#ffffff",
    destructiveForeground: "#ffffff",
    success: tint.accent,
    successForeground: "#ffffff",
    background: tint.surface0,
    popover: tint.surface2,
  };
}
