const path = require('path');

module.exports = {
    experimental: {
        turbo: true, // Turbopack 활성화
    },
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
        return config;
    },
};
