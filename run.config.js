module.exports = {
  apps : [{
    name        : "www",
    script      : "bin/www",
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
      "NODE_ENV": "production"
    },
    ignore_watch:['node_modules','views','public']
  }]
}