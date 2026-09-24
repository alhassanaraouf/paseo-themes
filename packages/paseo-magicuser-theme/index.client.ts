import type { PluginClientContext } from "@getpaseo/plugin/client";

// MagicUser for Paseo, ported from the Obsidian theme `drbap/magicuser-theme-for-obsidian` by Bernardo Pires.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "magicuser",
		name: "MagicUser",
		appearance: "dark",
		colors: {
			background: "#002248",
			foreground: "#e1e1e1",
			raised: "#001122",
			control: "#002b59",
			border: "#003670",
			accent: "#8b6cef",
			mutedForeground: "#bcbcbc",
			ring: "#8b6cef",
		},
	});

	client.addTheme({
		id: "magicuser-light",
		name: "MagicUser Light",
		appearance: "light",
		colors: {
			background: "#e8efff",
			foreground: "#1a1a1e",
			raised: "#d1dfff",
			control: "#d2e5ff",
			border: "#b5d6ff",
			accent: "#8b6cef",
			mutedForeground: "#3a3a3a",
			ring: "#8b6cef",
		},
	});

	return () => {};
}
