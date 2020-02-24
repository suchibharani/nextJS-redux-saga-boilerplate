const { ANALYZE, ASSET_HOST } = process.env
const webpack = require('webpack');
const assetPrefix = ASSET_HOST || '/'
const withSass = require('@zeit/next-sass')
const withESLint = require('next-eslint')
module.exports = withESLint({
  publicRuntimeConfig: {
    baseURL : (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging') ? '' : '',
    siteEnv : process.env.NODE_ENV,
    staticURL : (process.env.NODE_ENV !== 'production') ? '/static/' : '/static/',
  },
  assetPrefix:(process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging') ? assetPrefix: assetPrefix,
  cssModules: true,
  webpack: (config, { defaultLoaders }) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`
    config.node = {
      fs: "empty"
    };
    config.module.rules.push(
      {
      test: /\.scss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped',
          }
        },
        'sass-loader'
      ]
    }
    )

    return config
  }
})