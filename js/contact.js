var reg = /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/;
var inputCode = "",
  checkCode = "",
  expressValue = "",
  cvs = { w: 100, h: 40, fontSize: 24, str: "+-", line: 3 };
function rInt(max) {
  return Math.floor((Math.random() * 100000) % max);
}
function rCode() {
  let a = rInt(100);
  let b = rInt(10);
  let op = cvs.str.charAt(rInt(cvs.str.length));
  let code = `${a}${op}${b}=`;
  checkCode = code;
  expressValue = eval(code.substr(0, code.length - 1));
  return code;
}
function rColor() {
  let a = ((Math.random() * 5 + 5) / 10).toFixed(2);
  return `rgba(${rInt(256)}, ${rInt(256)}, ${rInt(256)}, ${a})`;
}
function drawCode(domCvs) {
  let checkCode = rCode();
  cvs.w = 10 + cvs.fontSize * checkCode.length;
  if (domCvs !== null && domCvs.getContext && domCvs.getContext("2d")) {
    domCvs.style.width = cvs.w;
    domCvs.setAttribute("width", cvs.w);
    domCvs.setAttribute("height", cvs.h);
    let pen = domCvs.getContext("2d");
    pen.fillStyle = "#eee";
    pen.fillRect(0, 0, cvs.w, cvs.h);
    pen.textBaseline = "middle";
    for (let i = 0; i < checkCode.length; i++) {
      pen.fillStyle = rColor();
      pen.font = `bold ${cvs.fontSize}px Microsoft YaHei`;
      pen.fillText(checkCode.charAt(i), 10 + cvs.fontSize * i, 17 + rInt(10));
    }
    for (let i = 0; i < cvs.line; i++) {
      pen.moveTo(rInt(cvs.w) / 2, rInt(cvs.h));
      pen.lineTo(rInt(cvs.w), rInt(cvs.h));
      pen.strokeStyle = rColor();
      pen.lineWidth = "2";
      pen.stroke();
    }
  } else {
    myToast(
      "Captcha format is not supported. Please update or change browser and try again"
    );
  }
}
function checkMe() {
  inputCode = $("input[name=captcha]").val();
  if (inputCode) {
    if (eval(inputCode) === eval(expressValue)) {
      drawCode(s);
      myToast("submit successfully");
      $("input[name=captcha]").val("");
      $(".comment").val("");
    } else {
      myToast("Please enter the correct captcha");
    }
  } else {
    myToast("Please enter captcha");
  }
}
$("#canvas").click(function () {
  var s = $("#canvas").get(0);
  drawCode(s);
});
var s = $("#canvas").get(0);
drawCode(s);
$(".submit").click(function () {
  var name = $("input[name=name]").val();
  var mobile = $("input[name=mobile]").val();
  var email = $("input[name=email]").val();
  var comment = $(".comment").val();
  var captcha = $("input[name=captcha]").val();
  if (name == "") {
    myToast("Please enter your name");
    return false;
  }
  if (mobile == "") {
    myToast("Please enter your mobile number");
    return false;
  }
  if (email == "") {
    myToast("Please enter your email");
    return false;
  }
  if (!reg.test(email)) {
    myToast("Please enter the correct email address");
    return false;
  }
  if (comment == "") {
    myToast("Please enter comment");
    return false;
  }
  if (captcha == "") {
    myToast("Please enter captcha");
    return false;
  }
  checkMe();
});
