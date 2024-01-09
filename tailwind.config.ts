import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'chat-background':'url(../styles/assets/chat_background.png)'
      },
      animation:{
        'backRotation':'backRotation 0.15s ease-in-out',
        'frontRotation':'frontRotation 0.15s ease-in-out',
        'arrowSectionHover':'arrowSectionHover 0.15s ease-in-out'
      },
      keyframes:{
        'backRotation':{
          '0%':{transform:'rotate(-135deg)',opacity:'0'},
          '100%':{transform:'rotate(0deg)',opacity:'1'}
        },
        'frontRotation':{
          '0%':{transform:'rotate(0)',opacity:'1'},
          '100%':{transform:'rotate(-135deg)',opactiy:'0'}
        },
        'arrowSectionHover':{
          '0%':{right:'-1.75rem'},
          '100%':{right:'0'}
        }
      },
      colors:{
        'WDS-neutral-gray': {
          50: 'var(--WDS-neutral-gray-50)',
          75: 'var(--WDS-neutral-gray-75)',
          100: 'var(--WDS-neutral-gray-100)',
          200: 'var(--WDS-neutral-gray-200)',
          300: 'var(--WDS-neutral-gray-300)',
          400: 'var(--WDS-neutral-gray-400)',
          500: 'var(--WDS-neutral-gray-500)',
          600: 'var(--WDS-neutral-gray-600)',
          700: 'var(--WDS-neutral-gray-700)',
          800: 'var(--WDS-neutral-gray-800)',
          900: 'var(--WDS-neutral-gray-900)',
          1000: 'var(--WDS-neutral-gray-1000)',
        },

        // Cool Grays
        'WDS-cool-gray': {
          50: 'var(--WDS-cool-gray-50)',
          75: 'var(--WDS-cool-gray-75)',
          100: 'var(--WDS-cool-gray-100)',
          200: 'var(--WDS-cool-gray-200)',
          300: 'var(--WDS-cool-gray-300)',
          400: 'var(--WDS-cool-gray-400)',
          500: 'var(--WDS-cool-gray-500)',
          600: 'var(--WDS-cool-gray-600)',
          700: 'var(--WDS-cool-gray-700)',
          800: 'var(--WDS-cool-gray-800)',
          900: 'var(--WDS-cool-gray-900)',
          1000: 'var(--WDS-cool-gray-1000)',
          'alpha-05': 'var(--WDS-cool-gray-alpha-05)',
          'alpha-10': 'var(--WDS-cool-gray-alpha-10)',
          'alpha-20': 'var(--WDS-cool-gray-alpha-20)',
          'alpha-30': 'var(--WDS-cool-gray-alpha-30)',
          'alpha-40': 'var(--WDS-cool-gray-alpha-40)',
          'alpha-50': 'var(--WDS-cool-gray-alpha-50)',
          'alpha-60': 'var(--WDS-cool-gray-alpha-60)',
          'alpha-70': 'var(--WDS-cool-gray-alpha-70)',
          'alpha-80': 'var(--WDS-cool-gray-alpha-80)',
          'alpha-90': 'var(--WDS-cool-gray-alpha-90)',
        },

        // Warm Grays
        'WDS-warm-gray': {
          50: 'var(--WDS-warm-gray-50)',
          75: 'var(--WDS-warm-gray-75)',
          100: 'var(--WDS-warm-gray-100)',
          200: 'var(--WDS-warm-gray-200)',
          300: 'var(--WDS-warm-gray-300)',
          400: 'var(--WDS-warm-gray-400)',
          500: 'var(--WDS-warm-gray-500)',
          600: 'var(--WDS-warm-gray-600)',
          700: 'var(--WDS-warm-gray-700)',
          800: 'var(--WDS-warm-gray-800)',
          900: 'var(--WDS-warm-gray-900)',
          1000: 'var(--WDS-warm-gray-1000)',
          'alpha-15': 'var(--WDS-warm-gray-300-alpha-15)',
        },

        // Green shades
        'WDS-green': {
          50: 'var(--WDS-green-50)',
          75: 'var(--WDS-green-75)',
          100: 'var(--WDS-green-100)',
          200: 'var(--WDS-green-200)',
          300: 'var(--WDS-green-300)',
          400: 'var(--WDS-green-400)',
          450: 'var(--WDS-green-450)',
          500: 'var(--WDS-green-500)',
          600: 'var(--WDS-green-600)',
          700: 'var(--WDS-green-700)',
          750: 'var(--WDS-green-750)',
          800: 'var(--WDS-green-800)',
          '500-alpha-30': 'var(--WDS-green-500-alpha-30)',
          '500-alpha-60': 'var(--WDS-green-500-alpha-60)',
        },

        // Red shades
        'WDS-red': {
          50: 'var(--WDS-red-50)',
          75: 'var(--WDS-red-75)',
          100: 'var(--WDS-red-100)',
          200: 'var(--WDS-red-200)',
          300: 'var(--WDS-red-300)',
          400: 'var(--WDS-red-400)',
          500: 'var(--WDS-red-500)',
          600: 'var(--WDS-red-600)',
          700: 'var(--WDS-red-700)',
          800: 'var(--WDS-red-800)',
          '400-alpha-30': 'var(--WDS-red-400-alpha-30)',
        },

        // Orange shades
        'WDS-orange': {
          50: 'var(--WDS-orange-50)',
          75: 'var(--WDS-orange-75)',
          100: 'var(--WDS-orange-100)',
          200: 'var(--WDS-orange-200)',
          300: 'var(--WDS-orange-300)',
          400: 'var(--WDS-orange-400)',
          500: 'var(--WDS-orange-500)',
          600: 'var(--WDS-orange-600)',
          700: 'var(--WDS-orange-700)',
          800: 'var(--WDS-orange-800)',
        },

        // Yellow shades
        'WDS-yellow': {
          50: 'var(--WDS-yellow-50)',
          75: 'var(--WDS-yellow-75)',
          100: 'var(--WDS-yellow-100)',
          200: 'var(--WDS-yellow-200)',
          300: 'var(--WDS-yellow-300)',
          400: 'var(--WDS-yellow-400)',
          500: 'var(--WDS-yellow-500)',
          600: 'var(--WDS-yellow-600)',
          700: 'var(--WDS-yellow-700)',
          800: 'var(--WDS-yellow-800)',
        },
              // Purple shades
              'WDS-purple': {
                50: 'var(--WDS-purple-50)',
                75: 'var(--WDS-purple-75)',
                100: 'var(--WDS-purple-100)',
                200: 'var(--WDS-purple-200)',
                300: 'var(--WDS-purple-300)',
                400: 'var(--WDS-purple-400)',
                500: 'var(--WDS-purple-500)',
                600: 'var(--WDS-purple-600)',
                700: 'var(--WDS-purple-700)',
                800: 'var(--WDS-purple-800)',
              },
      
              // Cobalt shades
              'WDS-cobalt': {
                50: 'var(--WDS-cobalt-50)',
                75: 'var(--WDS-cobalt-75)',
                100: 'var(--WDS-cobalt-100)',
                200: 'var(--WDS-cobalt-200)',
                300: 'var(--WDS-cobalt-300)',
                400: 'var(--WDS-cobalt-400)',
                500: 'var(--WDS-cobalt-500)',
                600: 'var(--WDS-cobalt-600)',
                700: 'var(--WDS-cobalt-700)',
                800: 'var(--WDS-cobalt-800)',
              },
      
              // Sky Blue shades
              'WDS-sky-blue': {
                50: 'var(--WDS-sky-blue-50)',
                75: 'var(--WDS-sky-blue-75)',
                100: 'var(--WDS-sky-blue-100)',
                200: 'var(--WDS-sky-blue-200)',
                300: 'var(--WDS-sky-blue-300)',
                400: 'var(--WDS-sky-blue-400)',
                500: 'var(--WDS-sky-blue-500)',
                600: 'var(--WDS-sky-blue-600)',
                700: 'var(--WDS-sky-blue-700)',
                800: 'var(--WDS-sky-blue-800)',
              },
      
              // Pink shades
              'WDS-pink': {
                50: 'var(--WDS-pink-50)',
                75: 'var(--WDS-pink-75)',
                100: 'var(--WDS-pink-100)',
                200: 'var(--WDS-pink-200)',
                300: 'var(--WDS-pink-300)',
                400: 'var(--WDS-pink-400)',
                500: 'var(--WDS-pink-500)',
                600: 'var(--WDS-pink-600)',
                700: 'var(--WDS-pink-700)',
                800: 'var(--WDS-pink-800)',
              },
      
              // Emerald shades
              'WDS-emerald': {
                50: 'var(--WDS-emerald-50)',
                75: 'var(--WDS-emerald-75)',
                100: 'var(--WDS-emerald-100)',
                200: 'var(--WDS-emerald-200)',
                300: 'var(--WDS-emerald-300)',
                400: 'var(--WDS-emerald-400)',
                500: 'var(--WDS-emerald-500)',
                600: 'var(--WDS-emerald-600)',
                700: 'var(--WDS-emerald-700)',
                800: 'var(--WDS-emerald-800)',
              },
      
              // Teal shades
              'WDS-teal': {
                50: 'var(--WDS-teal-50)',
                75: 'var(--WDS-teal-75)',
                100: 'var(--WDS-teal-100)',
                200: 'var(--WDS-teal-200)',
                300: 'var(--WDS-teal-300)',
                400: 'var(--WDS-teal-400)',
                500: 'var(--WDS-teal-500)',
                600: 'var(--WDS-teal-600)',
                700: 'var(--WDS-teal-700)',
                800: 'var(--WDS-teal-800)',
              },
      
              // Cream shades
              'WDS-cream': {
                50: 'var(--WDS-cream-50)',
                75: 'var(--WDS-cream-75)',
                100: 'var(--WDS-cream-100)',
                200: 'var(--WDS-cream-200)',
                300: 'var(--WDS-cream-300)',
                400: 'var(--WDS-cream-400)',
                500: 'var(--WDS-cream-500)',
                600: 'var(--WDS-cream-600)',
                700: 'var(--WDS-cream-700)',
                800: 'var(--WDS-cream-800)',
              },
      
              // Brown shades
              'WDS-brown': {
                50: 'var(--WDS-brown-50)',
                75: 'var(--WDS-brown-75)',
                100: 'var(--WDS-brown-100)',
                200: 'var(--WDS-brown-200)',
                300: 'var(--WDS-brown-300)',
                400: 'var(--WDS-brown-400)',
                500: 'var(--WDS-brown-500)',
                600: 'var(--WDS-brown-600)',
                700: 'var(--WDS-brown-700)',
                800: 'var(--WDS-brown-800)',
              },
      
              // Whites and Blacks
              'WDS-white-alpha': {
                '05': 'var(--WDS-white-alpha-05)',
                '10': 'var(--WDS-white-alpha-10)',
                '20': 'var(--WDS-white-alpha-20)',
                '30': 'var(--WDS-white-alpha-30)',
                '40': 'var(--WDS-white-alpha-40)',
                '50': 'var(--WDS-white-alpha-50)',
                '60': 'var(--WDS-white-alpha-60)',
                '70': 'var(--WDS-white-alpha-70)',
                '80': 'var(--WDS-white-alpha-80)',
                '90': 'var(--WDS-white-alpha-90)',
                default: 'var(--WDS-white)',
              },
      
              'WDS-black-alpha': {
                '05': 'var(--WDS-black-alpha-05)',
                '10': 'var(--WDS-black-alpha-10)',
                '20': 'var(--WDS-black-alpha-20)',
                '30': 'var(--WDS-black-alpha-30)',
                '40': 'var(--WDS-black-alpha-40)',
                '50': 'var(--WDS-black-alpha-50)',
                '60': 'var(--WDS-black-alpha-60)',
                '70': 'var(--WDS-black-alpha-70)',
                '80': 'var(--WDS-black-alpha-80)',
                '90': 'var(--WDS-black-alpha-90)',
                default: 'var(--WDS-black)',
              },
      
              'WDS-transparent': 'var(--WDS-transparent)',
      }
    },
  },
  plugins: [],
}
export default config
