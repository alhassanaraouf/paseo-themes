import type { PluginClientContext } from "@getpaseo/plugin/client";

// Atom for Paseo, ported from the Obsidian theme `kognise/obsidian-atom` by kognise.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "atom",
		name: "Atom",
		appearance: "dark",
		colors: {
			background: "#272b34",
			foreground: "#dcddde",
			raised: "#20242b",
			control: "#20242b",
			border: "#424958",
			accent: "#61afef",
			mutedForeground: "#888888",
			ring: "#2d5eb9",
		},
	});

	client.addTheme({
		id: "atom-light",
		name: "Atom Light",
		appearance: "light",
		colors: {
			background: "#fafafa",
			foreground: "#383a42",
			raised: "#eaeaeb",
			control: "#eaeaeb",
			border: "#dbdbdc",
			accent: "#1592ff",
			mutedForeground: "#8e8e90",
			ring: "#4f67e3",
		},
	});

	return () => {};
}
