module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-env'
  ],
  plugins: [
    // Stage 1
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-do-expressions',
    // Stage 2
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    // Stage 3
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/plugin-proposal-json-strings',
    // Custom
    '@babel/plugin-syntax-dynamic-import',
    [
      'lodash',
      {
        id: ['lodash', 'recompose'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        cwd: './',
      },
    ],
    'babel-plugin-styled-components',
  ],
  comments: false,
  env: {
    development : {
      "compact": false
    },
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'dynamic-import-node',
      ],
    },
  },
};
