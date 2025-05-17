import { defineConfig } from "vite";
import path from "path";
import pugPlugin from "vite-plugin-pug";
import fs from "fs";
import { renderFile } from "pug";
import chokidar from "chokidar";

const inputDir = path.resolve("assets/pug/pages");
const outputDir = path.resolve("");

const compilePug = (filePath) => {
  const relativePath = path.relative(inputDir, filePath);
  const outputFilePath = path.resolve(
    outputDir,
    relativePath.replace(".pug", ".html")
  );

  try {
    const html = renderFile(filePath);
    fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });
    fs.writeFileSync(outputFilePath, html);
    console.log(`Compiled: ${filePath} → ${outputFilePath}`);
  } catch (err) {
    console.error(`Error compiling ${filePath}: ${err.message}`);
  }
};

const startPugWatcher = () => {
  const watcher = chokidar.watch(inputDir, { persistent: true });
  watcher
    .on("add", compilePug)
    .on("change", compilePug);
};

export default defineConfig({
  root: "",
  cacheDir: false,
  server: {
    host: '0.0.0.0',  // Use this explicit IP instead of 'true' for better compatibility
    port: 3000,
    open: "index.html",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "assets"),
    },
  },
  plugins: [
    pugPlugin(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "sass:color"; @import "@scss/tailwind.css";',
      },
    },
    postcss: "postcss.config.js",
  },
});
