import { sassPlugin } from 'esbuild-sass-plugin';

module.exports = {
    treeshake: true,
    splitting: true,
    esbuildPlugins: [sassPlugin({
        filter: /\.scss$/,
        type: 'local-css'
    })]
}
