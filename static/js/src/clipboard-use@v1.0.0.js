/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
  /* code */
  var initCopyCode = function(){
    var copyHtml = '';
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    copyHtml += '<svg t="1596620645111" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3726" width="16" height="25"><path d="M820.579073 887.631328h-476.818302a130.443864 130.443864 0 0 1-136.2338-136.233801v-613.052102a132.214903 132.214903 0 0 1 136.2338-136.233801h340.584502l272.467601 272.467601v476.818302c0 120.021978-136.233801 136.233801-136.233801 136.233801z m-544.935202 68.1169h544.935202a222.333563 222.333563 0 0 0 57.558781-18.187212 168.453094 168.453094 0 0 1-125.675681 86.304113h-544.935202a130.443864 130.443864 0 0 1-136.233801-136.233801v-681.169003a121.316199 121.316199 0 0 1 78.67502-123.836525 149.244129 149.244129 0 0 0-10.55812 55.719625v681.169003a130.443864 130.443864 0 0 0 136.233801 136.2338z" fill="#c76dbb" p-id="3727"></path></svg>';
    copyHtml += '</button>';
    $(".highlight .code pre").before(copyHtml);
    new ClipboardJS('.btn-copy', {
        target: function(trigger) {
            return trigger.nextElementSibling;
        }
    });
  }
  initCopyCode();
}(window, document);