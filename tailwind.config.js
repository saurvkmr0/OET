module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],  // Include your JSX/TSX files
  theme: {
    screens: {
      'card-xs': '750px',   // Custom breakpoint for 1 column
      'card-sm': '1150px',  // Custom breakpoint for 2 columns
      'card-md': '1550px',  // Custom breakpoint for 3 columns
      'card-lg': '1551px',  // 4 columns above 1400px

      'sm': '640px',   // Small devices (tablets, 640px and up)
      'md': '768px',   // Medium devices (desktops, 768px and up)
      'lg': '1024px',  // Large devices (large desktops, 1024px and up)
      'xl': '1280px',  // Extra large devices (larger desktops, 1280px and up)
      '2xl': '1536px', // 2x extra large devices (larger desktops, 1536px and up)

      'vsm': '150px',
    },
    extend: {},
  },
  plugins: [],
};