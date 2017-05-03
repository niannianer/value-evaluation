module.exports = {
  apps : [{
    name        : "dev",
    script      : "bin/www",
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
      "NODE_ENV": "production"
    },
    ignore_watch:['node_modules','views','public']
  },
    {
      name        : "production",
      script      : "bin/www",
      env: {
        "NODE_ENV": "production",
      }
    }]
};