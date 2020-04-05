  //获取textarea对象
  let text = document.getElementById("text");
  let text1 = document.getElementById("text1");
  let text2 = document.getElementById("text2");
  let text3 = document.getElementById("text3");
  let text4 = document.getElementById("text4");
  //要输出的内容
  let str1 = "\t先前小杨夸下海口，回小朋友的话，是要给你篇文章的💌，我竟然还是说着字数~520💖。现在回想起来，还真有点难掐字了，当时就想着要写肯定要有个好的字数嘛，哈哈。"
  let str2 =
    "\t后来，心里也总是惦记着这事，总是想着要写点东西的必要了，又迟于怎么个写法。说着情话，我又怕你说我不真诚💘。不管怎么的，那我就说说最近小杨的折腾吧。如果非要说，想遇见你都是有预谋的话，我承认确实如此。我从二月下旬就萌生了想给你折点东西，去见你的冲动了。后面的话，我就在物色需要准备什么礼物呀。想法还很多的呢，特别在看到B站的折纸后，我彻底心动了。心里就觉得，只要你是喜欢的，那其他就没问题了。尽管我也不会折，但我可以学嘛。我便立即买了，还特意问了下你喜欢什么颜色的，我其实是有点担心到时候你不太中的。"
  let str3 =
    "\t小杨待材料到手后，就秉承着这种意志，正式开工了。可真没想到呢，从裁纸、折花再到花束乃至最后的满天星，竟折腾了我大半个月的晚上😂。期间，我刷过的剧，都有点数不清了。开始嘛，小杨还是缺乏经验，每次折成的都感觉怪怪的，如果非要形容那就只能是残花败柳了。面对这种不堪入目的，你都说了我肯定容不下眼里的，这可让我好生折腾，一张张翻来覆去的，庆幸的是没有被我捻破过。等快要完工了嘛，我就需要好多细铁丝，不想太费力的一根根去折。我便拿起了我妈心爱的大剪刀✂，这一声声咔嚓咔嚓的，好生快活，我都快佩服我自己了。奈何自己还是棋差一招，没曾想我妈这般重视它的，这么，我就被数落了一番。不过为了革命的成功，还是值了。等铁丝都剪好了后，我就正式的组装了，在包装过程中我就一直有个疑问，为什么都是同样材料。他的怎么就这么大呢，我的怎么就像个阉割版的。于是乎，我就又去理理材料，惊喜的发现原来这里还有两张我没裁的，难怪哦。可是突然心里就有着徐徐悲凉感了，小杨就这样又开始了一段奇妙的旅途🎈。哈哈，不过等最后看到💐成型了的，心里还是很骄傲的。但是那个花的姿态，我是真没辙了，不准笑话。我拼命的想摆弄成百花齐放，可是这小手，不太听话呢。我就屈服于现实了，生怕吾滴小朋友还没看到，就半路夭折了。那样，小杨会哭死的😭"
  let str4 =
    "\t这之后，我又想着折个玫瑰花🌹。看着那些一个个视频呀，好看的很。我又心动了，但我没料到，我还真应了那话。一看就会，一做就废😶……。看着那些一张张被我蹂躏的面目全非的纸张，我放弃了。现在都还想不明白，明明折着折着就剩这么一丢丢大了，是怎么想到能够再三番五次的扭曲它的。这次可不能笑我的，绝对不是我憨憨，虽然好像大概我就是的呢~。"
  let str5 =
    "\t这次来见小朋友嘛，小杨心里还是很激动的，但是又很紧张。毕竟是第一次见面的嘛，万一我这两百斤的灵魂惊到小朋友了呢，哈哈。我还脑补过很多见面情景的（别打我哦，当然小朋友是很温柔的啦😊），可是我知道，见面后我肯定就乖乖地怂了~😂。哎，这都不是重点了嘛。还是希望这次给小朋友你准备的小礼物，希望能满意哦。还有嘛，你是小杨唯一的小朋友，以后不准再叫我找其他小姐姐了哈😟。小杨会很乖的，小杨要做的就是越来越喜欢小朋友、宠着吾滴小朋友。小朋友也要珍惜小杨的呀，毕竟我这么好（我也要自恋下的嘛，不然怎么指望哪晚能听到吾滴小祖宗亲口对我说：我爱你😘，亲爱的小杨，晚安哦~）。除此之外，小杨很想跟你道个歉，让你久等啦。这几天接二连三的下雨，我真的好绝望的。都后悔自己不快点准备好，总想着多折腾点名堂，就盼着你能喜欢的。最后最重要的就是，我希望我们会越来越好的，我还想有一天我能够亲手捧着鲜花给你，说着：小朋友，我喜欢你，你就是我余生的风景。(当然这次我也非常非常想，就是怕你不好带回家😂。)"

  let pos = 0;

  window.onload = function () {
    $('.pick,button').hide()
    // addMain()
  }
  let count = 0
  let imgSize = 0
  let selector = '.make-flower>img'

  function next() {
    $(selector)[count].hidden = true
    if ($(selector)[count + 1]) {
      $(selector)[count + 1].hidden = false
      scrollToEnd()
      count = count + 1
    } else {
      $(selector)[count].hidden = true
      count = 0
      $(selector)[count].hidden = false
    }
  }

  function pre() {
    if (imgSize === 0) {
      imgSize = $(selector).length
    }
    
    $(selector)[count].hidden = true
    if ($(selector)[count - 1]) {
      $(selector)[count - 1].hidden = false
      count = count - 1
    } else {
      $(selector)[count].hidden = true
      count = imgSize - 1
      $(selector)[imgSize - 1].hidden = false
      scrollToEnd()
    }
  }

  function showSpan(selector, selectorNext, selectorThen,
    selectorThen1, selectorThen2, selectorFinal, showtime) {
    setTimeout(() => {
      scrollToEnd()
      $(selector).show()
      setTimeout(() => {
        scrollToEnd()
        $(selectorNext).show()
        setTimeout(() => {
          $(selectorThen).show()
          if (selectorThen1 !== null) {
            setTimeout(() => {
              // 有个小问题，执行两次的，会跳两下
              scrollToEnd()
              $(selectorThen1).show()
              if (selectorThen1 !== null) {
                setTimeout(() => {
                  scrollToEnd()
                  $(selectorThen2).show()
                  if (selectorThen1 !== null) {
                    setTimeout(() => {
                      scrollToEnd()
                      $(selectorFinal).show()
                    }, showtime);
                  }
                }, showtime);
              }
            }, showtime);
          }
        }, showtime);
      }, showtime);
    }, showtime);
  }

  function scrollToEnd() { //滚动到底部
    var h = $(document).height() - $(window).height();
    $(document).scrollTop(h);
  }
  //利用递归和setTimeout()实现文字输出
  function showZero() {
    //判断是否到达结尾.如果是则一秒后再来一遍.
    uploadMusic.play()
    $('#container').show()
    $('#text').show()
    if (pos++ < str1.length - 1) {
      text.value = str1.substring(0, pos) + "|";
      setTimeout("showZero()", 50);
    } else if (pos++ === str1.length || pos++ === str1.length - 1) {
      text.value = str1.substring(0, pos);
      setTimeout("showZero()", 50);
    } else {
      pos = 0
      setTimeout(() => {
        const val = $(".first").nextUntil("textarea").toArray()
        setTimeout(() => {
          $(val[0]).show()
          showSpan(val[1], val[2], val[3], null, null, null, 1000)
        }, 1000);
      }, 1000);
    }
  }

  // 可不要眨眼哦
  function showFirst() {
    $('#text1').show()
    if (pos++ < str2.length - 1) {
      text1.innerHTML = str2.substring(0, pos) + "|";
      setTimeout("showFirst()", 50);
    } else if (pos++ === str2.length || pos++ === str2.length - 1) {
      text1.innerHTML = str2.substring(0, pos);
      setTimeout("showFirst()", 50);
    } else {
      pos = 0
      setTimeout(() => {
        const val = $(".second").nextUntil("textarea").toArray()
        setTimeout(() => {
          $(val[0]).show()
          showSpan(val[1], val[2], val[3], val[4], null, null, 1000)
        }, 1000);
      }, 1000);
    }
  }
  // 礼尚往来
  function showSecond() {
    $('#text2').show()
    scrollToEnd()
    if (pos++ < str3.length - 1) {
      text2.value = str3.substring(0, pos) + "|";
      setTimeout("showSecond()", 50);
    } else if (pos++ === str3.length || pos++ === str3.length - 1) {
      text2.value = str3.substring(0, pos);
      setTimeout("showSecond()", 50);
    } else {
      pos = 0
      // 先四个
      setTimeout(() => {
        const val = $(".third").nextUntil("textarea").toArray()
        showSpan(val[0], val[1], val[2], val[3], null, null, 1000)
      }, 1000);
      setTimeout(() => {
        const val = $(".third-next").nextUntil("textarea").toArray()
        showSpan(val[0], val[1], val[2], val[3], val[4], val[5], 1000)
      }, 4000);
    }
  }

  // 心动不如行动
  function showThird() {
    $('#text3').show()
    scrollToEnd()
    if (pos++ < str4.length - 1) {
      text3.value = str4.substring(0, pos) + "|";
      setTimeout("showThird()", 50);
    } else if (pos++ === str4.length || pos++ === str4.length - 1) {
      text3.value = str4.substring(0, pos);
      setTimeout("showThird()", 50);
    } else {
      pos = 0
      const val = $(".fourth").nextUntil("textarea").toArray()
      setTimeout(() => {
        showSpan(val[0], val[1], val[2], val[3], null, null, 1000)
      }, 1000);
      setTimeout(() => {
        showSpan(val[4], val[5], val[6], val[7], null, null, 1000)
      }, 4000);
    }
  }

  // 小杨的心思
  function showFourth() {
    $('#text4').show()
    // $('html,body').scrollTop(10000);
    scrollToEnd()
    if (pos++ < str5.length - 1) {
      text4.value = str5.substring(0, pos) + "|";
      setTimeout("showFourth()", 50);
    } else if (pos++ === str5.length || pos++ === str5.length - 1) {
      text4.value = str5.substring(0, pos);
      setTimeout("showFourth()", 50);
    } else {
      pos = 0
      const val = $("#text4").nextUntil("br").toArray()
      setTimeout(() => {
        showSpan(val[0], val[1], null, null, null, null, 1000)
      }, 1000);
      setTimeout(() => {
        showSpan(val[2], val[3], val[4], val[5], val[6], val[8], null, 1000)
        $('button').show()
      }, 3000);
    }
  }

  function changePicKind() {
    if ($('.picture-kind')[0].innerText === '比心💖：(四张)') {
      $('.picture-kind')[0].innerText = '满天星💐：(四张)'
      $('.make-flower').css('display', 'block')
      $('.make-love').css('display', 'none')
      selector = '.make-flower>img'
      count = 0
    } else {
      $('.picture-kind')[0].innerText = '比心💖：(四张)'
      $('.make-flower').css('display', 'none')
      $('.make-love').css('display', 'block')
      $('.make-love').css('min-height', '675px')
      selector = '.make-love>img'
      count = 0
    }
  }

  function addMain() {
    $("#main").addClass('main')
    setTimeout(() => {
      snowlove()
    }, 1000);
    // 延迟显示结语
    setTimeout(() => {
      $('p.final, .pick2').css('display', 'block')
      changeFinalColor()
    }, 3000);
  }


  $('.pick2').click(function() {
    $(document).snowfall('clear');
    $('p.final, .pick2').css('display', 'none')
    $("#main").show()
    $("#main").removeClass('main')
    changeTextareaColor()
  })

  function snowlove() {
    $(document).snowfall('clear');
    $(document).snowfall({
      // image: "images/snowlove.png",
      image: "https://blueblog-1301047842.cos.ap-chengdu.myqcloud.com/OwnUse/images/snowlove.png",
      flakeCount: 60,
      minSize: 30,
      maxSize: 40,
      minSpeed: 10,
      maxSpeed: 20
    });
  }

  // 闪烁字体
  function changeFinalColor() {
    setTimeout(() => {
      const arr = ['#f08c9a', 'rgb(14, 234, 177)', '#b68ed6']
      const arr1 = ['44px', '45px']
      $('.final').css('color', arr[parseInt(Math.random() * arr.length)])
      $('.final').css('font-size', arr1[parseInt(Math.random() * arr.length)])
      changeFinalColor()
    }, 1000);
  }

  function changeTextareaColor() {
    setTimeout(() => {
      const arr = ['#a935a9', '#e3438d']
      $('textarea').css('color', arr[parseInt(Math.random() * arr.length)])
      changeTextareaColor()
    }, 1000);
  }