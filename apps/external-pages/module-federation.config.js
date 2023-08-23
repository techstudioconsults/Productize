module.exports = {
  name: 'external-pages',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
