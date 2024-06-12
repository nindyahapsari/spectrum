module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'spectrum-primary': '#F8F697',
        'spectrum-background': '#F2F2EE',
        'spectrum-white': '#FFFFFF',
        'spectrum-comparing': '#C7C7C3',
      },
    },
  },
  daisyui: {
    themes: ['light'],
  },
  plugins: [require('daisyui')],
};
