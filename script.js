var menuBtn = document.getElementById("navbar-menu")
var sideNav = document.getElementById("navbar-linkWrap")
var menu = document.getElementById("menuIcon")

menuBtn.onclick = function(){
    if(sideNav.style.right == "-300px"){
        sideNav.style.right == "0"
    }
    else{
        sideNav.style.right == "-300px"
    }
}