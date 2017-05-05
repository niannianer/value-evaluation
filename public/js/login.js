/**
 * Created by hekk on 2017/4/27.
 */
var vm = new Vue({
  el: '#login',
  data: function () {
    return {
      account: '',
      password: '',
      hintInfo: '',
      hint: false
    }

  },
  created: function () {

  },
  methods: {
    doLogin: function () {
      var data = {
        account: this.account,
        password: this.password
      };
      var that = this;
      $api.post('/user/login', data)
              .then(function (res) {
                if (res.code == 200) {
                  if (res.redirectUrl) {
                    location.replace(res.redirectUrl);
                  } else if (sessionStorage.getItem('redirectUrl')) {
                    location.replace(decodeURIComponent(sessionStorage.getItem('redirectUrl')));
                  } else {
                    var data = res.data;
                    if (data.type == 2) {
                      location.href = '/questionnaire-url';
                    }
                  }
                }
                if (res.code == 1) {
                  that.hintInfo = '用户名或密码错误';
                  that.hint = true;
                }
              })

    }
  }
})