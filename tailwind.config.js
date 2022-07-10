module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      'text-xs': [
        '0.75rem',
        {
          lineHeight: '100%',
        },
      ],
      'text-sm': [
        '.875rem',
        {
          lineHeight: '100%',
        },
      ],
      'text-base': [
        '1rem',
        {
          lineHeight: '100%',
        },
      ],
      'text-lg': [
        '1.125rem',
        {
          lineHeight: '100%',
        },
      ],
      'text-xl': [
        '1.25rem',
        {
          lineHeight: '100%',
        },
      ],
      'text-2xl': [
        '1.5rem',
        {
          lineHeight: '100%',
        },
      ],
      'text-3xl': [
        '1.875rem',
        {
          lineHeight: '100%',
        },
      ],
      'text-4xl': [
        '2.25rem',
        {
          lineHeight: '100%',
        },
      ],
      'text-5xl': [
        '3rem',
        {
          lineHeight: '100%',
        },
      ],
      'text-6xl': [
        '3.75rem',
        {
          lineHeight: '100%',
        },
      ],
      'text-7xl': [
        '4.5rem',
        {
          lineHeight: '100%',
        },
      ],
      'text-8xl': [
        '6rem',
        {
          lineHeight: '100%',
        },
      ],
      'text-9xl': [
        '8rem',
        {
          lineHeight: '100%',
        },
      ],
    },
    extend: {
      fontFamily: {
        unica: ['neue-haas-unica', 'sans-serif'],
        exposure: ['exposure', 'serif'],
      },
      fluidType: {
        settings: {
          fontSizeMin: 0.3, // 1.125rem === 18px
          fontSizeMax: 1.25, // 1.25rem === 20px
          ratioMin: 1.125, // Multiplicator Min
          ratioMax: 1.2, // Multiplicator Max
          screenMin: 20, // 20rem === 320px
          screenMax: 120, // 96rem === 1536px
          unit: 'rem', // default is rem but it's also possible to use 'px'
          prefix: '', // set a prefix to use it alongside the default font sizes
        },
        values: {
          xs: [
            -2,
            {
              lineHeight: '110%',
              letterSpacing: '0',
            },
          ],
          sm: [
            -1,
            {
              lineHeight: '110%',
              letterSpacing: '0',
            },
          ],
          base: [
            0,
            {
              lineHeight: '110%',
              letterSpacing: '-0.02em',
            },
          ],
          lg: [
            1,
            {
              lineHeight: '100%',
              letterSpacing: '-0.025em',
            },
          ],
          xl: [
            2,
            {
              lineHeight: '100%',
              letterSpacing: '-0.025em',
            },
          ],
          '2xl': [
            3,
            {
              lineHeight: '100%',
              letterSpacing: '-0.04em',
            },
          ],
          '3xl': [
            4,
            {
              lineHeight: '100%',
              letterSpacing: '-0.05em',
            },
          ],
          '4xl': [
            5,
            {
              lineHeight: '100%',
              letterSpacing: '-0.05em',
            },
          ],
          '5xl': [
            6,
            {
              lineHeight: '100%',
              letterSpacing: '-0.05em',
            },
          ],
          '6xl': [
            7,
            {
              lineHeight: '100%',
              letterSpacing: '-0.05em',
            },
          ],
          '7xl': [
            8,
            {
              lineHeight: '100%',
              letterSpacing: '-0.075em',
            },
          ],
          '8xl': [
            9,
            {
              lineHeight: '100%',
              letterSpacing: '-0.075em',
            },
          ],
          '9xl': [
            10,
            {
              lineHeight: '100%',
              letterSpacing: '-0.075em',
            },
          ],
        },
      },
    },
  },
  plugins: [require('tailwindcss-fluid-type')],
}
