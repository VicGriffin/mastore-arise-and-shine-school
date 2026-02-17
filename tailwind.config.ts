import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New Theme Colors
        'primary-blue-green': '#479FBE',
        'secondary-dark-goldenrod': '#9E8016',
        'accent-charcoal-brown': '#3C3B32',
        'accent-porcelain': '#FAFBF7',
        'neutral-alabaster-grey': '#E1EAE9',
        
        // Legacy Colors (for compatibility)
        'primary-green': '#059669',
        'secondary-gold': '#eab308',
        'accent-green': '#047857',
        'vibrant-purple': '#8b5cf6',
        'vibrant-orange': '#f97316',
        'vibrant-pink': '#ec4899',
        'vibrant-blue': '#0ea5e9',
        'vibrant-cyan': '#06b6d4',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #479FBE, #9E8016)',
        'gradient-secondary': 'linear-gradient(to right, #3C3B32, #FAFBF7)',
        'gradient-accent': 'linear-gradient(to right, #479FBE, #E1EAE9)',
      }
    },
  },
  plugins: [],
}

export default config
