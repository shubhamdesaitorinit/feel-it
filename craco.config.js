const path = require("path");

module.exports = {
  devServer: {
    port: 3000,
  },
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "src/"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@components": path.resolve(__dirname, "src/components"),
      "@supabaseClient": path.resolve(__dirname, "src/supabaseClient"),
      "@shared-ui-components": path.resolve(
        __dirname,
        "src/components/shared-ui-components"
      ),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@shared-layouts": path.resolve(
        __dirname,
        "src/components/shared-layouts"
      ),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@shared-containers": path.resolve(
        __dirname,
        "src/components/shared-containers"
      ),
      "@shared-components": path.resolve(
        __dirname,
        "src/components/shared-components"
      ),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@context": path.resolve(__dirname, "src/context"),
      "@reducers": path.resolve(__dirname, "src/reducers"),
      "@controllers": path.resolve(__dirname, "src/controllers"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@ducks": path.resolve(__dirname, "src/ducks"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@src(.*)$": "<rootDir>/src$1",
        "^@utils(.*)$": "<rootDir>/src/utils$1",
        "^@images(.*)$": "<rootDir>/src/assets/images",
        "^@fonts(.*)$": "<rootDir>/src/assets/fonts",
        "^@constants(.*)$": "<rootDir>/src/constants",
        "^@components(.*)$": "<rootDir>/src/components",
        "^@shared-components(.*)$": "<rootDir>/src/shared-components",
        "^@shared-layouts(.*)$": "<rootDir>/src/components/shared-layouts",
        "^@pages(.*)$": "<rootDir>/src/pages",
        "^@shared-containers(.*)$":
          "<rootDir>/src/components/shared-containers",
        "^@hooks(.*)$": "<rootDir>/src/hooks",
        "^@context(.*)$": "<rootDir>/src/context",
        "^@reducers(.*)$": "<rootDir>/src/reducers",
        "^@routes(.*)$": "<rootDir>/src/routes",
        "^@controllers(.*)$": "<rootDir>/src/controllers",
        "^@ducks(.*)$": "<rootDir>/src/ducks",
      },
    },
  },
};
