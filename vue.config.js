module.exports = {
  pluginOptions: {
    svgSprite: {
        dir: './src/assets/svg/ui',
        test: /\.(svg)(\?.*)?$/,
        loaderOptions: {
            extract: true, 
            spriteFilename: 'ui.svg'
        },
        pluginOptions: {
            plainSprite: true
        }    
    }    
  },
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
}
