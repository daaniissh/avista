window.onscroll = function() {
    var hiddenDiv = document.querySelector(".hidden-element");
    var sp = document.querySelector(".nt");
    if (window.scrollY > 400) {  // Change '500' to the scroll position you want
        hiddenDiv.style.display = "block";
        sp.className.add(".hidden-element")
    } else {
        hiddenDiv.style.display = "none";
    }
}