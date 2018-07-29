import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import commonjs from 'rollup-plugin-commonjs';
import url from 'rollup-plugin-url';
import progress from 'rollup-plugin-progress';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

const external = Object.keys(
  Object.assign({}, pkg.dependencies, pkg.peerDependencies),
);
const banner = `/* ${pkg.name} v${pkg.version} */`;
const production = !process.env.ROLLUP_WATCH;
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
  'prop-types': 'PropTypes',
};

export default {
  input: 'src/index.js',
  output: [
    {
      name: '@guyl/react-components',
      file: pkg.browser,
      format: 'umd',
      sourceMap: true,
      globals,
      banner,
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourceMap: true,
      globals,
      banner,
    },
    {
      file: pkg.module,
      format: 'es',
      sourceMap: true,
      globals,
      banner,
    },
  ],
  plugins: [
    url(),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      exclude: 'node_modules/**',
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
    }),
    nodeResolve(),
    commonjs(),
    filesize(),
    production && minify(),
    progress({ clearLine: false }),
  ],
  external,
};
