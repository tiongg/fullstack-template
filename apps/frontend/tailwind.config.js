//Copy config from packages/ui
const Config = require('../../packages/ui/tailwind.config');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

// Prevent purging of CSS used in packages/ui
Config.content.push(...createGlobPatternsForDependencies(__dirname));

module.exports = {
  ...Config
};