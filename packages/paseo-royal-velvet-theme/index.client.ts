import type { PluginClientContext } from "@getpaseo/plugin/client";

// Royal Velvet for Paseo, ported from the Obsidian theme `caro401/royal-velvet` by caro401.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "royal-velvet",
		name: "Royal Velvet",
		appearance: "dark",
		colors: {
			background: "#21212c",
			foreground: "#f8f8f2",
			raised: "#1c1d26",
			control: "#1c1d26",
			border: "#494952",
			accent: "#ff80c0",
			mutedForeground: "#a2a2a3",
			ring: "#ffca80",
		},
	});

	client.addTheme({
		id: "royal-velvet-light",
		name: "Royal Velvet Light",
		appearance: "light",
		colors: {
			background: "#f3f4f6",
			foreground: "#21222c",
			raised: "#fcfcfd",
			control: "#fcfcfd",
			border: "#d6d7d8",
			accent: "#db006e",
			mutedForeground: "#75767d",
			ring: "#db6e00",
		},
	});

	return () => {};
}
