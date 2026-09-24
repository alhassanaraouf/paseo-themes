import type { PluginClientContext } from "@getpaseo/plugin/client";

// ITS Theme for Paseo, ported from the Obsidian theme `slrvb/Obsidian--ITS-Theme` by SlRvb.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "its-theme",
		name: "ITS Theme",
		appearance: "dark",
		colors: {
			background: "#1a1e24",
			foreground: "#bccad8",
			raised: "#1a1e24",
			control: "#232831",
			border: "#2f3b4d",
			accent: "#652121",
			mutedForeground: "#97a1b9",
			ring: "#252c36",
		},
	});

	client.addTheme({
		id: "its-theme-light",
		name: "ITS Theme Light",
		appearance: "light",
		colors: {
			background: "#f8fbff",
			foreground: "#30353a",
			raised: "#f8fbff",
			control: "#f1f5ff",
			border: "#b5c2d8",
			accent: "#c14343",
			mutedForeground: "#697580",
			ring: "#e1e9f6",
		},
	});

	return () => {};
}
