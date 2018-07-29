const path = require('path');

module.exports = ({ config, mode }) => {
  const isProduction = mode === 'PRODUCTION';

  config.externals = {
    ...config.externals,
    jsdom: 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'react/addons': true
  };

  config.module.rules.push({
    test: /\.story\.jsx?$/,
    loaders: [
      'babel-loader',
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          prettierConfig: {
            parser: 'babel'
          }
        }
      }
    ],
    enforce: 'pre'
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: [
      { loader: 'babel-loader' },
      {
        loader: 'react-svg-loader',
        options: {
          es5: true
        }
      }
    ]
  });

  return config;
};
