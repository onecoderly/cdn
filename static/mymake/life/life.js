(function() {
	$("[data-fancybox]").fancybox({
    thumbs: {
      autoStart: true, //缩略图
    },
  }); 
  $("[data-fancybox]").fancybox({
    protect: true,
  });
  $('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    },
    vimeo : {
        color : 'f00'
    }
});
  $('.row a').hover(function() {
    $('.row a').attr('href','javascript:;');
  })
  function playvideo(url) {
    $('.row a').attr('href', url);
  }
  let lgh = $('.lightning li').length;

  $('.lightning li').each(function(i) {
      $(this).css({
          left: i * (100/lgh) + '%',
          bottom: randomNum(-20, 10) + '%',
          animationDuration: randomNum(1, 5) + 's'
      });
  });
  function randomNum(max, min) {
      var num = Math.floor(Math.random() * (max-min+1) + min);
      return num;
  }
  let flag = true
  let j = 11

  $('.container-love').hover(function() {
    if(flag) {
      if ($('.container-love').height() >= 1000) {
        for (let i = 11; i <= $('.love-item').length; i++) {
          $('.love-item:nth-child(' + i + ')').hide()
        }
      } 
    }
    flag = false
  })
  
  $(document).on("touchstart",function(){
    if(flag) {
      if ($('.container-love').height() >= 1000) {
        for (let i = 11; i <= $('.love-item').length; i++) {
          $('.love-item:nth-child(' + i + ')').hide()
        }
      } 
    }
    flag = false
  }).on("touchmove",function(event){
      event.preventDefault();
  })
  
  function expand(selector) {
    let len = j + 9
    if(len <= $(selector).length) {
      for (j; j <= len; j++) {
        $(selector + ':nth-child(' + j + ')').show()
      } 
    } else {
      for (j; j <= $(selector).length; j++) {
        $(selector + ':nth-child(' + j + ')').show()
      } 
      layer.msg('图片已全部加载', {icon: 1,skin: 'layui-layer-lan'},)
    }
  }

  let x = document.createElement('div');
  Object.defineProperty(x, 'id', {
    get:function(){
      window.location.href='https://coderblue.cn'
      alert('Console is opened');
    } 
  });
  console.log(x);
}())