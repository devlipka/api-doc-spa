import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ["resources/js/app.js"],
            refresh: true,
        }),
    ],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: `${path.resolve(__dirname, "./resources/js")}/`,
            },
            // { find: '@assets', replacement: fileURLToPath(new URL('./src/shared/assets', import.meta.url)) },
        ],
    },
});
