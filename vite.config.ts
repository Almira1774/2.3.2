/// <reference types="vitest" />

// 1. Возвращаем импорт из обычного 'vite', чтобы плагин react() не ругался
import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // 2. Добавляем комментарий, который отключит проверку типов конкретно для блока тестов
  // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
  }
})