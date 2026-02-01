import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react() // Dekho, yahan se babel wala part maine hata diya hai
  ],
})