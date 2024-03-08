import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import typographyPlugin from '@tailwindcss/typography'
import { gray } from 'tailwindcss/colors'

export default {
  content: ['./**/*.vue'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, Avenir, 'Avenir Next LT Pro', Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif",
        mono: "'Fragment Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
      },
      fontSize: {
        icon: '0.8rem',
      },
      boxShadow: {
        'inner-sm': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'inner-xs': 'inset 0 1px 1px 0 rgb(0 0 0 / 0.1)',
      },
      colors: {
        'light-theme': {
          background: '#FAFBFC',
          base: '#565869',
          'light-grey': '#ADB1C2',
          green: '#2DAE58',
          teal: '#13BBB7',
          blue: '#09A1ED',
          'dark-blue': '#11658F',
          pink: '#F767BB',
          red: '#FF5C56',
          'dark-yellow': '#CF9C00',
          yellow: '#F5B900',
        },
        'dark-theme': {
          background: '#19212F',
          base: '#D9D7CE',
          orange: '#FFAE57',
          teal: '#95E6CB',
          blue: '#5CCFE6',
          purple: '#D4BFFF',
          green: '#BAE67E',
          red: '#FF3333',
          'light-grey': '#5C6773',
          'dark-yellow': '#CF9C00',
          yellow: '#F5B900',
        },
        primary: {
          DEFAULT: '#3ebd6f',
          '50': '#f2fbf5',
          '100': '#e1f7e8',
          '200': '#c3efd4',
          '300': '#95e0b1',
          '400': '#5fc988',
          '500': '#3ebd6f',
          '600': '#2a8f51',
          '700': '#247142',
          '800': '#215a38',
          '900': '#1d4a30',
          '950': '#0b2818',
        },
        slate: {
          '50': '#fafafa',
          '100': '#f4f4f5',
          '200': '#e4e4e7',
          '300': '#d4d4d8',
          '400': '#a1a1aa',
          '500': '#71717a',
          '600': '#52525b',
          '700': '#3f3f46',
          '800': '#27272a',
          '900': '#18181b',
          '950': '#09090b',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in':
          'fade-in 500ms ease-in-out var(--animation-delay, 0ms) forwards',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('disabled', '&:is(:disabled, [data-disabled])')
      addVariant('group-disabled', '.group:is(:disabled, [data-disabled]) &')
      addVariant(
        'not-disabled',
        '&:where(:not(:disabled):not([data-disabled]))',
      )
      addVariant(
        'group-not-disabled',
        '.group:where(:not(:disabled):not([data-disabled]))&',
      )
    }),
    typographyPlugin,
  ],
} satisfies Config
