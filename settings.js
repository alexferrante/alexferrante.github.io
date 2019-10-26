const path = require('path');

module.exports = {
  PORT: 3823,

  FAVICONS: {
    logo: path.join(__dirname, './favicon.png'),
    background: '#ffeeee', 
    icons: {
      android: false,
      appleIcon: false,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      opengraph: false,
      twitter: false,
      yandex: false,
      windows: false,
    },
  },

  PUBLIC_PATH: path.join(__dirname, './public'),
};
