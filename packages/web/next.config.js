/* eslint-disable no-param-reassign,@typescript-eslint/no-var-requires */

const withTM = require('next-transpile-modules')(
  [
    'shared',
    '@ui-kitten/components',
    '@eva-design/eva0',
    'react-native-svg',
    '@ui-kitten/eva-icons',
  ],
  {
    resolveSymlinks: true,
  },
)

module.exports = withTM({
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
    return config
  },
})
