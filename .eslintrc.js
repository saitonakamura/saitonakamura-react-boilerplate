module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "linebreak-style": ["error", "windows"],
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
