import { colors } from './src/app/uiVars'

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'primary': colors.primary,
        'primary-light': colors['primary-light'],
        'primary-dark': colors['primary-dark'],
        'secondary': colors.secondary,
        'secondary-light': colors['primary-light'],
        'secondary-dark': colors['secondary-dark'],
      }
    },
  },
  plugins: [
  ],
}