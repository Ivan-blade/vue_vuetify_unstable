module.exports = {
    devServer: {
        proxy: {
            'api': {
                target: 'http://www.ivan-blade.cn:9090',
                changeOrigin: false,
                pathRewrite: {
                    '/api': '/'
                }
            }
        }
    }
}