const { BABEL_ENV, NODE_ENV } = process.env;
const building = BABEL_ENV !== undefined && BABEL_ENV !== 'cjs';

const plugins = [];

if (NODE_ENV === 'test') {
  plugins.push('@babel/plugin-transform-runtime');
}

module.exports = api => {
  api.cache.never();

  const presets = [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: building ? false : 'commonjs',
      },
    ],
    '@babel/preset-react',
  ];

  return {
    presets,
    plugins,
  };
};
