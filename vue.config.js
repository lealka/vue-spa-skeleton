// Also See: https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-plugin
module.exports = {
    transpileDependencies: ['vuetify'],
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = 'The App Title';
            return args;
        });
    }
};
