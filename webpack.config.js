const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
 
module.exports = ({ mode }) => {
    return {
        mode,
        plugins: [
            new CopyWebpackPlugin([
                {
                    context: 'node_modules/@webcomponents/webcomponentsjs',
                    from: '**/*.js',
                    to: 'webcomponents'
                }
            ])
        ],
        output: {
          filename: './bundle.js',
        },
        devtool: mode === 'development' ? 'source-map' : 'none'
    };
};
