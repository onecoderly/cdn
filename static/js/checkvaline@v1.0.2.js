 $(document).ready(function () {
  //检测是否有评论框
  if ($("#vcomments").html()) {
    //定义变量
    var c_name = $('#vcomments input[name="nick"]');
    var c_mail = $('#vcomments input[type="email"]');
    var c_text = $('#veditor');
    var mailzz = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    //placeholder
    var c_placeholder = c_text.attr('placeholder');
    //隐藏
    $(".vcontrol .text-right button").hide();
    $(".vcontrol .text-right").prepend('<span class="submit_f vbtn">回复</span>');
    $('body').on('click', '.vsubmit.vbtn', function () {
      if (nullpd(c_name.val())) {
        layer.msg('请输入昵称', {
          time: 2000,
          icon: 2
        })
        return false;
      }
      if (!mailzz.test(c_mail.val())) {
        layer.msg('请输入合法邮箱', {
          time: 2000,
          icon: 2
        })
        return false;
      }
      if (!c_text.val()) {
        layer.msg('评论不能为空', {
          time: 2000,
          icon: 2
        })
        return false;
      }
      $('.vsubmit').click();

    });
    //判断空
    function nullpd(str) {
      if (str == "" || str == null || str == undefined) {
        return true;
      } else {
        return false;
      }
    }
  }
});