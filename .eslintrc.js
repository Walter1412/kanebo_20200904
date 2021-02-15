module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    Swiper: true,
    $: true,
    ListenWindow: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'handle-callback-err': 'off',
    'no-template-curly-in-string': 'off',
    camelcase: 'off',
    'prettier/prettier': 'error',
    'no-empty-source': 'off',
    'ines-between-class-members': 0,
    'import/no-named-as-default': 0,
  },
}
