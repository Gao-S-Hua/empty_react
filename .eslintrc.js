module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "linebreak-style": "off",
    "func-names": 0,
    "react/jsx-equals-spacing": "off",
    "padded-blocks": 0,
    "max-len": [
      "warn",
      200,
      4,
      {
        "comments": 150
      }
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "react/jsx-indent": [
      2,
      2
    ],
    "semi": 0,
    "react/sort-comp": 0,
    "react/prop-types": 0,
    "react/prefer-es6-class": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-filename-extension": 0,
    "no-return-assign": 0,
    "react/no-multi-comp": 0,
    "array-callback-return": 0,
    "no-underscore-dangle": 0,
    "no-bitwise": [
      "error",
      {
        "allow": [
          "~"
        ]
      }
    ],
    "no-plusplus": 1,
    "no-unused-expressions": [
      "warn",
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/img-has-alt": 0,
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "none"
      }
    ],
    "react/no-unused-state": [
      "warn"
    ],
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "object-shorthand": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/no-array-index-key": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "import/extensions": 0,
    "no-debugger": "off",
    "react/jsx-closing-tag-location": 0,
    "import/prefer-default-export": 0,
    "react/forbid-prop-types": 1,
    "class-methods-use-this": 0,
    "consistent-return": 1,
    "import/first": 1,
    "no-console":"off",
    "prefer-destructuring": [
      "warn"
    ],
    "object-curly-newline": [
      "error",
      {
        "minProperties": 5,
        "consistent": true,
        "multiline":true
      }
    ]
  },
};
