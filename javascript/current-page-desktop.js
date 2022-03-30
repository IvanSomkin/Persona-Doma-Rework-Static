/* Function by Chris Houghton */
var waitForHeader = function(callback) {
  if (document.getElementById("header-items-desktop") != null) {
    callback();
  } else {
    setTimeout(function() {
      waitForHeader(callback);
    }, 100);
  }
};

waitForHeader(function() {
  var header_desktop = document.getElementById("header-items-desktop");

  page = location.pathname;

  items = header_desktop.getElementsByClassName("header-item")

  for (var i = 0; i < items.length; i++) {
    if(items[i].getAttribute("href") == page) {
      items[i].className += " header-item-current";
      break;
    }
  }
});