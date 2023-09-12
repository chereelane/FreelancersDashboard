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
        'Roboto': ['Roboto', 'serif'],
      },
      fontSize: {
        'sm': '0.8rem', // 14.40px  -- p
        'base': '1rem', // 18.00px -- base
        'md': '1.25rem', // 22.50px -- h5
        'lg': '1.563rem', // 28.13px -- h4
        'xl': '1.953rem', // 36.16px  -- h3
        '2xl': '2.441rem', // 43.95px -- h2
        '3xl': '3.052rem', // 54.93 -- h1
      },
      screens: {
        'xs-phone': '320px',
        // 'phone': '320px',

        'phone': '481px',
        // 'tablet': '481px',

        'tablet': '769px',
        // 'laptop': '769px',

        'laptop': '1028px',
        // 'desktop': '1028px',

        'desktop': '1280px',
        // 'xl-screens': '1280px'

        'xl-screens': '1900px'
      }
    },
  },
  plugins: [],
}
export default config
