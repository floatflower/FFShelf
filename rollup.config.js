import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import vue from 'rollup-plugin-vue'
import packageInfo from './package.json'

console.log("rollup..");

function baseConfig () {
    return {
        output: {
            format: 'umd'
        },
        plugins: [
            resolve({
                jsnext: true,
                main: true,
                browser: true
            }),
            commonjs({
                extensions: [
                    '.js',
                    '.jsx',
                    '.json'
                ]
            })
        ],
        banner: `/*!\n * Name: ${packageInfo.name}\n * Version: ${packageInfo.version}\n * Author: ${packageInfo.author}\n */`,
        sourcemap: true,
    }
}

let config = baseConfig();
config.input = 'src/ffshelf.js';
config.output.file = 'dist/ffshelf.js';
config.output.name = 'FFShelf';
config.plugins.push(
    vue({
        autoStyles: false,
        css: true
    }),
    babel()
);

let configMin = baseConfig();
configMin.input = 'src/ffshelf.js';
configMin.output.file = 'dist/ffshelf.min.js';
configMin.output.name = 'FFShelf';
configMin.plugins.push(
    vue({
        autoStyles: false,
        css: true,
    }),
    babel(),
    uglify({
        output: {
            comments: /^!/
        }
    })
);


module.exports = [
  config,
  configMin
];