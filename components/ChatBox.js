
function loadWidget() {
    var i = "AXVUju";
    var a = window;
    var d = document;
  
    function g() {
      var g = d.createElement("script");
      var s = "https://www.goftino.com/widget/" + i;
      var l = localStorage.getItem("goftino_" + i);
      g.async = !0;
      g.src = l ? s + "?o=" + l : s;
      d.getElementsByTagName("head")[0].appendChild(g);
    }
  
    if (d.readyState === "complete") {
      g();
    } else if (a.attachEvent) {
      a.attachEvent("onload", g);
    } else {
      a.addEventListener("load", g, !1);
    }
  }
  
  export default loadWidget;
  