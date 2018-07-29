module.exports = {
  extends: [
    "airbnb",
    "plugin:jest/recommended",
    "prettier",
    "prettier/react"
  ],
  plugins: ["prettier", "jest"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all"
      }
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": [
      1,
      {
        devDependencies: [
          '*.js',
          'src/**/*.story.js',
          'src/**/*.spec.js'
        ]
      }
    ],
    "import/prefer-default-export": 0,
    "react/react-in-jsx-scope": 0,
    "jsx-a11y/anchor-is-valid": 0
  },
  parser: "babel-eslint",
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 6,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
      classes: true,
      experimentalObjectRestSpread: true
    }
  },
  globals: {
    mount: true,
    shallow: true,
    render: true,
    create: true,
    axe: true,
    renderToHtml: true,
    describe: true,
    beforeEach: true,
    inject: true,
    it: true,
    test: true,
    expect: true,
    afterEach: true,
    renderer: true
  },
  env: {
    browser: true,
    es6: true,
    "jest/globals": true
  }
};
