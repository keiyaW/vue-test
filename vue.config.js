module.exports = {
    assetsDir: 'static',
    lintOnSave: false,
    devServer: {
        proxy: {
            '^/api/': {
                target: 'http://localhost:9000/demodb',
                changeOrigin: true
            }
        }
    }
}