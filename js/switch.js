function switchNightMode() {
    $("#loading-box").fadeIn();
    "true" == localStorage.getItem("light")
        ? (localStorage.setItem("light", "false"),switchToDark()) 
        : (localStorage.setItem("light", "true"), switchToLight());
    // setTimeout("loadingout()", 0)
    $("#loading-box").fadeOut();
}
// function loadingout(){
//     $("#loading-box").fadeOut();
// }
function switchToDark() {
    for (var t = document.getElementsByTagName("link"), e = 0; e < t.length; e++)
        t[e] &&
        t[e].href &&
        -1 != t[e].href.indexOf("/css/style-light.css") &&
        t[e].setAttribute("href", "/css/style.css");
}
function switchToLight() {
    for (var t = document.getElementsByTagName("link"), e = 0; e < t.length; e++)
        t[e] &&
        t[e].href &&
        -1 != t[e].href.indexOf("/css/style.css") &&
        t[e].setAttribute("href", "/css/style-light.css");
}
null == localStorage.getItem("light")
? localStorage.setItem("light", "false")
: ("true" == localStorage.getItem("light") ? switchToLight: switchToDark)();
