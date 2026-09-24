import type { PluginClientContext } from "@getpaseo/plugin/client";

// evangelion for Paseo, ported from the Obsidian theme `xero/evangelion.obsidian` by xero.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "evangelion",
		name: "evangelion",
		appearance: "dark",
		colors: {
			background: "#201430",
			foreground: "#e1d6f8",
			raised: "#452f5c",
			control: "#43492a",
			border: "#2c1c42",
			accent: "#8edf5f",
			mutedForeground: "#d4d4d4",
			ring: "#87ff5f",
		},
	});

	return () => {};
}
