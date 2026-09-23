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
			control: "#3f1010",
			border: "#283345",
			accent: "#863737",
			mutedForeground: "#97a1b9",
			ring: "#652121",
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
			control: "#2f1010",
			border: "#ccd6eb",
			accent: "#912e2e",
			mutedForeground: "#697580",
			ring: "#c35c5c",
		},
	});

	return () => {};
}
