module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        softBlue: 'hsl(34, 100%, 36%)',
        softRed: 'hsl(34, 94%, 70%)',
        grayishBlue: 'hsl(34, 8%, 60%)',
        veryDarkBlue: '#D4651E',
        accentOrange: 'hsl(29, 100%, 45%)'
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      backgroundImage: () => ({
        dots: "url('../images/bg-dots.svg')",
        left: "url('../images/podcast.jpg)"
      }),
    },
    variants: {
      extend: {
        opacity: ['group-hover'],
      },
    },
    plugins: [],
  },
}