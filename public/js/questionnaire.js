/**
 * Created by hekk on 2017/5/2.
 */
var timer = null;
var vm = new Vue({
  el: '#questionnaire',
  data: function () {
    return {
      question_list: result.question_list,
      btn_submit: false,
      user_name: result.user.name,
      answer: {
        questionnaire_id: result.questionnaire.id,
        type: ''

      }

    }

  },
  created: function () {
    var answer_to = result.user.id;
    var that = this;
    $api.get('/questionnaire/' + answer_to)
            .then(function (data) {
              if (data.code == 200) {
                that.question_list = data.data.result;
                that.answer.type = data.data.type;
                that.checkSubmit();
              }
            })
  },
  methods: {
    setType: function (type) {
      this.answer.type = type;
      this.checkSubmit();
    },
    setItemScore: function (question, score) {
      this.$set(question, 'score', score);
      if (score >= question.low_line && score <= question.high_line) {
        this.$set(question, 'reason', '');
      }
      this.checkSubmit();
    },
    checkSubmit: function () {
      clearTimeout(timer);
      var that = this;
      timer = setTimeout(function () {
//        未选择评价类型
        if (!that.answer.type) {
          that.btn_submit = false;
          return false;
        }
        var submit = true;
        that.question_list.map(function (el) {
//          还未评分
          if (!el.score) {
            submit = false;
            return;
          }
//          评分过低或过高 ，没写原因
          if (el.score < el.low_line || el.score > el.high_line) {
            if (!el.reason) {
              submit = false;
            }

          }
        });
        that.btn_submit = submit;

      }, 200)
    },
    submitAnswer: function () {
      var answer = this.answer;
      answer.answer_to = result.user.id;
      answer.result = this.question_list;
      console.log(answer);
      $api.post('/answer/evaluation', answer)
              .then(function (data) {
                if (data.code != 200) {
                  console.log('提交失败，稍后再试');
                } else {
                  location.href = '/questionnaire-result';
                }

              })
              .catch(function () {
                console.log('提交失败，稍后再试');
              })

    }
  }
});