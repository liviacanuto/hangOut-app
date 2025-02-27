module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@animations': './animations',
            '@assets': './assets',
            '@components': './components',
            '@screens': './screens',
            '@styles': './styles',
          },
        },
      ],
    ],
  };
};
