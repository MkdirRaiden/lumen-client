const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: [
      'node_modules/*',
      'android/*',
      'ios/*',
      'web-build/*',
      'dist/*',
      '.expo/*',
      '.vscode/*',
      'README.md',
      'assets/**/*.{png,jpg,jpeg,gif,svg,ttf,otf,mp3,mp4,webm}',
    ],
  }

]);

