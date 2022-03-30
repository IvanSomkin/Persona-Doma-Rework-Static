window.addEventListener('scroll', function() {

    var header = document.getElementById("header-container");

    if (scrollY > innerHeight & header != "undefined") {

      if (!header.classList.contains("sticky-header")) {
    
        var y = -header.getBoundingClientRect().height;
        header.style.top = y + "px";

        var timer = setInterval(function () {
          y += 10;
          if (y >= 0){
            clearInterval(timer);
            y = 0;
          }
          header.style.top = y + "px";
        }, 10);

        header.classList.add("sticky-header");

      }

    }
    
    if (scrollY <= 0) {
      header.classList.remove("sticky-header");
    }

  });