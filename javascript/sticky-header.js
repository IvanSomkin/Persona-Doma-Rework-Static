window.addEventListener('scroll', function() {

    var header = document.getElementById("header");

    if (scrollY > innerHeight) {

      if (header.classList.contains("initial-header")) {

        header.classList.remove("initial-header");
        
        var y = -80
        header.style.top = "-80px"

        var timer = setInterval(function () {
          header.style.top = y + "px"
          if (y >= 0){
            clearInterval(timer);
          }
          y += 10
        }, 10);

        header.classList.add("sticky-header");

      }

    }
    
    if (scrollY <= 0) {
      header.classList.remove("sticky-header");
      header.classList.add("initial-header");
    }

  });