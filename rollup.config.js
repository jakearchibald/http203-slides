import sass from 'rollup-plugin-sass';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src.js',
  plugins: [
    sass({
      options: { outputStyle: 'compressed' },
      exclude: 'foo'
    }),
    resolve({ jsnext: true, main: true }),
    commonjs(),
  ],
  output: {
    file: '.public/script.js',
    format: 'iife',
    strict: false
  }
};

