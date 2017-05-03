// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host:'127.0.0.1',
      user:'root',
      password:'',
      database:'mf_test',
      charset:'utf8'
    },pool: {
      min: 2,
      max: 10
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      host:'127.0.0.1',
      user:'root',
      password:'',
      database:'mf_stage',
      charset:'utf8'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host:'127.0.0.1',
      user:'root',
      password:'',
      database:'mf_production',
      charset:'utf8'
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
