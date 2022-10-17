const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  eslint: {
    dirs: ['pages', 'utils', 'components'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};
