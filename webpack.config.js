var path = require('path');
var webpack = require("webpack");

/*
    To ensure that our JSX and ES6 code works in any environment,
    we will use a transpiler called Babel to convert our code into ES5. 
    required NPM packages: 
        babel-core 
        babel-preset-env
        babel-preset-react
    
    babel-core is the transpiling engine itself.
    babel-preset-env and babel-preset-react are configurations
    that tell the core transpiler how to interpret ES6 and JSX, respectively.
*/

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

var prodPlugins = [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    })
];

plugins = plugins.concat(
    process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
)

module.exports = {
    entry: './client/index.jsx',
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"),
        filename: './bundle.js'
    },
    plugins: plugins,
    module: {
        rules: [
            {
                test: [/\.jsx?$/], //specifies file types to transpile
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['env', 'react'] //tells babel what syntaxes to translate
                    }
                },
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
};
