import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path is set via env var so it works both locally and on GitHub Pages.
// Repo: sayyada-ayesha/Sayyada_Ayesha-portfolio
// Live: https://sayyada-ayesha.github.io/Sayyada_Ayesha-portfolio/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/Sayyada_Ayesha-portfolio/',
})
