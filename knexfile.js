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
      database: 'my_db',
      user:     'username',
      password: 'password',
      charset:'utf8'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password',
      charset:'utf8'
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
