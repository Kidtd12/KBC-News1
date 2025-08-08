import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/KBC-News1/', // 👈 must exactly match your GitHub repo name
  plugins: [react()],
})
