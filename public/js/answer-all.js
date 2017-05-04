/**
 * Created by hekk on 2017/5/4.
 */
console.log(result);
var vm = new Vue({
  el: '#answer-all',
  data: function () {
    return {
      users: result,
      answer_list: [],
      selected: 0
    }

  },
  methods: {
    changeUser: function () {
      var id = this.selected;
      var that = this;
      $api.get('/answer/get/' + id).then(function (data) {
        console.log(data);
        if (data.code == 200) {
          that.answer_list = data.data;
        }
      })
    }
  },
  filters: {
    typeGrade: function (type) {
      type = parseInt(type);
      switch (type) {
        case 1:
          return '本人自评';
          break;
        case 2:
          return '上级测评';
          break;
        case 3:
          return '平级测评';
          break;
        case 4:
          return '下级测评';
          break;
        default:
          return '本人自评';

      }
    }

  }
});