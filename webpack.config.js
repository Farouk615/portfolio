// webpack.config.js
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './js/index.js', // Your main JavaScript file
    output: {
        filename: 'bundle.js', // Output bundle filename
        path: path.resolve(__dirname, 'dist') // Output directory
    },
    plugins: [
        new Dotenv(),
        // Other plugins...
    ],
};
