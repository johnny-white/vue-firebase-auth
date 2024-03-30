module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 2,
      },
      'multiline': {
        'max': 1,
      },
    }],
    'vue/attribute-hyphenation': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'arrow-parens': ['error', 'always'],
    'semi': ['error', 'always'],
  },
};

