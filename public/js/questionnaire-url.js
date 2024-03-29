/**
 * Created by hekk on 2017/5/4.
 */
var vm = new Vue({
  el: '#questionnaire-url',
  data: function () {
    return {
      list: result,
      showToast: false,
      toastText: ''
    }


  },
  created: function () {
    this.list.map(function (item) {
      item.url = location.origin + '/questionnaire/' + item.account + '/' + item.sign;
    });

  },
  filters: {
    upperCase: function (letter) {
      letter = letter || 'A';
      return letter[0].toUpperCase();

    }
  },
  methods: {
    isDiff: function (index) {
      if (index == 0) {
        return true;
      }
      return this.list[index].account[0] != this.list[index - 1].account[0];

    },
    copy: function (text) {
      var dom = document.querySelector('#copy');
      dom.setAttribute('data-clipboard-text', text);
      dom.click();

    }
  },
  mounted: function () {
    var that = this;
    var clipboard = new Clipboard('#copy');
    clipboard.on('success', function (e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
      that.showToast = true;
      that.toastText = '已复制成功';
      setTimeout(function () {
        that.showToast = false;
      }, 3000);
      e.clearSelection();
    });

    clipboard.on('error', function (e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
      that.showToast = true;
      that.toastText = '复制失败';
      setTimeout(function () {
        that.showToast = false;
      }, 3000);
    });

  }
})