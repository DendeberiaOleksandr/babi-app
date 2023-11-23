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
        'primary': '#FF78C4',
        'secondary': '#E1AEFF',
        'pink1': '#FFBDF7',
        'pink2': '#FFECEC',
        'black': '#460C68',
      }
    }
  },
  plugins: [],
}
export default config
