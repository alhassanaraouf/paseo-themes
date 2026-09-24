import type { PluginClientContext } from "@getpaseo/plugin/client";

// Obsdn-Dark-Rmx for Paseo, ported from the Obsidian theme `cannibalox/Obsdn-dark-rmx` by cannibalox.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "obsdn-dark-rmx",
		name: "Obsdn-Dark-Rmx",
		appearance: "dark",
		colors: {
			background: "#212121",
			foreground: "#dcddde",
			raised: "#212121",
			control: "#2a2a2a",
			border: "#303030",
			accent: "#20abe9",
			mutedForeground: "#999999",
			ring: "#1da3d6",
		},
	});

	client.addTheme({
		id: "obsdn-dark-rmx-light",
		name: "Obsdn-Dark-Rmx Light",
		appearance: "light",
		colors: {
			background: "#ffffff",
			foreground: "#2e3338",
			raised: "#f2f3f5",
			control: "#f2f3f5",
			border: "#dddddd",
			accent: "#22b6e2",
			mutedForeground: "#6e6e6e",
			ring: "#1da3d6",
		},
	});

	return () => {};
}
