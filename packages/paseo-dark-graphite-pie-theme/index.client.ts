import type { PluginClientContext } from "@getpaseo/plugin/client";

// Dark Graphite Pie for Paseo, ported from the Obsidian theme `ryjjin/Obsidian-Dark-Graphite-Pie-theme` by ryjjin.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "dark-graphite-pie",
		name: "Dark Graphite Pie",
		appearance: "dark",
		colors: {
			background: "#212121",
			foreground: "#dcddde",
			raised: "#212121",
			control: "#2a2a2a",
			border: "#303030",
			accent: "#20abe9",
			mutedForeground: "#999999",
			ring: "#1da3d6",
		},
	});

	client.addTheme({
		id: "dark-graphite-pie-light",
		name: "Dark Graphite Pie Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#cb4d49",
			raised: "#393f3f",
			control: "#f2f3f5",
			border: "#dddddd",
			accent: "#cb4d49",
			mutedForeground: "#8f938f",
			ring: "#1da3d6",
		},
	});

	return () => {};
}
