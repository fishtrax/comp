import path from 'path';

import { configs } from './rollup.config.common';

function getConfig(pathname, base) {
  const dist = path.resolve(pathname, 'dist');
  return {
    ...base,
    output: {
      dir: dist,
      entryFileNames: '[name].js',
      chunkFileNames: '[name]-[hash].js',
      format: 'cjs',
      exports: 'named',
      moduleContext: {
       'node_modules/@esri/**': 'window'
      },
      sourcemap: 'inline',
    },
    plugins: [
      ...base.plugins,
    ],
  };
}

export default configs.map(([pathname, config]) => getConfig(pathname, config));
