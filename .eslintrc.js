module.exports = {
  "installedESLint": true,
  "extends": [
    "recommended/esnext",
    "recommended/esnext/style-guide",
    "recommended/node",
    "recommended/node/style-guide",
    "recommended/react-native",
    "recommended/react-native/style-guide"
  ],
  "rules": {
    "indent": ["error", 2],
    "react/jsx-indent": [2, 2],
    "react/jsx-curly-spacing": [2, "never"],
    'react-native/no-inline-styles': 'off',
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true,
    }]
  }
};
