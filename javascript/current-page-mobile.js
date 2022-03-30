/* Function by Chris Houghton */
var waitForHeaderMobile = function(callback) {
  if (document.getElementById("header-items-mobile") != null) {
    callback();
  } else {
    setTimeout(function() {
      waitForHeaderMobile(callback);
    }, 100);
  }
};

waitForHeaderMobile(function() {
  var header_mobile = document.getElementById("header-items-mobile");

  page = location.pathname;

  items = header_mobile.getElementsByClassName("header-item")

  for (var i = 0; i < items.length; i++) {
    if(items[i].getAttribute("href") == page) {
      items[i].className += " header-item-current";
      break;
    }
  }
});