import type { PluginClientContext } from "@getpaseo/plugin/client";

// Cybertron for Paseo, ported from the Obsidian theme `nickmilo/Cybertron` by nickmilo.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "cybertron",
		name: "Cybertron",
		appearance: "dark",
		colors: {
			background: "#2f3136",
			foreground: "#5dbcd2",
			raised: "#141414",
			control: "#36393f",
			border: "#595959",
			accent: "#fe8019",
			mutedForeground: "#aaaaaa",
			ring: "#9e8aff",
		},
	});

	client.addTheme({
		id: "cybertron-light",
		name: "Cybertron Light",
		appearance: "light",
		colors: {
			background: "#2f3136",
			foreground: "#5dbcd2",
			raised: "#141414",
			control: "#36393f",
			border: "#595959",
			accent: "#fe8019",
			mutedForeground: "#aaaaaa",
			ring: "#9e8aff",
		},
	});

	return () => {};
}
