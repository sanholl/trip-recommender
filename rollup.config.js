import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/app/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react', "@babel/preset-typescript"],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      postcss({
        extract: false,
        modules: false,
        use: ['sass'],
        extensions: ['.css', '.scss'],
      }),
      terser()
    ],
  }
];
