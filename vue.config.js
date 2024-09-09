module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
};
