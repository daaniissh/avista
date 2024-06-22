window.onscroll = function() {
    var hiddenDiv = document.querySelector(".hidden-element");
    if (window.scrollY > 400) {  // Change '500' to the scroll position you want
        hiddenDiv.style.display = "block";
    } else {
        hiddenDiv.style.display = "none";
    }
}