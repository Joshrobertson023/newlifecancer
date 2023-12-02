/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html"
  ],
  theme: {
    screens: {
      'tablet': '500px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    colors: {
      'my-gray': '#ECECEC',
      'brown': '#C7A08A',
      'my-blue': '#7E9299',
      'fontcolor': '#545454',
      'white': '#E6E6E6',
    },
    fontFamily: {
      'body': 'Lato',
      'header': 'Merriweather',
    },
    extend: {
      height: {
        '50': '50px',
      },
      width: {
        'maxExpand': '120rem',
      }
    },
  },
  plugins: [],
}

