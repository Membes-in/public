module.exports = {
  apps: [
    {
      name: 'membes-frontend',
      cwd: './frontend',
      script: './node_modules/.bin/next',
      args: 'start',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
    {
      name: 'membes-backend',
      cwd: './backend',
      script: 'server.js',
      env_production: {
        NODE_ENV: 'production',
        PORT: 8080,
      },
    },
  ],
};
