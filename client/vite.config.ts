import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import fs from "fs";
// import path from "path";

// const __dirname = import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   https: {
  //     key: fs.readFileSync(path.resolve(__dirname, "cert/key.pem")),
  //     cert: fs.readFileSync(path.resolve(__dirname, "cert/cert.pem")),
  //   },
  //   port: 5173,
  // },
});
