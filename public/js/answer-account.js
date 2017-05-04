/**
 * Created by hekk on 2017/5/4.
 */
console.log(result);
var vm = new Vue({
  el: '#answer-account',
  data: function () {
    return {
      answer_list: result.answer_list,
      user_name: result.user.name,
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