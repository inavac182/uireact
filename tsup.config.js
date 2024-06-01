import { sassPlugin } from 'esbuild-sass-plugin';

module.exports = {
    treeshake: true,
    splitting: true,
    esbuildPlugins: [sassPlugin({
        filter: /\.module\.scss$/,
        type: 'local-css'
    })]
}
