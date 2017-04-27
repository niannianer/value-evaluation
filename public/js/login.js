/**
 * Created by hekk on 2017/4/27.
 */
var vm = new Vue({
  el: '#login',
  data: function () {
    return {
      account: '',
      password: ''
    }

  },
  created: function () {

  },
  methods: {
    doLogin: function () {
      console.log(this.$data);
      var data = {
        account: this.account,
        password: this.password
      };
      $api.post('/users/login', data)
              .then(function (res) {
                console.log(res);
              })

    }
  }
})