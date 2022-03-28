var initial_time = new Date().getTime();

/* Function by Chris Houghton */
var waitForFooter = function(callback) {
  if (document.getElementById("load-time") != null) {
    callback();
  } else {
    setTimeout(function() {
      waitForFooter(callback);
    }, 100);
  }
};
   
waitForFooter(function() {
  var write_element = document.getElementById("load-time");

  var full_load_time = new Date().getTime();

  var page_load_time = (full_load_time - initial_time) / 1000

  tag = document.createElement("p");
  text = document.createTextNode('Load time: ' + page_load_time + ' s');
  tag.appendChild(text);
  write_element.appendChild(tag);
});
