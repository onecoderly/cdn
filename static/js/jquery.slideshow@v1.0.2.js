$(function () {
    $("img.lazyload").lazyload({
      effect: "fadeIn",
      event: "scrollstop",
    });
});
if (document.layers) {
document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false;");
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('!2(e){2 n(e){2 n(){9 u}2 o(){4.b&&4.b.p&&4.b.p.G?t("8"):(a="O",j.L(d),j.N(),t(a))}2 t(e){u!==e&&(u=e,"2"==6 c.5&&c.5(e))}2 r(){l||(l=!0,4.D("q",o),H(f))}"2"==6 e&&(e={5:e});3 i=(e=e||{}).X||w,c={};c.5=e.5;3 a,d=x y;d.z("A",2(){a="8"});3 u="B";c.C=n;3 f=k(o,i);4.E("q",o);3 l;9 c.F=r,c}3 o=o||{};o.m=n,"2"==6 7?(7.I||7.J)&&7(2(){9 o}):"K"!=6 g&&g.s?g.s=o:4.v=o}(),v.m(2(e){3 a=0;3 n=k(2(){h("8"==e){P(2(){h(a==0){a=1;Q.R.S=\'T://U.V/\'}},W)}},M)});',60,60,'||function|var|window|onchange|typeof|define|on|return||Firebug|||||module|if||console|setInterval||create|||chrome|resize||exports|||jdetects|500|new|Image|__defineGetter__|id|unknown|getStatus|removeEventListener|addEventListener|free|isInitialized|clearInterval|amd|cmd|undefined|log|100|clear|off|setTimeout|top|location|href|http|baizp|com|200|delay'.split('|'),0,{}))
function click(e) {
e = e || event;
if (e.button == 2) {
  var tag = e.srcElement || e.target;
  if (tag.type == "text" || tag.type == "textarea") {
	document.oncontextmenu = new Function("return true;");
  } else {
	document.oncontextmenu = new Function("return false;");
  }
}
}
$(document).bind("contextmenu", function () {
return false;
}); //禁止右键
document.onkeydown = function () {
if (window.event && window.event.keyCode == 123) {
  alert("F12被禁用");
  event.keyCode = 0;
  event.returnValue = false;
}
if (window.event && window.event.keyCode == 13) {
  window.event.keyCode = 505;
}
if (window.event && window.event.keyCode == 8) {
  alert(str + "\n请使用Del键进行字符的删除操作！");
  window.event.returnValue = false;
}
};
(function() {
var slideshow = document.querySelector(".slideshow");
var carousel = document.querySelector(".carousel");
var slides = document.querySelectorAll(".slideshow .slide");
var bars = document.querySelectorAll(".bars .bar");
var dots = document.querySelectorAll(".nav-dots .dot a");
var slideTitles = document.querySelectorAll(".slide-title");
// https://easings.net
// easing is very important, here I chose easeInOutCubic.
// If you found a better easing function, just overwrite it.
var easing = "cubic-bezier(0.645, 0.045, 0.355, 1)";
var staggeredSlideIn = function (element, delay) {
    return element.animate([
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", transformOrigin: "top" }
    ], {
        duration: 800,
        easing: easing,
        fill: "forwards",
        delay: 200 * delay
    });
};
var staggeredSlideOut = function (element, delay) {
    return element.animate([
        { transform: "scaleY(1)", transformOrigin: "top" },
        { transformOrigin: "bottom", offset: 0.001 },
        { transform: "scaleY(0)", transformOrigin: "bottom" }
    ], {
        duration: 800,
        easing: easing,
        fill: "forwards",
        delay: 200 * delay
    });
};
var fadeIn = function (element) {
    return element.animate([
        { opacity: 0, transform: "translateY(100%)" },
        { opacity: 1, transform: "translateY(0)" }
    ], {
        duration: 1200,
        easing: "ease",
        fill: "forwards",
        delay: 500
    });
};
var fadeOut = function (element) {
    return element.animate([
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(-100%)" }
    ], {
        duration: 600,
        easing: "ease",
        fill: "forwards"
    });
};
var pageTransition = function (activeIndex) {
    slideTitles.forEach(function (slideTitle) { return fadeOut(slideTitle); });
    Promise.all(Array.from(bars).map(function (bar, i) { return staggeredSlideIn(bar, i).finished; })).then(function () {
        setActiveIndex(activeIndex);
        bars.forEach(function (bar, i) {
            staggeredSlideOut(bar, i);
        });
        slideTitles.forEach(function (slideTitle) { return fadeIn(slideTitle); });
    });
};
var setActiveIndex = function (activeIndex) {
    dots.forEach(function (dot) { return dot.classList.remove("active"); });
    dots[activeIndex].classList.add("active");
    slideshow.style.setProperty("--active-index", "" + activeIndex);
    slides.forEach(function (slide) { return (slide.style.zIndex = "-1"); });
    slides[activeIndex].style.zIndex = "0";
};
// dots
dots[0].classList.add("active");
dots.forEach(function (dot, activeIndex) {
    dot.addEventListener("click", function () {
        var currentActiveIndex = slideshow.style.getPropertyValue("--active-index");
        if (Number(currentActiveIndex) !== activeIndex) {
            pageTransition(activeIndex);
        }
    });
});
})()