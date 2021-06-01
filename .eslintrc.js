module.exports = {
  root: true,
  extends: ['@youjinbu'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['node_modules', 'lib'],
  rules: {
    'import/extensions': ['error', {json: 'always'}],
  },
}
