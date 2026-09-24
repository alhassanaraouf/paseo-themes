import type { PluginClientContext } from "@getpaseo/plugin/client";

// flexcyon for Paseo, ported from the Obsidian theme `bladeacer/flexcyon` by bladeacer.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "flexcyon",
		name: "flexcyon",
		appearance: "dark",
		colors: {
			background: "#14161c",
			foreground: "#d3d5d3",
			raised: "#191d28",
			control: "#171a22",
			border: "#1f222a",
			accent: "#a5bc84",
			mutedForeground: "#a1a6ac",
			ring: "#a5bc84",
		},
	});

	client.addTheme({
		id: "flexcyon-light",
		name: "flexcyon Light",
		appearance: "light",
		colors: {
			background: "#f1f0ec",
			foreground: "#080808",
			raised: "#effaf2",
			control: "#f0f5ef",
			border: "#ecf6ef",
			accent: "#4b65b4",
			mutedForeground: "#3c3f47",
			ring: "#4b65b4",
		},
	});

	return () => {};
}
