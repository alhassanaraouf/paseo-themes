import type { PluginClientContext } from "@getpaseo/plugin/client";

// Base2Tone for Paseo, ported from the Obsidian theme `deathau/Base2Tone-For-Obsidian.md` by deathau.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "base2tone",
		name: "Base2Tone",
		appearance: "dark",
		colors: {
			background: "#292433",
			foreground: "#f1ebff",
			raised: "#544b68",
			control: "#292433",
			border: "#544b68",
			accent: "#cf884a",
			mutedForeground: "#e1d2fe",
			ring: "#d99559",
		},
	});

	return () => {};
}
