module.exports = {
  installedESLint: true,
  extends: [
    'recommended/esnext',
    'recommended/esnext/style-guide',
    'recommended/node',
    'recommended/node/style-guide',
    'recommended/react-native',
    'recommended/react-native/style-guide'
  ],
  rules: {
    'arrow-parens': ['error', 'always'],
    'curly': ['error', 'all'],
    'indent': ['error', 2, {
      SwitchCase: 1,
    }],
    'no-console': 'warn',
    'no-duplicate-imports': 'off',
    'no-extra-parens': 'off',
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true,
    }],
    'sort-imports': 'off',
    'space-before-function-paren': 'off',
    'template-curly-spacing': 'off',
    'react/jsx-indent': [2, 2],
    'react/jsx-curly-spacing': [2, 'never'],
    'react-native/no-inline-styles': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-sort-props': 'off',
    'react/no-unused-prop-types': 'off',
  },
  globals: {
    Position: true,
    ReactClass: true,
  }
};
