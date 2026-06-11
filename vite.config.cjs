const react = require('@vitejs/plugin-react-swc')

module.exports = async () => {
  const tailwindcss = (await import('@tailwindcss/vite')).default

  return {
    plugins: [
      tailwindcss(),
      react(),
    ],
    base: '/resume/',
  }
}
