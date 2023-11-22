import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F56EB3',
        'pink1': '#CB1C8D',
        'pink2': '#7F167F',
        'black': '#460C68',
      }
    }
  },
  plugins: [],
}
export default config
