(function (i, s, o, g, r, a, m) {
  i["DaoVoiceObject"] = r;
  i[r] = i[r] || function () {
	(i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o), m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  a.charset = "utf-8";
  m.parentNode.insertBefore(a, m)
})(window, document, "script", ('https:' == document.location.protocol ? 'https:' : 'http:') +
  "//widget.daovoice.io/widget/a690aa21.js", "daovoice")
// 调用下面的 JavaScript 与注册用户沟通
daovoice('init', {
  app_id: "a690aa21",
  user_id: "NO_89757", // 必填: 该用户在您系统上的唯一ID
  email: "daovoice@example.com", // 选填:  该用户在您系统上的主邮箱
  name: "coder", // 选填: 用户名
  signed_up: 1449821660 // 选填: 用户的注册时间，用Unix时间戳表示
});
daovoice('update');

daovoice('init', {
  app_id: "a690aa21"
});
daovoice('update');
