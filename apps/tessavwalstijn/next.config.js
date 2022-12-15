const withTM = require('next-transpile-modules')([
  'shared-content',
  'shared-ui',
])

module.exports = withTM({
  reactStrictMode: true,
  // experimental: {
  //   transpilePackages: ['shared-ui', 'shared-content'],
  // },
})
