(function () {

  var api = {};

  function $query(data) {
    var str = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        if (typeof data[key] != 'object') {
          str.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        } else {
          str.push(encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(data[key])));
        }
      }
    }
    return str.join('&');
  };
  api.get = function (path, params) {
    var t = new Date().getTime();
    var url = '/api' + path + '?t=' + t;
    if (params) {
      url = url + '&' + $query(params);
    }
    return fetch(url, {
      method: 'get',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status == 200) {
        return response.json()
      }
      if (response.status == 401) {
        return location.replace('/login');
      }
      return {};
    }).catch(err => {
      console.error('error,--->', err);
    });
  };
  api.post = function (path, data) {
    var t = new Date().getTime();
    var url = '/api' + path + '?t=' + t;
    return fetch(url, {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (response.status == 200) {
        return response.json()
      }
      if (response.status == 401) {
        return location.replace('/login');
      }
      return {};
    }).catch(err => {
      console.error('error,--->', err);
    });

  }
  window.$api = api;

})();