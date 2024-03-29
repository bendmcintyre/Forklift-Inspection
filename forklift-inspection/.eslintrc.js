module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  overrides: [
  ],
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      },
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': ['warn'],
    'quote-props': ['error', 'consistent'],
    'object-curly-newline': ['error', {
      'ImportDeclaration': { 'multiline': true, 'minProperties': 2 }
    }],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    // TODO: Enable this once id columns are safely renamed
    'no-underscore-dangle': 'off',
    "jsx-a11y/label-has-associated-control": [ "error", {
      "labelAttributes": ["htmlFor"],
      "controlComponents": ["input", "textarea"],
    }]
  },
};
