/**
 * Custom Gatsby cache configuration
 * This file sets explicit paths for Gatsby cache directories
 */
var path = require('path');

// Define cache paths relative to project root
var projectRoot = __dirname;
var cachePath = path.join(projectRoot, '.cache');
var publicPath = path.join(projectRoot, 'public');

// Export paths for use in scripts
module.exports = {
  cachePath: cachePath,
  publicPath: publicPath
};
