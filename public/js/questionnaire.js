/**
 * Created by hekk on 2017/5/2.
 */
console.log(result)
var vm = new Vue({
  el: '#questionnaire',
  data: function () {
    return {
      question_list: result.question_list
    }

  },
  created: function () {
    console.log(this.$data);
  },
  methods: {}
});