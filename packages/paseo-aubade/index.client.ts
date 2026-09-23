import type { PluginClientContext } from "@getpaseo/plugin/client";

// Aubade for Paseo, ported from the Obsidian theme `ducktapekiller/obsidian-aubade` by ducktapekiller.
export default function contribute(client: PluginClientContext) {
	client.addTheme({
		id: "aubade",
		name: "Aubade",
		appearance: "dark",
		colors: {
			background: "#050505",
			foreground: "#cc8e00",
			raised: "#000000",
			control: "#050505",
			border: "#805500",
			accent: "#805500",
			mutedForeground: "#cc8e00",
			ring: "#ffb000",
		},
	});

	client.addTheme({
		id: "aubade-light",
		name: "Aubade Light",
		appearance: "light",
		colors: {
			background: "#bfc8cf",
			foreground: "#323232",
			raised: "#9db2bf",
			control: "#bfc8cf",
			border: "#323232",
			accent: "#323232",
			mutedForeground: "#222222",
			ring: "#7aa4bd",
		},
	});

	return () => {};
}
