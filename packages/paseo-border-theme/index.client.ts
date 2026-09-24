import type { PluginClientContext } from "@getpaseo/plugin/client";

// Border for Paseo, ported from the Obsidian theme `akifyss/obsidian-border` by akifyss.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "border",
		name: "Border",
		appearance: "dark",
		colors: {
			background: "#27282e",
			foreground: "#d3d5de",
			raised: "#24252a",
			control: "#1e1e1e",
			border: "#363636",
			accent: "#707bc2",
			mutedForeground: "#b8bac7",
			ring: "#818bc9",
		},
	});

	client.addTheme({
		id: "border-light",
		name: "Border Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#1d1d20",
			raised: "#fafafa",
			control: "#e3e3e3",
			border: "#e0e0e0",
			accent: "#4b63fb",
			mutedForeground: "#545664",
			ring: "#4459e2",
		},
	});

	return () => {};
}
