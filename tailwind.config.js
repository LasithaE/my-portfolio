module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
    safelist: ['scrollbar-hide'],
    theme: {
      extend: { maxWidth: {
        'content-wrapper': '92vw',
      },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
        animation: {
          marquee: 'marquee 20s linear infinite',
        },
      },
    },
  };