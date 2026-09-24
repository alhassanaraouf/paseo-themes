import type { PluginClientContext } from "@getpaseo/plugin/client";

// Aura for Paseo, ported from the Obsidian theme `shadowash8/obsidian-aura` by shadowash8.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "aura",
		name: "Aura",
		appearance: "dark",
		colors: {
			background: "#191919",
			foreground: "#f0f0f0",
			raised: "#141414",
			control: "#121212",
			border: "#323232",
			accent: "#707afa",
			mutedForeground: "#f0f0f0",
			ring: "#707afa",
		},
	});

	client.addTheme({
		id: "aura-light",
		name: "Aura Light",
		appearance: "light",
		colors: {
			background: "#f7f3ee",
			foreground: "#4a341c",
			raised: "#eee7dd",
			control: "#eee7dd",
			border: "#e9dfd1",
			accent: "#e9b35c",
			mutedForeground: "#4a341c",
			ring: "#e9b35c",
		},
	});

	return () => {};
}
