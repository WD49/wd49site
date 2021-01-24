
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top    >= 0 &&
        rect.left   >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right  <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function chooseAnchor() {
  var downAnchor, upAnchor;

  var main    = document.getElementById("main");
  var about   = document.getElementById("about");
  var events  = document.getElementById("upcomingEvents");
  var contact = document.getElementById("contact");

  if(isInViewport(main))    { downAnchor = "#about";   upAnchor = "#main";   }
  if(isInViewport(about))   { downAnchor = "#upcomingEvents";  upAnchor = "#main";   }
  if(isInViewport(events))  { downAnchor = "#contact"; upAnchor = "#about";  }
  if(isInViewport(contact)) { downAnchor = "#contact"; upAnchor = "#events"; }
  alert(downAnchor);

  var downLink = document.getElementById("downLink");
  var upLink   = document.getElementById("upLink");

  downLink.href = downAnchor;
  upLink.href   = upAnchor;
}
