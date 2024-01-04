import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      red: '#FC4747',
      darkBlue: '#10141E',
      greyishBlue: '#5A698F',
      semiDarkBlue: '#161D2F',
      pureWhite: '#FFFFFF',
    },
    fontSize: {
      'h-l': [
        '32px',
        {
          letterSpacing: '-0.05px',
          fontWeight: '300',
        },
      ],
      'h-m': [
        '24px',
        {
          fontWeight: '300',
        },
      ],
      'h-s': [
        '24px',
        {
          fontWeight: '500',
        },
      ],
      'h-xs': [
        '18px',
        {
          fontWeight: '500',
        },
      ],
      'b-m': [
        '15px',
        {
          fontWeight: '300',
        },
      ],
      'b-s': [
        '13px',
        {
          fontWeight: '300',
        },
      ],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
