/* Function by Chris Houghton */
var waitForHeader = function(callback) {
  if (document.getElementsByTagName("header").length != 0) {
    callback();
  } else {
    setTimeout(function() {
      waitForHeader(callback);
    }, 100);
  }
};

waitForHeader(function() {
  var header = document.getElementsByTagName("header")[0];
  var items = header.getElementsByClassName("header__item");

  page = location.pathname;

  for (var i = 0; i < items.length; i++) {
    if(items[i].getAttribute("href") == page) {
      items[i].className += " header__item_current";
      break;
    }
  }
});