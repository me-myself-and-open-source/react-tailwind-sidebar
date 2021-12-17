const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const path = require("path");

module.exports = function override(config, env) {
    config.resolve.plugins.forEach(plugin => {
        if (plugin instanceof ModuleScopePlugin) {
            plugin.allowedFiles.add(path.resolve("./tailwind.config.js"));
        }
    });

    return config;
};