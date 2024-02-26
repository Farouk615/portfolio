// webpack.config.js
const path = require('path');

module.exports = {
    entry: './js/index.js', // Your main JavaScript file
    output: {
        filename: 'bundle.js', // Output bundle filename
        path: path.resolve(__dirname, 'dist') // Output directory
    },
};
