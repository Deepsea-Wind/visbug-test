import resolve  from 'rollup-plugin-node-resolve'
import postcss  from 'rollup-plugin-postcss'
// import {terser} from 'rollup-plugin-terser'

const is_prod = process.env.build === 'prod'

const dev_plugins = [
  resolve({
    jsnext: true,
  }),
  postcss({
    extract: false,
    inject:  false,
  }),
]

const prod_plugins = [
  // terser({
  //   sourcemap: false,
  // }),
]

const plugins = is_prod
  ? [...dev_plugins, ...prod_plugins]
  : dev_plugins

export default {
  input: 'app/vis-bug/index.js',
  output: {
    file:       is_prod ? 'app/build/bundle.min.js' : 'app/build/bundle.js',
    format:     'es',
    sourcemap:  is_prod ? null : 'inline',
  },
  plugins,
  watch: {
    exclude: ['node_modules/**'],
  }
}
