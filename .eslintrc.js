module.exports = {
    extends: [
        'airbnb-base',
        "plugin:react/recommended"
    ],
    rules: {
        indent: [1, 4],
        'react/jsx-indent': [1, 4],
        'max-len': [0],
        'no-underscore-dangle': [0]
    },
    env: {
        jest: true,
    }
};
