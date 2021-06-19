const path = require('path');

module.exports = {
  apps: ['streams'].map((name) => ({
    name,
    cwd: path.resolve(__dirname, `../src`),
    script: './index.ts',
    watch: ['.', '../src/shared', '../node_modules'],
    instance_var: 'INSTANCE_ID',
    env: {
      NODE_ENV: 'development',
      NODE_PATH: path.resolve(__dirname, './node_modules'),
    },
  })),
};
