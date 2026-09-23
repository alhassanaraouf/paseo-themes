import type { PluginClientContext } from "@getpaseo/plugin/client";

// Ars Magna for Paseo, ported from the Obsidian theme `mediapathic/obsidian-arsmagna-theme` by mediapathic.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "ars-magna",
		name: "Ars Magna",
		appearance: "dark",
		colors: {
			background: "#363c3f",
			foreground: "#f0f0f0",
			raised: "#2f3437",
			control: "#3b4145",
			border: "#f0f0f0",
			accent: "#c87800",
			mutedForeground: "#ffb400",
			ring: "#c87800",
		},
	});

	client.addTheme({
		id: "ars-magna-light",
		name: "Ars Magna Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#37352f",
			raised: "#f4f5f6",
			control: "#f4f5f6",
			border: "#37352f",
			accent: "#c87800",
			mutedForeground: "#37352f",
			ring: "#c87800",
		},
	});

	return () => {};
}
