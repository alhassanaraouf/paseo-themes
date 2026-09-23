import type { PluginClientContext } from "@getpaseo/plugin/client";

// GitHub Theme for Paseo, ported from the Obsidian theme `krios2146/obsidian-theme-github` by krios2146.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "github-theme",
		name: "GitHub Theme",
		appearance: "dark",
		colors: {
			background: "#0d1117",
			foreground: "#c9d1d9",
			raised: "#161b22",
			control: "#161b22",
			border: "#30363d",
			accent: "#57a5ff",
			mutedForeground: "#8b949e",
			ring: "#6ab0ff",
		},
	});

	client.addTheme({
		id: "github-theme-light",
		name: "GitHub Theme Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#24292f",
			raised: "#f6f8fa",
			control: "#f6f8fa",
			border: "#d0d7de",
			accent: "#096cdc",
			mutedForeground: "#57606a",
			ring: "#0a78f5",
		},
	});

	return () => {};
}
