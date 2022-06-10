//post请求
const http = {
  post: function (url, data, callback) {
    var xmlhttp = new XMLHttpRequest();
    var obj = data;
    xmlhttp.open("POST", url, true);
    xmlhttp.send(JSON.stringify(obj)); // 要发送的参数，要转化为json字符串发送给后端，后端就会接受到json对象
    // readyState == 4 为请求完成，status == 200为请求陈宫返回的状态
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        // console.log(xmlhttp.responseText);
        callback(xmlhttp.responseText);
      }
    };
  },
};
http.post("http://www.baidu.com/", {}, function (data) {
  console.log(data);
});
