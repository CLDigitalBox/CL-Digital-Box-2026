// import { createRequire } from "node:module";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { creaoPlugins } from "./config/vite/creao-plugin.mjs";
...
plugins: [
  // ...creaoPlugins(),
  TanStackRouterVite({
    autoCodeSplitting: false,
  }),
  viteReact({ jsxRuntime: "automatic" }),
  svgr(),
  tailwindcss(),
],

	test: {
		globals: true,
		environment: "jsdom",
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	server: {
		host: "0.0.0.0",
		port: 3000,
		allowedHosts: true, // respond to *any* Host header
		watch: {
			usePolling: true,
			interval: 300, // ms; tune if CPU gets high
		},
	},
	build: {
		chunkSizeWarningLimit: 1500,
	},
});
