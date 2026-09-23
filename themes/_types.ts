export interface DarkTint {
  surface0: string; surface1: string; surface2: string; surface3: string;
  surface4: string; surfaceDiffEmpty: string; surfaceSidebar: string;
  surfaceSidebarHover: string; foregroundMuted: string; foregroundExtraMuted: string;
  scrollbarHandle: string; border: string; borderAccent: string; accent: string;
  accentBright: string; accentForeground?: string; destructive: string;
}

export interface LightSurfaces extends DarkTint {
  foreground: string;
  destructiveForeground: string;
}

export interface TerminalPalette {
  background: string; foreground: string; cursor: string;
  red: string; green: string; yellow: string; blue: string; magenta: string;
  cyan: string; white: string; brightRed: string; brightGreen: string;
  brightYellow: string; brightBlue: string; brightMagenta: string;
  brightCyan: string; brightWhite: string;
}

export interface PaseoThemeDefinition {
  slug: string;
  name: string;
  source: { repo: string; author: string; rank: number };
  dark: DarkTint;
  light: LightSurfaces;
  terminalDark: TerminalPalette;
  terminalLight: TerminalPalette;
}

// Structural check: every theme must define both modes so the Paseo
// light/dark axis always has a palette, even for dark-only upstreams
// (the missing mode is cross-filled from the available one at build time).
export function assertBothModes(t: PaseoThemeDefinition): void {
  if (!t.dark?.surface0 || !t.light?.surface0) throw new Error(`Theme ${t.slug} is missing a mode`);
}
