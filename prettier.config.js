/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  singleQuote: true,
  semi: true,
  endOfLine: 'lf',
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^(react/(.*)$)|^(react$)', // React
    '<BUILTIN_MODULES>', // Nodejs built ins
    '<THIRD_PARTY_MODULES>', // Imports not matched by other special words or groups
    '', // To add spacing between the 2
    '@utils/(.*)$',
    '@backend/(.*)$',
    '@frontend/(.*)$',
    '@components/(.*)$',
    '^[./]', //Relative imports
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
};
