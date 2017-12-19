var path = require('path');

module.exports = {
    entry : './src/ffshelf.js' ,
    output : {
        filename : 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
    } ,
    resolve: {
    }
};