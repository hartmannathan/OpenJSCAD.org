import banner from 'rollup-plugin-banner'
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  external: ['@jscad/modeling'],

  input: 'src/index.js',

  output: [
    {
      file: 'dist/jscad-x3d-serializer.min.js',
      format: 'umd',
      name: 'jscadX3dSerializer',
      globals: {
        '@jscad/modeling': 'jscadModeling'
      }
    },
    {
      file: 'dist/jscad-x3d-serializer.es.js',
      format: 'es',
    }
  ],

  plugins: [
    banner('<%= pkg.description %>\n<%= pkg.name %>\nVersion <%= pkg.version %>\n<%= pkg.license %> License'),
    nodeResolve()
  ]
}