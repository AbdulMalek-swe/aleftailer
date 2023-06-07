/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        sidebar:"#201f1f80",
        sideCross:"#ffffff80",
        black8:"#ffffff80"
      },
      // fontFamily: {
      //   'sans': ['ui-sans-serif', 'system-ui' ],
      //    'oldEng':['Old English Text MT'],
      //   'serif': ['ui-serif', 'Georgia' ],
      //   'mono': ['ui-monospace', 'SFMono-Regular' ],
      //   'display': ['Oswald' ],
      //   'body': ['"Open Sans"' ],
      // }
    },
    daisyui: {
      themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    },
  },
  plugins: [],
}