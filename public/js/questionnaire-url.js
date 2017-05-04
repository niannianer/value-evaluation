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
  methods: {
    copy: function (text) {
      var dom = document.querySelector('#copy');
      dom.setAttribute('data-clipboard-text', text);
      dom.click();

    }
  },
  mounted: function () {
    var clipboard = new Clipboard('#copy');
    clipboard.on('success', function (e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
      alert('已复制成功')

      e.clearSelection();
    });

    clipboard.on('error', function (e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
      alert('复制失败');
    });

  }
})