//心知天气
(function(a,h,g,f,e,d,c,b){b=function(){d=h.createElement(g);c=h.getElementsByTagName(g)[0];d.src=e;d.charset="utf-8";d.async=1;c.parentNode.insertBefore(d,c)};a["SeniverseWeatherWidgetObject"]=f;a[f]||(a[f]=function(){(a[f].q=a[f].q||[]).push(arguments)});a[f].l=+new Date();if(a.attachEvent){a.attachEvent("onload",b)}else{a.addEventListener("load",b,false)}}(window,document,"script","SeniverseWeatherWidget","//cdn.sencdn.com/widget2/static/js/bundle.js?t="+parseInt((new Date().getTime() / 100000000).toString(),10)));
window.SeniverseWeatherWidget('show', {
  flavor: "slim",
  location: "WT029G15ETRJ",
  geolocation: true,
  language: "auto",
  unit: "c",
  theme: "light",
  token: "d7bba06e-2ada-4a77-9892-0a72f2baa0fd",
  hover: "enabled",
  container: "tp-weather-widget"
})