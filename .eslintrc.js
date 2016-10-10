module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "linebreak-style": ["error", "windows"],
      "semi": ["error", "never"],
      "react/forbid-prop-types": ["warn"],
    },
    "env": {
      "browser": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        }
    },
};
