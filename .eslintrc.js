module.exports = {
    extends: ["eslint:recommended", "prettier"],
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
        allowImportExportEverywhere: false,
        ecmaFeatures: {
            globalReturn: false,
        }
    },
    env: {
        node: true,
        es6: true,
        mocha: true
    },
    plugins: ["prettier"],
    rules: {
        'import/prefer-default-export': 'off',
        'unicorn/prefer-type-error': 'off',
        'no-console': 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: false,
                bracketSpacing: false,
                printWidth: 100,
                endOfLine: "auto",
                tabWidth: 4
            }
        ]
    }
};