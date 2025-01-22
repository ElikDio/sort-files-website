const { relative } = require('path');

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => relative(process.cwd(), f))
    .join(' ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
