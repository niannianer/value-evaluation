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
      $api.post('/user/login', data)
              .then(function (res) {
                console.log(res);
                if (res.code == 200) {
                  if (res.redirectUrl) {
                    location.replace(res.redirectUrl);
                  } else if (sessionStorage.getItem('redirectUrl')) {
                    location.replace(decodeURIComponent(sessionStorage.getItem('redirectUrl')));
                  }
                }
              })

    }
  }
})