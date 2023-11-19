const pluginWebc = require('@11ty/eleventy-plugin-webc');

module.exports = (config) => {
  // Copy static assets
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/globals.css');

  // Add support for .webc files
  config.addPlugin(pluginWebc, {
    components: 'src/_includes/components/**/*.webc',
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
