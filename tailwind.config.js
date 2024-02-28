module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Helvetica': ['Helvetica Neue LT Pro', 'sans-serif'],
        'Michroma': ['Michroma', 'sans-serif'],
      },
      fontSize: {
        'titre': ['3rem', {
          fontFamily: 'Helvetica',
          lineHeight: 'normal',
          letterSpacing: '-0.01em',
          fontWeight: '900',
        }],
        'marquee': ['6rem', {
          fontFamily: 'Helvetica',
          lineHeight: '1',
          letterSpacing: '-0.01em',
          fontWeight: '900',
        }],
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      colors: {
        noir: '#000000',
        noir20: '#202020',
        gris: '#777777',
        blanc: '#ffffff',
        rouge: '#FF0000',
      },
    },
  },
  plugins: [],
}
