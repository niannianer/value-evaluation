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

  }
});