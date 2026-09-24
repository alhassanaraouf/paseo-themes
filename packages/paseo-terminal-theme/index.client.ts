import type { PluginClientContext } from "@getpaseo/plugin/client";

// Terminal for Paseo, ported from the Obsidian theme `zcysxy/Obsidian-Terminal-Theme` by zcysxy.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "terminal",
		name: "Terminal",
		appearance: "dark",
		colors: {
			background: "#000000",
			foreground: "#15d00d",
			raised: "#000000",
			control: "#0a2b08",
			border: "#15d00d",
			accent: "#15d00d",
			mutedForeground: "#15d00d",
			ring: "#15d00d",
		},
	});

	return () => {};
}
