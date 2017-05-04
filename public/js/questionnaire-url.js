/**
 * Created by hekk on 2017/5/4.
 */
var vm = new Vue({
  el: '#questionnaire-url',
  data: function () {
    return {
      list: result,
      origin: location.origin
    }


  },
  created: function () {
    this.list.map(function (item) {
      item.url = location.origin + '/questionnaire/' + item.account + '/' + item.sign;
    });

  },
  mounted:function () {
    console.log(12345);
    new Clipboard('.copy');
  }
})