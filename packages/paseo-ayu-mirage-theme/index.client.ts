import type { PluginClientContext } from "@getpaseo/plugin/client";

// Ayu Mirage for Paseo, ported from the Obsidian theme `bcdavasconcelos/Obsidian-Ayu_Mirage` by bcdavasconcelos.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "ayu-mirage",
		name: "Ayu Mirage",
		appearance: "dark",
		colors: {
			background: "#171a23",
			foreground: "#d1cec6",
			raised: "#13151e",
			control: "#171a23",
			border: "#686e80",
			accent: "#3f455b",
			mutedForeground: "#686e80",
			ring: "#313646",
		},
	});

	return () => {};
}
