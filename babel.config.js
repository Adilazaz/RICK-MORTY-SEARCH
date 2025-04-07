module.exports = {
    presets: [
      ['@babel/preset-env'],
      ['@babel/preset-react', { runtime: 'automatic' }], // <== это главное
      '@babel/preset-typescript',
    ],
  };
  