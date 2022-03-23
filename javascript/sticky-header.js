window.addEventListener('scroll', function() {

    var header = document.getElementsByClassName("header")[0];

    if (scrollY > innerHeight) {

      if (header.classList.contains("header_initial")) {

        header.classList.remove("header_initial")
    
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
    
    if (scrollY <= 0 && header.classList.contains("header_absolute")) {
      header.classList.remove("sticky-header");
      header.classList.add("header_initial");
    }

  });