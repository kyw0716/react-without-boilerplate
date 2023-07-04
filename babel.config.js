module.exports = {
  presets: [['@babel/preset-react', { runtime: 'automatic' }]],
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-runtime',
      ],
    },
  },
};
