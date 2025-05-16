const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: '#ffffff',
        lightText: '#000000',
        darkBg: '#0f172a',    // Customize this
        darkText: '#f8fafc',  // Customize this
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
