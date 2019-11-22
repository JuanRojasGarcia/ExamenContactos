
module.exports = {
    outputDir: '../wwwroot/',
    filenameHashing: false,
    configureWebpack: (config) => {
        config.devtool = 'source-map'
    },

}