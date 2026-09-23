import type { PluginClientContext } from "@getpaseo/plugin/client";

// MagicUser for Paseo, ported from the Obsidian theme `drbap/magicuser-theme-for-obsidian` by Bernardo Pires.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "magicuser",
		name: "MagicUser",
		appearance: "dark",
		colors: {
			background: "#383800",
			foreground: "#fafafa",
			raised: "#383800",
			control: "#212121",
			border: "#5c5c2e",
			accent: "#2d8b62",
			mutedForeground: "#bcbcbc",
			ring: "#469975",
		},
	});

	client.addTheme({
		id: "magicuser-light",
		name: "MagicUser Light",
		appearance: "light",
		colors: {
			background: "#ffffbf",
			foreground: "#1a1a1e",
			raised: "#ffffbf",
			control: "#e1e1e1",
			border: "#e0e0a8",
			accent: "#2d8b62",
			mutedForeground: "#1a1a1e",
			ring: "#287d58",
		},
	});

	return () => {};
}
