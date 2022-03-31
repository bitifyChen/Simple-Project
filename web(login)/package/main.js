//宣告
let nameCheckbox = document.querySelector("#saveName");
let userName = document.querySelector("#userName");
let userPassword = document.querySelector("#userPassword");
let form = document.querySelector("#mainForm");

//啟動讀取是否有儲存之帳號
window.onload = function () {
  if (getCookie("name")) {
    userName.value = getCookie("name");
    nameCheckbox.checked = true;
  }
};

//表單送出前
form.addEventListener("submit", function (e) {
  e.preventDefault();
  createCookie();
  form.submit();
});

//儲存至cookie
function createCookie() {
  if (nameCheckbox.checked == true) {
    setCookie("name", userName.value);
  } else {
    delCookie("name");
  }
}

//Cookie 操作
function setCookie(name, value) {
  //set cookie
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
  //get cookie
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
}

function delCookie(name) {
  //delete cookie
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}
