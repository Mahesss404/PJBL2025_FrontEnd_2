const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add this to handle mjs files
config.resolver.sourceExts.push('mjs');

module.exports = config;
