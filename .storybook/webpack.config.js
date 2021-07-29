module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.jsx?$/,
    include: require("path").resolve("./"), // eslint-disable-line global-require
    exclude: /(node_modules|dist)/,
    loader: "babel-loader"
  })
  config.module.rules.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: "source-map-loader",
    enforce: "pre"
  })

  config.module.rules = config.module.rules.filter(rule =>
      !(
        rule.use &&
        rule.use.length &&
        rule.use.find(({ loader }) => loader === "babel-loader")
      )
  )

  config.plugins = config.plugins.filter(({ constructor }) => constructor.name !== "ProgressPlugin")

  return config
};
