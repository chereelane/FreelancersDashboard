import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        '--background-start-rgb': '#2CDA9D',
        '--background-end-rgb': '#22BEE6',
        '--primary-color': '#2CDA9D',
        '--dark-primary-color': '#22BEE6',
        '--light-primary-color': '#2CDA9D',
        '--accent': '#24F06F',
        '--divider': '#22E633',
        '--primary-text': '#FFFFFF',
        '--secondary-text': '#000000',
        '--disabled': '#EBEBE4',
      },
      fontFamily: {
        'sans': ["Roboto"],
      },
      fontSize: {
        'sm': '0.8rem',
        'base': '1rem',
        'md': '1.25rem',
        'lg': '1.563rem',
        'xl': '1.953rem',
        '2xl': '2.441rem',
        '3xl': '3.052rem',
      }
    },
  },
  plugins: [],
}
export default config
