import type { PluginClientContext } from "@getpaseo/plugin/client";

// Red Graphite for Paseo, ported from the Obsidian theme `seanwcom/Red-Graphite-for-Obsidian` by seanwcom.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "red-graphite",
		name: "Red Graphite",
		appearance: "dark",
		colors: {
			background: "#282f3e",
			foreground: "#eff1f5",
			raised: "#1e232f",
			control: "#14171f",
			border: "#1e232f",
			accent: "#f6cd74",
			mutedForeground: "#d0d5e1",
			ring: "#f6cd74",
		},
	});

	client.addTheme({
		id: "red-graphite-light",
		name: "Red Graphite Light",
		appearance: "light",
		colors: {
			background: "#f7f7f8",
			foreground: "#292c2e",
			raised: "#292c2e",
			control: "#ffffff",
			border: "#dcdee0",
			accent: "#cb4c48",
			mutedForeground: "#71797f",
			ring: "#cb4c48",
		},
	});

	return () => {};
}
