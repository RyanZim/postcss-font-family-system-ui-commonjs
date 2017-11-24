import { readFileSync } from 'fs'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  external: Object.keys(
    JSON.parse(
      readFileSync('node_modules/postcss-font-family-system-ui/package.json')
    ).dependencies
  ),
  plugins: [
    resolve(),
    commonjs(),
  ],
};
