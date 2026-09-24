import type { PluginClientContext } from "@getpaseo/plugin/client";

// Sodalite for Paseo, ported from the Obsidian theme `tomzorz/Sodalite` by tomzorz.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "sodalite",
		name: "Sodalite",
		appearance: "dark",
		colors: {
			background: "#1a1a1e",
			foreground: "#fafafa",
			raised: "#28282c",
			control: "#3a3a3e",
			border: "#434346",
			accent: "#304f80",
			mutedForeground: "#cacaca",
			ring: "#304f80",
		},
	});

	return () => {};
}
