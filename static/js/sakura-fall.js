let _document = $(document)

$(document).click(function () {
_document.snowfall('clear');
})
$(document).dblclick(function () {
sakura()
})

function sakura() {
_document.snowfall({
  image: "https://cdn.jsdelivr.net/gh/onecoderly/cdn/static/images/sakura.png",
  flakeCount: 8,
  minSize: 20,
  maxSize: 35,
  minSpeed: 1,
  maxSpeed: 2
})
}

setTimeout(() => {
sakura()
}, 1000);