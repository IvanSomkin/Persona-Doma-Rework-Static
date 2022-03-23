var initial_time = new Date().getTime();

var items_collection = document.getElementsByName("header")
var items = items_collection[0].getElementsByClassName("header__item")

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function() {
    var last = document.getElementsByClassName("header__item_current");
    last[0].className = last[0].className.replace(" header__item_current", "");
    this.className += " header__item_current";
  });
}

var write_element = document.getElementsByClassName('contacts-home')

window.onload = PageLoadTime;
function PageLoadTime() {
  var full_load_time = new Date().getTime();

  var page_load_time = (full_load_time - initial_time) / 1000

  tag = document.createElement("p");
  text = document.createTextNode('Load time: ' + page_load_time + ' s');
  tag.appendChild(text)
  write_element[0].appendChild(tag)
}