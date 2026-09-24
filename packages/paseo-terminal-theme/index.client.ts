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
			control: "#000000",
			border: "#15d00d",
			accent: "#000000",
			mutedForeground: "#15d00d",
			ring: "#000000",
		},
	});

	return () => {};
}
