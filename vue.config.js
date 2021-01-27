module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                @import "@/scss/main.scss";
                @import "@/scss/grid.min.scss";
                `
            }
        },
    },
    publicPath: ''
}