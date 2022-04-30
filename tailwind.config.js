module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
       colorAnimated: {
          '0%, 100%': {     fill: '#f97316'},
          '50%': {fill : '#fb923c'},
        }
      },
      animation: {
       colorAnimated: 'colorAnimated 3s ease-in-out infinite',
      },
      colors: {
        transparentColor: 'transparent',
      },
      backgroundImage: {
        'landing' : "url('../img/landingIMG.JPG')"
      },
      fontFamily: {
        'Poppins':['Poppins'],
        'Pacifico': ['Pacifico'],
        'Montserrat': ['Montserrat']
      },
      dropShadow: {
        'outlineDrop' : [
                        '1px 1px 1px rgba(249, 115, 22, 0.5)',
                        '1px 1px 1px rgba(249, 115, 22, 0.5)',
                        '1px 1px 1px rgba(249, 115, 22, 0.5)',
                        '1px 1px 1px rgba(249, 115, 22, 0.5)'
                      ],
        'dropTebel-v1' : '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'dropTebel-v2' : '2px 2px 2px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}
