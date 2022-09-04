import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

base: /Tax-Calculator-Spanish/;
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
});