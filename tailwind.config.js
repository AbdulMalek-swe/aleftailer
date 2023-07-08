/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
      signImg:"url('assets/image/shoes-bags-close-up.jpg')",
      insiderAlif:"url('assets/image/inseder.svg')",
      contact:"url('assets/image/contact.svg')",
      insiderAlif1:"url('assets/image/Insider5.svg')"
      },
      colors: {
        primary363:'#656363',
        red000:'#FF0000',
        orange:'#FFD700',
        orange1:'#CFB62D',
        orange2:'#E1C52B',
        transparent: 'transparent',
        current: 'currentColor',
        sidebar:"#201f1f80",
        sideCross:"#ffffff80",
        white8:"#ffffff80",
        black8:"#00000080",
        black7:"#00000070"
      },
      backgroundColor: {
        'checkbox': '#000000',
        'checkbox-checked': '#0000FF',
      },
      
        fontFamily: {
          'italianno': ['Italianno', 'cursive'],
          'sans': ['Noto Sans', 'sans-serif'],
          'arial': ['Arial', 'sans-serif'],
          'hel': ['Helvetica', 'Arial', 'sans-serif'],
        }
  
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